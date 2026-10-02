import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { TeamGrid } from "@/components/team-grid";

export const metadata = {
  title: "About",
  description:
    "A small studio of designers and engineers who partner with ambitious teams to build products that perform.",
  openGraph: {
    title: "About | Studio",
    description:
      "A small studio of designers and engineers who partner with ambitious teams to build products that perform.",
  },
};

const principles = [
  {
    title: "Senior only",
    desc: "Every project is staffed by people who've shipped before. No juniors learning on your budget.",
  },
  {
    title: "Fixed scope",
    desc: "We scope projects up front - price, timeline, deliverables. No change orders, no surprises.",
  },
  {
    title: "In the open",
    desc: "Weekly demos, shared documents, direct Slack access. You see progress the whole way.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════  INTRO  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          {/* Header */}
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
                About
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
                A small studio,
                <br />
                <span className="text-muted-foreground">
                  built for big work.
                </span>
              </h1>
            </div>
          </FadeIn>

          {/* Two-column: story + facts */}
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 mt-20">
            {/* Left: the story */}
            <FadeIn delay={0.1} className="md:col-span-7">
              <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <p>
                  We're a small studio of designers and engineers who care
                  about craft. We partner with a handful of teams each year to
                  build products that look great and perform even better.
                </p>
                <p>
                  Founded in 2020, we've shipped work for startups, scale-ups,
                  and established companies across fintech, health, and B2B
                  SaaS.
                </p>
              </div>
            </FadeIn>

            {/* Right: quick facts */}
            <FadeIn delay={0.2} className="md:col-span-4 md:col-start-9">
              <dl className="space-y-8 border-t pt-10">
                <div>
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Founded
                  </dt>
                  <dd className="text-xl">2020</dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Team
                  </dt>
                  <dd className="text-xl">2 people</dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Focus
                  </dt>
                  <dd className="text-xl space-y-2">
                    <div>Fintech</div>
                    <div>Health</div>
                    <div>B2B SaaS</div>
                  </dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════  PRINCIPLES  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
                How we work
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
                Three rules,
                <br />
                <span className="text-muted-foreground">no exceptions.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-20">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  TEAM  ═══════════════════════ */}
      <TeamGrid />

      {/* ═══════════════════════  CLOSING  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-lg text-muted-foreground">
                Sound like a good fit? Let's talk.
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
    </>
  );
}