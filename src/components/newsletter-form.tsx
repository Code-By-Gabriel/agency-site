"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

// Replace "yourusername" with your Buttondown username
const BUTTONDOWN_USER = "gee6real";

type Status = "idle" | "loading" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

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

  /* ───────────  SUCCESS  ─────────── */
  if (status === "done") {
    return (
      <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background mt-0.5">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
        </div>
        <div className="text-base">
          <div className="font-medium">You're subscribed.</div>
          <div className="text-muted-foreground mt-1 text-sm">
            Check your inbox to confirm.
          </div>
        </div>
      </div>
    );
  }

  /* ───────────  FORM  ─────────── */
  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="flex-1"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
          {status !== "loading" && (
            <ArrowRight className="ml-1.5 h-4 w-4" />
          )}
        </Button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}