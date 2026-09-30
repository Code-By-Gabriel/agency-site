import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";
import { getAllWork } from "@/lib/mdx";
import { ClientLogos } from "@/components/client-logos";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const work = getAllWork().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-4 pt-24 pb-20 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground mb-6">
            Available for new projects
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            We build digital products that <span className="text-muted-foreground">move the needle.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            A design & engineering studio partnering with ambitious teams to ship faster and look sharper.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work">See our work</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* Services */}
      <section className="container mx-auto px-4 py-20 border-t">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Three disciplines, one goal: ship products people love.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Palette, title: "Design", desc: "Brand, UI/UX, design systems, and everything in between." },
            { icon: Code2, title: "Engineering", desc: "Web apps, marketing sites, and internal tools that scale." },
            { icon: Rocket, title: "Strategy", desc: "Product direction, roadmaps, and go-to-market clarity." },
          ].map((s) => (
            <StaggerItem key={s.title}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <s.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground mt-2">{s.desc}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

       {/* Testimonials */}
      <Testimonials />

      {/* Featured Work */}
      <section className="container mx-auto px-4 py-20 border-t">
        <FadeIn>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected work</h2>
              <p className="mt-3 text-muted-foreground">A few recent projects we're proud of.</p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/work">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-6 mt-12">
          {work.map((w) => (
            <StaggerItem key={w.slug}>
              <Link href={`/work/${w.slug}`} className="group block">
                <Card className="h-full overflow-hidden transition group-hover:border-foreground/30">
                  <div className="aspect-video bg-muted" />
                  <CardContent className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">{w.client}</div>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{w.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <FadeIn>
          <div className="rounded-2xl border bg-muted/40 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Have a project in mind?</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Tell us about it. We usually reply within one business day.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}