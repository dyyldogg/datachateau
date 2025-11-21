import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-20">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black mb-16"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Terms of Service
      </h1>
      
      <div className="text-lg leading-relaxed text-black/80 space-y-12">
        <div className="space-y-6 border-b border-black/10 pb-12">
          <p className="font-medium text-black/60 uppercase tracking-wider text-sm">Last updated: November 21, 2025</p>

          <p className="text-xl text-black/90">
            Please read these Terms of Service ("Terms") carefully before using the Vindium LLC website and services.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>2. Use of Services</h3>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services complies with all applicable laws and regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>3. Intellectual Property</h3>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of Vindium LLC and its licensors.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>4. Limitation of Liability</h3>
          <p>
            In no event shall Vindium LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>5. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>6. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:hello@vindium.ai" className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-all">hello@vindium.ai</a>.
          </p>
        </section>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
