"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Coffee", href: "/coffee" },
  { label: "Journal", href: "/journal" },
  { label: "Wholesale", href: "/#wholesale" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E5E5E5]"
            : "bg-dark-roast/20 backdrop-blur-sm"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="relative h-10 w-32">
              {scrolled ? (
                <Image src="/logo.png" alt="HARRA" fill className="object-contain" priority />
              ) : (
                <Image src="/logo-white.png" alt="HARRA" fill className="object-contain" priority />
              )}
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 font-body",
                    scrolled
                      ? "text-dark-roast hover:text-forest-green"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/coffee"
                className={cn(
                  "px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 font-body",
                  scrolled
                    ? "bg-dark-roast text-white hover:bg-coffee-bean"
                    : "bg-white text-dark-roast hover:bg-white/90"
                )}
              >
                Shop Coffee
              </Link>
            </div>

            <button
              className={cn(
                "md:hidden p-2",
                scrolled ? "text-dark-roast" : "text-white"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} links={navLinks} />
        )}
      </AnimatePresence>
    </>
  );
}
