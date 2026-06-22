import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { coffees } from "@/data/coffees";
import {
  MapPin,
  Mountain,
  Droplets,
  Flame,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return coffees.map((coffee) => ({ slug: coffee.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coffee = coffees.find((c) => c.slug === slug);
  if (!coffee) return { title: "Not Found" };
  return {
    title: `${coffee.name} | HARRA Coffee`,
    description: coffee.description,
  };
}

export default async function CoffeeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coffee = coffees.find((c) => c.slug === slug);

  if (!coffee) notFound();

  const details = [
    { icon: MapPin, label: "Origin", value: coffee.region },
    { icon: Mountain, label: "Altitude", value: coffee.altitude },
    { icon: Droplets, label: "Processing", value: coffee.processingMethod },
    { icon: Flame, label: "Roast Level", value: coffee.roastLevel },
  ];

  return (
    <section className="pt-28 pb-24 lg:pb-32 bg-light-cream min-h-screen">
      <Container>
        <Link
          href="/coffee"
          className="inline-flex items-center gap-2 text-xs text-warm-brown hover:text-dark-roast transition-colors font-body mb-8 tracking-wider uppercase"
        >
          <ArrowLeft size={14} />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-white relative overflow-hidden border border-warm-beige">
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6">
              <Badge>{coffee.origin}</Badge>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-forest-green" />
              <span className="text-forest-green text-xs font-medium tracking-[0.2em] uppercase font-body">
                {coffee.region}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-dark-roast mb-4 tracking-tight">
              {coffee.name}
            </h1>
            <p className="text-warm-brown font-body leading-relaxed mb-8 text-sm">
              {coffee.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 p-4 bg-white border border-warm-beige"
                >
                  <div className="w-10 h-10 bg-light-cream flex items-center justify-center shrink-0">
                    <detail.icon size={14} className="text-forest-green" />
                  </div>
                  <div>
                    <p className="text-[10px] text-warm-brown font-body uppercase tracking-[0.15em]">
                      {detail.label}
                    </p>
                    <p className="text-xs text-dark-roast font-body font-medium">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-medium text-dark-roast font-body mb-3 uppercase tracking-[0.2em]">
                Flavor Notes
              </h3>
              <div className="flex flex-wrap gap-2">
                {coffee.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="px-4 py-2 bg-light-cream text-dark-roast text-xs font-body border border-warm-beige"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8 p-6 bg-white border border-warm-beige">
              <div>
                <p className="text-[10px] text-warm-brown font-body tracking-wider uppercase">
                  {coffee.weight}
                </p>
                <p className="text-2xl font-heading text-dark-roast">
                  Rp {coffee.price.toLocaleString("id-ID")}
                </p>
              </div>
              <Button variant="primary" size="lg" href="#contact">
                Order Now
              </Button>
            </div>

            <div className="mb-8">
              <h3 className="font-heading text-lg text-dark-roast mb-3 tracking-tight">
                The Story
              </h3>
              <p className="text-warm-brown font-body leading-relaxed text-sm">
                {coffee.story}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-dark-roast mb-3 tracking-tight">
                Brewing Recommendations
              </h3>
              <ul className="space-y-2">
                {coffee.brewingTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-xs text-warm-brown font-body"
                  >
                    <div className="w-1 h-1 bg-forest-green mt-2 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
