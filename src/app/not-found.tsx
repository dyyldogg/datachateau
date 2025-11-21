import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-between px-4 pt-32 text-center">
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1
          className="text-6xl font-normal text-black sm:text-8xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          404
        </h1>
        <h2
          className="mt-6 text-2xl font-normal text-black sm:text-3xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Page not found
        </h2>
        <p className="mt-4 max-w-md text-lg text-black/80 subhead-copy">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="cta-button-primary inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="mt-20 w-full">
        <Footer />
      </div>
    </main>
  );
}
