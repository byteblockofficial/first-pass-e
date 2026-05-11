import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: { default: "First Pass Driving School | Stockport's Highest Pass Rate", template: "%s | First Pass Driving School" },
  description: "DVSA approved driving instructor in Stockport. 94% first-time pass rate. Manual, automatic, intensive, and theory lessons. Book your first lesson today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-secondary)] focus:text-white focus:rounded focus:shadow-lg">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
