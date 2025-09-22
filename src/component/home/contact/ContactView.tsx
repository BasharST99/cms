"use client";

import React,{ useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import type { ServiceOption } from "@/types/components";

export default function ContactView({
  heading,
  subtitle,
  callUsLabel,
  phone,
  emailUsLabel,
  email,
  visitUsLabel,
  location,
  formTitle,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  requirementsPlaceholder,
  sendButtonLabel,
  serviceOptions,
}: {
  heading: string;
  subtitle: string;
  callUsLabel: string;
  phone: string;
  emailUsLabel: string;
  email: string;
  visitUsLabel: string;
  location: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  requirementsPlaceholder: string;
  sendButtonLabel: string;
  serviceOptions: ServiceOption[];
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0]?.key ?? "buy",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSent(null);
    try {
      // OPTIONAL: wire this to an API route that stores to Directus
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setSent("ok");
      setFormData({ name: "", email: "", phone: "", service: serviceOptions[0]?.key ?? "buy", message: "" });
    } catch {
      setSent("err");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSent(null), 2500);
    }
  }

  return (
    <section className="py-20 bg-[#0B3557]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">{heading}</h2>
            <p className="text-xl text-white/90 mb-8">{subtitle}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{callUsLabel}</div>
                  <div className="text-white/80">{phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{emailUsLabel}</div>
                  <div className="text-white/80">{email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{visitUsLabel}</div>
                  <div className="text-white/80">{location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{formTitle}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder={namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder={emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder={phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>

              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Service needed" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt.key} value={opt.key}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <textarea
                placeholder={requirementsPlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#0B3557] focus:border-transparent"
              />

              <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-[#0B3557] hover:bg-[#0B3557]/90">
                {isSubmitting ? "Sending..." : sendButtonLabel}
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>

              {sent === "ok" && (
                <p className="text-green-600 text-sm mt-2">Thanks! We’ll get back to you shortly.</p>
              )}
              {sent === "err" && (
                <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
