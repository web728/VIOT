"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    id: 1,
    video: "/video/video-1.mp4",
    eyebrow: "Vehicle Tracking",
    title: "Track what moves.",
    description:
      "Real-time visibility across vehicles, routes and operations through connected telematics.",
    cta: "Explore Vehicle Tracking",
    href: "/products/vehicle-telematics",
  },
  {
    id: 2,
    video: "/video/video-2.mp4",
    eyebrow: "Video Telematics",
    title: "See what happens on the road.",
    description:
      "Video intelligence that adds context to every journey, event and operational decision.",
    cta: "Explore Video Telematics",
    href: "/products/video-telematics",
  },
  {
    id: 3,
    video: "/video/video-3.mp4",
    eyebrow: "Access & Infrastructure",
    title: "Secure what matters.",
    description:
      "Connected access and infrastructure intelligence designed around people, places and assets.",
    cta: "Explore Access Control",
    href: "/products/access-control",
  },
];

const contentTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRefs = useRef([]);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;

        const promise = video.play();

        if (promise !== undefined) {
          promise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleVideoLoaded = (index) => {
    if (index === 0) {
      setIsLoaded(true);
    }
  };

  const handleVideoEnded = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  const handleIndicatorClick = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#081b24] text-white">
      {/* =========================================================
          HERO VIDEO
      ========================================================= */}

      <div className="relative h-[90vh] min-h-[560px] max-h-[760px] w-full">
        {/* =======================================================
            VIDEO LAYER
        ======================================================= */}

        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.video
              key={slide.id}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              src={slide.video}
              muted
              playsInline
              autoPlay={index === 0}
              preload={index === 0 ? "auto" : "metadata"}
              onLoadedData={() => handleVideoLoaded(index)}
              onEnded={index === activeIndex ? handleVideoEnded : undefined}
              initial={false}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 1.035,
              }}
              transition={{
                opacity: {
                  duration: 1.2,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  ease: "linear",
                },
              }}
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>

        {/* =======================================================
            CINEMATIC OVERLAY
        ======================================================= */}

        {/* Overall contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/30" />

        {/* Center readability */}
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/20" />

        {/* Bottom depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#081b24]/85 via-[#081b24]/30 to-transparent" />

        {/* Top depth */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#081b24]/55 to-transparent" />

        {/* =======================================================
            LOADING
        ======================================================= */}
{/* 
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-[#081b24]"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                  Loading experience
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* =======================================================
            CENTER CONTENT
        ======================================================= */}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pb-10 pt-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={contentTransition}
                className="flex flex-col items-center"
              >
                {/* Eyebrow */}
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    {activeSlide.eyebrow}
                  </span>

                  <span className="h-px w-8 bg-[#27d59b]" />
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)]">
                  {activeSlide.title}
                </h1>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {activeSlide.description}
                </p>

                {/* =================================================
                    PREMIUM BUTTONS
                ================================================= */}

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {/* Primary */}
                  <Link
                    href={activeSlide.href}
                    className="group relative inline-flex h-12 items-center gap-3 overflow-hidden bg-[#27d59b] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:bg-white"
                  >
                    <span className="relative z-10">
                      {activeSlide.cta}
                    </span>

                    <span className="relative z-10 flex h-6 w-6 items-center justify-center bg-[#081b24]/10 transition-all duration-300 group-hover:bg-[#081b24]">
                      <ArrowIcon className="h-3.5 w-3.5 text-[#081b24] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                    </span>
                  </Link>

                  {/* Secondary */}
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-3 border border-white/25 bg-white/[0.07] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white hover:text-[#081b24]"
                  >
                    Talk to us

                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INDICATORS
        ======================================================= */}

        <div className="absolute bottom-7 left-0 right-0 z-20 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] items-center justify-center">
            <div className="flex items-center gap-3">
              {heroSlides.map((slide, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleIndicatorClick(index)}
                    aria-label={`Show ${slide.eyebrow}`}
                    aria-current={active ? "true" : undefined}
                    className="group flex items-center gap-2 py-2"
                  >
                    <span
                      className={`relative h-[2px] overflow-hidden transition-all duration-500 ${
                        active
                          ? "w-14 bg-white/30"
                          : "w-7 bg-white/20 group-hover:bg-white/40"
                      }`}
                    >
                      {active && (
                        <motion.span
                          key={`progress-${activeIndex}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 8,
                            ease: "linear",
                          }}
                          className="absolute inset-y-0 left-0 bg-[#27d59b]"
                        />
                      )}
                    </span>

                    <span
                      className={`hidden text-[8px] uppercase tracking-[0.14em] transition-colors duration-300 sm:block ${
                        active ? "text-white/75" : "text-white/25"
                      }`}
                    >
                      {slide.eyebrow}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}