import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">About First Pass Driving School</h1>
        <div className="prose prose-slate max-w-none space-y-4 text-[var(--color-text)]">
          <p>First Pass Driving School has been helping learners in Stockport and the surrounding area pass their driving test since 2012. Our DVSA Approved Driving Instructor brings patience, structure, and genuine commitment to every lesson.</p>
          <p>Our 94% first-time pass rate isn&apos;t a fluke — it&apos;s the result of careful assessment at the start of every course, structured lesson plans built around your needs, and consistent honest feedback so you always know where you stand.</p>
          <p>Every new student begins with a free assessment lesson. We use that time to understand your previous experience, any anxiety you might have, and exactly what you need to work on before your test. There&apos;s no obligation — but most students book a full course right away.</p>
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mt-6">Why students choose us</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>94% first-time pass rate — backed by real student reviews</li>
            <li>DVSA Approved Driving Instructor (ADI)</li>
            <li>Flexible lesson times including evenings and weekends</li>
            <li>Manual and automatic vehicles available</li>
            <li>Free assessment lesson for all new students</li>
            <li>Intensive courses available — pass in as little as two weeks</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold px-6 py-3 rounded-md transition-colors">Book your free assessment lesson</a>
        </div>
      </div>
    </section>
  );
}
