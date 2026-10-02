import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { getAllWork, getWorkBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { FadeIn } from "@/components/motion/fade-in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWorkBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      images: post.meta.cover ? [post.meta.cover] : undefined,
    },
  };
}

export function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.slug }));
}

export default async function WorkPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWorkBySlug(slug);
  if (!post) notFound();

  const all = getAllWork();
  const currentIndex = all.findIndex((w) => w.slug === slug);
  const next = all[(currentIndex + 1) % all.length];

  const m = post.meta;

  return (
    <article className="border-t">
      {/* Back link */}
      <div className="container mx-auto px-4 pt-10 md:pt-14">
        <FadeIn>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            All work
          </Link>
        </FadeIn>
      </div>

      {/* ══════════════  SPLIT-BRIEF  ══════════════ */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* ─── LEFT RAIL (sticky on desktop) ─── */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-24">
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Case Study
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-balance mb-12">
                {m.title}
              </h1>

              {/* Meta list */}
              <dl className="space-y-8 border-t pt-10">
                {/* Client */}
                <div>
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Client
                  </dt>
                  <dd className="text-xl">{m.client}</dd>
                </div>

                {/* Year */}
                <div>
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Year
                  </dt>
                  <dd className="text-xl">{m.year}</dd>
                </div>

                {/* Services (from tags) */}
                {m.tags?.length ? (
                  <div>
                    <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Services
                    </dt>
                    <dd className="text-xl space-y-2">
                      {m.tags.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {/* Mini CTA */}
              <div className="mt-12 pt-10 border-t">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-lg font-medium"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* ─── RIGHT COLUMN (the story) ─── */}
          <div className="md:col-span-8 lg:col-span-9 min-w-0">
            {/* Summary - acts as the hook */}
            <FadeIn>
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.15] text-balance mb-16">
                {m.summary}
              </p>
            </FadeIn>

            {/* Hero image */}
            {m.cover ? (
              <FadeIn delay={0.15}>
                <div className="relative aspect-16/10 overflow-hidden rounded-xl border bg-muted mb-20">
                  <Image
                    src={m.cover}
                    alt={m.title}
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            ) : null}

            {/* Content */}
            <div className="prose-custom max-w-2xl">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════  NEXT PROJECT  ══════════════ */}
      {next ? (
        <section className="border-t">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <FadeIn>
              <Link
                href={`/work/${next.slug}`}
                className="group grid md:grid-cols-12 gap-10 items-center"
              >
                <div className="md:col-span-7">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
                    Next project
                  </p>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
                    {next.title}
                  </h3>
                  <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
                    {next.summary}
                  </p>
                </div>

                {next.cover ? (
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src={next.cover}
                        alt={next.title}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ) : null}
              </Link>
            </FadeIn>
          </div>
        </section>
      ) : null}
    </article>
  );
}