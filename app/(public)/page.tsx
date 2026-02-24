// At the top, add the import:
import Amenities from "@/components/Amenities";
import AvailabilityBar from "@/components/AvailabilityBar";
import FeaturedRooms from "@/components/FeaturedRooms";

// Inside your HomePage function, replace the old glassmorphism div with:
export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen w-full">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/resort-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" /> 
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white text-center mb-4 md:mb-6 tracking-wider font-light">
            LUMINA <span className="font-serif italic text-white/90">Resorts</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-8 md:mb-12 text-center tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Escape to Paradise
          </p>

          {/* New Interactive Component */}
          <AvailabilityBar />

        </div>
      </main>

      {/* Your other sections */}
      <FeaturedRooms />
      <Amenities />
    </>
  );
}