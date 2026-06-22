"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Leaf, Globe, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Direct Sourcing",
    description:
      "We build relationships directly with farmers across Indonesia's finest growing regions.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every lot is cupped and scored. Only the top-scoring beans earn the HARRA name.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We invest in sustainable farming practices and fair compensation for our partner farmers.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description:
      "Small-batch roasting with meticulous attention to every detail, from green bean to cup.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-light-cream relative overflow-hidden">
              <Image
                src="/images/coffee-farm.svg"
                alt="HARRA Coffee Farm"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white/60 text-xs font-body tracking-[0.2em] uppercase">
                  Est. 2020
                </p>
                <p className="text-white font-heading text-xl mt-1 tracking-tight">
                  Pangalengan, Bandung
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              subtitle="Our Story"
              title="Rooted in Indonesian Coffee Heritage"
              align="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-warm-brown leading-relaxed font-body mb-6 text-sm"
            >
              HARRA was born from a deep passion for Indonesian coffee and a
              belief that the world deserves to experience the extraordinary
              flavors hidden in our archipelago&apos;s volcanic soils. We are
              roasters, storytellers, and advocates for the farmers who make
              exceptional coffee possible.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-warm-brown leading-relaxed font-body mb-10 text-sm"
            >
              Every bean we roast carries a story of origin — of the land it
              grew on, the hands that picked it, and the journey it took to
              reach your cup.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-light-cream flex items-center justify-center shrink-0">
                    <value.icon size={16} className="text-forest-green" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm text-dark-roast mb-1 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-xs text-warm-brown font-body leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
