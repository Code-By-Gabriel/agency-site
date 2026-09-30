import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-32 text-center max-w-2xl">
      <div className="text-sm font-mono text-muted-foreground mb-4">404</div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        This page took a wrong turn.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        The page you're looking for doesn't exist, was moved, or is still being
        built.
      </p>
      <div className="mt-10 flex gap-3 justify-center flex-wrap">
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
}