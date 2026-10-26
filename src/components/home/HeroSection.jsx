

"use client";



import Link from "next/link";

import { motion } from "framer-motion";

import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons";



const heroSlides = [

  { id: 1, video: "/video/video-1.mp4" },

  { id: 2, video: "/video/video-2.mp4" },

  { id: 3, video: "/video/video-3.mp4" },

  { id: 4, video: "/video/video-4.mp4" },

  { id: 5, video: "/video/video-5.mp4" },

  { id: 6, video: "/video/video-6.mp4" },

];



const TRANSITION_DURATION = 1.5;

const PRELOAD_BEFORE_END = 2;



export function HeroSection() {

  const [activeIndex, setActiveIndex] = useState(0);

  const [previousIndex, setPreviousIndex] = useState(null);



  const videoRefs = useRef(new Map());

  const activeIndexRef = useRef(0);

  const transitioningRef = useRef(false);

  const transitionTimeoutRef = useRef(null);

  const previousIndexRef = useRef(null);

  const mountedRef = useRef(false);



  const tryPlay = useCallback((video) => {

    if (!video) return;



    video.muted = true;

    video.defaultMuted = true;

    video.controls = false;

    video.playsInline = true;



    const playPromise = video.play();



    if (playPromise && typeof playPromise.catch === "function") {

      playPromise.catch(() => {});

    }

  }, []);



  const prepareVideo = useCallback((index) => {

    const video = videoRefs.current.get(index);



    if (!video) return;



    video.muted = true;

    video.defaultMuted = true;

    video.controls = false;

    video.playsInline = true;



    if (video.preload !== "auto") {

      video.preload = "auto";

    }



    if (video.networkState === HTMLMediaElement.NETWORK_EMPTY) {

      video.load();

    }

  }, []);



  const changeSlide = useCallback(() => {

    if (transitioningRef.current) return;



    const currentIndex = activeIndexRef.current;

    const nextIndex = (currentIndex + 1) % heroSlides.length;



    const currentVideo = videoRefs.current.get(currentIndex);

    const nextVideo = videoRefs.current.get(nextIndex);



    if (!nextVideo || nextVideo.readyState < 2) {

      prepareVideo(nextIndex);

      return;

    }



    transitioningRef.current = true;



    try {

      nextVideo.currentTime = 0;

    } catch {}
    // Start the next video before fading out the current one.
    tryPlay(nextVideo);



    previousIndexRef.current = currentIndex;

    activeIndexRef.current = nextIndex;



    setPreviousIndex(currentIndex);

    setActiveIndex(nextIndex);



    if (transitionTimeoutRef.current) {

      window.clearTimeout(transitionTimeoutRef.current);

    }



    transitionTimeoutRef.current = window.setTimeout(() => {

      currentVideo?.pause();



      setPreviousIndex(null);

      previousIndexRef.current = null;

      transitioningRef.current = false;



      const upcomingIndex =

        (activeIndexRef.current + 1) % heroSlides.length;



      prepareVideo(upcomingIndex);

    }, TRANSITION_DURATION * 1000);

  }, [prepareVideo, tryPlay]);



  useEffect(() => {

    mountedRef.current = true;



    const firstVideo = videoRefs.current.get(0);



    if (firstVideo) {

      tryPlay(firstVideo);

    }



    prepareVideo(1);



    return () => {

      mountedRef.current = false;



      if (transitionTimeoutRef.current) {

        window.clearTimeout(transitionTimeoutRef.current);

      }



      videoRefs.current.forEach((video) => {

        video.pause();

      });

    };

  }, [prepareVideo, tryPlay]);



  useEffect(() => {

    const handleVisibility = () => {

      if (document.hidden) return;



      const currentVideo = videoRefs.current.get(

        activeIndexRef.current

      );



      tryPlay(currentVideo);



      const outgoingIndex = previousIndexRef.current;



      if (outgoingIndex !== null) {

        tryPlay(videoRefs.current.get(outgoingIndex));

      }

    };



    document.addEventListener(

      "visibilitychange",

      handleVisibility

    );



    return () => {

      document.removeEventListener(

        "visibilitychange",

        handleVisibility

      );

    };

  }, [tryPlay]);



  const handleTimeUpdate = (index, video) => {

    if (index !== activeIndexRef.current) return;

    if (transitioningRef.current) return;



    const duration = video.duration;



    if (!Number.isFinite(duration) || duration <= 0) {

      return;

    }



    const remainingTime = duration - video.currentTime;
    // Preload the upcoming video ahead of the transition.
    if (remainingTime <= PRELOAD_BEFORE_END + 1) {

      prepareVideo((index + 1) % heroSlides.length);

    }
    // Crossfade before the current video ends.
    if (remainingTime <= PRELOAD_BEFORE_END) {

      changeSlide();

    }

  };



  const handleVideoEnded = (index) => {

    if (index !== activeIndexRef.current) return;

    if (transitioningRef.current) return;



    changeSlide();

  };



  return (

    <section className="relative overflow-hidden bg-[#081b24] text-white">

      <div className="relative h-[90vh] min-h-[560px] max-h-[760px] w-full">



        {/* VIDEO BACKGROUND LAYER */}

        <div className="absolute inset-0 overflow-hidden">

          {heroSlides.map((slide, index) => {

            const isActive = index === activeIndex;

            const isPrevious = index === previousIndex;



            return (

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

                autoPlay={index === 0}

                playsInline

                controls={false}

                loop={false}

                preload={

                  index === 0 || index === 1

                    ? "auto"

                    : "metadata"

                }

                tabIndex={-1}

                disablePictureInPicture

                onContextMenu={(event) =>

                  event.preventDefault()

                }

                onLoadedData={(event) => {

                  if (

                    index === activeIndexRef.current &&

                    !event.currentTarget.ended

                  ) {

                    tryPlay(event.currentTarget);

                  }

                }}

                onCanPlay={(event) => {

                  if (

                    index === activeIndexRef.current &&

                    event.currentTarget.paused &&

                    !event.currentTarget.ended

                  ) {

                    tryPlay(event.currentTarget);

                  }

                }}

                onTimeUpdate={(event) =>

                  handleTimeUpdate(

                    index,

                    event.currentTarget

                  )

                }

                onEnded={() => handleVideoEnded(index)}

                initial={false}

                animate={{

                  opacity: isActive ? 1 : 0,

                  scale: isActive ? 1 : 1.035,

                }}

                transition={{

                  opacity: {

                    duration: TRANSITION_DURATION,

                    ease: "easeInOut",

                  },

                  scale: {

                    duration: 6,

                    ease: "linear",

                  },

                }}

                style={{

                  zIndex: isActive

                    ? 2

                    : isPrevious

                      ? 1

                      : 0,

                  willChange: "opacity, transform",

                }}

                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"

                aria-hidden={!isActive}

              />

            );

          })}

        </div>



        {/* CINEMATIC OVERLAYS - UNCHANGED */}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-[#081b24]/30" />



        <div className="pointer-events-none absolute inset-0 z-[3] bg-[#081b24]/20" />



        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-52 bg-gradient-to-t from-[#081b24]/85 via-[#081b24]/30 to-transparent" />



        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-36 bg-gradient-to-b from-[#081b24]/55 to-transparent" />



        {/* CENTER CONTENT */}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">



          <div className="mx-auto w-full max-w-5xl text-center">



            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.85,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="flex flex-col items-center"

            >



              {/* HEADLINE */}

              <h1 className="max-w-5xl text-balance font-heading text-[36px] font-semibold leading-[0.92] tracking-[-2px] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)] sm:text-[52px] sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4.5px]">

                Connected Intelligence for Vehicles, Assets &amp; Operations

              </h1>



              {/* SUBLINE */}

              <p className="mt-5 max-w-[700px] text-balance font-sans text-[16px] font-normal leading-[28px] text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] sm:mt-6 lg:text-[18px]">

                Integrated IoT hardware, smart telematics and

                cloud-based monitoring solutions for businesses.

              </p>



              {/* CTA BUTTONS */}

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-3.5">



                {/* EXPLORE SOLUTIONS */}

                <Link

                  href="/products"

                  className="group relative inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 py-3 text-center font-sans text-[14px] font-semibold leading-[18px] tracking-normal text-[#081b24] shadow-[0_10px_28px_rgba(39,213,155,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.2)] sm:w-auto sm:max-w-none sm:px-6"

                >

                  <span className="relative z-10 text-[#081b24] transition-colors duration-300 group-hover:text-[#081b24]">

                    Explore Solutions

                  </span>



                  <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#081b24]/10 bg-[#081b24]/10 transition-all duration-300 group-hover:border-[#081b24] group-hover:bg-[#081b24]">

                    <ArrowIcon className="h-3 w-3 text-[#081b24] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />

                  </span>

                </Link>



                {/* REQUEST A DEMO */}

                <Link

                  href="/contact"

                  className="group inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/[0.07] px-6 py-3 font-sans text-[14px] font-semibold leading-[18px] tracking-normal text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#081b24] hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)] sm:w-auto"

                >

                  <span className="text-white transition-colors duration-300 group-hover:text-[#081b24]">

                    Request a Demo

                  </span>



                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] transition-all duration-300 group-hover:border-[#081b24]/15 group-hover:bg-[#081b24]/10">

                    <ArrowIcon className="h-3 w-3 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#081b24]" />

                  </span>

                </Link>



              </div>



            </motion.div>

          </div>

        </div>

      </div>



      {/* HIDE NATIVE VIDEO CONTROLS */}

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
