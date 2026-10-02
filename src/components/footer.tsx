"use client";

import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy", href: "/privacy" },
];

const divisions = [
  { label: "Fleet Intelligence", href: "/products/fleet-intelligence" },
  { label: "Asset Intelligence", href: "/products/asset-intelligence" },
  { label: "Access Control", href: "/products/access-control" },
];

const contactLinks = [
  { label: "Get In Touch", href: "/contact" },
  { label: "team@viot.in", href: "mailto:team@viot.in" },
];

const columns = [
  { title: "Explore", links: exploreLinks },
  { title: "Company", links: companyLinks },
  { title: "Divisions", links: divisions },
  { title: "Contact", links: contactLinks },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06151b] text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
        style={{ backgroundImage: "url('/image/foot.png')" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#06151b]/[0.62]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main */}
        <div className="grid gap-10 border-b border-white/[0.10] py-10 sm:py-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
       <div className="lg:col-span-4">
  <Link
    href="/"
    aria-label="VIoT home"
    className="group inline-flex items-center"
  >
    <Image
      src="/logo/logo.png"
      alt="VIoT"
      width={160}
      height={55}
      className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
    />
  </Link>

  <p className="mt-5 max-w-xs font-heading text-base font-medium leading-6 tracking-[-0.01em] text-white/85">
    Track what moves. Secure what matters. Control who gets in.
  </p>
</div>

          {/* Link columns — equal width, same structure */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                  {column.title}
                </p>

                <nav className="flex flex-col">
                  {column.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="border-t border-white/[0.07] py-2.5 text-[13px] text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VIoT Technologies LLP. All rights reserved.</p>

          <p>AIS-140 certified support available</p>
        </div>
      </div>
    </footer>
  );
}