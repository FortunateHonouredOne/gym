import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://darkgymcity.com"),
  title: "Dark Gym City | Premium Fitness & Strength Gym in Thrissur, Kerala",
  description:
    "Train at Dark Gym City in Kuriachira, Thrissur. Premium strength equipment, air-conditioned workout floor, dedicated daily ladies hours, and personal coaching. 4.9★ Google Rating.",
  keywords: [
    "Dark Gym City",
    "Dark Gym City Thrissur",
    "Gym in Thrissur",
    "Gym in Kuriachira",
    "Fitness center Thrissur",
    "Strength training Thrissur",
    "Personal training Thrissur",
    "Best gym in Thrissur",
    "Ladies gym Thrissur",
  ],
  authors: [{ name: "Dark Gym City" }],
  creator: "Dark Gym City",
  publisher: "Dark Gym City",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://darkgymcity.com",
    siteName: "Dark Gym City",
    title: "Dark Gym City | Premium Fitness & Strength Gym in Thrissur",
    description:
      "A serious training environment in the heart of Thrissur. Built for strength, conditioning and progress. 4.9★ Google Rating with 400+ reviews.",
    images: [
      {
        url: "/images/dark-gym-city/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dark Gym City — Kuriachira, Thrissur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Gym City | Premium Fitness Center in Thrissur",
    description:
      "A serious training environment in Kuriachira, Thrissur. Modern strength equipment, dedicated ladies session, and personal guidance.",
    images: ["/images/dark-gym-city/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: business.name,
    description:
      "Dark Gym City is a premier fitness center in Kuriachira, Thrissur offering heavy strength training, modern cardio, functional athletic turf, and dedicated women's training hours.",
    url: "https://darkgymcity.com",
    telephone: business.phone,
    image: "https://darkgymcity.com/images/dark-gym-city/og/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.locality,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "400",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [business.googleMapsUrl],
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full scroll-smooth bg-[#050505] text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-sans bg-[#050505] text-[#FFFFFF] antialiased selection:bg-[#F5C518] selection:text-black">
        {children}
      </body>
    </html>
  );
}
