import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StructuredData } from "@/components/structured-data";

import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--viot-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--viot-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--viot-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viot.in"),

  applicationName: "VIoT",

  title: {
    default:
      "VIoT — Track what moves. Secure what matters. Control who gets in.",
    template: "%s | VIoT",
  },

  description:
    "VIoT is an Indian IoT company built on three divisions: Fleet Intelligence, Asset Intelligence, and Access Control. One team, three disciplines, one platform.",

  keywords: [
    "fleet intelligence",
    "asset intelligence",
    "access control",
    "vehicle telematics India",
    "smart locks",
    "IoT sensors India",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
  },

  creator: "VIoT Technologies LLP",
  publisher: "VIoT Technologies LLP",
  category: "Fleet, Asset & Access Intelligence",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: "VIoT",
    title:
      "VIoT — Track what moves. Secure what matters. Control who gets in.",
    description:
      "Fleet Intelligence, Asset Intelligence and Access Control unified on one platform with India-first support.",
    url: "https://viot.in",
  },

  twitter: {
    card: "summary",
    title:
      "VIoT — Track what moves. Secure what matters. Control who gets in.",
    description:
      "Fleet Intelligence, Asset Intelligence and Access Control unified on one platform with India-first support.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://viot.in/#organization",
      name: "VIoT Technologies LLP",
      url: "https://viot.in",
      logo: "https://viot.in/icon.svg",
      email: "team@viot.in",
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 104",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://viot.in/#website",
      url: "https://viot.in",
      name: "VIoT",
      publisher: {
        "@id": "https://viot.in/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <StructuredData data={organizationSchema} />

        <Header />

        <SmoothScroll />

        <div id="main-content">{children}</div>

        <Footer />
      </body>
    </html>
  );
}