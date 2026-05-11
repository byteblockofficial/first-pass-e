import type { Metadata } from "next";
import Lessons from "@/components/Lessons";
export const metadata: Metadata = { title: "Lessons & courses" };

export default function LessonsPage() {
  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Driving lessons &amp; courses</h1>
        <p className="text-[var(--color-text-muted)]">All courses include a free assessment lesson and are tailored to your starting ability and target test date.</p>
      </div>
      <Lessons />
    </div>
  );
}
