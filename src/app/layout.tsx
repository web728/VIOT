import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viot.in"),
  applicationName: "VIoT",
  title: { default: "VIoT — Track what moves. Secure what matters. Control who gets in.", template: "%s | VIoT" },
  description: "VIoT is an Indian IoT company built on three divisions: Fleet Intelligence, Asset Intelligence, and Access Control. One team, three disciplines, one platform.",
  keywords: ["fleet intelligence", "asset intelligence", "access control", "vehicle telematics India", "smart locks", "IoT sensors India"],
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  creator: "VIoT Technologies LLP",
  publisher: "VIoT Technologies LLP",
  category: "Fleet, Asset & Access Intelligence",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: "VIoT",
    title: "VIoT — Track what moves. Secure what matters. Control who gets in.",
    description: "Fleet Intelligence, Asset Intelligence and Access Control unified on one platform with India-first support.",
    url: "https://viot.in",
  },
  twitter: {
    card: "summary",
    title: "VIoT — Track what moves. Secure what matters. Control who gets in.",
    description: "Fleet Intelligence, Asset Intelligence and Access Control unified on one platform with India-first support.",
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
      publisher: { "@id": "https://viot.in/#organization" },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      {/* Added bg-ink here so the entire app base and header backdrop stays dark */}
      <body className="bg-ink text-white antialiased">
        <StructuredData data={organizationSchema} />
      
        <Header />
        <main id="main-content" className="pt-[68px] lg:pt-[82px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}