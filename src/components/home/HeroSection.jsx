"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/icons";

const heroSlides = [
  {
    id: 1,
    video: "/video/video-1.mp4",
    title: "Track what moves.",
    cta: "Explore Vehicle Telematics",
    href: "/products/vehicle-telematics",
  },
  {
    id: 2,
    video: "/video/video-2.mp4",
    title: "See what happens on the road.",
    cta: "Explore Video Telematics",
    href: "/products/video-telematics",
  },
  {
    id: 3,
    video: "/video/video-3.mp4",
    title: "Secure every shipment.",
    cta: "Explore Smart Logistics Locks",
    href: "/products/smart-logistics-locks",
  },
  {
    id: 4,
    video: "/video/video-4.mp4",
    title: "Secure critical infrastructure.",
    cta: "Explore Smart Infra Locks",
    href: "/products/smart-infra-locks",
  },
  {
    id: 5,
    video: "/video/video-5.mp4",
    title: "Know where assets are.",
    cta: "Explore Asset Trackers",
    href: "/products/asset-trackers",
  },
  {
    id: 6,
    video: "/video/video-6.mp4",
    title: "Sense what matters.",
    cta: "Explore IoT Sensors",
    href: "/products/iot-sensors",
  },
];

const contentTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef(new Map());
  const activeSlide = heroSlides[activeIndex];

  const tryPlay = useCallback((video) => {
    const target = video ?? videoRefs.current.get(activeIndex);
    if (!target) return;

    target.muted = true;
    target.defaultMuted = true;
    target.controls = false;
    target.playsInline = true;

    const playPromise = target.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [activeIndex]);

  useEffect(() => {
    let frame = 0;
    videoRefs.current.forEach((video, index) => {
      video.muted = true;
      video.defaultMuted = true;
      video.controls = false;
      video.playsInline = true;

      if (index === activeIndex) {
        try {
          video.currentTime = 0;
        } catch {}
        frame = window.requestAnimationFrame(() => tryPlay(video));
      } else {
        video.pause();
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex, tryPlay]);

  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [tryPlay]);

  const handleVideoEnded = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
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
              autoPlay={index === activeIndex}
              playsInline
              controls={false}
              preload={index === activeIndex ? "auto" : "metadata"}
              tabIndex={-1}
              onContextMenu={(event) => event.preventDefault()}
              onLoadedData={() => {
                if (index === activeIndex) tryPlay(videoRefs.current.get(index));
              }}
              onCanPlay={() => {
                if (index === activeIndex) tryPlay(videoRefs.current.get(index));
              }}
              onPause={() => {
                if (index !== activeIndex || document.hidden) return;
                window.setTimeout(() => {
                  const video = videoRefs.current.get(index);
                  if (video && video.paused && !video.ended) tryPlay(video);
                }, 120);
              }}
              onEnded={index === activeIndex ? handleVideoEnded : undefined}
              initial={false}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 1.035,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" },
              }}
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>

        {/* CINEMATIC OVERLAYS - SAME AS BEFORE */}
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/30" />
        <div className="pointer-events-none absolute inset-0 bg-[#081b24]/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#081b24]/85 via-[#081b24]/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#081b24]/55 to-transparent" />

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">
          <div className="mx-auto w-full max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={contentTransition}
                className="flex flex-col items-center"
              >
                <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,6vw,5.8rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)] sm:leading-[1.02] sm:tracking-[-0.05em]">
                  {activeSlide.title}
                </h1>

                <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-3.5">
                  <Link
                    href={activeSlide.href}
                    className="group relative inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 py-3 text-center text-[11px] font-bold uppercase leading-[1.45] tracking-[0.06em] text-[#081b24] shadow-[0_10px_28px_rgba(39,213,155,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.2)] sm:w-auto sm:max-w-none sm:px-6 sm:tracking-[0.08em]"
                  >
                    <span className="relative z-10 text-[#081b24] transition-colors duration-300 group-hover:text-[#081b24]">
                      {activeSlide.cta}
                    </span>
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#081b24]/10 bg-[#081b24]/10 transition-all duration-300 group-hover:border-[#081b24] group-hover:bg-[#081b24]">
                      <ArrowIcon className="h-3 w-3 text-[#081b24] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/[0.07] px-6 py-3 text-[11px] font-bold uppercase leading-[1.45] tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)] sm:w-auto"
                  >
                    <span className="text-white transition-colors duration-300 group-hover:text-[#081b24]">
                      Talk to us
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] transition-all duration-300 group-hover:border-[#081b24]/15 group-hover:bg-[#081b24]/10">
                      <ArrowIcon className="h-3 w-3 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#081b24]" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

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
