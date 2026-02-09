"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motionDurations, motionEase } from "@/lib/motion";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  platforms: string;
  issueType: string;
  urls: string;
  message: string;
};

const initialData: FormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  platforms: "",
  issueType: "",
  urls: "",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const requiredFields: Array<keyof FormData> = useMemo(
    () => ["fullName", "company", "email", "platforms", "issueType", "urls", "message"],
    []
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    requiredFields.forEach((field) => {
      if (!data[field].trim()) {
        nextErrors[field] = "Please complete this field.";
      }
    });

    if (data.email && !isValidEmail(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Please review the highlighted fields and try again.");
      return;
    }

    const payload = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    const existing = localStorage.getItem("shieldify-contact-submissions");
    const records = existing ? JSON.parse(existing) : [];
    records.push(payload);
    localStorage.setItem("shieldify-contact-submissions", JSON.stringify(records));

    toast.success("Submission received. Our team will follow up shortly.");
    setData(initialData);
    setErrors({});
  };

  const onInput =
    (field: keyof FormData) =>
    (value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = typeof value === "string" ? value : value.target.value;
      setData((prev) => ({ ...prev, [field]: nextValue }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const inputClass = (field: keyof FormData) =>
    errors[field] ? "border-destructive/80 focus-visible:ring-destructive/25" : "";

  const errorMessage = (message?: string) => (
    <AnimatePresence mode="wait">
      {message ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionDurations.fast, ease: motionEase }}
          className="text-xs text-destructive"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border border-border bg-card p-6 md:p-7"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={data.fullName}
            onChange={onInput("fullName")}
            className={inputClass("fullName")}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errorMessage(errors.fullName)}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={data.company}
            onChange={onInput("company")}
            className={inputClass("company")}
            aria-invalid={Boolean(errors.company)}
          />
          {errorMessage(errors.company)}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={onInput("email")}
            className={inputClass("email")}
            aria-invalid={Boolean(errors.email)}
          />
          {errorMessage(errors.email)}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" value={data.phone} onChange={onInput("phone")} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Platform(s)</Label>
          <Select value={data.platforms} onValueChange={onInput("platforms")}>
            <SelectTrigger className={inputClass("platforms")}>
              <SelectValue placeholder="Select platform focus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="marketplace">Marketplace</SelectItem>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="website-hosting">Website Hosting</SelectItem>
              <SelectItem value="multi-platform">Multi-platform</SelectItem>
            </SelectContent>
          </Select>
          {errorMessage(errors.platforms)}
        </div>
        <div className="space-y-2">
          <Label>Issue Type</Label>
          <Select value={data.issueType} onValueChange={onInput("issueType")}>
            <SelectTrigger className={inputClass("issueType")}>
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="counterfeit">Counterfeit listings</SelectItem>
              <SelectItem value="impersonation">Impersonation pages</SelectItem>
              <SelectItem value="trademark-misuse">Trademark misuse</SelectItem>
              <SelectItem value="copyright-misuse">Copyright misuse</SelectItem>
            </SelectContent>
          </Select>
          {errorMessage(errors.issueType)}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="urls">URLs</Label>
        <Textarea
          id="urls"
          value={data.urls}
          onChange={onInput("urls")}
          className={inputClass("urls")}
          placeholder="Paste relevant listing or profile URLs"
          aria-invalid={Boolean(errors.urls)}
        />
        {errorMessage(errors.urls)}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={data.message}
          onChange={onInput("message")}
          className={inputClass("message")}
          placeholder="Describe scope, urgency, and any known recurrence pattern."
          aria-invalid={Boolean(errors.message)}
        />
        {errorMessage(errors.message)}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Submit Request
      </Button>
    </form>
  );
}
