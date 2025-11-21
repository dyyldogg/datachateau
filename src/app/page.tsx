import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudy from "@/components/CaseStudy";
import Values from "@/components/Values";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-6xl px-4 py-20">
      <section className="grid min-h-[calc(100dvh-64px)] grid-cols-1 lg:grid-cols-2 grid-rows-[auto_auto_1fr] gap-x-12 gap-y-8 px-4 pb-8 pt-12 lg:px-12">
        {/* Row 1, Col 1: H1 */}
        <div className="col-start-1 row-start-1 max-w-2xl">
          <h1
            className="text-left text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-tight text-black opacity-0 animate-[drop-in_900ms_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dear private real estate lenders,
          </h1>
        </div>

        {/* Row 2, Col 2: H2 */}
        <div className="col-start-1 lg:col-start-2 row-start-2 max-w-2xl justify-self-end">
          <h2
            className="text-right text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-tight text-black opacity-0 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.2s_both]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            stop letting
            <br />
            busywork kill
            <br />
            your dealflow.
          </h2>
        </div>

        {/* Row 3, Col 1: Subtext */}
        <div className="col-start-1 row-start-3 flex flex-col justify-start max-w-md pb-12">
          <p className="text-lg leading-relaxed text-black/90 subhead-copy opacity-0 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.8s_both]">
            We build AI agents and outsource contractors to{" "}
            <span className="emphasis-highlight">automate the repetitive tasks slowing your team down</span>
            , so you can originate deals lightning fast
          </p>
          
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:gap-6 opacity-0 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_2.0s_both]">
            <button
              className="cta-button-secondary group relative overflow-hidden rounded-full border border-black/10 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black/80 transition-all duration-300 hover:border-black/25 hover:bg-black/5 hover:text-black hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:scale-105"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                Past results
              </span>
            </button>
            <button
              className="group relative overflow-visible rounded-full border border-black/15 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:border-black/30 hover:bg-black/5 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Have us fly out to you
                <svg
                  className="h-4 w-4 transition-all duration-500 ease-out group-hover:translate-x-10 group-hover:-translate-y-4 group-hover:opacity-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                   <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </span>

              {/* Tooltip */}
              <div className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-4 text-left text-xs leading-relaxed text-black/80 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 invisible z-50">
                We take our potential clients very seriously - we will fly out to you to learn about your business's bottleneck without expectation of a sale.
              </div>
            </button>
          </div>
        </div>

        {/* Row 3, Col 2: Hero Graphic */}
        <div className="relative col-start-1 lg:col-start-2 row-start-3 flex items-end justify-end overflow-visible">
          <div className="w-full translate-x-[20%] translate-y-[20%] scale-125 lg:translate-x-[10%] lg:translate-y-[10%]">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="mx-auto mt-32 w-full max-w-6xl px-4 lg:px-12">
        <div className="max-w-3xl sm:max-w-4xl">
          <blockquote
            className="text-left text-4xl font-normal leading-[1.12] tracking-tight text-black/85 sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            “Vindium literally eliminated 40% of the B.S. I deal with at work.”
          </blockquote>
        </div>
      </section>

      <section id="demo" className="mx-auto mt-32 w-full max-w-5xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <video
            className="h-full w-full object-cover will-change-transform"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/demo-poster.jpg"
            aria-label="Vindium product demo video"
          >
            {/* Prefer refined crop (v2) centered to keep input bar and remove pillar */}
            <source src="/demo-framed2.mp4" type="video/mp4" />
            <source src="/demo-framed.webm" type="video/webm" />
            {/* Fallbacks */}
            <source src="/demo-letterbox.mp4" type="video/mp4" />
            {/* Fallback to raw OBS capture (filename contains spaces → URL-encoded) */}
            <source src="/2025-11-04%2016-29-09.mov" type="video/quicktime" />
          </video>
        </div>
      </section>

      {/* Headline + supporting h2 */}
      <section className="mx-auto mt-40 w-full max-w-5xl px-2">
        <h2
          className="text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We’ve found most private lenders leave 30–40% of deal flow on the table every month.
        </h2>
        <h2 className="mt-6 text-base leading-7 text-black/80 subhead-copy sm:text-lg">
          Manual intake and underwriting bottlenecks limit how many loans your team can process.
          {" "}
          <span className="emphasis-highlight">Hiring and training analysts is expensive and slow</span>.
          {" "}
          Vindium automates those repetitive workflows so your team can handle every deal that comes in.
        </h2>
      </section>

      {/* Calculator last */}
      <RoiCalculator />

      {/* Case study */}
      <CaseStudy />

      {/* Values */}
      <Values />

      {/* Bottom CTA + minimal footer */}
      <FooterCta />
      <Footer />



    </main>
  );
}
