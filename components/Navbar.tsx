"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Transparent Header */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-serif tracking-widest relative z-50">
          LUMINA.
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs text-white/80 tracking-[0.2em] uppercase font-medium">
          <Link href="/rooms" className="hover:text-white transition-colors">The Stay</Link>
          <Link href="/dining" className="hover:text-white transition-colors">Dining</Link>
          <Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
        </nav>

        {/* Book Now Button & Mobile Toggle */}
        <div className="flex items-center gap-6 relative z-50">
          <button className="hidden md:block border border-white/30 hover:bg-white hover:text-black transition-all px-6 py-2 rounded-full text-xs tracking-widest uppercase text-white font-medium">
            Book Now
          </button>
          
          {/* Mobile Hamburger / Close Icon */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-lg text-white tracking-[0.2em] uppercase font-light">
          <Link href="/rooms" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">The Stay</Link>
          <Link href="/dining" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">Dining</Link>
          <Link href="/experiences" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">Experiences</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">Gallery</Link>
          
          <button className="mt-8 border border-white text-white hover:bg-white hover:text-black transition-all px-10 py-4 rounded-full text-sm tracking-widest uppercase font-medium">
            Book Now
          </button>
        </nav>
      </div>
    </>
  );
}