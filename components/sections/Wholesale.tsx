"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { Coffee, UtensilsCrossed, Building2, Briefcase } from "lucide-react";

const partners = [
  {
    icon: Coffee,
    title: "Cafes",
    description: "Custom roast profiles and consistent supply to elevate your cafe's coffee program.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Premium coffee service that complements your dining experience perfectly.",
  },
  {
    icon: Building2,
    title: "Hotels",
    description: "Bespoke coffee solutions for lobbies, rooms, and breakfast service.",
  },
  {
    icon: Briefcase,
    title: "Offices",
    description: "Keep your team energized with freshly roasted specialty coffee delivery.",
  },
];

const features = [
  "Custom roast profiles tailored to your brand",
  "Consistent weekly or bi-weekly supply",
  "Professional barista training included",
  "Dedicated account consultation",
  "Flexible packaging options",
  "Marketing support and materials",
];

export default function Wholesale() {
  return (
    <AnimatedSection id="wholesale" className="py-24 lg:py-32 bg-dark-roast text-white">
      <Container>
        <SectionHeading
          subtitle="Partnership"
          title="Wholesale & Partnership"
          description="Join Indonesia's leading cafes, restaurants, and hotels serving HARRA specialty coffee."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-white/10 hover:border-forest-green/40 transition-colors group"
            >
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center mb-4 group-hover:bg-forest-green/10 transition-colors">
                <partner.icon size={18} className="text-forest-green" />
              </div>
              <h3 className="font-heading text-base text-white mb-2 tracking-tight">
                {partner.title}
              </h3>
              <p className="text-xs text-white/40 font-body leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl text-white mb-6 tracking-tight">
              Why Partner with HARRA?
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3 text-white/60 font-body text-sm"
                >
                  <div className="w-1 h-1 bg-forest-green shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <h4 className="font-heading text-xl text-white mb-4 tracking-tight">
              Become a Partner
            </h4>
            <p className="text-xs text-white/40 font-body mb-6">
              Tell us about your business and we&apos;ll create a custom coffee solution for you.
            </p>
            <Button variant="primary" size="md" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
