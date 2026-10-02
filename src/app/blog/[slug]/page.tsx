import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { ReadingProgress } from "@/components/reading-progress";
import { Toc } from "@/components/toc";
import { extractToc } from "@/lib/toc";
import { RelatedPosts } from "@/components/related-posts";
import { FadeIn } from "@/components/motion/fade-in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const related = getRelatedPosts(slug);

  return (
    <>
      <ReadingProgress />

      {/* ─── BACK LINK ─── */}
      <div className="container mx-auto px-4 pt-10 md:pt-14">
        <FadeIn>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            All posts
          </Link>
        </FadeIn>
      </div>

      {/* ─── CONTENT GRID ─── */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
          {/* ═══ ARTICLE ═══ */}
          <article className="min-w-0 max-w-3xl">
            {/* Header */}
            <FadeIn>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>{post.meta.readingTime}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.05] text-balance">
                {post.meta.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {post.meta.summary}
              </p>
            </FadeIn>

            {/* Author line */}
            <FadeIn delay={0.2}>
              <div className="mt-10 pt-6 border-t flex items-center gap-3 text-base">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  ST
                </div>
                <div>
                  <div className="font-medium">{post.meta.author}</div>
                  <div className="text-sm text-muted-foreground">
                    Studio
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* MDX Content */}
            <div className="prose-custom mt-16">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      (await import("rehype-slug")).default,
                      // [
                      //   (await import("rehype-autolink-headings")).default,
                      //   { behavior: "wrap" },
                      // ],
                    ],
                  },
                }}
              />
            </div>

            {/* Related posts */}
            <RelatedPosts posts={related} />
          </article>

          {/* ═══ TOC SIDEBAR (desktop only) ═══ */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Toc />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}