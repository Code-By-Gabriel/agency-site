import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Notes on design, engineering, and shipping products.",
  openGraph: {
    title: "Blog | Studio",
    description: "Notes on design, engineering, and shipping products.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Blog
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
              Notes on design,
              <br />
              <span className="text-muted-foreground">
                engineering, and shipping.
              </span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Occasional thoughts from the studio. No schedule, no SEO bait -
              just things we've learned.
            </p>
          </div>
        </FadeIn>

        {/* Posts */}
        <Stagger className="mt-20">
          {posts.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="block py-10 group no-underline"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
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

                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-[1.1] group-hover:underline underline-offset-4 decoration-2">
                  {p.title}
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-2xl">
                  {p.summary}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-base font-medium opacity-0 group-hover:opacity-100 transition">
                  Read article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
              <Separator />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}