import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedCoffee from "@/components/sections/FeaturedCoffee";
import RoastingProcess from "@/components/sections/RoastingProcess";
import Wholesale from "@/components/sections/Wholesale";
import Subscription from "@/components/sections/Subscription";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCoffee />
      <RoastingProcess />
      <Wholesale />
      <Subscription />
      <Testimonials />
      <InstagramGallery />
      <Contact />
    </>
  );
}
