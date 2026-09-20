export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Strength" | "Cardio" | "Facility" | "Functional";
  aspect: "landscape" | "portrait" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/dark-gym-city/gallery/gallery-01.jpg",
    alt: "Heavy dumbbell rack and calibrated Olympic plates",
    caption: "Tiered dumbbell station up to heavy working weights",
    category: "Strength",
    aspect: "landscape"
  },
  {
    id: "gal-2",
    src: "/images/dark-gym-city/gallery/gallery-02.jpg",
    alt: "Olympic barbell loaded on deadlift platform",
    caption: "Chalked Olympic bar on heavy deadlift shock platform",
    category: "Strength",
    aspect: "landscape"
  },
  {
    id: "gal-3",
    src: "/images/dark-gym-city/gallery/gallery-03.jpg",
    alt: "Commercial cardio line with illuminated consoles",
    caption: "Cardio suite with running treadmills and spin cycles",
    category: "Cardio",
    aspect: "landscape"
  },
  {
    id: "gal-4",
    src: "/images/dark-gym-city/gallery/gallery-04.jpg",
    alt: "High-density functional training turf with kettlebells and sled",
    caption: "Functional athletic turf with kettlebells and sled track",
    category: "Functional",
    aspect: "landscape"
  },
  {
    id: "gal-5",
    src: "/images/dark-gym-city/gallery/gallery-05.jpg",
    alt: "Dedicated ladies training area with weights and mats",
    caption: "Dedicated ladies training zone (Daily 10:00 AM – 1:00 PM)",
    category: "Facility",
    aspect: "landscape"
  },
  {
    id: "gal-6",
    src: "/images/dark-gym-city/gallery/gallery-06.jpg",
    alt: "Wide panoramic view of Dark Gym City workout floor",
    caption: "Full workout floor at Thrissur Sports Center",
    category: "Facility",
    aspect: "landscape"
  },
  {
    id: "gal-7",
    src: "/images/dark-gym-city/gallery/gallery-07.jpg",
    alt: "Check-in desk and entrance at Dark Gym City",
    caption: "Front entrance and member reception desk",
    category: "Facility",
    aspect: "landscape"
  },
  {
    id: "gal-8",
    src: "/images/dark-gym-city/gallery/gallery-08.jpg",
    alt: "Cable crossover tower with weighted stack",
    caption: "Precision selectorized cable tower stations",
    category: "Strength",
    aspect: "landscape"
  }
];
