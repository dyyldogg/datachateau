"use client";

import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

export default function Contact() {
  const rootElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";

    // Function to initialize the widget
    const initCalendly = () => {
      // @ts-ignore
      if (window.Calendly && rootElement.current) {
        // Prevent double init
        if (rootElement.current.hasChildNodes()) return;

        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/dylanwestland/30min?hide_gdpr_banner=1",
          parentElement: rootElement.current,
          resize: true,
        });
      }
    };

    // Check if script is already present
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      // Script exists. If loaded, init immediately.
      // If loading, add listener.
      // @ts-ignore
      if (window.Calendly) {
        initCalendly();
      } else {
        existingScript.addEventListener("load", initCalendly);
      }
    }

    // Cleanup listener if we added one?
    // It's tricky with the else block reference, but minor for this case.
    return () => {
      if (existingScript) {
        existingScript.removeEventListener("load", initCalendly);
      }
    };
  }, []);

  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-12 lg:py-20 flex flex-col items-center">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black text-center mb-12 max-w-2xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Let's supercharge your lending team
      </h1>

      {/* Calendly */}
      <div className="w-full mb-20">
        <div
          ref={rootElement}
          className="w-full"
          data-resize="true"
          style={{ minHeight: "700px" }}
        />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
