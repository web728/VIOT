"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons";

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

  /*
   * Intentionally using Map without explicit DOM/React type aliases.
   * TSX infers the callback element correctly, while this avoids the
   * HTMLVideoElement / ElementRef typing issue from the previous version.
   */
  const videoRefs = useRef(new Map());

  const activeSlide = heroSlides[activeIndex];

  const tryPlay = (video = videoRefs.current.get(activeIndex)) => {
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.controls = false;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.controls = false;
      video.playsInline = true;

      if (index === activeIndex) {
        try {
          video.currentTime = 0;
        } catch {}

        window.requestAnimationFrame(() => {
          tryPlay(video);
        });
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) {
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [activeIndex]);

  const handleVideoLoaded = (index = 0) => {
    if (index === activeIndex) {
      tryPlay(videoRefs.current.get(index));
    }
  };

  const handleVideoCanPlay = (index = 0) => {
    if (index === activeIndex) {
      tryPlay(videoRefs.current.get(index));
    }
  };

  const handleUnexpectedPause = (index = 0) => {
    if (index !== activeIndex || document.hidden) return;

    const video = videoRefs.current.get(index);

    window.setTimeout(() => {
      if (video && video.paused && !video.ended) {
        tryPlay(video);
      }
    }, 120);
  };

  const handleVideoEnded = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  const handleIndicatorClick = (index = 0) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#081b24] text-white">
      <div className="relative h-[90vh] min-h-[560px] max-h-[760px] w-full">
        {/* VIDEO LAYER */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.video
              key={slide.id}
              ref={(element) => {
                if (element) {
                  videoRefs.current.set(index, element);

                  element.muted = true;
                  element.defaultMuted = true;
                  element.controls = false;
                  element.playsInline = true;
                } else {
                  videoRefs.current.delete(index);
                }
              }}
              src={slide.video}
              muted
              autoPlay
              playsInline
              controls={false}
              preload="auto"
              tabIndex={-1}
              onContextMenu={(event) => event.preventDefault()}
              onLoadedData={() => handleVideoLoaded(index)}
              onCanPlay={() => handleVideoCanPlay(index)}
              onPause={() => handleUnexpectedPause(index)}
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
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>

        {/* CINEMATIC OVERLAYS */}
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/30" />
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#081b24]/85 via-[#081b24]/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#081b24]/55 to-transparent" />

        {/* CENTER CONTENT */}
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
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    {activeSlide.eyebrow}
                  </span>

                  <span className="h-px w-8 bg-[#27d59b]" />
                </div>

                <h1 className="max-w-4xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)]">
                  {activeSlide.title}
                </h1>

                <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {activeSlide.description}
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                  <Link
                    href={activeSlide.href}
                    className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-lg border border-[#27d59b] bg-[#27d59b] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#081b24] shadow-[0_10px_28px_rgba(39,213,155,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.2)]"
                  >
                    <span className="relative z-10 text-[#081b24] transition-colors duration-300 group-hover:text-[#081b24]">
                      {activeSlide.cta}
                    </span>

                    <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-md border border-[#081b24]/10 bg-[#081b24]/10 transition-all duration-300 group-hover:border-[#081b24] group-hover:bg-[#081b24]">
                      <ArrowIcon className="h-3 w-3 text-[#081b24] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-3 rounded-lg border border-white/25 bg-white/[0.07] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                  >
                    <span className="text-white transition-colors duration-300 group-hover:text-[#081b24]">
                      Talk to us
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] transition-all duration-300 group-hover:border-[#081b24]/15 group-hover:bg-[#081b24]/10">
                      <ArrowIcon className="h-3 w-3 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#081b24]" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM INDICATORS */}
        <div className="absolute bottom-7 left-0 right-0 z-20 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] items-center justify-center">
            <div className="flex items-center gap-3">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleIndicatorClick(index)}
                    aria-label={`Show ${slide.eyebrow}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center gap-2 py-2"
                  >
                    <span
                      className={`relative h-[2px] overflow-hidden transition-all duration-500 ${
                        isActive
                          ? "w-14 bg-white/30"
                          : "w-7 bg-white/20 group-hover:bg-white/40"
                      }`}
                    >
                      {isActive && (
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
                        isActive ? "text-white/75" : "text-white/25"
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

      {/* Hide native mobile video UI / play overlay */}
      <style>{`
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none !important;
        }
      `}</style>
    </section>
  );
}
