import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/pages/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-two-drab.vercel.app"),
  title: "Arnold David Silaban - Fullstack Developer",
  description:
    "Portofolio profesional Arnold David Silaban. Lulusan TKJ dengan spesialisasi pengembangan Web Fullstack (Next.js, React) dan AI-Assisted Development.",
  openGraph: {
    title: "Arnold David Silaban - Fullstack Developer",
    description:
      "Portofolio profesional Arnold David Silaban. Spesialisasi pengembangan Web Fullstack dan AI-Assisted Development.",
    url: "https://portofolio-two-drab.vercel.app/",
    siteName: "Arnold David Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnold David Silaban Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnold David Silaban - Fullstack Developer",
    description: "Portofolio profesional Arnold David Silaban.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
