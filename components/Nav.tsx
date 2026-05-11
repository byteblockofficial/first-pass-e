"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="First Pass Driving School — home" className="font-black text-white text-lg tracking-tight">
          First<span className="text-[var(--color-secondary)]">Pass</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/lessons" className="hover:text-white">Lessons</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex items-center px-5 py-2 text-sm font-bold bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] transition-colors rounded">
          Book a lesson
        </Link>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[var(--color-primary)] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-white/80">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/lessons" onClick={() => setOpen(false)}>Lessons</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex justify-center px-5 py-2 font-bold bg-[var(--color-secondary)] text-white rounded">Book a lesson</Link>
        </div>
      )}
    </header>
  );
}
