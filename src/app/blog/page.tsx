import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Brand, product design, and web engineering services.",
  openGraph: {
    title: "Blog | Studio",
    description: "Brand, product design, and web engineering services.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-muted-foreground">
          Notes on design, engineering, and shipping products.
        </p>
      </FadeIn>

      <Stagger className="mt-12">
        {posts.map((p) => (
          <StaggerItem key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="block py-6 group">
              <div className="text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })} · {p.readingTime}
              </div>
              <h2 className="text-xl font-semibold mt-2 group-hover:underline">
                {p.title}
              </h2>
              <p className="text-muted-foreground mt-1">{p.summary}</p>
            </Link>
            <Separator />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}