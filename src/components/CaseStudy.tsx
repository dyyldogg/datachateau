export default function CaseStudy() {
  return (
    <section className="mx-auto mt-32 w-full max-w-6xl px-4">
      {/* Title + logo outside the card, centered */}
      <div className="mb-4 flex items-center justify-center gap-3 sm:mb-6">
        <h2
          className="text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Case study:
        </h2>
        <img src="/arixa-logo-transparent.svg" alt="Arixa Capital" className="h-10 w-auto sm:h-12" />
      </div>

      <div className="rounded-2xl p-6 sm:p-10">
        {/* Body */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Left narrative */}
          <div>
            <h3 className="text-3xl font-normal leading-snug text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Their problem
            </h3>
            <ul className="mt-4 space-y-2 text-base text-black/80 subhead-copy sm:text-lg">
              <li>Manual intake created backlog during peak submission weeks</li>
              <li>Analyst time absorbed by document chase and data entry</li>
              <li>Deal throughput capped by reviewer availability</li>
            </ul>

            <h3 className="mt-8 text-3xl font-normal leading-snug text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Our solution
            </h3>
            <ul className="mt-4 space-y-2 text-base text-black/80 subhead-copy sm:text-lg">
              <li>Automated doc intake and checklist creation</li>
              <li>Structured data extraction to models and CRM</li>
              <li>Reviewer-in-the-loop with streamlined approvals</li>
            </ul>

            <h3 className="mt-8 text-3xl font-normal leading-snug text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              The result?
            </h3>
            <p
              className="mt-4 text-2xl font-medium leading-tight tracking-tight text-black subhead-copy sm:text-3xl"
            >
              Over $3.5M added to bottom line in 4 months!
            </p>
          </div>

          {/* Right flow boxes */}
          <div className="grid grid-rows-3 gap-6 sm:gap-7">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-5">
                <div className="h-20 w-full rounded-2xl bg-black/5" />
                <div className="flex items-center justify-center text-xl text-black/50">→</div>
                <div className="h-20 w-full rounded-2xl bg-black/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


