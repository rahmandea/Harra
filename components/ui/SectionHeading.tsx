"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center mb-16" : "mb-12"}
    >
      {subtitle && (
        <span className="text-forest-green text-xs font-medium tracking-[0.25em] uppercase font-body">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-dark-roast mt-3 leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-warm-brown text-sm md:text-base max-w-2xl mx-auto font-body leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
