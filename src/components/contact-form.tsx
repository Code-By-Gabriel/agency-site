"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
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
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required className="mt-2" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="budget">Budget range</Label>
          <Input id="budget" name="budget" placeholder="e.g. $10k–25k" className="mt-2" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea id="message" name="message" required rows={6} className="mt-2" />
      </div>

      {/* Honeypot for spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <Button type="submit" disabled={status === "sending"} size="lg">
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>

      {status === "sent" && (
        <p className="text-sm text-green-600">✅ Thanks! We'll get back to you within one business day.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">❌ Something went wrong. Please email us directly.</p>
      )}
    </form>
  );
}