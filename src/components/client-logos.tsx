import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

const clients = [
  { name: "Acme", logo: "/images/clients/acm.svg" },
  { name: "Nova", logo: "/images/clients/laravelnova.svg" },
  { name: "Pulse", logo: "/images/clients/edgeimpulse.svg" },
  { name: "Northwind", logo: "/images/clients/lamborghini.svg" },
  { name: "Vanta", logo: "/images/clients/anta.svg" },
  { name: "Lumen", logo: "/images/clients/lumen.svg" },
];

export function ClientLogos() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-24">
        {/* Header row */}
        <FadeIn>
          <div className="flex items-baseline justify-between mb-12">
            <h3 className="text-base md:text-lg uppercase tracking-[0.25em] text-muted-foreground font-medium">
              Select clients
            </h3>
            <span className="text-base md:text-lg uppercase tracking-[0.25em] text-muted-foreground/60 hidden md:inline font-medium">
              2022 — Present
            </span>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-border mb-14" />

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-14">
          {clients.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <div className="group flex items-center justify-center h-16">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={200}
                  height={64}
                  sizes="200px"
                  className="h-10 md:h-12 w-auto max-w-full object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}