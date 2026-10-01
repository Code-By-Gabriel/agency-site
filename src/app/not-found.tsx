"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Mail, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { NotFoundMascot } from "@/components/not-found-mascot";

const helpfulLinks = [
  { href: "/services", label: "Services", icon: Briefcase, desc: "What we do" },
  { href: "/work", label: "Work", icon: FileText, desc: "Case studies" },
  { href: "/blog", label: "Blog", icon: FileText, desc: "Latest posts" },
  { href: "/contact", label: "Contact", icon: Mail, desc: "Get in touch" },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative flex flex-col items-center"
>
  <NotFoundMascot className="h-40 w-40 md:h-48 md:w-48 text-foreground/80" />
  <span
    className="mt-4 select-none bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter text-transparent"
    aria-hidden
  >
    404
  </span>
</motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-3xl md:text-4xl font-bold tracking-tight"
        >
          This page took a wrong turn.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-md mx-auto"
        >
          The link might be broken, or the page was moved. Either way - let&apos;s
          get you back on track.
        </motion.p>

        {/* Primary actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Link>
          </Button>
        </motion.div>

        {/* Helpful links grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Or try one of these
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-lg border bg-card p-4 text-left transition hover:border-foreground/30 hover:bg-accent"
              >
                <link.icon className="h-4 w-4 mb-3 text-muted-foreground group-hover:text-foreground transition" />
                <div className="text-sm font-medium">{link.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Tiny footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-xs text-muted-foreground"
        >
          Think this is a mistake?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-foreground transition"
          >
            Let us know
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}