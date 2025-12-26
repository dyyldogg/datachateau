import Image from "next/image";
import Link from "next/link";
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
            Dear AI labs,
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
            labor costs
            <br />
            limit your scale.
          </h2>
        </div>

        {/* Row 3, Col 1: Subtext */}
        <div className="col-start-1 row-start-3 flex flex-col justify-start max-w-md pb-12">
          <p className="text-lg leading-relaxed text-black/90 subhead-copy opacity-0 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_1.8s_both]">
            We provide{" "}
            <span className="emphasis-highlight">
              skilled human labor at competitive rates
            </span>
            , so you can scale your operations without breaking the budget
          </p>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:gap-6 opacity-0 animate-[drop-in_1000ms_cubic-bezier(0.2,0.8,0.2,1)_2.0s_both]">
            <Link
              href="/contact"
              className="group relative overflow-visible rounded-full border border-black/15 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 ease-out hover:border-black/40 hover:bg-black/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 active:scale-95"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <span className="relative z-10">
                Get in touch
              </span>

              {/* Tooltip */}
              <div className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-4 text-left text-xs leading-relaxed text-black/80 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 invisible z-50">
                We work directly with AI labs to understand your labor needs and provide cost-effective solutions.
              </div>
            </Link>
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
            "Data Chateau cut our labor costs by 50% while maintaining quality."
          </blockquote>
        </div>
      </section>

      {/* Headline + supporting h2 */}
      <section className="mx-auto mt-40 w-full max-w-5xl px-2">
        <h2
          className="text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Most AI labs spend 40–60% of their budget on human labor costs.
        </h2>
        <h2 className="mt-6 text-base leading-7 text-black/80 subhead-copy sm:text-lg">
          Scaling operations requires skilled workers, but{" "}
          <span className="emphasis-highlight">
            hiring full-time staff is expensive and slow
          </span>
          . Data Chateau provides the same quality work at a fraction of the cost, so you can scale faster.
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
