import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Judeva | Building Management & Facilities Management Sydney",
  description:
    "Builder-led property and facilities management for Sydney residential strata complexes, commercial assets, and industrial sites. Proactive maintenance, 24/7 emergency response, and transparent service.",
  keywords: [
    "Building Management Sydney",
    "Facilities Management Sydney",
    "Strata Building Management",
    "Property Maintenance Sydney",
    "Onsite Building Manager",
    "Commercial Building Management",
    "Judeva",
  ],
  authors: [{ name: "Judeva Building & Facilities Management" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Judeva | Building & Facilities Management Sydney",
    description:
      "Proactive, builder-led building and facilities management across Greater Sydney. Dedicated oversight for strata, commercial, and residential properties.",
    url: "https://judeva.com.au",
    siteName: "Judeva",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Judeva | Building & Facilities Management Sydney",
    description:
      "Builder-led building and facilities management for Sydney property owners and strata committees.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-neutral-900 antialiased selection:bg-highlight selection:text-white">
        {children}
      </body>
    </html>
  );
}
