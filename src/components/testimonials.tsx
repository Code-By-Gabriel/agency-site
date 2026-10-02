import { Card, CardContent } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const testimonials = [
  {
    quote:
      "They shipped in six weeks what our team had been trying to do for six months. Ridiculous quality.",
    name: "Jane Doe",
    role: "VP Product",
    company: "Acme",
    initials: "JD",
  },
  {
    quote:
      "The design system alone paid for the project. Everything is faster now.",
    name: "Marcus Lee",
    role: "CTO",
    company: "Nova",
    initials: "ML",
  },
  {
    quote:
      "Best agency experience we've had. Small team, zero handoffs, weekly demos.",
    name: "Priya Shah",
    role: "Founder",
    company: "Pulse",
    initials: "PS",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 border-t">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Testimonials
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
          What clients say
          <br />
          <span className="text-muted-foreground">after shipping with us.</span>
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          Real feedback from real engagements.
        </p>
      </div>

      {/* Cards */}
      <Stagger className="grid md:grid-cols-3 gap-6 mt-20">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <Card className="h-full transition-colors duration-300 hover:border-foreground/30">
              <CardContent className="p-8 md:p-10 flex flex-col h-full">
                {/* Opening quote mark */}
                <div
                  className="text-5xl md:text-6xl font-serif leading-none text-muted-foreground/30 mb-6 select-none"
                  aria-hidden
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Attribution */}
                <div className="mt-8 pt-6 border-t flex items-center gap-4">
                  {/* Avatar with initials */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}