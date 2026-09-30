import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Search, Layers, LineChart } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "Brand, product design, and web engineering services.",
  openGraph: {
    title: "Services | Studio",
    description: "Brand, product design, and web engineering services.",
  },
};

const services = [
  { icon: Palette, title: "Brand & Identity", desc: "Logos, visual systems, guidelines." },
  { icon: Layers, title: "Product Design", desc: "UI/UX, design systems, prototyping." },
  { icon: Code2, title: "Web Engineering", desc: "Next.js, performance, accessibility." },
  { icon: Rocket, title: "Product Strategy", desc: "Roadmaps, positioning, GTM." },
  { icon: Search, title: "SEO & Content", desc: "Technical SEO, editorial systems." },
  { icon: LineChart, title: "Analytics", desc: "Instrumentation, dashboards, insights." },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h1>
        <p className="mt-4 text-muted-foreground max-w-xl">
          We plug in where you need us — strategy, design, engineering, or all three.
        </p>
      </FadeIn>

      <Stagger className="grid md:grid-cols-3 gap-6 mt-12">
        {services.map((s) => (
          <StaggerItem key={s.title}>
            <Card className="h-full">
              <CardContent className="p-6">
                <s.icon className="h-7 w-7 mb-4" />
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}