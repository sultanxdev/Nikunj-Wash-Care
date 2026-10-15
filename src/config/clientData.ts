// ============================================================
//  CENTRALIZED CLIENT CONFIGURATION - NIKUNJ WASH CARE
//  ─────────────────────────────────────────────────────────
//  Single source of truth for all business details, services,
//  contact numbers, addresses, and content.
// ============================================================

export const clientData = {

  // ── 0. SEO & SEARCH INTEGRATION ────────────────────────────
  seo: {
    siteUrl: "https://nikunjwashcare.com",
    titleTemplate: "%s | Nikunj Wash Care - Washing Machine & Microwave Repair Gurugram",
    metaDescription:
      "Looking for washing machine or microwave repair in Gurugram? Contact Nikunj Wash Care for reliable doorstep repair assistance. Call +91 73577 64559.",
    keywords:
      "Nikunj Wash Care, washing machine repair Gurugram, microwave repair Gurugram, appliance repair Sector 85, doorstep washing machine repair, microwave oven repair, appliance technician Gurugram, same day appliance repair",
    ogImage: "/og-image.png",
    googleSiteVerification: "",
    googleAnalyticsId: "",
    locale: "en_IN",
    region: "IN",
    twitterHandle: "",
  },

  // ── 1. DEMO / STATUS FLAGS ─────────────────────────────────
  demo: {
    isDemo: false,
    bannerText: "⚡ Reliable Washing Machine & Microwave Repair at Your Doorstep",
    bannerSubText: "Fast doorstep service across Sector 85 & Gurugram | Call +91 73577 64559",
  },

  // ── 2. BRAND & BUSINESS INFORMATION ────────────────────────
  brand: {
    name: "Nikunj Wash Care",
    category: "Appliance repair service",
    primaryServices: ["Washing machine repair", "Microwave repair"],
    tagline: "Your Appliances, Our Responsibility",
    alternativeTagline: "Your Appliance, Our Care",
    headline: "Reliable Washing Machine & Microwave Repair at Your Doorstep",
    shortDescription:
      "Looking for washing machine or microwave repair in Gurugram? Contact Nikunj Wash Care for appliance repair assistance and doorstep service.",
    logoText: "Nikunj Wash Care",
    builtBy: "Sultandev",
  },

  // ── 3. SERVICE CAPABILITIES & PROFILE ───────────────────────
  aboutDoctor: {
    heading: "Expert Appliance Repair at Your Doorstep",
    name: "Nikunj Wash Care",
    role: "Appliance Repair Specialists",
    credentials: [
      "Doorstep Service",
      "Washing Machine & Microwave",
      "All Major Brands",
      "Sector 85, Gurugram",
    ],
    bioParagraphs: [
      "Looking for washing machine or microwave repair in Gurugram? Contact Nikunj Wash Care for expert appliance repair assistance and convenient doorstep service.",
      "Our experienced technicians provide fast fault diagnosis, reliable repair solutions, and genuine spare parts across Sector 85 and neighboring sectors in Gurugram.",
      "Your Appliances, Our Responsibility — we prioritize customer satisfaction, same-day visits, and transparent pricing so your home essentials run without disruption."
    ],
    highlights: [
      { value: "Doorstep", label: "Home Service" },
      { value: "All-Brand", label: "Expert Repairs" },
      { value: "Genuine", label: "Spare Parts" },
    ],
    ctaText: "Book a Repair",
    imageUrl: "/washing-machine-poster.jpg",
  },

  // ── 4. CONTACT & LOCATION DETAILS ──────────────────────────
  contact: {
    phone: "+91 73577 64559",
    displayPhone: "+91 73577 64559",
    email: "contact@nikunjwashcare.com",
    shopNumber: "684",
    street: "Rao Jaimal Marg",
    locality: "Sector 85",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122012",
    address: "Shop No. 684, Rao Jaimal Marg, Sector 85, Gurugram, Haryana 122012",
    serviceModel: "Doorstep / home service",
    workingHours: "Mon – Sun: 8:00 AM – 9:00 PM",
    // WhatsApp number for redirect (digits only, country code 91)
    whatsappNumber: "917357764559",
  },

  // ── 5. SOCIAL LINKS & DIRECT CHAT ──────────────────────────
  social: {
    whatsapp: "https://wa.me/917357764559",
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  // ── 6. CALLS TO ACTION ─────────────────────────────────────
  cta: {
    primary: "Call Now",
    secondary: "WhatsApp for Service",
    service: "Book a Repair",
  },

  // ── 7. SELLING POINTS (FROM BUSINESS POSTERS) ──────────────
  sellingPoints: [
    "Expert technician",
    "Fast service",
    "Genuine parts",
    "Affordable prices",
    "Doorstep service",
    "Experienced technician",
    "Customer satisfaction",
    "All-brand service",
    "Same-day service",
  ],

  // ── 8. HERO SECTION ─────────────────────────────────────────
  hero: {
    headline: "Reliable Washing Machine & Microwave Repair at Your Doorstep",
    subheadline:
      "Expert doorstep appliance repair across Sector 85 and Gurugram. Fast fault diagnosis, 100% genuine parts, and transparent pricing for all major brands.",
    ctaText: "Call Now",
    secondaryCtaText: "WhatsApp for Service",
    bookCtaText: "Book a Repair",
    imageUrl: "/hero-appliances.jpg",
    badge: "Doorstep Service • Sector 85, Gurugram",
    rating: 4.9,
    patientCount: "1,500+ satisfied homeowners",
    note: {
      title: "Your Appliance, Our Care",
      text: "Genuine parts, skilled technicians & prompt repair.",
    },
  },

  // ── 9. SERVICES TO DISPLAY ─────────────────────────────────
  services: [
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      description:
        "Comprehensive troubleshooting, accurate diagnosis, component repair, and routine maintenance for top-load, front-load, and semi-automatic models.",
      icon: "Sparkles",
      imageUrl:
        "https://images.openai.com/static-rsc-4/TvdBoy1sABPXlFk0N6LJhWg-qux-PPX1Dw08gw9ob6Yg1mF4RR2wQGWiEoZ7cXycYP09mJsh2wYH1UecVssKAa5ZVz8UFEJ9hlKqgXlliJRRefUDUfil8rboUBuAXjX5LEsYtHZusQT2OFgocc87VbCg5fLua2T0JVDX9p87PSE?purpose=inline",
      features: [
        "Washing machine troubleshooting",
        "Diagnosis and repair",
        "Appliance maintenance",
        "Doorstep repair service",
      ],
    },
    {
      id: "microwave",
      title: "Microwave Repair",
      description:
        "Expert microwave fault diagnosis, heating issue resolution, electrical repair, and preventive maintenance for solo, grill, and convection microwave ovens.",
      icon: "Zap",
      imageUrl:
        "https://images.openai.com/static-rsc-4/bwTSjn5s6zJF_r0OX0PvkDCO5JsqcHbuzPk5oOSahYAPddyxALkYSS46yKgNcCmpDPZJD3DNAvxLjjtFOM6tFpbDDxCcb0xy3gxlZDZaW4voAy4Ef_fqVYYYOALdKFOHIuZtPdezSNEzsK_cqEcf7m7rJyHqbJd0MnCC5rSwznA?purpose=inline",
      features: [
        "Microwave troubleshooting",
        "Fault diagnosis",
        "Repair and maintenance",
        "Doorstep repair service",
      ],
    },
    {
      id: "doorstep-service",
      title: "Doorstep Repair Service",
      description:
        "Hassle-free home visits by experienced technicians in Sector 85 and across Gurugram. Fast troubleshooting at your convenience.",
      icon: "Droplets",
      features: [
        "Doorstep convenience",
        "Same-day service",
        "On-site inspection",
        "Transparent quotations",
      ],
    },
    {
      id: "genuine-parts",
      title: "Genuine Parts & Maintenance",
      description:
        "We source genuine replacement parts and perform preventive maintenance to ensure your appliances run efficiently and reliably.",
      icon: "Stethoscope",
      features: [
        "100% genuine parts",
        "All major brands supported",
        "Affordable pricing",
        "Customer satisfaction",
      ],
    },
  ],

  // ── 10. REPAIR SERVICES (FOR BOOKING FORM DROPDOWN) ────────
  treatments: [
    { id: "washing-machine", name: "Washing Machine Repair" },
    { id: "microwave", name: "Microwave Repair" },
    { id: "wm-troubleshooting", name: "Washing Machine Troubleshooting" },
    { id: "mw-troubleshooting", name: "Microwave Troubleshooting" },
    { id: "maintenance", name: "Appliance Maintenance" },
    { id: "doorstep-service", name: "Doorstep Inspection & Service" },
  ],

  // ── 11. BOOKING FORM CONFIGURATION ─────────────────────────
  appointment: {
    formTitle: "Book a Repair",
    formSubTitle: "Share your details and we will confirm your doorstep visit slot promptly.",
    submitVia: "whatsapp" as "whatsapp" | "email" | "both",
    fields: {
      name: { label: "Full Name", placeholder: "e.g. Rahul Sharma", required: true, enabled: true },
      phone: { label: "Phone Number", placeholder: "+91 73577 64559", required: true, enabled: true },
      email: { label: "Email Address", placeholder: "rahul@example.com", required: false, enabled: false },
      service: { label: "Appliance / Service", placeholder: "e.g. Washing Machine or Microwave Repair", required: true, enabled: true },
      message: { label: "Address & Issue Details", placeholder: "Provide your street/society in Gurugram and issue...", required: false, enabled: true },
    },
    successMessage: "Thank you! Your repair request has been submitted. Connecting you to WhatsApp...",
  },

  booking: {
    enabled: true,
    formTitle: "Book a Repair",
    formSubtitle: "We'll connect with you quickly to schedule a doorstep visit",
    successMessage: "✅ Your booking has been submitted! Redirecting to WhatsApp now.",
    stickyCtaEnabled: true,
  },

  // ── 12. TESTIMONIALS & CUSTOMER FEEDBACK ────────────────────
  testimonials: [
    {
      id: 1,
      name: "Rohit Verma",
      text: "Prompt same-day doorstep service in Sector 85! The technician identified why our front-load washing machine was vibrating heavily and fixed it with genuine parts.",
      rating: 5,
      source: "Google",
    },
    {
      id: 2,
      name: "Pooja Sharma",
      text: "Our microwave oven stopped heating suddenly. Nikunj Wash Care sent an experienced technician within hours. Affordable price, genuine parts, and very courteous service.",
      rating: 5,
      source: "Google",
    },
    {
      id: 3,
      name: "Amit Yadav",
      text: "Reliable and honest appliance repair in Gurugram. Explained the fault clearly without inflating repair costs. Definitely recommended for washing machine and microwave repairs.",
      rating: 5,
      source: "Google",
    },
  ],

  // ── 13. FREQUENTLY ASKED QUESTIONS ─────────────────────────
  faqs: [
    {
      question: "Do you provide doorstep repair services in Gurugram?",
      answer:
        "Yes, we provide doorstep repair and inspection services across Sector 85, Rao Jaimal Marg, and all major localities in Gurugram.",
    },
    {
      question: "Which appliance brands do you service?",
      answer:
        "We service all major brands of washing machines (front-load, top-load, and semi-automatic) and microwaves (solo, grill, convection).",
    },
    {
      question: "Do you offer same-day repair visits?",
      answer:
        "Yes, based on technician availability and scheduling, we provide same-day doorstep diagnosis and repair service.",
    },
    {
      question: "Are genuine spare parts used for repairs?",
      answer:
        "Yes, we use genuine and manufacturer-compatible spare parts to ensure durability and top performance.",
    },
    {
      question: "How do I book a repair visit?",
      answer:
        "You can call us directly at +91 73577 64559, click WhatsApp for service, or submit the booking form on this page.",
    },
  ],

  // ── 14. THEME / COLORS ─────────────────────────────────────
  //  Appliance care palette:
  //  Primary (Deep Oceanic Navy): #0F3D5E
  //  Primary Hover: #0A2940
  //  Accent (Vibrant Flame Coral): #E05638
  //  Background (Clean Cool Slate White): #F5F8FA
  colors: {
    primary: "#0F3D5E",
    primaryHover: "#0A2940",
    accent: "#E05638",
    background: "#F5F8FA",
    textMain: "#0F3D5E",
    textMuted: "#475569",
  },

  // ── 15. TYPOGRAPHY ──────────────────────────────────────────
  typography: {
    fontName: "Inter",
    fontFamily: "var(--font-inter), 'Inter', sans-serif",
    googleFontUrl: "https://fonts.google.com/specimen/Inter",
    className: "font-sans",
  },
};
