import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center" aria-label="Vindium home">
          <img
            src="/vinidum-written-logo.svg"
            alt="Vindium"
            className="h-9 w-auto sm:h-10 md:h-12"
          />
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-black px-5 py-2 text-xs font-medium tracking-wide text-white transition-transform hover:scale-105 active:scale-95"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
