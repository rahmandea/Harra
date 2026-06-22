import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CoffeeCard from "@/components/coffee/CoffeeCard";
import { coffees } from "@/data/coffees";

export const metadata = {
  title: "Our Coffee | HARRA Specialty Coffee Roastery",
  description:
    "Explore our collection of specialty Indonesian coffee beans, sourced from the finest growing regions and roasted with precision.",
};

export default function CoffeePage() {
  return (
    <section className="pt-32 pb-24 lg:pb-32 bg-light-cream min-h-screen">
      <Container>
        <SectionHeading
          subtitle="Our Collection"
          title="Specialty Coffee"
          description="Sourced from Indonesia's finest growing regions, each coffee tells a unique story of origin, process, and craft."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coffees.map((coffee, index) => (
            <CoffeeCard key={coffee.slug} coffee={coffee} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
