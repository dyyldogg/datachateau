import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4">
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 text-sm text-black/70 sm:flex-row">
        <div>© {new Date().getFullYear()} Data Chateau.</div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-normal text-black/70"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Data Chateau
          </span>
        </div>
      </div>
    </footer>
  );
}

