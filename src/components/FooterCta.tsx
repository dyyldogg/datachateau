import Link from "next/link";

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
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 hover:scale-105 active:scale-95"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Book a personal call with the founders
        </Link>
      </div>
    </section>
  );
}
