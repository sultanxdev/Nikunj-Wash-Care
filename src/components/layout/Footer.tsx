'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, contact, social, services, colors } = clientData;

  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const mapUrl =
    (contact as { mapUrl?: string }).mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

  return (
    <footer
      className="relative w-full border-t overflow-hidden pt-16 sm:pt-20 pb-28 sm:pb-12"
      style={{
        backgroundColor: BG,
        borderColor: `${PRIMARY}15`,
        color: PRIMARY,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-14">
          
          {/* Brand Info (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl font-bold tracking-tight text-[#0F3D5E]">
                {brand.logoText}
              </span>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            </div>
            
            <p className="text-sm sm:text-base leading-relaxed max-w-sm text-zinc-600">
              {brand.tagline}. {clientData.hero.subheadline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {social.whatsapp && (
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 bg-[#0F3D5E]/10 text-[#0F3D5E] hover:bg-[#0F3D5E] hover:text-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 bg-[#0F3D5E]/10 text-[#0F3D5E] hover:bg-[#0F3D5E] hover:text-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 bg-[#0F3D5E]/10 text-[#0F3D5E] hover:bg-[#0F3D5E] hover:text-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation & Services: 2-column grid on mobile, separate on desktop (4 cols total) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Quick Navigation */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#0F3D5E]">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
                <li>
                  <Link href="#services" className="transition-colors hover:text-[#E05638]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="transition-colors hover:text-[#E05638]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="transition-colors hover:text-[#E05638]">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#faqs" className="transition-colors hover:text-[#E05638]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="transition-colors hover:text-[#E05638]">
                    Book a Repair
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#0F3D5E]">
                Services
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
                {services.slice(0, 5).map((srv) => (
                  <li key={srv.id}>
                    <Link href="#services" className="transition-colors hover:text-[#E05638]">
                      {srv.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Doorstep Service & Contact (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#0F3D5E]">
              Doorstep Service
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-[#0F3D5E]"
              >
                <MapPin className="size-4 mt-0.5 shrink-0 text-[#E05638]" />
                <span className="leading-snug group-hover:underline">{contact.address}</span>
              </a>
              
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-[#E05638]" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-medium text-[#0F3D5E] hover:underline">
                  {contact.phone}
                </a>
              </div>

              {contact.workingHours && (
                <div className="flex items-start gap-2.5">
                  <Clock className="size-4 mt-0.5 shrink-0 text-[#E05638]" />
                  <span>{contact.workingHours}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar - Clean copyright */}
        <div
          className="flex flex-col gap-2 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: `${PRIMARY}15`,
            color: `${PRIMARY}99`,
          }}
        >
          <p>© {currentYear} {brand.name}. All rights reserved.</p>
          <p>Reliable doorstep washing machine &amp; microwave repair service in Gurugram.</p>
        </div>

        {/* Premium Brand Wordmark: Clean, fully responsive & safe from sticky mobile bar */}
        <div className="select-none pt-4 pb-2" style={{ color: PRIMARY }}>
          <TextHoverEffect text={brand.logoText || "Nikunj Wash Care"} />
        </div>
      </div>
    </footer>
  );
}
