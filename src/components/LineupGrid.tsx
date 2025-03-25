
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowUpRight } from 'lucide-react';

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

  // Ref for each card to apply tilt effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up tilt effect
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement, index: number) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.transition = 'none';
      
      // Add glow effect based on mouse position
      const imageEl = card.querySelector('.artist-image') as HTMLElement;
      if (imageEl) {
        const gradientX = ((x / rect.width) * 100);
        const gradientY = ((y / rect.height) * 100);
        imageEl.style.backgroundImage = `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
          radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 92, 53, 0.3), transparent 50%),
          url(${artists[index].image})
        `;
      }
    };
    
    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease';
      
      // Reset image
      const imageEl = card.querySelector('.artist-image') as HTMLElement;
      if (imageEl) {
        imageEl.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageEl.getAttribute('data-image')})`;
      }
    };
    
    cards.forEach((card, index) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card, index));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
      }
    });
    
    return () => {
      cards.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, card, index));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
        }
      });
    };
  }, [artists]);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="py-20 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,58,255,0.05)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <AnimatedText
          text="LINEUP"
          element="h2"
          className="section-heading text-center text-gradient mb-16"
          animation="blur-in"
          splitType="chars"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={artist.id}
              ref={(el) => cardRefs.current[index] = el}
              className="fade-up group overflow-hidden rounded-lg cursor-pointer"
              style={{ 
                transitionDelay: `${0.1 * index}s`,
                transform: 'perspective(1000px)'
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div 
                  className="artist-image w-full h-full bg-cover bg-center"
                  data-image={artist.image}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${artist.image})`,
                    transition: 'all 0.5s ease'
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <span className="text-xs font-medium text-festival-accent uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {artist.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-festival-accent transition-colors duration-300">
                        {artist.name}
                      </h3>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-festival-accent" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="marquee-container mt-20 mb-6 overflow-hidden">
          <div className="marquee-content py-2 opacity-20">
            {Array(10).fill("MORE ARTISTS TO BE ANNOUNCED").map((text, index) => (
              <span key={index} className="text-2xl font-display font-bold mx-6 uppercase tracking-widest">
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
