export interface DaySchedule {
  day: string;
  open: string | null;
  close: string | null;
  text: string;
  isOpen: boolean;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  phoneDisplay: string;
  phone: string;
  whatsapp: string;
  alternatePhoneDisplay: string;
  alternatePhone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  reviewCount: number;
  timezone: string;
  schedule: Record<number, DaySchedule>;
  specialSessions: Array<{
    title: string;
    timing: string;
    days: string;
    description: string;
  }>;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  branches: Array<{
    name: string;
    location: string;
    role: string;
  }>;
  founder: {
    name: string;
    credentials: string;
  };
}

export const business: BusinessConfig = {
  name: "Dark Gym City",
  shortName: "Dark Gym City",
  tagline: "Train with purpose. Progress with consistency.",
  phoneDisplay: "+91 97469 36105",
  phone: "+919746936105",
  whatsapp: "919746936105",
  alternatePhoneDisplay: "+91 96335 56660",
  alternatePhone: "+919633556660",
  email: "info@darkgymcity.com",
  address: {
    line1: "Ground Floor, Thrissur Sports Center",
    line2: "Azhikkodan Smarak Road",
    locality: "Kuriachira",
    city: "Thrissur",
    state: "Kerala",
    postalCode: "680006",
    country: "India",
    fullAddress: "Ground Floor, Thrissur Sports Center, Azhikkodan Smarak Road, Kuriachira, Thrissur, Kerala 680006, India"
  },
  coordinates: {
    latitude: 10.5061717,
    longitude: 76.2228288
  },
  rating: 4.9,
  reviewCount: 400,
  timezone: "Asia/Kolkata",
  schedule: {
    1: { day: "Monday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    2: { day: "Tuesday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    3: { day: "Wednesday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    4: { day: "Thursday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    5: { day: "Friday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    6: { day: "Saturday", open: "05:00", close: "22:00", text: "5:00 AM – 10:00 PM", isOpen: true },
    0: { day: "Sunday", open: null, close: null, text: "Closed", isOpen: false },
  },
  specialSessions: [
    {
      title: "Dedicated Ladies Training Session",
      timing: "10:00 AM – 1:00 PM",
      days: "Monday – Saturday",
      description: "Reserved, comfortable training window with specialized guidance."
    }
  ],
  googleMapsUrl: "https://www.google.com/maps/place/Dark+Gym+City/@10.5061514,76.2226954",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.324083818169!2d76.22025387588722!3d10.506171689626356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee0640d2ce21%3A0x6bce2beba82cb8d8!2sDark%20Gym%20City!5e0!3m2!1sen!2sin!4v1710970000000!5m2!1sen!2sin",
  branches: [
    {
      name: "Kuriachira (Main Hub)",
      location: "Ground Floor, Thrissur Sports Center",
      role: "Current Location"
    },
    {
      name: "West Fort Branch",
      location: "7th Floor, Fort Palace, West Fort Junction",
      role: "Second Location"
    }
  ],
  founder: {
    name: "Sneha",
    credentials: "Gold medalist athlete, Mrs. Thrissur & Mrs. Kerala titleholder"
  }
};
