import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We usually reply within one business day.",
  openGraph: {
    title: "Contact | Studio",
    description:
      "Tell us about your project. We usually reply within one business day.",
  },
};

export default function ContactPage() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.02] text-balance">
              Tell us what
              <br />
              <span className="text-muted-foreground">you're building.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We reply within one business day — usually with questions,
              sometimes with ideas.
            </p>
          </div>
        </FadeIn>

        {/* Two-column: meta + form */}
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 mt-20">
          {/* Left: contact info */}
          <FadeIn delay={0.1} className="md:col-span-4">
            <dl className="space-y-10 border-t pt-10">
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:hello@studio.com"
                    className="text-xl hover:underline underline-offset-4 transition"
                  >
                    hello@studio.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Location
                </dt>
                <dd className="text-xl">Remote-first</dd>
              </div>
              
              <div>
                <dt className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Response time
                </dt>
                <dd className="text-xl">Within one business day</dd>
              </div>
            </dl>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.2} className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}