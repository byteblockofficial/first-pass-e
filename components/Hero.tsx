import Link from "next/link";

export default function Hero() {
  return (
    <section aria-label="Introduction">
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[88vh]">
        {/* Main — 3/5 */}
        <div className="lg:col-span-3 bg-[var(--color-primary)] px-8 md:px-14 py-20 flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
            Stockport · DVSA Approved ADI
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Pass first time.<br />
            <span className="text-[var(--color-secondary)]">Guaranteed approach.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
            Stockport&apos;s highest first-time pass rate. Patient, professional instruction at times that suit your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-base bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] transition-colors rounded">
              Book your first lesson
            </Link>
            <a href="tel:01610000007" className="inline-flex items-center justify-center px-8 py-4 font-bold text-base border-2 border-white/30 text-white hover:border-white transition-colors rounded">
              0161 000 0007
            </a>
          </div>
        </div>

        {/* Feature panel — 2/5 */}
        <div className="lg:col-span-2 bg-[var(--color-secondary)] px-8 md:px-12 py-20 flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-6xl font-black text-white leading-none">94%</p>
            <p className="text-white/80 font-semibold mt-1">First-time pass rate</p>
          </div>
          <div className="border-t border-white/30 pt-8">
            <p className="text-white font-bold mb-5 text-sm uppercase tracking-wide">Why students choose us</p>
            <ul className="space-y-3 text-white/90 text-sm">
              {[
                "DVSA Approved ADI instructor",
                "Patient, structured lessons",
                "Flexible morning, evening &amp; weekend",
                "Pick-up from home or Stockport centre",
                "Theory support included",
                "Intensive courses available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-white font-bold flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
