import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rishikesh Kumar — Python & Django Backend Developer",
  description:
    "Python & Django Backend Developer based in Kolkata, India. 80+ REST APIs, 15 Django apps, 8 third-party integrations. Backend engineer at Famunite Health & Lifestyle.",
  keywords: [
    "Python Developer",
    "Django Developer",
    "Backend Engineer",
    "REST API",
    "DRF",
    "Kolkata",
    "India",
    "Famunite",
  ],
  authors: [{ name: "Rishikesh Kumar", url: "https://github.com/codebyrishi3075" }],
  openGraph: {
    title: "Rishikesh Kumar — Python & Django Backend Developer",
    description:
      "Python & Django Backend Developer with hands-on production healthcare backend experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
    </html>
  );
}
