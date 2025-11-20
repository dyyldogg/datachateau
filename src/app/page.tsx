import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudy from "@/components/CaseStudy";
import Values from "@/components/Values";
import FooterCta from "@/components/FooterCta";

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
        </div>

        {/* Row 3, Col 2: Hero Graphic */}
        <div className="relative col-start-1 lg:col-start-2 row-start-3 flex items-end justify-end overflow-visible">
          <div className="w-full translate-x-[20%] translate-y-[20%] scale-125 lg:translate-x-[10%] lg:translate-y-[10%]">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Quote section under CTA */}
      <section className="mx-auto mt-32 w-full max-w-5xl px-2">
        <div className="mx-auto max-w-3xl sm:max-w-4xl">
          <blockquote
            className="text-center text-4xl font-normal leading-[1.12] tracking-tight text-black/85 sm:text-5xl"
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



    </main>
  );
}
