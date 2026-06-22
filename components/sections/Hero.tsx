"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-roast">
        <Image
          src="/images/roasting.svg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        {/* Geometric accent lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" style={{ left: "25%" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" style={{ left: "50%" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" style={{ left: "75%" }} />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-forest-green" />
            <span className="text-forest-green text-xs tracking-[0.3em] uppercase font-body font-medium">
              Specialty Coffee Roastery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 tracking-tight"
          >
            Crafting Exceptional{" "}
            <span className="text-forest-green">Coffee</span> Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/50 text-sm md:text-base leading-relaxed font-body max-w-xl mb-10"
          >
            From carefully selected origins to precision roasting, HARRA delivers
            specialty coffee that tells a story in every cup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" href="/coffee">
              Shop Coffee
            </Button>
            <Button variant="outline" size="lg" href="#about" className="border-white/20 text-white hover:bg-white hover:text-dark-roast">
              Explore Our Story
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-9 border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-0.5 h-2 bg-white/40" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
