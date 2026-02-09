"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalLeadForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast.error("Please provide your full name and email.");
      return;
    }

    const existing = localStorage.getItem("shieldify-lead-capture");
    const list = existing ? JSON.parse(existing) : [];
    list.push({
      fullName,
      email,
      company,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("shieldify-lead-capture", JSON.stringify(list));
    toast.success("Thank you. We will reach out shortly.");
    setFullName("");
    setEmail("");
    setCompany("");
  };

  return (
    <form onSubmit={submit} className="rounded-lg border border-border bg-card p-6 md:p-7">
      <h4 className="text-lg font-semibold">Need a rapid assessment?</h4>
      <p className="mt-2 text-sm text-muted-foreground">
        Share your details for a quick response, or continue with the full contact form.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <Input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Full Name"
          aria-label="Full Name"
        />
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          aria-label="Email"
        />
        <Input
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Company"
          aria-label="Company"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="submit">Submit</Button>
        <Button asChild variant="outline">
          <Link href="/contact">Open full request form</Link>
        </Button>
      </div>
    </form>
  );
}
