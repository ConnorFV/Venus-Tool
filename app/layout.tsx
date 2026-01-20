import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VENUS TOOL Group - Premium Metal Mold Design & Production",
  description: "Professional metal mold design and production. Focusing on higher quality and customer satisfaction first.",
};

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-foreground`}
      >
        <LanguageProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow pt-0">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
