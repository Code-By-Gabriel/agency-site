import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { WorkCard } from "@/components/work-card";
import { getFeaturedWork } from "@/lib/mdx";

export const metadata = {
  title: "Work",
  description: "Selected projects across brand, product design, and web engineering.",
  openGraph: {
    title: "Work | Studio",
    description: "Selected projects across brand, product design, and web engineering.",
  },
};

export default function WorkPage() {
  const work = getFeaturedWork(3);

  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Projects
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
              Selected work,
              <br />
              <span className="text-muted-foreground">shipped recently.</span>
            </h1>
            <p className="mt-8 text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl">
              A collection of projects across brand, product design, and web
              engineering.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8 mt-20">
          {work.map((w) => (
            <StaggerItem key={w.slug} className="h-full">
              <WorkCard work={w} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Closing line */}
        <FadeIn delay={0.3}>
          <div className="mt-20 border-t pt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg text-muted-foreground">
              Want to see your project here?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-lg font-medium"
            >
              Start a project
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}