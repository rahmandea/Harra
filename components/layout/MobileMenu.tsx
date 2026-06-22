"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ onClose, links }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] md:hidden"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-warm-beige">
          <div className="relative h-8 w-24">
            <Image src="/logo.png" alt="HARRA" fill className="object-contain" />
          </div>
          <button
            onClick={onClose}
            className="text-dark-roast p-2 hover:text-warm-brown transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-1">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block py-3 text-sm font-medium text-dark-roast hover:text-forest-green transition-colors font-body tracking-wider uppercase border-b border-warm-beige"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6"
          >
            <Link
              href="/coffee"
              onClick={onClose}
              className="block text-center bg-dark-roast text-white py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-coffee-bean transition-colors font-body"
            >
              Shop Coffee
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
