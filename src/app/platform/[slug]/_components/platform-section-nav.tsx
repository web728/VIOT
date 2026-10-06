"use client";

import { useEffect, useRef, useState } from "react";

type SectionItem = {
  number: string;
  label: string;
  id: string;
};

export function PlatformSectionNav({
  items,
}: {
  items: SectionItem[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 150;
      let current = items[0]?.id ?? "";

      for (const item of items) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.getBoundingClientRect().top;

        if (top <= offset) {
          current = item.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  useEffect(() => {
    const activeLink = linkRefs.current[activeId];

    if (!activeLink) return;

    activeLink.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  const handleJump = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveId(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-16 z-[70] border-b border-[#c8d5d0]/90 bg-[#f4f6f2]/92 shadow-[0_10px_28px_rgba(8,27,36,0.045)] backdrop-blur-xl sm:top-20"
    >
      <div className="mx-auto max-w-[1440px] px-3 sm:px-8 lg:px-12">
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-1.5 py-2.5">
            {items.map((item) => {
              const active = activeId === item.id;

              return (
                <a
                  key={item.id}
                  ref={(node) => {
                    linkRefs.current[item.id] = node;
                  }}
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  onClick={(event) => handleJump(event, item.id)}
                  className={`group relative inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-[9px] font-semibold uppercase tracking-[0.09em] transition-all duration-300 ${
                    active
                      ? "border-[#007c67]/20 bg-white text-[#081b24] shadow-[0_7px_20px_rgba(8,27,36,0.06)]"
                      : "border-transparent text-[#607078] hover:border-[#c8d5d0] hover:bg-white/75 hover:text-[#081b24]"
                  }`}
                >
                  <span
                    className={`font-mono text-[8px] transition-colors ${
                      active ? "text-[#007c67]" : "text-[#607078]/65"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span>{item.label}</span>

                  {active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                  ) : null}

                  <span
                    className={`absolute inset-x-3 -bottom-[11px] h-[2px] rounded-full transition-all duration-300 ${
                      active ? "bg-[#27d59b] opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
