import { FadeIn } from "@/components/motion/fade-in";

// Replace with real client names or <Image> logos
const clients = ["Acme", "Nova", "Pulse", "Northwind", "Vanta", "Lumen"];

export function ClientLogos() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((c) => (
              <span
                key={c}
                className="text-lg font-semibold text-muted-foreground/70 hover:text-muted-foreground transition"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}