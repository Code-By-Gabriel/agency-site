import { Card, CardContent } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const testimonials = [
  {
    quote:
      "They shipped in six weeks what our team had been trying to do for six months. Ridiculous quality.",
    name: "Jane Doe",
    role: "VP Product, Acme",
  },
  {
    quote:
      "The design system alone paid for the project. Everything is faster now.",
    name: "Marcus Lee",
    role: "CTO, Nova",
  },
  {
    quote:
      "Best agency experience we've had. Small team, zero handoffs, weekly demos.",
    name: "Priya Shah",
    role: "Founder, Pulse",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-20 border-t">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          What clients say
        </h2>
        <p className="mt-3 text-muted-foreground">
          Real feedback from real engagements.
        </p>
      </div>

      <Stagger className="grid md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}