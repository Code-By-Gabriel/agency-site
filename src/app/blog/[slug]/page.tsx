import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";

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

  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-xs text-muted-foreground">
        {new Date(post.meta.date).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric",
        })} · {post.meta.readingTime}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
        {post.meta.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.meta.summary}</p>

      <div className="prose-custom mt-12">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}