"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/icons";
import Image from "next/image";

export function CtaBand() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-24 px-6 lg:px-12 border-t border-slate-200/80">
      <div className="mx-auto max-w-5xl bg-[#081b24] text-white rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-visible shadow-[0_20px_50px_rgba(8,27,36,0.25)] border border-emerald-500/20">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT SIDE: Floating 3D Truck Graphic & Clean Text */}
          <div className="lg:col-span-5 space-y-4 pt-10 lg:pt-0">
            
            {/* Truck Container with Overlapping 3D Image */}
            <div className="relative w-full h-32 sm:h-36 group overflow-visible">
              
              {/* Floating Truck Image (Half inside, half outside on top) */}
              <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-60 sm:w-72 h-44 sm:h-52 transition-transform duration-500 group-hover:scale-105 z-20">
                <Image
                  src="/image/truck-pn.png"
                  alt="VIoT Smart Fleet Truck"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_30px_rgba(16,185,129,0.35)]"
                />
              </div>

              {/* Telemetry Badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[10px] font-mono text-emerald-400 shadow-sm">
                ● Live Hardware Telemetry
              </div>
            </div>

            <div className="space-y-2 text-center lg:text-left pt-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                Get Started
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Track what moves. <span className="text-emerald-400">Secure what matters.</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
                Talk directly with the engineers behind the hardware for your fleet or facility tender.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Compact, Sleek Conversion Form (Matching Dark Ecosystem Tone) */}
          <div className="lg:col-span-7 bg-slate-950/90 text-white border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Request Received</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto font-sans">
                  Our engineering team will connect with you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="border-b border-slate-800 pb-2.5 mb-1">
                  <h3 className="text-sm font-bold text-white tracking-tight">Request a Free Demo</h3>
                  <p className="text-[11px] text-slate-400 font-sans">Enter your details to get started instantly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="rajesh@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Looking For</label>
                    <select 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    >
                      <option>Fleet Intelligence</option>
                      <option>Asset Intelligence</option>
                      <option>Access Control</option>
                      <option>Platform Demo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-xs font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] shadow-sm"
                >
                  Send inquiry
                  <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0" />
                </button>

                <p className="text-[10px] text-slate-400 text-center font-mono pt-1">
                  Direct email: <span className="text-emerald-400 font-semibold">team@viot.in</span>
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}