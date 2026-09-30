import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t mt-24">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-semibold">
            Studio<span className="text-muted-foreground">.</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Design & engineering studio helping ambitious teams ship better products.
          </p>

          {/* Newsletter block — insert before closing </div> of the grid */}
          <div className="md:col-span-4 mt-8 pt-8 border-t">
            <div className="text-sm font-medium mb-2">Subscribe to our newsletter</div>
            <p className="text-sm text-muted-foreground mb-4">
              Occasional notes on design, engineering, and shipping. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div>
          <div className="text-sm font-medium mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-medium mb-3">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services">Design</Link></li>
            <li><Link href="/services">Engineering</Link></li>
            <li><Link href="/services">Strategy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Studio. All rights reserved.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}