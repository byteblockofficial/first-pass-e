import Link from "next/link";

const lessons = [
  { title: "Manual lessons", desc: "Learn in a modern dual-control manual car. Structured programme from first time behind the wheel to test-ready confidence." },
  { title: "Automatic lessons", desc: "Perfect if you want to focus on road awareness without gear changes. Ideal for nervous learners or those returning to driving." },
  { title: "Intensive courses", desc: "Pass in as little as two weeks with a focused block of lessons. Ideal for those who need their licence quickly for work or relocation." },
  { title: "Theory test support", desc: "Hazard perception practice, mock theory tests, and revision resources included with every lesson programme." },
  { title: "Pass Plus", desc: "Six-hour post-test course covering motorways, night driving, and rural roads. Can reduce your insurance premium by up to 30%." },
  { title: "Refresher lessons", desc: "Already passed but not driven in a while? A structured refresher gets your confidence back quickly and safely." },
];

export default function Lessons() {
  return (
    <section className="py-24 px-6" aria-labelledby="lessons-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left heading col */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-3">Lessons</p>
            <h2 id="lessons-heading" className="text-3xl font-black text-[var(--color-primary)] mb-6 leading-tight">
              Lessons to<br />suit you
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Every learner is different. Whether you&apos;re a total beginner or need to pass urgently, we have a lesson format that fits.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 font-bold text-sm bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors rounded">
              Book your first lesson
            </Link>
          </div>

          {/* Right cards grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {lessons.map((l) => (
              <div key={l.title} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
                <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">{l.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
