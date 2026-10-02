import Link from "next/link";
import { ArrowRight, ArrowUp, Rss } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";


import { NewsletterForm } from "@/components/newsletter-form";
import { LogoMark } from "@/components/logo-mark";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#design", label: "Design" },
      { href: "/services#engineering", label: "Engineering" },
      { href: "/services#strategy", label: "Strategy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/feed.xml", label: "RSS Feed" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
];

const socials = [
  { href: "https://twitter.com", label: "Twitter", icon: SiX },
  { href: "https://github.com", label: "GitHub", icon: SiGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: BsLinkedin },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t">
      {/* ─────────── Newsletter band ─────────── */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Notes from the studio
              </h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Occasional thoughts on design, engineering, and shipping
                products. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="md:justify-self-end w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── Main footer grid ─────────── */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-xl font-semibold tracking-tight"
            >
              <LogoMark className="h-7 w-7" />
              <span>
                Studio<span className="text-muted-foreground">.</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Design & engineering studio helping ambitious teams ship better
              products.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-base text-muted-foreground transition hover:text-foreground"
                    >
                      {l.label}
                      <ArrowRight
                        className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>
      </div>

      {/* ─────────── Bottom bar ─────────── */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/feed.xml"
              className="group inline-flex items-center gap-1.5 hover:text-foreground transition"
            >
              <Rss className="h-3.5 w-3.5" />
              RSS
            </Link>
            <span className="hidden md:inline text-muted-foreground/60">·</span>
            <span>Made by Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}