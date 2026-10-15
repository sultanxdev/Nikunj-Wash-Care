'use client';

import React from 'react';
import { motion, useReducedMotion, type Easing } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { clientData } from '@/config/clientData';

const EASE: Easing = [0.22, 1, 0.36, 1];

export default function AboutDoctor() {
  const reduce = useReducedMotion();
  const { colors, aboutDoctor, contact } = clientData;
  const { heading, credentials, bioParagraphs, ctaText, imageUrl, name, role, highlights } =
    aboutDoctor;

  const PRIMARY = colors.primary;
  const ACCENT = colors.accent;
  const BG = colors.background;

  const credentialList = Array.isArray(credentials) ? credentials : [];
  const [lead, ...rest] = bioParagraphs;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' as const },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: BG }}
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-[32rem] w-[32rem] -translate-x-1/3 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ backgroundColor: PRIMARY }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* ========================================================= */}
          {/* LEFT: Premium Visual Showcase                             */}
          {/* ========================================================= */}
          <motion.div
            {...reveal()}
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div className="relative mx-auto max-w-[420px] lg:ml-0 lg:mr-auto">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:rounded-[32px] border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(15,61,94,0.12)]">
                <img
                  src={imageUrl || '/washing-machine-poster.jpg'}
                  alt={name ? `${name} - Appliance Repair Specialist` : 'Nikunj Wash Care Technician'}
                  className="size-full rounded-[20px] sm:rounded-[24px] object-cover object-center"
                />
              </div>

              {/* Top Tag: Technician On-Site */}
              <div className="absolute -top-3 -left-2 sm:-left-3 rounded-full bg-white/95 px-3.5 py-1.5 shadow-md border border-black/[0.06] backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-[#0F3D5E]">
                <ShieldCheck className="size-4 text-emerald-600" />
                <span>Verified Doorstep Service</span>
              </div>

              {/* Floating Badge (Bottom Right) */}
              {(name || role) && (
                <div className="absolute -bottom-4 right-2 sm:right-4 rounded-2xl bg-white px-5 py-3.5 shadow-xl border border-black/[0.08] backdrop-blur-md">
                  {name && (
                    <p className="font-bold text-sm sm:text-base text-[#0F3D5E] leading-tight">
                      {name}
                    </p>
                  )}
                  {role && (
                    <p className="text-xs text-zinc-500 mt-1 font-medium leading-tight">
                      {role}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT: Clean, Balanced Story & Capabilities               */}
          {/* ========================================================= */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* Tag Badge */}
            <motion.div {...reveal(0.04)}>
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#0F3D5E]/10 text-[#0F3D5E]">
                <span className="size-1.5 rounded-full bg-[#E05638]" />
                About Our Service
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              {...reveal(0.08)}
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F3D5E] leading-[1.18]"
            >
              {heading}
            </motion.h2>

            {/* Credential Pills */}
            {credentialList.length > 0 && (
              <motion.div {...reveal(0.12)} className="mt-4 flex flex-wrap gap-2">
                {credentialList.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-black/[0.08] px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-2xs"
                  >
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    <span>{c}</span>
                  </span>
                ))}
              </motion.div>
            )}

            {/* Story Paragraphs */}
            <motion.div {...reveal(0.16)} className="mt-6 space-y-3.5">
              {lead && (
                <p className="text-base sm:text-[17px] font-medium leading-relaxed text-zinc-800">
                  {lead}
                </p>
              )}
              {rest.map((p, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Metric Highlights Strip */}
            {highlights && highlights.length > 0 && (
              <motion.div
                {...reveal(0.2)}
                className="mt-7 grid grid-cols-3 gap-2 sm:gap-4 rounded-2xl bg-white border border-black/[0.07] p-3.5 sm:p-5 shadow-2xs"
              >
                {highlights.slice(0, 3).map((h, i) => (
                  <div
                    key={h.label}
                    className={`text-center ${
                      i !== 0 ? 'border-l border-zinc-200/80 pl-2 sm:pl-4' : ''
                    }`}
                  >
                    <div className="text-lg sm:text-2xl font-bold text-[#E05638] tracking-tight">
                      {h.value}
                    </div>
                    <div className="mt-0.5 text-[11px] sm:text-xs font-medium text-zinc-500">
                      {h.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Actions: Book a Repair + Call Directly */}
            <motion.div
              {...reveal(0.24)}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F3D5E] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0A2940] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 text-center"
              >
                <span>{ctaText || 'Book a Repair'}</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.1] bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-zinc-800 shadow-2xs transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="size-4 text-[#0F3D5E]" />
                <span>Call {contact.phone}</span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}