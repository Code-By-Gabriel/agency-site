import { FadeIn } from "@/components/motion/fade-in";
import { TeamGrid } from "@/components/team-grid";

export const metadata = {
  title: "About",
  description: "Company.",
  openGraph: {
    title: "About | Studio",
    description: "Company",
  },
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About</h1>
        <div className="prose-custom mt-8">
          <p>
            We're a small studio of designers and engineers who care about craft.
            We partner with a handful of teams each year to build products that
            look great and perform even better.
          </p>
          <p>
            Founded in 2020, we've shipped work for startups, scale-ups, and
            established companies across fintech, health, and B2B SaaS.
          </p>
          <h2>How we work</h2>
          <ul>
            <li>Small senior team — no handoffs, no juniors learning on your dime.</li>
            <li>Weekly demos, transparent budgets, no surprises.</li>
            <li>Design and engineering in the same room from day one.</li>
          </ul>
        </div>
        <TeamGrid />
      </FadeIn>
    </section>
  );
}