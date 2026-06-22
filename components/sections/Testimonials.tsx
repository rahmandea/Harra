"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <AnimatedSection className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-forest-green fill-forest-green"
                    />
                  )
                )}
              </div>

              <p className="font-heading text-xl md:text-2xl text-dark-roast leading-relaxed mb-8 tracking-tight">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              <div className="w-10 h-10 bg-light-cream mx-auto mb-3 flex items-center justify-center">
                <span className="text-dark-roast font-heading text-sm">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>

              <p className="font-heading text-dark-roast text-sm tracking-tight">
                {testimonials[current].name}
              </p>
              <p className="text-xs text-warm-brown font-body">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-warm-beige flex items-center justify-center hover:bg-light-cream transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="text-dark-roast" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-1.5 h-1.5 transition-colors ${
                    index === current ? "bg-dark-roast" : "bg-warm-beige"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-warm-beige flex items-center justify-center hover:bg-light-cream transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="text-dark-roast" />
            </button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
