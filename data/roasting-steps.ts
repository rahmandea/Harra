export interface RoastingStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const roastingSteps: RoastingStep[] = [
  {
    step: 1,
    title: "Sourcing",
    description:
      "We travel to origin, building direct relationships with farmers across Indonesia's finest growing regions.",
    icon: "map-pin",
  },
  {
    step: 2,
    title: "Green Bean Selection",
    description:
      "Every lot is cupped and evaluated. Only the top-scoring beans make it to our roastery.",
    icon: "search",
  },
  {
    step: 3,
    title: "Profiling",
    description:
      "We develop custom roast profiles for each origin to highlight its unique character and potential.",
    icon: "line-chart",
  },
  {
    step: 4,
    title: "Precision Roasting",
    description:
      "Small-batch roasting with meticulous temperature control ensures consistency in every roast.",
    icon: "flame",
  },
  {
    step: 5,
    title: "Quality Control",
    description:
      "Every batch is cupped post-roast. We verify flavor, aroma, and consistency before approval.",
    icon: "check-circle",
  },
  {
    step: 6,
    title: "Packaging",
    description:
      "Nitrogen-flushed, valve-sealed bags preserve freshness from roastery to your cup.",
    icon: "package",
  },
];
