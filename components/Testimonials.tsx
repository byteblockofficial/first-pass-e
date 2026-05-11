export default function Testimonials() {
  const quotes = [
    { q: "Passed first time — honestly didn't think I would after failing twice with a different instructor. The structured approach made all the difference. Cannot recommend highly enough.", attr: "L.M. · Stockport" },
    { q: "Booked an intensive course a month before I needed my licence for a new job. Passed with only two minors. The pressure never felt overwhelming because the lessons were so well structured.", attr: "J.K. · Hazel Grove" },
    { q: "Really patient instructor who never made me feel judged for my mistakes. Passed first time and I genuinely enjoyed the lessons. Worth every penny.", attr: "A.S. · Bramhall" },
  ];
  return (
    <section className="bg-[var(--color-primary)] py-24 px-6" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Student reviews</p>
            <h2 id="reviews-heading" className="text-3xl font-black text-white">
              What students say
            </h2>
          </div>
          <p className="text-[var(--color-secondary)] font-bold text-lg hidden sm:block">★★★★★ 4.9</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t) => (
            <figure key={t.attr} className="border border-white/10 p-7">
              <blockquote className="text-white/80 text-sm leading-relaxed mb-5">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="text-[var(--color-secondary)] text-xs font-bold">{t.attr}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
