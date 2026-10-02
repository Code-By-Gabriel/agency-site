import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogMeta } from "@/lib/mdx";

export function RelatedPosts({ posts }: { posts: BlogMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-24 pt-12 border-t">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Keep reading
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-[1.1]">
          Related posts
        </h2>
      </div>

      <div className="space-y-8">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block no-underline"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>
                    {new Date(p.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span>{p.readingTime}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em] leading-[1.2] group-hover:underline underline-offset-4 decoration-2">
                  {p.title}
                </h3>

                <p className="text-base md:text-lg text-muted-foreground mt-3 leading-relaxed">
                  {p.summary}
                </p>
              </div>

              <span className="mt-6 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}