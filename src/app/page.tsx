import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { ClientLogos } from "@/components/client-logos";
import { Testimonials } from "@/components/testimonials";
import { WorkCard } from "@/components/work-card";
import { HomeSkeleton } from "@/components/skeletons/home-skeleton";
import { getAllWork } from "@/lib/mdx";

const services = [
  {
    icon: Palette,
    title: "Design",
    desc: "Brand, UI/UX, design systems - the full visual language of your product.",
    includes: [
      "Brand identity & guidelines",
      "Product & interface design",
      "Design systems in Figma",
      "Prototypes & user flows",
    ],
  },
  {
    icon: Code2,
    title: "Engineering",
    desc: "Web apps, marketing sites, and internal tools built to scale with your team.",
    includes: [
      "Next.js & React development",
      "Headless CMS integration",
      "Performance & accessibility",
      "Ongoing maintenance",
    ],
  },
  {
    icon: Rocket,
    title: "Strategy",
    desc: "Product direction, roadmaps, and the positioning that makes you stand out.",
    includes: [
      "Product & market positioning",
      "Roadmap & feature planning",
      "Go-to-market strategy",
      "Analytics & measurement",
    ],
  },
];

export default function Page() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeContent />
    </Suspense>
  );
}

async function HomeContent() {
  const work = getAllWork().slice(0, 3);

  return (
    <>
      {/* ═════════════════════════  HERO  ═════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
                  Design & Engineering Studio
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.98] text-balance">
                  We build marketing sites and product UI for{" "}
                  <span className="text-muted-foreground">B2B SaaS teams.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-10 text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl leading-relaxed">
                  Fixed scope. Six weeks. Senior designers and engineers from
                  day one - no handoffs, no juniors learning on your budget.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Link
                    href="/work"
                    className="group inline-flex items-center gap-3 text-lg font-medium"
                  >
                    See recent work
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.35}>
                <div className="relative aspect-4/3 overflow-hidden rounded-xl border bg-muted shadow-2xl shadow-foreground/5">
                  <Image
                    src="/images/hero-dashboard.png"
                    alt="Studio work"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="border-t">
          <ClientLogos />
        </div>
      </section>

      {/* ═════════════════════  FEATURED WORK  ═══════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-12 md:gap-16 mb-20">
              <div className="md:col-span-6">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  Recent projects
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
                  Selected work,
                  <br />
                  <span className="text-muted-foreground">
                    shipped recently.
                  </span>
                </h2>
              </div>

              <div className="md:col-span-6 md:col-start-7 md:self-end flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Recent work from teams we&apos;ve partnered with.
                </p>
                <Link
                  href="/work"
                  className="group hidden md:inline-flex items-center gap-3 text-lg font-medium self-start"
                >
                  View all work
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
            {work.map((w) => (
              <StaggerItem key={w.slug} className="h-full">
                <WorkCard work={w} />
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex justify-center md:hidden">
              <Button asChild variant="outline" size="lg">
                <Link href="/work">
                  View all work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════  SERVICES  ══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-12 md:gap-16 mb-20">
              <div className="md:col-span-6">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  Services
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
                  What we do,
                  <br />
                  <span className="text-muted-foreground">and how we help.</span>
                </h2>
              </div>

              <div className="md:col-span-6 md:col-start-7 md:self-end flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Three disciplines. One team. We plug in where you need us
                  most.
                </p>
                <Link
                  href="/services"
                  className="group hidden md:inline-flex items-center gap-3 text-lg font-medium self-start"
                >
                  See all services
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title} className="h-full">
                <Card className="group relative h-full overflow-hidden border transition-colors duration-300 hover:border-foreground/40">
                  <CardContent className="p-8 md:p-10">
                    <s.icon
                      className="h-10 w-10 md:h-12 md:w-12 text-foreground mb-8 transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />

                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                      {s.title}
                    </h3>

                    <p className="text-lg md:text-xl text-muted-foreground mt-5 leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-10 pt-8 border-t">
                      <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.3}>
            <div className="mt-14 flex justify-center md:hidden">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  See all services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═════════════════════  TESTIMONIALS  ════════════════════ */}
      <Testimonials />

      {/* ════════════════════════  CTA  ══════════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-28 md:py-40">
          <FadeIn>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  Start a project
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.03em] leading-[1.02] text-balance">
                  Tell us what
                  <br />
                  <span className="text-muted-foreground">
                    you&apos;re building.
                  </span>
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-8 md:self-end flex flex-col gap-8">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Tell us about your project. We reply within one business day -
                  usually with questions, sometimes with ideas.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:hello@studio.com"
                    className="group inline-flex items-center gap-3 text-lg font-medium"
                  >
                    hello@studio.com
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 text-lg font-medium"
                  >
                    Or use the contact form
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}