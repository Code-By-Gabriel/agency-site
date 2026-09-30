"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

// Replace "yourusername" with your Buttondown username
const BUTTONDOWN_USER = "yourusername";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;

    try {
      const res = await fetch(
        `https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_USER}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }),
        }
      );
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-green-600">
        ✅ You're subscribed. Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
      <Input
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="flex-1"
      />
      <Button type="submit" size="sm" disabled={status === "loading"}>
        {status === "loading" ? "..." : <ArrowRight className="h-4 w-4" />}
      </Button>
    </form>
  );
}