'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Phone, ShieldCheck, Clock, Star, Wrench, CheckCircle2 } from 'lucide-react';
import { clientData } from '@/config/clientData';

export default function Hero() {
  const reduce = useReducedMotion();
  const { brand, hero, colors } = clientData;
  const phone = clientData.contact?.phone || '+91 73577 64559';

  const PRIMARY = colors.primary;
  const BG = colors.background;

  const easeCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCubic } },
  };

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      style={{ backgroundColor: BG }}
    >
      {/* Subtle modern ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: PRIMARY }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#E05638' }}
      />

      {/* Aligned with Navbar & Bento Width: max-w-[1200px] */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ========================================================= */}
          {/* LEFT: Clean, High-Impact Value Proposition                */}
          {/* ========================================================= */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:col-span-7"
          >
            {/* Elegant Location Badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/95 px-3.5 py-1.5 text-xs font-medium text-zinc-800 shadow-2xs backdrop-blur-md">
                <span className="relative flex size-2">
                  {!reduce && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>Sector 85, Gurugram • Doorstep Service</span>
              </div>
            </motion.div>

            {/* Clear Headline */}
            <motion.h1
              variants={item}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-[#0F3D5E] leading-[1.12]"
            >
              Reliable Washing Machine &amp; Microwave Repair at Your Doorstep
            </motion.h1>

            {/* Crisp 2-line Subtitle */}
            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600 font-normal"
            >
              Fast diagnosis, genuine spare parts, and doorstep service for all major appliance brands across Sector 85 and Gurugram.
            </motion.p>

            {/* Two Action-Oriented Buttons */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary: Call Now */}
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0F3D5E] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0A2940] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                <Phone className="size-4.5" />
                <span>Call Now: +91 73577 64559</span>
              </a>

              {/* Secondary: WhatsApp for Service */}
              <a
                href={`https://wa.me/${clientData.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hi Nikunj Wash Care, I would like to book a doorstep repair service for my washing machine / microwave.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-black/[0.1] bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-zinc-800 shadow-2xs transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              {/* Quick Book Link */}
              <a
                href="#contact"
                className="text-sm font-semibold text-[#E05638] underline-offset-4 hover:underline py-2 sm:py-0"
              >
                Book a Repair →
              </a>
            </motion.div>

            {/* Clean Trust Proof Bar (Single row, zero clutter) */}
            <motion.div
              variants={item}
              className="mt-8 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-zinc-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <span className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="font-bold text-zinc-900">4.9 / 5.0</span>
                <span>(1,500+ Homes)</span>
              </div>
              
              <span className="text-zinc-300 hidden sm:inline">•</span>
              
              <div className="flex items-center gap-1.5 text-zinc-700">
                <ShieldCheck className="size-4 text-emerald-600" />
                <span>100% Genuine Parts</span>
              </div>

              <span className="text-zinc-300 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-zinc-700">
                <Clock className="size-4 text-sky-600" />
                <span>Same-Day Visits</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT: High-End Pristine Appliance Visual Showcase        */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCubic }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              
              {/* Premium Image Card */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(15,61,94,0.12)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-zinc-100">
                  <img
                    src="/hero-appliances.jpg"
                    alt="Nikunj Wash Care - Washing Machine and Microwave Specialists"
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge (Bottom Right): Clean Signature Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-3 sm:right-5 rounded-2xl bg-white px-5 sm:px-6 py-3.5 shadow-xl border border-black/[0.06] backdrop-blur-md">
                <p className="font-bold text-sm sm:text-base text-[#0F3D5E] leading-tight">
                  Nikunj Wash Care
                </p>
                <p className="text-xs text-zinc-500 mt-1 font-medium leading-tight">
                  Appliance Repair Specialists
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}