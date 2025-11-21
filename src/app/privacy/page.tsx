import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-20">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black mb-16"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Privacy Policy
      </h1>
      
      <div className="text-lg leading-relaxed text-black/80 space-y-12">
        <div className="space-y-6 border-b border-black/10 pb-12">
          <p className="font-medium text-black/60 uppercase tracking-wider text-sm">Last updated: November 21, 2025</p>

          <p className="text-xl text-black/90">
            Vindium LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you fill out a form, request a demo, or communicate with us. This may include your name, email address, phone number, and company information.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to respond to your requests.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>3. Information Sharing</h3>
          <p>
            We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with service providers who perform services on our behalf.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>4. Data Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@vindium.ai" className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-all">hello@vindium.ai</a>.
          </p>
        </section>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
