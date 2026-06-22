"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { roastingSteps } from "@/data/roasting-steps";
import {
  MapPin,
  Search,
  LineChart,
  Flame,
  CheckCircle,
  Package,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "map-pin": MapPin,
  search: Search,
  "line-chart": LineChart,
  flame: Flame,
  "check-circle": CheckCircle,
  package: Package,
};

export default function RoastingProcess() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          subtitle="Our Process"
          title="From Origin to Cup"
          description="Every step is guided by craftsmanship, precision, and a deep respect for the bean."
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-warm-beige" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {roastingSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto w-16 h-16 bg-light-cream flex items-center justify-center mb-6">
                    <Icon size={20} className="text-forest-green" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-dark-roast text-white text-[10px] flex items-center justify-center font-body font-medium">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-base text-dark-roast mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-warm-brown font-body leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
