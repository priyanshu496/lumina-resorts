import { ArrowRight } from "lucide-react";

const amenities = [
  {
    id: 1,
    title: "Oceanfront Dining",
    description: "Experience Michelin-starred culinary artistry with locally sourced ingredients, paired with panoramic views of the sea.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "The Serenity Spa",
    description: "Rejuvenate your body and mind with our signature holistic treatments, ancient massage techniques, and thermal baths.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Infinity Pools",
    description: "Lounge by our multi-tiered temperature-controlled infinity pools, featuring private cabanas and dedicated butler service.",
    image: "https://images.unsplash.com/photo-1634045634161-b842d46ed840?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function Amenities() {
  return (
   <section className="bg-white text-black py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">Beyond the Suite</p>
          <h2 className="text-4xl md:text-5xl font-serif">Unrivaled Experiences</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {amenities.map((item) => (
            <div key={item.id} className="group relative h-112.5 md:h-175 w-full overflow-hidden cursor-pointer rounded-xl md:rounded-none">
              
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-medium text-white tracking-widest uppercase hover:text-gray-300 transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}