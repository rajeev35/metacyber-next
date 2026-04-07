import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
  title: "Metacyber | Secure & Scale Your Digital Business",
  description: "Elite cybersecurity and AI-driven solutions for modern enterprises. Build secure, scalable digital systems with Metacyber.",
  keywords: "cybersecurity, AI, web development, app development, digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
