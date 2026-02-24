import { Play } from "lucide-react";

export default function VirtualTour() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="w-full md:w-1/3">
          <p className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">Immersive Experience</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Step Inside <br/> <span className="italic text-white/80">Paradise</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Take a 360-degree walkthrough of our award-winning property. Explore the infinity pool, the ocean-view suites, and our serene spa facilities before you even arrive.
          </p>
          <button className="flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black transition-all px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium group">
            <Play className="w-4 h-4 group-hover:fill-black" />
            Start Virtual Tour
          </button>
        </div>

        {/* 360 Video / Iframe Container */}
        <div className="w-full md:w-2/3 relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
          {/* Fallback Image (In production, you'd drop an iframe here, like Matterport) */}
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?auto=format&fit=crop&q=80&w=2000" 
            alt="Virtual Tour Preview" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-2 fill-white" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}