export interface Coffee {
  slug: string;
  name: string;
  origin: string;
  region: string;
  processingMethod: string;
  roastLevel: string;
  flavorNotes: string[];
  altitude: string;
  description: string;
  price: number;
  weight: string;
  story: string;
  brewingTips: string[];
  image: string;
}

export const coffees: Coffee[] = [
  {
    slug: "aceh-gayo-natural",
    name: "Aceh Gayo Natural",
    origin: "Indonesia",
    region: "Aceh, Sumatra",
    processingMethod: "Natural",
    roastLevel: "Medium",
    flavorNotes: ["Dark Chocolate", "Brown Sugar", "Tropical Fruit", "Earthy"],
    altitude: "1,200 - 1,500 masl",
    description:
      "A rich and full-bodied coffee from the highlands of Aceh, processed using the natural method to bring out deep, complex flavors.",
    price: 185000,
    weight: "250g",
    story:
      "Sourced from smallholder farmers in the Gayo Highlands, this coffee represents the best of Aceh's volcanic terroir. The natural processing method allows the cherry to dry around the bean, imparting intense fruit-forward characteristics.",
    brewingTips: [
      "Best enjoyed as pour-over or French press",
      "Water temperature: 92-94°C",
      "Ratio: 1:15 for optimal extraction",
    ],
    image: "/images/aceh-gayo.svg",
  },
  {
    slug: "java-preanger-honey",
    name: "Java Preanger Honey",
    origin: "Indonesia",
    region: "West Java",
    processingMethod: "Honey",
    roastLevel: "Medium Light",
    flavorNotes: ["Stone Fruit", "Honey", "Citrus", "Floral"],
    altitude: "1,400 - 1,600 masl",
    description:
      "An elegant and sweet coffee from West Java's Preanger region, honey-processed to highlight its delicate fruit and floral characteristics.",
    price: 195000,
    weight: "250g",
    story:
      "From the misty mountains of West Java, this coffee carries the legacy of Dutch colonial coffee cultivation. The honey process adds a silky sweetness that complements the bean's natural bright acidity.",
    brewingTips: [
      "Excellent as pour-over or AeroPress",
      "Water temperature: 90-92°C",
      "Ratio: 1:16 for balanced clarity",
    ],
    image: "/images/java-preanger.svg",
  },
  {
    slug: "flores-bajawa-washed",
    name: "Flores Bajawa Washed",
    origin: "Indonesia",
    region: "Bajawa, Flores",
    processingMethod: "Washed",
    roastLevel: "Medium",
    flavorNotes: ["Caramel", "Nutty", "Dark Chocolate", "Spice"],
    altitude: "1,300 - 1,700 masl",
    description:
      "A clean and balanced coffee from the volcanic slopes of Flores, washed processed for clarity and refined sweetness.",
    price: 175000,
    weight: "250g",
    story:
      "Grown in the rich volcanic soil near Mount Inerie, Flores Bajawa is cultivated by indigenous Ngada farmers using traditional methods. The washed process reveals a remarkably clean cup with lingering sweetness.",
    brewingTips: [
      "Versatile - great for all brew methods",
      "Water temperature: 93-95°C",
      "Ratio: 1:15 to 1:17",
    ],
    image: "/images/flores-bajawa.svg",
  },
  {
    slug: "toraja-sapan-natural",
    name: "Toraja Sapan Natural",
    origin: "Indonesia",
    region: "Toraja, Sulawesi",
    processingMethod: "Natural",
    roastLevel: "Medium Dark",
    flavorNotes: ["Dark Berry", "Cocoa", "Spice", "Smoky"],
    altitude: "1,500 - 1,800 masl",
    description:
      "A bold and intense coffee from the legendary Toraja region, naturally processed to amplify its deep, complex character.",
    price: 210000,
    weight: "250g",
    story:
      "Toraja coffee is among Indonesia's most revered. From the Sapan village at high altitude, this natural-processed lot delivers extraordinary depth. The traditional Torajan coffee culture adds a layer of heritage to every cup.",
    brewingTips: [
      "Best as espresso or moka pot",
      "Water temperature: 93-96°C",
      "Ratio: 1:14 for espresso, 1:15 for filter",
    ],
    image: "/images/toraja-sapan.svg",
  },
];
