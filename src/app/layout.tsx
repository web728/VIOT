import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/structured-data";

import "./globals.css";

const SITE_URL = "https://www.viot.in";

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
  metadataBase: new URL(SITE_URL),
  applicationName: "VIoT",

  title: {
    default: "VIoT - Track what moves. Secure what matters. Control who gets in.",
    template: "%s",
  },

  description:
    "Connected IoT hardware and technology solutions for vehicle intelligence, asset visibility, operational safety and smarter operations.",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
  },

  creator: "VIoT Technologies LLP",
  publisher: "VIoT Technologies LLP",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: "VIoT",
    title: "VIoT - Track what moves. Secure what matters. Control who gets in.",
    description:
      "Connected IoT hardware and technology solutions for vehicle intelligence, asset visibility, operational safety and smarter operations.",
    url: SITE_URL,
  },

  twitter: {
    card: "summary",
    title: "VIoT - Track what moves. Secure what matters. Control who gets in.",
    description:
      "Connected IoT hardware and technology solutions for vehicle intelligence, asset visibility, operational safety and smarter operations.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "VIoT Technologies LLP",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
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
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "VIoT",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
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
      lang="en-IN"
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
