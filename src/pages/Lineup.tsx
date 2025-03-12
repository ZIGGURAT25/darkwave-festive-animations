
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Calendar, Clock } from 'lucide-react';

interface Artist {
  id: number;
  name: string;
  image: string;
  category: string;
  time?: string;
  stage?: string;
  day?: string;
}

const Lineup: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const artists: Artist[] = [
    { id: 1, name: "DEADMAU5", image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2574&auto=format&fit=crop", category: "Electronic", time: "10:30 PM", stage: "Main Stage", day: "Day 1" },
    { id: 2, name: "BICEP", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "9:00 PM", stage: "Techno Arena", day: "Day 2" },
    { id: 3, name: "FOUR TET", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "8:30 PM", stage: "Main Stage", day: "Day 1" },
    { id: 4, name: "JAMIE XX", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "11:00 PM", stage: "Bass Garden", day: "Day 2" },
    { id: 5, name: "BONOBO", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "7:30 PM", stage: "Chill Zone", day: "Day 3" },
    { id: 6, name: "DISCLOSURE", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "10:00 PM", stage: "Main Stage", day: "Day 3" },
    { id: 7, name: "FRED AGAIN", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=2672&auto=format&fit=crop", category: "Electronic", time: "8:00 PM", stage: "Bass Garden", day: "Day 1" },
    { id: 8, name: "JUNGLE", image: "https://images.unsplash.com/photo-1571935441008-4bfb104ddcba?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "9:30 PM", stage: "Techno Arena", day: "Day 3" },
    { id: 9, name: "PEGGY GOU", image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2574&auto=format&fit=crop", category: "Electronic", time: "7:00 PM", stage: "Techno Arena", day: "Day 2" },
    { id: 10, name: "RUFUS DU SOL", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2574&auto=format&fit=crop", category: "Electronic", time: "9:00 PM", stage: "Main Stage", day: "Day 2" },
    { id: 11, name: "LANE 8", image: "https://images.unsplash.com/photo-1461784180009-21121b2f204c?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "8:00 PM", stage: "Chill Zone", day: "Day 2" },
    { id: 12, name: "ERIC PRYDZ", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2670&auto=format&fit=crop", category: "Electronic", time: "11:30 PM", stage: "Main Stage", day: "Day 3" },
  ];

  const days = ["Day 1", "Day 2", "Day 3"];
  const stages = ["Main Stage", "Techno Arena", "Bass Garden", "Chill Zone"];

  return (
    <div className="min-h-screen bg-festival-darker">
      <Navbar />
      
      <section className="pt-36 pb-16 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-festival-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-festival-highlight/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <AnimatedText
              text="LINEUP"
              element="h1"
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
              animation="blur-in"
              splitType="chars"
            />
            
            <AnimatedText
              text="Experience the world's top electronic artists across multiple stages over three unforgettable days."
              element="p"
              className="text-lg text-white/80"
              animation="fade-in"
              delay={0.3}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day, index) => (
              <button 
                key={day} 
                className="glass-panel py-2 px-6 rounded-full transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
                style={{ 
                  opacity: 0, 
                  animation: 'fade-in 0.5s forwards', 
                  animationDelay: `${0.1 * index}s` 
                }}
              >
                <Calendar size={16} className="text-festival-accent" />
                <span>{day}</span>
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <div 
                key={artist.id}
                className="group hover-card overflow-hidden rounded-lg"
                style={{ 
                  opacity: 0, 
                  animation: 'fade-in 0.5s forwards', 
                  animationDelay: `${0.05 * index}s` 
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-festival-accent uppercase tracking-wider">
                        {artist.category}
                      </span>
                      <span className="text-xs bg-white/10 backdrop-blur-sm py-1 px-2 rounded">
                        {artist.day}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-festival-accent transition-colors duration-300 mb-3">
                      {artist.name}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-festival-accent" />
                        <span>{artist.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-festival-accent rounded-full"></span>
                        <span>{artist.stage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 glass-panel p-8 md:p-10">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">Stages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <div 
                  key={stage}
                  className="bg-white/5 rounded-lg p-6 border border-white/5 transition-all duration-300 hover:border-festival-accent/30 hover:bg-white/10"
                  style={{ 
                    opacity: 0, 
                    animation: 'fade-in 0.5s forwards', 
                    animationDelay: `${0.1 * index}s` 
                  }}
                >
                  <h3 className="text-xl font-medium mb-4">{stage}</h3>
                  <p className="text-white/60 text-sm">
                    {stage === "Main Stage" && "Our largest stage featuring headliners with incredible production."}
                    {stage === "Techno Arena" && "Dedicated to the best techno artists with immersive visuals."}
                    {stage === "Bass Garden" && "Heavy bass music in an outdoor garden setting."}
                    {stage === "Chill Zone" && "Downtempo and ambient sounds in a relaxed atmosphere."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Lineup;
