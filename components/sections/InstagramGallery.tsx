"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Camera } from "lucide-react";

const posts = [
  { id: 1, image: "/images/coffee-beans.svg", alt: "Coffee beans" },
  { id: 2, image: "/images/roasting.svg", alt: "Roasting process" },
  { id: 3, image: "/images/pour-over.svg", alt: "Pour over brewing" },
  { id: 4, image: "/images/latte-art.svg", alt: "Latte art" },
  { id: 5, image: "/images/coffee-farm.svg", alt: "Coffee farm" },
  { id: 6, image: "/images/coffee-cup.svg", alt: "Coffee cup" },
];

export default function InstagramGallery() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-light-cream">
      <Container>
        <SectionHeading
          subtitle="@harra.coffee"
          title="Follow Our Journey"
          description="Moments from the roastery, farms, and brewing rituals."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="aspect-square bg-light-cream relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark-roast/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera size={18} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
