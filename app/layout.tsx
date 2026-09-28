import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060911",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sites.google.com/view/quantum-spike-2026"),
  title: "QUANTUM SPIKE 2026 | International Conference on Contemporary Physics, Optics & Emerging Technologies",
  description:
    "Official website for Quantum Spike 2026 — International Conference on Contemporary Physics, Optics and Emerging Technologies. Organized by Department of Physics & IQAC, Bankura Sammilani College, West Bengal. ANRF (SERB-DST) Core Research Grant Funded.",
  keywords: [
    "Quantum Spike 2026",
    "Bankura Sammilani College",
    "Physics Conference India",
    "ANRF SERB DST Conference",
    "Quantum Information",
    "Quantum Optics",
    "Ultracold Atoms",
    "Condensed Matter Physics",
    "Emerging Technologies",
    "National Quantum Mission",
  ],
  authors: [{ name: "Department of Physics, Bankura Sammilani College" }],
  openGraph: {
    title: "Quantum Spike 2026 | International Conference",
    description:
      "Join physicists, researchers, and students on 08–09 October 2026 at Bankura Sammilani College, West Bengal. ANRF (SERB-DST) Funded.",
    url: "https://sites.google.com/view/quantum-spike-2026/home",
    siteName: "Quantum Spike 2026",
    images: [
      {
        url: "/conference-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Spike 2026 Official Conference Brochure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Spike 2026 | International Conference",
    description:
      "08–09 October 2026 at Bankura Sammilani College, West Bengal. ANRF (SERB-DST) Core Research Grant Funded.",
    images: ["/conference-poster.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
