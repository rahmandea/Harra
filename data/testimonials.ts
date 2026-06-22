export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Wijaya",
    role: "Cafe Owner, Jakarta",
    quote:
      "HARRA has transformed our coffee program. The consistency and quality of their roasts have elevated our cafe's reputation. Our customers keep coming back for more.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Home Brewer",
    quote:
      "The Aceh Gayo Natural is now a staple in my morning routine. The flavor complexity is unmatched. HARRA's attention to origin and process really shines through.",
    rating: 5,
  },
  {
    name: "Maya Putri",
    role: "Restaurant Manager, Bali",
    quote:
      "Working with HARRA for our restaurant's coffee service has been exceptional. Their wholesale program and barista training elevated our entire dining experience.",
    rating: 5,
  },
  {
    name: "Rizki Pratama",
    role: "Coffee Enthusiast",
    quote:
      "The subscription service is incredible. Every month brings a new discovery. HARRA has deepened my appreciation for Indonesian specialty coffee.",
    rating: 5,
  },
  {
    name: "Anisa Rahma",
    role: "Hotel F&B Director",
    quote:
      "HARRA delivers premium quality with reliable service. Their custom roast profiles for our hotel brand were perfect. Highly recommended for hospitality partners.",
    rating: 5,
  },
];
