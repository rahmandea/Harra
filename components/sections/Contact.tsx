"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Jl. Raya Situ Cilenca, Kebon Jambu, Pangalengan,\nBandung, Indonesia 40378",
  },
  { icon: Phone, label: "Phone", value: "+62 21 1234 5678" },
  { icon: Mail, label: "Email", value: "hello@harra.coffee" },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8AM - 6PM\nSat: 9AM - 4PM",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <AnimatedSection id="contact" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          subtitle="Get in Touch"
          title="Contact Us"
          description="Have a question about our coffee or partnership opportunities? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-medium text-dark-roast font-body mb-2 tracking-[0.15em] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-light-cream border border-warm-beige text-dark-roast font-body text-sm focus:outline-none focus:border-dark-roast transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium text-dark-roast font-body mb-2 tracking-[0.15em] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-light-cream border border-warm-beige text-dark-roast font-body text-sm focus:outline-none focus:border-dark-roast transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-medium text-dark-roast font-body mb-2 tracking-[0.15em] uppercase">
                Subject
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-light-cream border border-warm-beige text-dark-roast font-body text-sm focus:outline-none focus:border-dark-roast transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-dark-roast font-body mb-2 tracking-[0.15em] uppercase">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-light-cream border border-warm-beige text-dark-roast font-body text-sm focus:outline-none focus:border-dark-roast transition-colors resize-none"
                required
              />
            </div>

            <Button variant="primary" size="md" type="submit">
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[16/9] bg-light-cream border border-warm-beige mb-8 relative overflow-hidden">
              <Image
                src="/images/map-pin.svg"
                alt="HARRA Location Map"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-3">
                  <div className="w-10 h-10 bg-light-cream flex items-center justify-center shrink-0">
                    <info.icon size={14} className="text-forest-green" />
                  </div>
                  <div>
                    <p className="text-[10px] text-warm-brown font-body uppercase tracking-[0.15em] mb-1">
                      {info.label}
                    </p>
                    <p className="text-xs text-dark-roast font-body whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
