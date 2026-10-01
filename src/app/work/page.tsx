import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { getAllWork } from "@/lib/mdx";
import { WorkCard } from "@/components/work-card";

export const metadata = {
  title: "Work",
  description: "Brand, product design, and web engineering services.",
  openGraph: {
    title: "Work | Studio",
    description: "Brand, product design, and web engineering services.",
  },
};

export default function WorkPage() {
  const work = getAllWork();
  return (
    <section className="container mx-auto px-4 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Work</h1>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Selected projects across brand, product, and engineering.
        </p>
      </FadeIn>

      <Stagger className="grid md:grid-cols-2 gap-6 mt-12">
        {work.map((w) => (
          <StaggerItem key={w.slug}>
            <WorkCard work={w} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}