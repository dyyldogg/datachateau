import Link from "next/link";

export default function FooterCta() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-2xl p-10 text-center">
        <h2
          className="text-3xl font-normal leading-tight tracking-tight text-black sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to reduce your labor costs without sacrificing quality?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:scale-110 hover:shadow-xl hover:shadow-black/25 active:scale-95"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
