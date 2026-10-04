import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Spike 2026 | National Conference",
  description:
    "Quantum Spike 2026 — National Conference on Contemporary Physics, Optics and Emerging Technologies at Bankura Sammilani College, West Bengal.",
  keywords: ["Quantum Spike 2026", "Bankura Sammilani College", "Physics Conference", "Quantum Optics", "National Conference"],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
