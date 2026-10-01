import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";
import { ReadingProgress } from "@/components/reading-progress";
import { Toc } from "@/components/toc";
import { extractToc } from "@/lib/toc";
import { RelatedPosts } from "@/components/related-posts";
import { getRelatedPosts } from "@/lib/mdx";

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
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_220px] gap-12">
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
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      (await import("rehype-slug")).default,
                      [(await import("rehype-autolink-headings")).default, { behavior: "wrap" }],
                    ],
                  },
                }}
              />
            </div>
            <RelatedPosts posts={related} />
          </article>
          <Toc items={toc} />
        </div>
      </div>
    </>
  );
}