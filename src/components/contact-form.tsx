"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);
    formData.append("subject", "New inquiry from website");
    formData.append("from_name", "Studio Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /* ───────────  SUCCESS STATE  ─────────── */
  if (status === "sent") {
    return (
      <div className="rounded-xl border bg-muted/30 p-8 md:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-background mb-6">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Message sent.
        </h3>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          Thanks for reaching out. We'll get back to you within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="cursor-pointer mt-8 group inline-flex items-center gap-2 text-base font-medium"
        >
          Send another message
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    );
  }

  /* ───────────  FORM  ─────────── */
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name + Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name" className="text-base">
            Name <span className="text-muted-foreground">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-base">
            Email <span className="text-muted-foreground">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2"
          />
        </div>
      </div>

      {/* Row 2: Company + Budget */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="company" className="text-base">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="budget" className="text-base">
            Budget range (TZS)
          </Label>
          <Select name="budget">
            <SelectTrigger id="budget" className="mt-2">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5m">Under 5M</SelectItem>
              <SelectItem value="5-15m">5M – 15M</SelectItem>
              <SelectItem value="15-30m">15M – 30M</SelectItem>
              <SelectItem value="30-60m">30M – 60M</SelectItem>
              <SelectItem value="60-150m">60M – 150M</SelectItem>
              <SelectItem value="150m+">150M+</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <Label htmlFor="message" className="text-base">
          How can we help? <span className="text-muted-foreground">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2"
        />
      </div>

      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit */}
      <div className="pt-2">
        <Button type="submit" disabled={status === "sending"} size="lg" className="cursor-pointer">
          {status === "sending" ? "Sending..." : "Send message"}
          {status !== "sending" && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-base">
          <span className="font-medium text-red-600 dark:text-red-400">
            Something went wrong.
          </span>{" "}
          <span className="text-muted-foreground">
            Please try again, or email us directly at{" "}
            <a
              href="mailto:hello@studio.com"
              className="underline underline-offset-4 hover:text-foreground transition"
            >
              hello@studio.com
            </a>
            .
          </span>
        </div>
      )}
    </form>
  );
}