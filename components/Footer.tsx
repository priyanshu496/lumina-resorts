import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif tracking-widest mb-6">LUMINA.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A sanctuary of unparalleled luxury. Experience the perfect blend of modern elegance and untouched natural beauty.
            </p>
            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">The Resort</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/rooms" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="/dining" className="hover:text-white transition-colors">Fine Dining</Link></li>
              <li><Link href="/spa" className="hover:text-white transition-colors">Wellness & Spa</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Image Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>124 Oceanview Drive,<br />Malibu, CA 90265</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+1 (310) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>reservations@lumina.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <div className="flex border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-sm text-white placeholder:text-white/30"
              />
              <button className="text-xs uppercase tracking-widest hover:text-gray-300 transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Lumina Resorts. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}