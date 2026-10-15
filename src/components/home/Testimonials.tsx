'use client';

import React from 'react';
import { motion, useReducedMotion, type Easing } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { clientData } from '@/config/clientData';

const EASE: Easing = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const reduce = useReducedMotion();
  const items = clientData.testimonials;
  const average = items.length
    ? items.reduce((sum, t) => sum + t.rating, 0) / items.length
    : 5;

  const PRIMARY = clientData.colors.primary;
  const ACCENT = clientData.colors.accent;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: PRIMARY }}
    >
      {/* Decorative ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: '#2B6B94' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 bottom-0 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-14 sm:mb-18 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 border border-white/15 mb-4 shadow-2xs backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Customer Reviews
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              What our customers say
            </h2>

            {/* Rating Summary Bar */}
            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-white/90 backdrop-blur-md">
              <span className="flex text-amber-400" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <p className="text-xs sm:text-sm font-medium">
                <span className="font-bold text-white">{average.toFixed(1)}</span> out of 5 across verified Google reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* Responsive Grid: 3 Clean Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: reduce ? 0 : index * 0.1, ease: EASE }}
              className="relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.25)]"
            >
              <div>
                {/* Top Row: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {testimonial.source && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                      <svg className="size-3.5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span>Google</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 font-normal">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl text-sm font-bold bg-[#0F3D5E]/10 text-[#0F3D5E] shadow-2xs">
                    {testimonial.name.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-[#0F3D5E] leading-tight">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                      <p className="text-xs text-zinc-500 font-medium leading-tight">
                        {(testimonial as { role?: string }).role || 'Verified Homeowner'}
                        {(testimonial as { location?: string }).location && ` • ${(testimonial as { location?: string }).location}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}