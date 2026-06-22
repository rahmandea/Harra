"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "150,000",
    period: "/month",
    description: "Perfect for those beginning their specialty coffee journey.",
    features: [
      "250g freshly roasted coffee",
      "Single origin selection",
      "Monthly delivery",
      "Tasting notes card",
    ],
    popular: false,
  },
  {
    name: "Enthusiast",
    price: "280,000",
    period: "/month",
    description: "For the dedicated coffee lover seeking variety and quality.",
    features: [
      "500g freshly roasted coffee",
      "Two different origins",
      "Monthly delivery",
      "Detailed brew guides",
      "Priority customer support",
    ],
    popular: true,
  },
  {
    name: "Roaster's Choice",
    price: "450,000",
    period: "/month",
    description: "The ultimate experience curated by our head roaster.",
    features: [
      "750g freshly roasted coffee",
      "Three exclusive selections",
      "Early access to new releases",
      "Virtual cupping sessions",
      "Personalized recommendations",
      "Free shipping",
    ],
    popular: false,
  },
];

export default function Subscription() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-light-cream">
      <Container>
        <SectionHeading
          subtitle="Subscribe"
          title="Coffee Subscription"
          description="Never run out of exceptional coffee. Freshly roasted and delivered to your door every month."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white border p-8 ${
                plan.popular
                  ? "border-dark-roast"
                  : "border-warm-beige"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark-roast text-white text-[10px] tracking-[0.15em] uppercase px-4 py-1 font-body">
                  Most Popular
                </div>
              )}

              <h3 className="font-heading text-xl text-dark-roast tracking-tight">
                {plan.name}
              </h3>
              <p className="text-xs text-warm-brown font-body mt-2 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-2xl font-heading text-dark-roast">
                  Rp {plan.price}
                </span>
                <span className="text-xs text-warm-brown font-body">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-xs text-warm-brown font-body"
                  >
                    <Check
                      size={14}
                      className="text-forest-green mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                size="md"
                href="#contact"
                className="w-full"
              >
                Subscribe Now
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
