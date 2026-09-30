import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllWork, getWorkBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

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

  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-xs text-muted-foreground mb-3">
        {post.meta.client} · {post.meta.year}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{post.meta.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.meta.summary}</p>

      <div className="flex gap-2 mt-6 flex-wrap">
        {post.meta.tags?.map((t: string) => (
          <Badge key={t} variant="secondary">{t}</Badge>
        ))}
      </div>

      <div className="prose-custom mt-12">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}