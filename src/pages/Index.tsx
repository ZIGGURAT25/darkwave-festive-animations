
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import LineupGrid from '../components/LineupGrid';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-festival-darker">
      <HeroSection />
      
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-festival-accent/5 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" 
                  alt="Festival experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-festival-darker via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <AnimatedText
                text="THE EXPERIENCE"
                element="h2"
                className="text-gradient section-heading"
                animation="slide-up"
                splitType="words"
              />
              
              <AnimatedText
                text="Recharge Fest is not just a music festival, it's an immersive experience that brings together the world's best electronic artists in a breathtaking setting."
                element="p"
                className="text-lg text-white/80 mb-6"
                animation="fade-in"
                delay={0.3}
              />
              
              <AnimatedText
                text="From mesmerizing light shows to cutting-edge sound systems, every aspect of the festival is designed to create an unforgettable journey for music lovers."
                element="p"
                className="text-lg text-white/80 mb-8"
                animation="fade-in"
                delay={0.4}
              />
              
              <Link to="/about" className="button-secondary">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <LineupGrid />
      
      <section className="py-20 px-6 md:px-10 bg-festival-dark relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="GET YOUR TICKETS"
              element="h2"
              className="section-heading text-gradient"
              animation="blur-in"
              splitType="chars"
            />
            
            <AnimatedText
              text="Early bird tickets are now available. Don't miss your chance to be part of this incredible experience."
              element="p"
              className="text-lg text-white/80 mb-10"
              animation="fade-in"
              delay={0.3}
            />
            
            <div className="glass-panel p-8 md:p-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-medium mb-2">Regular Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$199</p>
                  <p className="text-white/60 text-sm mb-6">General admission for three days</p>
                  <Link to="/tickets" className="button-secondary w-full justify-center">Get Tickets</Link>
                </div>
                
                <div className="bg-festival-accent/20 rounded-lg p-6 relative transition-transform duration-300 hover:transform hover:scale-105 border border-festival-accent/20">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-festival-accent text-white text-xs font-medium py-1 px-3 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-medium mb-2">VIP Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$349</p>
                  <p className="text-white/60 text-sm mb-6">VIP access with exclusive areas</p>
                  <Link to="/tickets" className="button-primary w-full justify-center">Get Tickets</Link>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-medium mb-2">Premium Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$499</p>
                  <p className="text-white/60 text-sm mb-6">All access with backstage perks</p>
                  <Link to="/tickets" className="button-secondary w-full justify-center">Get Tickets</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
