import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center" aria-label="Data Chateau home">
          <img
            src="/datachateau-logo.png"
            alt="Data Chateau"
            className="h-10 w-auto sm:h-12 md:h-14"
          />
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-black px-5 py-2 text-xs font-medium tracking-wide text-white transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg hover:shadow-black/25 active:scale-95"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
