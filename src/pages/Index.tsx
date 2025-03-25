
import React, { useEffect } from 'react';
import Header from '../components/Header';
import LineupGrid from '../components/LineupGrid';
import Footer from '../components/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import ParallaxLayer from '../components/animations/ParallaxLayer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-festival-darker">
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 w-full h-full">
          <ParallaxLayer speed={-0.2} className="absolute top-[10%] right-[15%]">
            <div className="w-80 h-80 bg-festival-accent/10 rounded-full blur-[100px]"></div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.3} className="absolute bottom-[20%] left-[10%]">
            <div className="w-96 h-96 bg-festival-highlight/10 rounded-full blur-[120px]"></div>
          </ParallaxLayer>
        </div>
        
        {/* Grid decoration */}
        <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwOCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: 0.4 }}></div>
        
        <Header />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-1 animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
      
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <ParallaxLayer speed={-0.2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] bg-festival-accent/5 rounded-full blur-[150px]"></div>
        </ParallaxLayer>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal
            threshold={0.1}
            origin="left"
            distance={50}
            duration={1000}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
          >
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden aspect-video hover:-rotate-1 transition-transform duration-500">
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
              
              <Link to="/about" className="button-secondary group">
                Learn More <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <LineupGrid />
      
      <section className="py-20 px-6 md:px-10 bg-festival-dark relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute -top-20 right-0">
          <div className="w-[500px] h-[500px] bg-festival-accent/5 rounded-full blur-[100px]"></div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={-0.1} className="absolute -bottom-20 left-0">
          <div className="w-[400px] h-[400px] bg-festival-highlight/5 rounded-full blur-[120px]"></div>
        </ParallaxLayer>
        
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
            
            <ScrollReveal
              className="glass-panel p-8 md:p-10 mt-10"
              threshold={0.2}
              delay={200}
              staggerChildren={true}
              staggerDelay={0.15}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10">
                  <h3 className="text-xl font-medium mb-2">Regular Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$199</p>
                  <p className="text-white/60 text-sm mb-6">General admission for three days</p>
                  <Link to="/tickets" className="button-secondary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="bg-festival-accent/20 rounded-lg p-6 relative transition-all duration-500 hover:transform hover:scale-105 hover:bg-festival-accent/30 border border-festival-accent/20">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-festival-accent text-white text-xs font-medium py-1 px-3 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-medium mb-2">VIP Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$349</p>
                  <p className="text-white/60 text-sm mb-6">VIP access with exclusive areas</p>
                  <Link to="/tickets" className="button-primary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10">
                  <h3 className="text-xl font-medium mb-2">Premium Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4">$499</p>
                  <p className="text-white/60 text-sm mb-6">All access with backstage perks</p>
                  <Link to="/tickets" className="button-secondary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
