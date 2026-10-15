'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Star,
  Settings,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { clientData } from '@/config/clientData';

export default function Services() {
  const reduce = useReducedMotion();
  const whatsappNumber = clientData.contact.whatsappNumber;

  const createWhatsAppLink = (text: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <section id="services" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Aligned with Navbar Width: max-w-[1200px] */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0F3D5E] bg-[#0F3D5E]/10 mb-3.5">
            <span className="size-1.5 rounded-full bg-[#E05638]" />
            Doorstep Appliance Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-[1.15]">
            Complete care for your home appliances.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Fast diagnosis, genuine spare parts, and doorstep service for washing machines and microwaves across Gurugram.
          </p>
        </div>

        {/* Bento Grid: 7 Calm Pastel Cards aligned inside 1200px */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
          
          {/* ============================================================ */}
          {/* CARD 1: From fault diagnosis to doorstep repair (5 cols)     */}
          {/* ============================================================ */}
          <div className="sm:col-span-5 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F7ECFF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(123,53,240,0.06)] transition-all">
            {/* Top Micro-Graphic */}
            <div className="py-2 flex items-center justify-between min-h-[140px]">
              <div className="flex flex-col items-center">
                <div className="size-14 rounded-2xl bg-[#C49BFA]/40 flex items-center justify-center shadow-xs">
                  <Wrench className="size-7 text-[#7B35F0]" />
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-white/90 border border-purple-200/80 px-2 py-0.5 rounded-full mt-1.5 shadow-2xs">
                  #doorstep_diagnosis
                </span>
              </div>

              <div className="flex-1 ml-3 bg-white/95 rounded-xl p-3 border border-purple-100/90 shadow-2xs text-[11px] font-mono">
                <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100 text-zinc-900 font-semibold">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    200 Diagnosis OK
                  </span>
                  <span className="text-[10px] text-zinc-500 font-normal">On-Site</span>
                </div>
                <div className="pt-1.5 space-y-1 text-zinc-600 text-[10px]">
                  <div className="flex justify-between">
                    <span>appliance:</span>
                    <span className="text-purple-700 font-semibold truncate max-w-[85px]">Washing Machine</span>
                  </div>
                  <div className="flex justify-between">
                    <span>fault check:</span>
                    <span className="text-zinc-800">Drum &amp; Motor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold tracking-tight leading-snug">
                <span className="block text-[#7B35F0]">From fault diagnosis</span>
                <span className="block text-[#17172A]">to doorstep repair.</span>
              </h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed font-normal">
                Nikunj Wash Care troubleshoots drum vibration, drainage issues, motor noise, and heating faults directly at your doorstep.
              </p>
              <div className="mt-3 pt-2.5 border-t border-purple-200/60 flex items-center justify-between">
                <a
                  href={createWhatsAppLink('Hi Nikunj Wash Care, I need washing machine fault diagnosis and repair at my home.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7B35F0] inline-flex items-center gap-1 hover:underline"
                >
                  Book Diagnosis <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Retries / Fast Response without delay (7 cols)       */}
          {/* ============================================================ */}
          <div className="sm:col-span-7 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F0F9FF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.06)] transition-all">
            {/* Top Micro-Graphic (Chat Dialogue) */}
            <div className="py-2 flex flex-col gap-2 min-h-[140px] justify-center">
              <div className="flex items-center justify-end gap-1.5">
                <div className="rounded-xl rounded-tr-xs bg-sky-600 text-white px-3 py-1.5 text-xs font-medium shadow-2xs">
                  Issue: Washing machine spinning loudly / water leak
                </div>
                <span className="size-6 rounded-full bg-sky-200 text-sky-800 text-[10px] font-bold flex items-center justify-center shrink-0">
                  SOS
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-sky-100 flex items-center justify-center shrink-0 text-sky-700">
                  <Clock className="size-4" />
                </div>
                <div className="rounded-xl rounded-tl-xs bg-white/95 border border-sky-100 text-zinc-800 px-3 py-1.5 text-xs font-medium shadow-2xs">
                  Technician scheduled. Reaching Sector 85 hub in &lt; 45 mins.
                </div>
              </div>

              <div className="self-end bg-white/90 border border-sky-100 rounded-lg px-3 py-1 text-[11px] flex items-center gap-2 shadow-2xs mt-0.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-emerald-700">Confirmed: Doorstep Visit Today</span>
                <span className="text-zinc-300">•</span>
                <span className="text-zinc-500 font-mono">Sector 85, Gurugram</span>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold tracking-tight leading-snug">
                <span className="block text-sky-600">Same-day service</span>
                <span className="block text-[#17172A]">without waiting days.</span>
              </h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed font-normal">
                Doorstep technicians arrive with diagnostic gear and common replacement spares so your laundry routine never stalls.
              </p>
              <div className="mt-3 pt-2.5 border-t border-sky-200/60 flex items-center justify-between">
                <a
                  href={`tel:${clientData.contact.phone.replace(/\s/g, '')}`}
                  className="text-xs font-semibold text-sky-700 inline-flex items-center gap-1 hover:underline"
                >
                  Call for Same-Day Visit <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Works with every major brand (4 cols)                */}
          {/* ============================================================ */}
          <div className="sm:col-span-4 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#FFF5EB] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(234,88,12,0.06)] transition-all">
            <div className="py-2 flex items-center justify-center min-h-[130px]">
              <div className="relative size-28 flex items-center justify-center">
                <svg className="absolute inset-0 size-full text-orange-300" viewBox="0 0 112 112">
                  <line x1="56" y1="56" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="56" y1="56" x2="96" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="56" y1="56" x2="16" y2="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="56" y1="56" x2="96" y2="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                <div className="relative z-10 size-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs">
                  <Settings className="size-4" />
                </div>
                <span className="absolute top-0 left-0 bg-white border border-orange-100 rounded-full px-2 py-0.5 text-[9px] font-semibold text-zinc-700 shadow-2xs">
                  Samsung
                </span>
                <span className="absolute top-0 right-0 bg-white border border-orange-100 rounded-full px-2 py-0.5 text-[9px] font-semibold text-zinc-700 shadow-2xs">
                  LG
                </span>
                <span className="absolute bottom-0 left-0 bg-white border border-orange-100 rounded-full px-2 py-0.5 text-[9px] font-semibold text-zinc-700 shadow-2xs">
                  Whirlpool
                </span>
                <span className="absolute bottom-0 right-0 bg-white border border-orange-100 rounded-full px-2 py-0.5 text-[9px] font-semibold text-zinc-700 shadow-2xs">
                  Bosch &amp; IFB
                </span>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="text-base font-semibold tracking-tight leading-snug">
                <span className="block text-[#EA580C]">Works with</span>
                <span className="block text-[#17172A]">every major brand.</span>
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-normal">
                Front-load, top-load, semi-automatic washers, and solo, grill, or convection microwave models.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: Built with 100% genuine parts (4 cols)               */}
          {/* ============================================================ */}
          <div className="sm:col-span-4 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F0FDF4] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(22,163,74,0.06)] transition-all">
            <div className="py-2 flex flex-col justify-end min-h-[130px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-zinc-500 font-medium">Original Quality</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded-full">
                  100% Genuine
                </span>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div className="size-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-6" />
                </div>
                <div className="flex-1 flex items-end justify-between h-14 gap-1 px-1.5 bg-white/80 rounded-lg p-1.5 border border-emerald-100">
                  <div className="w-full bg-emerald-200 rounded-t h-[45%] text-[7px] text-center text-emerald-800">Pump</div>
                  <div className="w-full bg-emerald-300 rounded-t h-[65%] text-[7px] text-center text-emerald-800">Belt</div>
                  <div className="w-full bg-emerald-400 rounded-t h-[80%] text-[7px] text-center text-emerald-800">PCB</div>
                  <div className="w-full bg-emerald-500 rounded-t h-[90%] text-[7px] text-center text-white">Mag</div>
                  <div className="w-full bg-emerald-600 rounded-t h-[98%] text-[7px] text-center text-white">Motor</div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="text-base font-semibold tracking-tight leading-snug">
                <span className="block text-emerald-600">Built with</span>
                <span className="block text-[#17172A]">100% genuine parts.</span>
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-normal">
                Authentic replacement parts prevent recurring breakdowns and protect your appliance longevity.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: Microwave oven specialist (4 cols)                   */}
          {/* ============================================================ */}
          <div className="sm:col-span-4 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F5F0FF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.06)] transition-all">
            <div className="py-2 flex items-center justify-between min-h-[130px] gap-2">
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-1.5 bg-white/90 rounded-lg px-2 py-1 border border-purple-100 text-[10px] text-zinc-700 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-purple-500" />
                  <span>Heating &amp; Magnetron fix</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 rounded-lg px-2 py-1 border border-purple-100 text-[10px] text-zinc-700 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-indigo-500" />
                  <span>Sparking &amp; HV diode</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 rounded-lg px-2 py-1 border border-purple-100 text-[10px] text-zinc-700 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Touchpad &amp; Turntable</span>
                </div>
              </div>
              <div className="size-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Zap className="size-5" />
              </div>
            </div>

            <div className="mt-2">
              <h3 className="text-base font-semibold tracking-tight leading-snug">
                <span className="block text-[#7C3AED]">Microwave</span>
                <span className="block text-[#17172A]">repair specialist.</span>
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-normal">
                Safe fault diagnosis for microwave ovens not heating, sparking, or tripping the main electrical breaker.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 6: Inspect before repair. Transparent pricing. (7 cols) */}
          {/* ============================================================ */}
          <div className="sm:col-span-7 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F0F7FF] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.06)] transition-all">
            <div className="py-2 flex items-center justify-between min-h-[130px]">
              <div className="flex flex-col gap-1.5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 border border-sky-100 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-sky-500" />
                  <span>Step 1: On-site fault diagnosis</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 border border-sky-100 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-purple-500" />
                  <span>Step 2: Upfront quote before work</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 border border-sky-100 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Step 3: Genuine replacement &amp; test run</span>
                </div>
              </div>

              <div className="relative shrink-0 pr-3 hidden sm:block">
                <svg viewBox="0 0 120 60" className="w-28 h-14 text-sky-500">
                  <path
                    d="M10 35 C 40 35, 70 20, 100 22"
                    fill="none"
                    stroke="#BAE6FD"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <g transform="translate(80, 8)">
                    <path
                      d="M0 20 L30 4 L15 28 L9 21 Z"
                      fill="#0284C7"
                      stroke="#0369A1"
                      strokeWidth="1.2"
                    />
                    <path d="M9 21 L15 28 L17 18 Z" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold tracking-tight leading-snug">
                <span className="block text-sky-600">Inspect before you decide.</span>
                <span className="block text-[#17172A]">Transparent pricing.</span>
              </h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed font-normal">
                No surprise add-ons. You receive an honest inspection and clear upfront quote before any replacement work begins.
              </p>
              <div className="mt-3 pt-2.5 border-t border-sky-200/60 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-sky-700 inline-flex items-center gap-1 hover:underline"
                >
                  Schedule Doorstep Inspection <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 7: Guaranteed satisfaction with service warranty (5 col)*/}
          {/* ============================================================ */}
          <div className="sm:col-span-5 rounded-3xl border border-black/[0.06] p-5 flex flex-col justify-between bg-[#F7FEE7] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(77,124,15,0.06)] transition-all">
            <div className="py-2 flex flex-col justify-between min-h-[130px]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-lime-200 px-2.5 py-0.5 text-[11px] font-semibold text-lime-800 shadow-2xs self-start">
                <Star className="size-3.5 fill-lime-600 text-lime-600" />
                <span>Customer satisfaction</span>
              </div>

              <div className="bg-white/80 rounded-xl p-2.5 border border-lime-200/70 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-lime-900 font-medium mb-1">
                  <span>Service Rating</span>
                  <span className="font-bold text-lime-700">4.9 / 5.0 (1,500+ Reviews)</span>
                </div>
                <div className="w-full bg-lime-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-lime-600 h-1.5 rounded-full w-[96%]" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold tracking-tight leading-snug">
                <span className="block text-[#4D7C0F]">Guaranteed</span>
                <span className="block text-[#17172A]">satisfaction &amp; warranty.</span>
              </h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed font-normal">
                Replaced components are backed by service warranty and post-repair testing to guarantee complete peace of mind.
              </p>
              <div className="mt-3 pt-2.5 border-t border-lime-200/60 flex items-center justify-between">
                <a
                  href="#testimonials"
                  className="text-xs font-semibold text-lime-800 inline-flex items-center gap-1 hover:underline"
                >
                  Read Homeowner Reviews <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}