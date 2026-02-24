import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Users, Maximize, Bath, Coffee, Wind, Check } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";

// In Next.js 15+, params is a Promise that we must await
type Props = {
  params: Promise<{ id: string }>;
};

export default async function RoomDetailsPage({ params }: Props) {
  // 1. Unwrap the URL parameters
  const { id } = await params;

  // 2. Fetch this exact room from PostgreSQL
  const room = await prisma.room.findUnique({
    where: { id: id },
  });

  // 3. If someone types a random ID in the URL, show a 404 page
  if (!room) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black pt-24 pb-24">
      
      {/* 1. Image Gallery Hero */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-8">
        <h1 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8">{room.name}</h1>
        
        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden">
          <div className="md:col-span-3 relative h-full w-full">
            <Image src={room.images[0]} alt={room.name} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            {room.images[1] && (
              <div className="relative h-1/2 w-full overflow-hidden rounded-tr-3xl">
                <Image src={room.images[1]} alt="View 2" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            )}
            {room.images[2] && (
              <div className="relative h-1/2 w-full overflow-hidden rounded-br-3xl">
                <Image src={room.images[2]} alt="View 3" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Content & Sticky Booking Widget */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Room Info */}
        <div className="w-full lg:w-[65%]">
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm text-gray-500 tracking-wider uppercase mb-10 pb-10 border-b border-gray-100">
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-black" /> {room.capacity} Guests</span>
            <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-black" /> {room.size}</span>
            <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-black" /> 1.5 Baths</span>
          </div>

          <h2 className="text-2xl font-serif mb-6">The Experience</h2>
          <p className="text-gray-600 leading-loose mb-12 text-sm md:text-base whitespace-pre-line">
            {room.description}
          </p>

          <h2 className="text-2xl font-serif mb-8">Room Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-12">
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <Wind className="w-5 h-5 text-gray-500 font-light" /> Climate Control
            </div>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <Coffee className="w-5 h-5 text-gray-400 font-light" /> Espresso Machine
            </div>
            {room.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-600 text-sm">
                <Check className="w-5 h-5 text-black" /> {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="w-full lg:w-[35%]">
          <BookingWidget roomId={room.id} pricePerNight={room.price} />
        </div>

      </div>
    </main>
  );
}