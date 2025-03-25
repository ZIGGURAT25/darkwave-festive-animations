
import React from 'react';
import AnimatedText from './AnimatedText';

interface Artist {
  id: number;
  name: string;
  image: string;
  category: string;
}

const LineupGrid: React.FC = () => {
  const artists: Artist[] = [
    { id: 1, name: "DEADMAU5", image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2574&auto=format&fit=crop", category: "Electronic" },
    { id: 2, name: "BICEP", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
    { id: 3, name: "FOUR TET", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
    { id: 4, name: "JAMIE XX", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
    { id: 5, name: "BONOBO", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
    { id: 6, name: "DISCLOSURE", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
    { id: 7, name: "FRED AGAIN", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=2672&auto=format&fit=crop", category: "Electronic" },
    { id: 8, name: "JUNGLE", image: "https://images.unsplash.com/photo-1571935441008-4bfb104ddcba?q=80&w=2670&auto=format&fit=crop", category: "Electronic" },
  ];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <AnimatedText
          text="LINEUP"
          element="h2"
          className="section-heading text-center text-gradient mb-16"
          animation="blur-in"
          splitType="chars"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div 
              key={artist.id}
              className="group hover-card overflow-hidden rounded-lg"
              style={{ 
                opacity: 0, 
                animation: 'fade-in 0.5s forwards', 
                animationDelay: `${0.1 * index}s` 
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-festival-accent uppercase tracking-wider mb-2">
                    {artist.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-festival-accent transition-colors duration-300">
                    {artist.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="marquee-container mt-20 mb-6">
          <div className="marquee-content py-2">
            {Array(10).fill("MORE ARTISTS TO BE ANNOUNCED").map((text, index) => (
              <span key={index} className="text-2xl font-display font-bold mx-6 opacity-20 text-white uppercase tracking-widest">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineupGrid;
