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
              Security and compliance
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80 subhead-copy sm:text-base">
              Your trust is our priority. Our security and compliance practices are
              designed to meet high regulatory standards, ensuring your firm’s
              sensitive data stays protected.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Private workspace
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>End to end encryption</li>
                  <li>Enterprise grade security</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Data privacy
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>Protected data pipeline</li>
                  <li>Controlled access</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  360° data protection
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 subhead-copy">
                  <li>Flexible deployments</li>
                  <li>Team permissioning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wide text-white/70">We are</div>
              <div className="mt-1 text-xl font-semibold text-white">SOC 2</div>
              <div className="mt-1 text-sm text-white/70">Compliant</div>
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
                  Human in the loop
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/80 subhead-copy">
                  We keep finance professionals at the heart of every decision for accuracy
                  and confidence at every step.
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
                  Customer obsession
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/80 subhead-copy">
                  We deliver tailored integrations and iterate fast so our offering evolves
                  with you and provides value at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
