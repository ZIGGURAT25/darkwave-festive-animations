
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import LineupGrid from '../components/LineupGrid';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import ScrollReveal from '../components/animations/ScrollReveal';
import ParallaxLayer from '../components/animations/ParallaxLayer';
import RotatingCube from '../components/animations/RotatingCube';
import { Link } from 'react-router-dom';
import { ArrowRight, HeadphonesIcon, User, Music, Calendar } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set up intersection observer for scroll animations
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
    <div className="min-h-screen bg-festival-darker">
      <HeroSection />
      
      {/* Experience section with 3D elements */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <ParallaxLayer speed={-0.2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] bg-festival-accent/5 rounded-full blur-[150px]"></div>
        </ParallaxLayer>
        
        <RotatingCube 
          size={200} 
          position={{ top: '10%', right: '5%' }}
          colors={['rgba(255, 92, 53, 0.2)', 'rgba(110, 58, 255, 0.2)']}
          speed={5}
        />
        
        <RotatingCube 
          size={120} 
          position={{ bottom: '15%', left: '10%' }}
          colors={['rgba(110, 58, 255, 0.2)', 'rgba(255, 92, 53, 0.2)']}
          speed={3}
        />
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal
            threshold={0.1}
            origin="left"
            distance={50}
            duration={1000}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
          >
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden aspect-video neo-glass hover:-rotate-2 transition-all duration-700 transform-gpu">
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
              
              <Link to="/about" className="button-neo-secondary group">
                Learn More <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Features section with Ziggurat-style cards */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="container mx-auto">
          <AnimatedText
            text="FESTIVAL HIGHLIGHTS"
            element="h2"
            className="section-heading text-center text-gradient mb-16"
            animation="blur-in"
            splitType="chars"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <HeadphonesIcon size={40} className="text-festival-accent" />, 
                title: "World-Class Sound", 
                desc: "Experience crystal clear audio with our state-of-the-art sound systems" 
              },
              { 
                icon: <User size={40} className="text-festival-accent" />, 
                title: "Global Artists", 
                desc: "Top electronic music talent from around the world on multiple stages" 
              },
              { 
                icon: <Music size={40} className="text-festival-accent" />, 
                title: "Immersive Visuals", 
                desc: "Cutting-edge light shows and visual installations throughout the venue" 
              }
            ].map((feature, i) => (
              <div key={i} className="fade-up neo-glass p-8 flex flex-col items-center text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mb-5 relative">
                  {feature.icon}
                  <div className="absolute -inset-4 bg-festival-accent/10 rounded-full blur-xl -z-10 animate-pulse-glow"></div>
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LineupGrid />
      
      {/* Tickets section with Ziggurat styling */}
      <section className="py-20 px-6 md:px-10 bg-festival-dark relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute -top-20 right-0">
          <div className="w-[500px] h-[500px] bg-festival-accent/5 rounded-full blur-[100px]"></div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={-0.1} className="absolute -bottom-20 left-0">
          <div className="w-[400px] h-[400px] bg-festival-highlight/5 rounded-full blur-[120px]"></div>
        </ParallaxLayer>
        
        <div className="absolute top-0 right-0 w-full h-full grid-bg opacity-10"></div>
        
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
            
            <div className="fade-up neo-glass p-8 md:p-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="neo-glass p-6 transition-all duration-500 hover:transform hover:scale-105">
                  <h3 className="text-xl font-medium mb-2">Regular Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4 text-gradient">$199</p>
                  <p className="text-white/60 text-sm mb-6">General admission for three days</p>
                  <Link to="/tickets" className="button-neo-secondary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="neo-glass p-6 relative border border-festival-accent/20 glow">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-festival-accent text-white text-xs font-medium py-1 px-3 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-medium mb-2">VIP Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4 text-gradient">$349</p>
                  <p className="text-white/60 text-sm mb-6">VIP access with exclusive areas</p>
                  <Link to="/tickets" className="button-neo-primary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="neo-glass p-6 transition-all duration-500 hover:transform hover:scale-105">
                  <h3 className="text-xl font-medium mb-2">Premium Pass</h3>
                  <p className="text-3xl font-display font-bold mb-4 text-gradient">$499</p>
                  <p className="text-white/60 text-sm mb-6">All access with backstage perks</p>
                  <Link to="/tickets" className="button-neo-secondary w-full justify-center group">
                    Get Tickets <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Countdown timer */}
            <div className="mt-16 fade-up">
              <h3 className="text-xl font-medium mb-6">EVENT STARTS IN</h3>
              <div className="flex justify-center gap-4">
                {[
                  { value: "45", label: "DAYS" },
                  { value: "12", label: "HOURS" },
                  { value: "34", label: "MINS" },
                  { value: "56", label: "SECS" }
                ].map((item, i) => (
                  <div key={i} className="neo-glass py-4 px-6 flex flex-col items-center min-w-[90px]">
                    <span className="text-2xl font-display font-bold">{item.value}</span>
                    <span className="text-xs text-white/60">{item.label}</span>
                  </div>
                ))}
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
