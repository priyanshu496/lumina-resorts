import Image from "next/image";
import Link from "next/link"; // <-- Added this import
import { ArrowRight, Maximize } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Ocean View Villa",
    price: "₹12,500",
    size: "850 sq ft",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "The Grand Suite",
    price: "₹25,000",
    size: "1200 sq ft",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Garden Retreat",
    price: "₹8,000",
    size: "600 sq ft",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function FeaturedRooms() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-12 text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-3">The Experience</p>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Sanctuaries</h2>
          </div>
          
          {/* Changed from button to Link */}
          <Link 
            href="/rooms" 
            className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-widest border-b border-black pb-1"
          >
            View All Suites <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            /* Changed from div to Link, injecting the dynamic ID */
            <Link key={room.id} href={`/rooms/${room.id}`} className="group cursor-pointer block">
              {/* Image Container */}
              <div className="relative h-100 md:h-150 w-full overflow-hidden mb-6 rounded-lg md:rounded-none">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Room Details */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-xl font-medium">{room.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}