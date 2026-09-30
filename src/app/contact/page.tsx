import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin } from "lucide-react";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's talk</h1>
        <p className="mt-4 text-muted-foreground">
          Tell us about your project. We usually reply within one business day.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground">hello@studio.com</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-muted-foreground">Remote-first</div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  );
}