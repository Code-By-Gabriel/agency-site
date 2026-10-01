import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogMeta } from "@/lib/mdx";

export function RelatedPosts({ posts }: { posts: BlogMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-24 pt-12 border-t">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Related reading</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <Card className="h-full transition group-hover:border-foreground/30">
              <CardContent className="p-6">
                <div className="text-xs text-muted-foreground mb-2">
                  {new Date(p.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <h3 className="font-semibold group-hover:underline">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}