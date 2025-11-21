"use client";

import Footer from "@/components/Footer";
import Script from "next/script";
import { useEffect } from "react";

export default function Contact() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-12 lg:py-20 flex flex-col items-center">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black text-center mb-12 max-w-2xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Let's supercharge your lending team
      </h1>

      {/* Calendly */}
      <div className="w-full bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden mb-20">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/dylanwestland/30min?hide_gdpr_banner=1"
          style={{ minHeight: "1000px", height: "1000px" }}
        />
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
