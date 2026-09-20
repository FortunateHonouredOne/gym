export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  image: string;
  alt: string;
  features: string[];
}

export const facilities: FacilityItem[] = [
  {
    id: "strength",
    title: "Heavy Strength & Free Weights",
    category: "STRENGTH ZONE",
    description: "Built for progressive overload. Multi-station power cages, heavy-duty Olympic barbells, calibrated bumper plates, and urethane dumbbells up to heavy working weights.",
    highlight: "Olympic Barbells & Full Dumbbell Rack",
    image: "/images/dark-gym-city/equipment/weights-01.jpg",
    alt: "Dark Gym City heavy dumbbells and Olympic free weights section",
    features: [
      "Rigid power racks & Olympic barbells",
      "Full tiered dumbbell rack up to 50 kg",
      "Deadlift platforms with dense rubber shock absorption",
      "Adjustable decline, flat, and incline benches"
    ]
  },
  {
    id: "cardio",
    title: "Cardio & Conditioning Floor",
    category: "CARDIO SUITE",
    description: "Sleek commercial cardio machines positioned facing ambient floor-to-ceiling mirrors in a dedicated climate-controlled zone.",
    highlight: "High-Performance Digital Consoles",
    image: "/images/dark-gym-city/equipment/cardio-01.jpg",
    alt: "Dark Gym City modern cardio line with treadmills and spin bikes",
    features: [
      "Commercial running treadmills with impact absorption",
      "High-resistance spin bikes & indoor cycles",
      "Continuous climate control & air conditioning",
      "Heart-rate and stamina conditioning monitoring"
    ]
  },
  {
    id: "functional",
    title: "Functional Turf & HIIT Arena",
    category: "FUNCTIONAL ZONE",
    description: "High-density agility turf designed for explosive athletic movement, core stability work, sled pushing, and high-intensity conditioning.",
    highlight: "Dedicated Sled Track & Kettlebell Grid",
    image: "/images/dark-gym-city/equipment/functional-01.jpg",
    alt: "Dark Gym City functional training turf with kettlebells and plyo boxes",
    features: [
      "Heavy cast iron kettlebell collection",
      "Thick battle ropes & heavy plyometric boxes",
      "Agility sled track with sprint grid markings",
      "Calisthenics pull-up and ring station"
    ]
  },
  {
    id: "ladies",
    title: "Dedicated Ladies Training Session",
    category: "RESERVED HOURS",
    description: "Every day from 10:00 AM to 1:00 PM, Dark Gym City hosts dedicated sessions exclusively for women, providing a focused, empowering, and comfortable training atmosphere.",
    highlight: "Daily 10:00 AM – 1:00 PM",
    image: "/images/dark-gym-city/facility/ladies-zone.jpg",
    alt: "Dedicated ladies training session at Dark Gym City",
    features: [
      "Daily reserved hours: 10:00 AM to 1:00 PM",
      "Female-friendly training assistance & form coaching",
      "Full access to strength, cardio, and functional areas",
      "Supportive community of like-minded fitness enthusiasts"
    ]
  },
  {
    id: "machines",
    title: "Selectorized Cable & Machine Stations",
    category: "ISOLATION & HYPERTROPHY",
    description: "Precision pulley systems and biomechanically aligned plate-loaded machines for safe, targeted muscle building without joint strain.",
    highlight: "Smooth Cable Crossover Towers",
    image: "/images/dark-gym-city/equipment/cable-detail.jpg",
    alt: "Cable crossover selectorized machine at Dark Gym City",
    features: [
      "Dual adjustable cable pulley towers",
      "Lat pulldown and seated low-row units",
      "Leg press and hamstring curl stations",
      "Biomechanically aligned chest and shoulder presses"
    ]
  }
];
