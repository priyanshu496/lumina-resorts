import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Add this import

export const metadata: Metadata = {
  title: "Lumina Resorts",
  description: "Luxury Hotel Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased bg-[#0a0a0a] text-white">
        <Navbar />
        {children}
        <Footer /> {/* <-- Add the Footer here */}
      </body>
    </html>
  );
}