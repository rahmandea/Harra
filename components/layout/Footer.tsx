import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Coffee", href: "/coffee" },
    { label: "Journal", href: "/journal" },
    { label: "Wholesale", href: "/#wholesale" },
    { label: "Contact", href: "/#contact" },
  ],
  coffee: [
    { label: "Aceh Gayo Natural", href: "/coffee/aceh-gayo-natural" },
    { label: "Java Preanger Honey", href: "/coffee/java-preanger-honey" },
    { label: "Flores Bajawa Washed", href: "/coffee/flores-bajawa-washed" },
    { label: "Toraja Sapan Natural", href: "/coffee/toraja-sapan-natural" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-roast text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="relative h-8 w-24 mb-4">
              <Image src="/logo-white.png" alt="HARRA" fill className="object-contain" />
            </div>
            <p className="text-sm leading-relaxed font-body text-white/50">
              Crafting exceptional coffee experiences from carefully selected
              Indonesian origins.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/40 hover:text-forest-green transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-forest-green transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-forest-green transition-colors"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 font-body">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 font-body">
              Our Coffee
            </h4>
            <ul className="space-y-3">
              {footerLinks.coffee.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 font-body">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/40 font-body">
                <MapPin size={14} className="mt-0.5 shrink-0 text-forest-green" />
                <span>Jl. Raya Situ Cilenca, Kebon Jambu, Pangalengan, Bandung, Indonesia 40378</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40 font-body">
                <Phone size={14} className="shrink-0 text-forest-green" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40 font-body">
                <Mail size={14} className="shrink-0 text-forest-green" />
                <span>hello@harra.coffee</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/30 font-body tracking-wider uppercase">
            &copy; {new Date().getFullYear()} HARRA Coffee Roastery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[10px] text-white/30 hover:text-white/50 transition-colors font-body tracking-wider uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[10px] text-white/30 hover:text-white/50 transition-colors font-body tracking-wider uppercase"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
