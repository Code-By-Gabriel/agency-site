import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { getAllWork } from "@/lib/mdx";

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
            <Link href={`/work/${w.slug}`} className="group block">
              <Card className="overflow-hidden h-full transition group-hover:border-foreground/30">
                <div className="aspect-video bg-muted" />
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground mb-2">
                    {w.client} · {w.year}
                  </div>
                  <h2 className="text-xl font-semibold">{w.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">{w.summary}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {w.tags?.map((t) => (
                      <span key={t} className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}