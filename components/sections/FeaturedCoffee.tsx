"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { coffees } from "@/data/coffees";

function CoffeeCard({
  coffee,
  index,
}: {
  coffee: (typeof coffees)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.a
        href={`/coffee/${coffee.slug}`}
        whileHover={{ y: -2 }}
        className="group block bg-white border border-warm-beige overflow-hidden transition-shadow duration-300 hover:shadow-lg"
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
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-warm-beige">
            <div className="flex gap-3">
              <span className="text-[10px] text-warm-brown font-body tracking-wider uppercase">
                {coffee.processingMethod}
              </span>
            </div>
            <span className="text-sm font-medium text-dark-roast font-body">
              Rp {coffee.price.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function FeaturedCoffee() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-light-cream">
      <Container>
        <SectionHeading
          subtitle="Our Collection"
          title="Featured Coffee"
          description="Sourced from Indonesia's finest growing regions, roasted with precision and care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coffees.map((coffee, index) => (
            <CoffeeCard key={coffee.slug} coffee={coffee} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="md" href="/coffee">
            View All Coffee
          </Button>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
