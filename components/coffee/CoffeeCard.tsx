"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import type { Coffee } from "@/data/coffees";

interface CoffeeCardProps {
  coffee: Coffee;
  index: number;
}

export default function CoffeeCard({ coffee, index }: CoffeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/coffee/${coffee.slug}`}
        className="group block bg-white border border-warm-beige overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="aspect-[4/3] bg-light-cream relative overflow-hidden">
          <Image
            src={coffee.image}
            alt={coffee.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-roast/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-body mb-3">
                Flavor Notes
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {coffee.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="text-white text-xs font-body border border-white/20 px-3 py-1"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <Badge>{coffee.origin}</Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-base text-dark-roast group-hover:text-forest-green transition-colors tracking-tight">
            {coffee.name}
          </h3>
          <p className="text-xs text-warm-brown font-body mt-1">
            {coffee.region}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-[10px] px-2 py-1 bg-light-cream text-warm-brown font-body tracking-wider uppercase">
              {coffee.processingMethod}
            </span>
            <span className="text-[10px] px-2 py-1 bg-light-cream text-warm-brown font-body tracking-wider uppercase">
              {coffee.roastLevel}
            </span>
            <span className="text-[10px] px-2 py-1 bg-light-cream text-warm-brown font-body tracking-wider uppercase">
              {coffee.altitude}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-warm-beige">
            <span className="text-xs text-warm-brown font-body">
              {coffee.weight}
            </span>
            <span className="text-sm font-medium text-dark-roast font-body">
              Rp {coffee.price.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
