import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <p className="font-black text-lg">
          First<span className="text-[var(--color-secondary)]">Pass</span>
          <span className="text-white/40 font-normal ml-3 text-xs">DVSA Approved · Stockport</span>
        </p>
        <nav aria-label="Footer navigation" className="flex gap-6 text-white/50">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/lessons" className="hover:text-white">Lessons</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 text-white/50">
          <a href="tel:01610000007" className="text-[var(--color-secondary)] font-bold hover:underline">0161 000 0007</a>
          <span>© 2026 First Pass. Demo site.</span>
        </div>
      </div>
    </footer>
  );
}
