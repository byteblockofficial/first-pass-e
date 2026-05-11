import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Get in touch</h1>
        <p className="text-[var(--color-text-muted)] mb-10">Book your free assessment lesson or ask any questions about lessons, pricing, or test dates.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-[var(--color-secondary)] text-white rounded-lg p-6">
              <p className="font-semibold text-lg mb-1">📞 Need to speak to us?</p>
              <p className="text-sm text-white/80 mb-3">Call direct — we answer between 7am and 9pm.</p>
              <a href="tel:01610000007" className="font-bold text-xl hover:underline">0161 000 0007</a>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Free assessment lesson</p>
              <p className="text-sm text-[var(--color-text-muted)]">Every new student starts with a free 1-hour assessment. We&apos;ll assess your current ability, discuss your goals, and recommend the right course length. No obligation to continue.</p>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-6">
              <p className="font-semibold text-[var(--color-primary)] mb-2">Where we cover</p>
              <p className="text-sm text-[var(--color-text-muted)]">Stockport, Hazel Grove, Cheadle, Bramhall, Marple, Romiley, and surrounding areas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
