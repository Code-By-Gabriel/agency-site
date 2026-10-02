import Link from "next/link";
import { ArrowRight, Code2, Palette, Rocket, Search, Layers, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";

export const metadata = {
  title: "Services",
  description: "Brand, product design, and web engineering services for B2B SaaS teams.",
  openGraph: {
    title: "Services | Studio",
    description: "Brand, product design, and web engineering services for B2B SaaS teams.",
  },
};

const services = [
  {
    icon: Palette,
    title: "Design",
    desc: "Brand, UI/UX, design systems — the full visual language of your product.",
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
  {
    icon: Search,
    title: "SEO & Content",
    desc: "Technical SEO, editorial systems, and content that ranks and converts.",
    includes: [
      "Technical SEO audit",
      "Content strategy & structure",
      "Editorial systems (MDX/CMS)",
      "Ongoing content support",
    ],
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Component libraries and documentation that let your team ship faster.",
    includes: [
      "Token & component architecture",
      "Figma libraries",
      "React component library",
      "Storybook documentation",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics",
    desc: "Instrumentation, dashboards, and insights that actually drive decisions.",
    includes: [
      "Event tracking setup",
      "Custom dashboards",
      "Funnel & retention analysis",
      "Monthly reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Services
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
              What we do,
              <br />
              <span className="text-muted-foreground">and how we help.</span>
            </h1>
            <p className="mt-8 text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl">
              Six disciplines. One team. We plug in where you need us most.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
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

        {/* ✅ Closing line — OUTSIDE the map, renders once */}
        <FadeIn delay={0.3}>
          <div className="mt-20 border-t pt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg text-muted-foreground">
              Not sure which fits? We'll help you figure it out.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-lg font-medium"
            >
              Get in touch
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