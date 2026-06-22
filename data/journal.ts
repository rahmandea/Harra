export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
  image: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "perfect-pour-over-guide",
    title: "The Perfect Pour-Over: A Step-by-Step Guide",
    excerpt:
      "Master the art of pour-over coffee with our comprehensive guide covering technique, ratios, and equipment recommendations.",
    category: "Brewing Guides",
    date: "2024-12-15",
    readTime: "5 min read",
    content: [
      "The pour-over method is one of the most rewarding ways to brew coffee. It offers complete control over extraction and produces a clean, bright cup that highlights the unique characteristics of your beans.",
      "Start with freshly ground coffee at a medium-fine consistency. The ideal ratio is 1:15 — for every gram of coffee, use 15 grams of water. Heat your water to between 90-96°C depending on the roast level.",
      "Begin with a bloom phase: pour just enough water to saturate the grounds and wait 30-45 seconds. This allows CO2 to escape and ensures even extraction. Then pour in slow, concentric circles, maintaining a steady flow rate.",
      "The total brew time should be between 3-4 minutes. Adjust your grind size if the brew is too fast (coarser) or too slow (finer). Practice makes perfect — each coffee origin may require slight adjustments.",
    ],
    image: "/images/journal-brewing.svg",
  },
  {
    slug: "understanding-coffee-processing",
    title: "Understanding Coffee Processing: Natural vs Washed vs Honey",
    excerpt:
      "Explore how different processing methods dramatically affect the flavor profile of your coffee from cherry to cup.",
    category: "Coffee Origins",
    date: "2024-12-01",
    readTime: "7 min read",
    content: [
      "Coffee processing is one of the most significant factors influencing flavor. The method used to transform coffee cherries into green beans has a profound impact on the final cup profile.",
      "Natural (dry) processing involves drying the entire cherry on the bean. This method produces bold, fruity, and complex flavors with heavy body. It's the oldest method and is common in regions with limited water access.",
      "Washed (wet) processing removes the cherry mucilage before drying. This results in cleaner, brighter coffees with higher acidity and more defined origin characteristics. It requires significant water resources.",
      "Honey processing is a middle ground where some mucilage remains on the bean during drying. It offers a balance of sweetness, body, and clarity. The amount of mucilage left determines whether it's white, yellow, red, or black honey.",
    ],
    image: "/images/journal-origin.svg",
  },
  {
    slug: "art-of-coffee-roasting",
    title: "The Art and Science of Coffee Roasting",
    excerpt:
      "Dive into the roasting process and learn how time, temperature, and technique transform green beans into aromatic coffee.",
    category: "Roasting Insights",
    date: "2024-11-20",
    readTime: "8 min read",
    content: [
      "Roasting is where the magic happens. Green coffee beans hold potential flavor locked within their cellular structure. The roaster's job is to unlock that potential through careful application of heat.",
      "The Maillard reaction, occurring between 150-200°C, creates hundreds of flavor compounds. This is where caramel, chocolate, and nutty flavors develop. First crack around 196°C marks the beginning of light roast territory.",
      "Development time after first crack is crucial. Too short and the coffee tastes grassy and underdeveloped. Too long and you risk losing origin character to roast flavors. The best roasters find the sweet spot.",
      "At HARRA, we profile each origin individually. A high-altitude Sulawesi bean requires a different approach than a low-grown Java. Our goal is to honor the bean's origin while achieving consistent, delicious results.",
    ],
    image: "/images/journal-roasting.svg",
  },
  {
    slug: "indonesian-coffee-origins",
    title: "A Journey Through Indonesian Coffee Origins",
    excerpt:
      "Discover the diverse coffee landscapes of Indonesia, from Sumatra's highlands to Flores' volcanic slopes.",
    category: "Coffee Origins",
    date: "2024-11-05",
    readTime: "6 min read",
    content: [
      "Indonesia is the world's fourth-largest coffee producer, and its archipelago offers incredible diversity in cup profiles. Each island has unique terroir, processing traditions, and flavor characteristics.",
      "Sumatra, particularly the Gayo Highlands and Lintong regions, produces earthy, full-bodied coffees with low acidity. The traditional Giling Basas (wet-hulled) processing gives Sumatran coffee its distinctive character.",
      "Java has a long coffee history dating to the Dutch colonial era. Modern Javanese coffees from the Preanger region are clean and sweet, often with honey or fruit-forward processing that adds complexity.",
      "Eastern Indonesia — Flores, Sulawesi, and Bali — offers volcanic terroir at high altitude. These coffees tend to be more complex and nuanced, with fruity and spicy notes that rival the best origins globally.",
    ],
    image: "/images/journal-origin.svg",
  },
];
