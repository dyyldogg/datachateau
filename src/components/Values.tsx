import { Users, Heart } from "lucide-react";

export default function Values() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="rounded-2xl bg-[#111] text-white">
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2
              className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quality and reliability
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80 subhead-copy sm:text-base">
              We maintain the same quality standards as full-time staff while providing
              cost-effective solutions. Our team is vetted, trained, and committed to
              your success.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Skilled workforce
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>Vetted professionals</li>
                  <li>Domain expertise</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Cost effective
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>50% cost reduction</li>
                  <li>No overhead burden</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Scalable operations
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>Flexible capacity</li>
                  <li>Quick ramp-up</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wide text-white/70">Quality</div>
              <div className="mt-1 text-xl font-semibold text-white">100%</div>
              <div className="mt-1 text-sm text-white/70">Maintained</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Users className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Direct communication
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/80 subhead-copy">
                  Work directly with our team. No middlemen, no bureaucracy. Clear
                  communication and fast iteration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Heart className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Long-term partnership
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/80 subhead-copy">
                  We build relationships, not transactions. Our team becomes an extension
                  of yours, understanding your needs and delivering consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
