export default function CaseStudy() {
  return (
    <section className="mx-auto mt-32 w-full max-w-6xl px-4">
      {/* Title + logo */}
      <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:mb-12 sm:flex-row">
        <h2
          className="text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Case study: Bridge Lending Firm
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Narrative */}
        <div className="space-y-12">
          {/* Problem */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <h3
                className="text-3xl font-normal text-black"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Their problem
              </h3>
            </div>
            <ul className="ml-2 space-y-3 text-lg text-black/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Manual intake created backlog during peak weeks
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Analyst time absorbed by data entry grunt work
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Deal throughput capped by human availability
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3
                className="text-3xl font-normal text-black"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our solution
              </h3>
            </div>
            <ul className="ml-2 space-y-3 text-lg text-black/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Automated intake & intelligent checklist creation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Structured data extraction directly to models
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                Reviewer-in-the-loop streamlined approvals
              </li>
            </ul>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#F5F5F0] border border-black/5 p-8 sm:p-12 shadow-sm">
          {/* Background decoration */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-400/10 blur-3xl" />

          <h3 className="text-lg font-medium tracking-wide text-black/50">
            The Result
          </h3>

          <div className="mt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-medium tracking-tighter text-black sm:text-7xl">
                $3.5M
              </span>
            </div>
            <p className="mt-2 text-xl text-black/60">
              added to the bottom line in just 4 months
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
            <div>
              <div className="text-4xl font-medium text-black">40%</div>
              <div className="mt-1 text-sm font-medium text-black/50">
                Reduction in Grunt Work
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium text-black">2x</div>
              <div className="mt-1 text-sm font-medium text-black/50">
                Deal Throughput
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
