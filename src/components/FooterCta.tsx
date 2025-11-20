export default function FooterCta() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-2xl p-10 text-center">
        <h2
          className="text-3xl font-normal leading-tight tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to Experience the Intelligence Gains Only Vindium Can Provide?
        </h2>
        <button
          className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Book a demo
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 text-sm text-black/70 sm:flex-row">
        <div>© {new Date().getFullYear()} Vindium.</div>
        <div className="flex items-center gap-6">
          {/* Nav removed */}
        </div>
        <div className="flex items-center gap-2">
          <img src="/vinidum-written-logo.svg" alt="Vindium" className="h-4 w-auto" />
        </div>
      </div>
    </section>
  );
}


