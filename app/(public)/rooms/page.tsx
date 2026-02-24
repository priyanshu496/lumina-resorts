import Image from "next/image";
import Link from "next/link";
import { Wifi, Coffee, Wind, Bath, Users, ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma"; // <-- 1. Import your Prisma client

export default async function RoomsPage() {
  // 2. Fetch all rooms directly from your PostgreSQL database!
  const allRooms = await prisma.room.findMany({
    orderBy: { price: 'asc' } // Let's sort them from cheapest to most expensive
  });

  return (
    <main className="min-h-screen bg-[#fafafa] text-black pt-24 md:pt-32 pb-24">
      
      {/* Page Header */}
      <div className="px-4 md:px-12 py-12 md:py-16 max-w-7xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">Our Accommodations</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-black leading-tight">
          A Sanctuary for <br/> <span className="italic text-gray-500">Every Guest</span>
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Sidebar: Filters */}
        <aside className="w-full lg:w-1/4 order-2 lg:order-1">
          <div className="sticky top-32 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-serif mb-6 border-b border-gray-100 pb-4">Filter Options</h3>
            
            <div className="space-y-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 block mb-4">Room Type</label>
                <div className="space-y-3">
                  {["All Suites", "Villas", "Standard"].map((type) => (
                    <label key={type} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer group">
                      <input type="checkbox" className="accent-black w-4 h-4 cursor-pointer" /> 
                      <span className="group-hover:text-black transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 block mb-4">Guests</label>
                <select className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-black cursor-pointer">
                  <option>Any Amount</option>
                  <option>1-2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Area: Rooms List */}
        <div className="w-full lg:w-3/4 space-y-8 md:space-y-12 order-1 lg:order-2">
          {allRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
              
              {/* Image Container - Notice we use room.images[0] because our DB stores an array! */}
              <Link href={`/rooms/${room.id}`} className="relative w-full md:w-2/5 h-[280px] md:h-auto overflow-hidden block">
                <Image
                  src={room.images[0]} 
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </Link>

              {/* Room Info */}
              <div className="p-6 md:p-8 lg:p-10 w-full md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <Link href={`/rooms/${room.id}`}>
                      <h2 className="text-2xl md:text-3xl font-serif hover:text-gray-600 transition-colors">{room.name}</h2>
                    </Link>
                    {/* Format the integer price into beautiful currency */}
                    <p className="text-xl md:text-2xl font-light">₹{room.price.toLocaleString("en-IN")} <span className="text-sm text-gray-400 font-normal">/ night</span></p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs text-gray-400 tracking-wider uppercase mb-6">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {room.capacity} Guests</span>
                    <span className="hidden md:inline">|</span>
                    <span>{room.size}</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {room.description}
                  </p>
                </div>

                {/* Amenities Icons & Action Button */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex gap-4 text-gray-300">
                    <Wifi className="w-5 h-5 hover:text-black transition-colors" />
                    <Wind className="w-5 h-5 hover:text-black transition-colors" />
                    <Coffee className="w-5 h-5 hover:text-black transition-colors" />
                    <Bath className="w-5 h-5 hover:text-black transition-colors" />
                  </div>
                  
                  <Link 
                    href={`/rooms/${room.id}`}
                    className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:text-gray-500 transition-colors"
                  >
                    View Room <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}