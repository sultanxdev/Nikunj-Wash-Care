'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Star,
  Settings,
  Flame,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';
import { clientData } from '@/config/clientData';

export default function Services() {
  const reduce = useReducedMotion();
  const whatsappNumber = clientData.contact.whatsappNumber;

  const createWhatsAppLink = (text: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-white">
      {/* Aligned with Navbar Width: max-w-[1240px] */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#0F3D5E] bg-[#0F3D5E]/10 mb-4 shadow-2xs">
            <span className="size-2 rounded-full bg-[#E05638]" />
            Doorstep Appliance Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F3D5E] leading-[1.12]">
            Complete care for your home appliances.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Fast diagnosis, genuine spare parts, and doorstep service for washing machines and microwaves across Gurugram.
          </p>
        </div>

        {/* Bento Grid: Generous, Full-Sized Cards (Responsive across mobile, tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* ============================================================ */}
          {/* CARD 1: From fault diagnosis to doorstep repair (5 cols)     */}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[28px] sm:rounded-[32px] border border-[#0F3D5E]/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#F0F6FA] shadow-[0_4px_20px_rgba(15,61,94,0.04)] hover:shadow-[0_12px_32px_rgba(15,61,94,0.08)] transition-all">
            {/* Top Graphic: Appliance Diagnostic Report Card */}
            <div className="py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[160px] gap-4">
              <div className="flex sm:flex-col items-center gap-3 sm:gap-2 shrink-0">
                <div className="size-16 sm:size-18 rounded-2xl bg-[#0F3D5E]/10 flex items-center justify-center shadow-xs">
                  <Wrench className="size-8 text-[#0F3D5E]" />
                </div>
                <span className="text-xs font-semibold text-[#0F3D5E] bg-white border border-[#0F3D5E]/15 px-3 py-1 rounded-full shadow-2xs">
                  Doorstep Check
                </span>
              </div>

              <div className="w-full sm:flex-1 bg-white rounded-2xl p-4 sm:p-4.5 border border-[#0F3D5E]/10 shadow-2xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-100 font-semibold text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-emerald-700">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Diagnosis Verified
                  </span>
                  <span className="text-xs text-zinc-500 font-normal">On-Site</span>
                </div>
                <div className="pt-2.5 space-y-2 text-xs sm:text-[13px] text-zinc-600">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Appliance:</span>
                    <span className="text-[#0F3D5E] font-semibold">Washing Machine</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Inspection:</span>
                    <span className="text-zinc-800 font-medium">Drum, Motor &amp; Pump</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Visit Status:</span>
                    <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">Ready for Repair</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="mt-5 sm:mt-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                <span className="block text-[#0F3D5E]">From fault diagnosis</span>
                <span className="block text-zinc-900">to doorstep repair.</span>
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                Nikunj Wash Care troubleshoots drum vibration, drainage issues, motor noise, and heating faults directly at your doorstep.
              </p>
              <div className="mt-4 pt-3.5 border-t border-[#0F3D5E]/10 flex items-center justify-between">
                <a
                  href={createWhatsAppLink('Hi Nikunj Wash Care, I need washing machine fault diagnosis and repair at my home.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0F3D5E] inline-flex items-center gap-1.5 hover:underline"
                >
                  Book Diagnosis <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Same-day service without waiting days (7 cols)       */}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[28px] sm:rounded-[32px] border border-sky-600/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#F4F9FD] shadow-[0_4px_20px_rgba(2,132,199,0.04)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.08)] transition-all">
            {/* Top Graphic: Fast Response & Dispatch Tracker */}
            <div className="py-2 flex flex-col gap-3 min-h-[160px] justify-center">
              <div className="flex items-center justify-end gap-2.5">
                <div className="rounded-2xl rounded-tr-xs bg-[#0F3D5E] text-white px-4 py-2 text-xs sm:text-sm font-medium shadow-2xs max-w-[90%] sm:max-w-none">
                  Issue: Washing machine spinning loudly / water leak
                </div>
                <span className="size-8 rounded-full bg-[#E05638] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs">
                  SOS
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0 text-sky-700">
                  <Clock className="size-4.5" />
                </div>
                <div className="rounded-2xl rounded-tl-xs bg-white border border-sky-100 text-zinc-800 px-4 py-2 text-xs sm:text-sm font-medium shadow-2xs">
                  Technician scheduled. Reaching Sector 85 hub in &lt; 45 mins.
                </div>
              </div>

              <div className="self-start sm:self-end bg-white border border-sky-100 rounded-xl px-3.5 py-1.5 text-xs sm:text-[13px] flex items-center gap-2.5 shadow-2xs mt-1">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-emerald-700">Confirmed: Doorstep Visit Today</span>
                <span className="text-zinc-300">•</span>
                <span className="text-zinc-600 font-medium">Sector 85, Gurugram</span>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="mt-5 sm:mt-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                <span className="block text-sky-700">Same-day service</span>
                <span className="block text-zinc-900">without waiting days.</span>
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                Doorstep technicians arrive with diagnostic gear and common replacement spares so your laundry routine never stalls.
              </p>
              <div className="mt-4 pt-3.5 border-t border-sky-200/60 flex items-center justify-between">
                <a
                  href={`tel:${clientData.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm font-semibold text-sky-700 inline-flex items-center gap-1.5 hover:underline"
                >
                  Call for Same-Day Visit <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Works with every major brand (4 cols)                */}
          {/* ============================================================ */}
          <div className="md:col-span-6 lg:col-span-4 rounded-[28px] sm:rounded-[32px] border border-black/[0.07] p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#FAFAF9] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(15,61,94,0.06)] transition-all">
            <div className="py-2 min-h-[160px] flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-2.5">
                {['Samsung', 'LG', 'Whirlpool', 'Bosch', 'IFB', 'Godrej'].map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-white border border-zinc-200/80 px-3 py-2 text-xs sm:text-sm font-semibold text-zinc-800 shadow-2xs hover:border-[#0F3D5E]/30 transition-colors"
                  >
                    <Settings className="size-3.5 text-[#0F3D5E]" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
                <span className="block text-[#0F3D5E]">Works with</span>
                <span className="block text-zinc-900">every major brand.</span>
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
                Front-load, top-load, semi-automatic washers, and solo, grill, or convection microwave models.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: Built with 100% genuine parts (4 cols)               */}
          {/* ============================================================ */}
          <div className="md:col-span-6 lg:col-span-4 rounded-[28px] sm:rounded-[32px] border border-emerald-600/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#F0FDF4] shadow-[0_4px_20px_rgba(22,163,74,0.03)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.08)] transition-all">
            <div className="py-2 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-200 px-3 py-1 rounded-full shadow-2xs">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span>100% Genuine</span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-md">OEM Certified</span>
              </div>

              {/* Genuine Spares Checklist */}
              <div className="bg-white rounded-2xl p-3.5 border border-emerald-100 shadow-2xs space-y-2 text-xs sm:text-[13px] text-zinc-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Drain Pumps, Belts &amp; Valves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Inverter PCBs &amp; Drive Motors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Magnetrons &amp; Capacitors</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
                <span className="block text-emerald-700">Built with</span>
                <span className="block text-zinc-900">100% genuine parts.</span>
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
                Authentic replacement parts prevent recurring breakdowns and protect your appliance longevity.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: Microwave oven specialist (4 cols)                   */}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-4 rounded-[28px] sm:rounded-[32px] border border-[#E05638]/15 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#FFF7ED] shadow-[0_4px_20px_rgba(224,86,56,0.03)] hover:shadow-[0_12px_32px_rgba(224,86,56,0.08)] transition-all">
            <div className="py-2 flex items-center justify-between min-h-[160px] gap-3">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 border border-orange-100 text-xs sm:text-[13px] text-zinc-800 shadow-2xs font-medium">
                  <span className="size-2 rounded-full bg-[#E05638]" />
                  <span>Heating &amp; Magnetron fix</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 border border-orange-100 text-xs sm:text-[13px] text-zinc-800 shadow-2xs font-medium">
                  <span className="size-2 rounded-full bg-amber-500" />
                  <span>Sparking &amp; HV diode</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 border border-orange-100 text-xs sm:text-[13px] text-zinc-800 shadow-2xs font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span>Touchpad &amp; Turntable</span>
                </div>
              </div>
              <div className="size-14 rounded-2xl bg-[#E05638] text-white flex items-center justify-center shadow-md shrink-0">
                <Zap className="size-7" />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
                <span className="block text-[#E05638]">Microwave</span>
                <span className="block text-zinc-900">repair specialist.</span>
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
                Safe fault diagnosis for microwave ovens not heating, sparking, or tripping the main electrical breaker.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 6: Inspect before you decide. Transparent pricing (7 col)*/}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-7 rounded-[28px] sm:rounded-[32px] border border-[#0F3D5E]/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#F8FAFC] shadow-[0_4px_20px_rgba(15,61,94,0.03)] hover:shadow-[0_12px_32px_rgba(15,61,94,0.08)] transition-all">
            <div className="py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[160px] gap-4">
              <div className="flex flex-col gap-2.5 flex-1 w-full">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-800 border border-slate-200/80 shadow-2xs">
                  <span className="size-5 rounded-full bg-[#0F3D5E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>Step 1: On-site fault diagnosis</span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-800 border border-slate-200/80 shadow-2xs">
                  <span className="size-5 rounded-full bg-[#E05638] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>Step 2: Upfront quote before work</span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-800 border border-slate-200/80 shadow-2xs">
                  <span className="size-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>Step 3: Genuine replacement &amp; test run</span>
                </div>
              </div>

              {/* Verified Pricing Seal */}
              <div className="hidden sm:flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center shrink-0">
                <Sparkles className="size-6 text-[#0F3D5E] mb-1.5" />
                <span className="text-xs font-bold text-[#0F3D5E]">Honest Rates</span>
                <span className="text-[10px] text-zinc-500 mt-0.5">Zero Hidden Charges</span>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                <span className="block text-[#0F3D5E]">Inspect before you decide.</span>
                <span className="block text-zinc-900">Transparent pricing.</span>
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                No surprise add-ons. You receive an honest inspection and clear upfront quote before any replacement work begins.
              </p>
              <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-[#0F3D5E] inline-flex items-center gap-1.5 hover:underline"
                >
                  Schedule Doorstep Inspection <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 7: Guaranteed satisfaction & warranty (5 cols)          */}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[28px] sm:rounded-[32px] border border-amber-200/80 p-6 sm:p-7 lg:p-8 flex flex-col justify-between bg-[#FFFBEB] shadow-[0_4px_20px_rgba(245,158,11,0.04)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.08)] transition-all">
            <div className="py-2 flex flex-col justify-between min-h-[160px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 shadow-2xs self-start">
                <Star className="size-4 fill-amber-500 text-amber-500" />
                <span>Customer satisfaction</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-amber-200/70 shadow-2xs">
                <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-900 font-medium mb-2">
                  <span className="text-zinc-600">Service Rating</span>
                  <span className="font-bold text-amber-800">4.9 / 5.0 (1,500+ Reviews)</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-500 h-2.5 rounded-full w-[98%]" />
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                <span className="block text-amber-800">Guaranteed</span>
                <span className="block text-zinc-900">satisfaction &amp; warranty.</span>
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                Replaced components are backed by service warranty and post-repair testing to guarantee complete peace of mind.
              </p>
              <div className="mt-4 pt-3.5 border-t border-amber-200/80 flex items-center justify-between">
                <a
                  href="#testimonials"
                  className="text-sm font-semibold text-amber-900 inline-flex items-center gap-1.5 hover:underline"
                >
                  Read Homeowner Reviews <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}