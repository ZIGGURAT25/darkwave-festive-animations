
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Calendar, MapPin, Music, Sparkles, Utensils, Users } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Music className="text-festival-accent" size={24} />,
      title: "World-Class Artists",
      description: "Experience performances from the biggest names in electronic music across multiple stages."
    },
    {
      icon: <Sparkles className="text-festival-accent" size={24} />,
      title: "Immersive Production",
      description: "State-of-the-art light shows, sound systems, and visual effects create an unforgettable atmosphere."
    },
    {
      icon: <Utensils className="text-festival-accent" size={24} />,
      title: "Culinary Experience",
      description: "Enjoy a diverse range of food and beverages from local and international vendors."
    },
    {
      icon: <Users className="text-festival-accent" size={24} />,
      title: "Vibrant Community",
      description: "Connect with like-minded music lovers in a welcoming and inclusive environment."
    }
  ];

  return (
    <div className="min-h-screen bg-festival-darker">
      <Navbar />
      
      <section className="pt-36 pb-16 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-festival-accent/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <AnimatedText
              text="ABOUT THE FESTIVAL"
              element="h1"
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
              animation="blur-in"
              splitType="chars"
            />
            
            <AnimatedText
              text="RechargeFest is more than just a music festival - it's a celebration of electronic music culture in a breathtaking setting."
              element="p"
              className="text-lg text-white/80"
              animation="fade-in"
              delay={0.3}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
            <div className="md:w-1/2 order-2 md:order-1">
              <AnimatedText
                text="OUR STORY"
                element="h2"
                className="text-gradient section-heading"
                animation="slide-up"
                splitType="words"
              />
              
              <AnimatedText
                text="Founded in 2019, RechargeFest quickly established itself as India's premier electronic music festival. Our mission is to create an immersive experience that brings together music, art, and technology in perfect harmony."
                element="p"
                className="text-lg text-white/80 mb-6"
                animation="fade-in"
                delay={0.3}
              />
              
              <AnimatedText
                text="Each year, we strive to push boundaries and exceed expectations, creating unforgettable moments for our attendees. From world-class production to curated lineups featuring the best electronic artists, every aspect of RechargeFest is designed with passion and attention to detail."
                element="p"
                className="text-lg text-white/80"
                animation="fade-in"
                delay={0.4}
              />
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop" 
                    alt="Festival crowd" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-panel py-3 px-6 flex items-center gap-2">
                  <Calendar className="text-festival-accent" size={20} />
                  <span>October 15-17, 2024</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 md:p-10 mb-20">
            <h2 className="text-2xl font-display font-bold mb-10 text-center">Why RechargeFest?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-6"
                  style={{ 
                    opacity: 0, 
                    animation: 'fade-in 0.5s forwards', 
                    animationDelay: `${0.1 * index}s` 
                  }}
                >
                  <div className="bg-white/5 p-4 rounded-full h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative bg-festival-dark rounded-lg overflow-hidden mb-20">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=2670&auto=format&fit=crop" 
                alt="Festival venue" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Venue</h2>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                RechargeFest takes place in a stunning outdoor venue in Bangalore, offering breathtaking views and ample space for multiple stages and art installations.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-white/10 py-3 px-6 rounded-full">
                <MapPin className="text-festival-accent" size={20} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                { question: "What are the festival dates?", answer: "RechargeFest will take place from October 15-17, 2024." },
                { question: "Is there accommodation available?", answer: "Yes, we offer camping options as well as partnerships with nearby hotels. More details available on the tickets page." },
                { question: "What is the age restriction?", answer: "RechargeFest is an 18+ event. Valid ID will be required for entry." },
                { question: "Can I bring my own food and drinks?", answer: "Outside food and drinks are not permitted. There will be a wide variety of food and beverage options available for purchase inside the festival." },
                { question: "What should I bring?", answer: "We recommend comfortable clothing, sunscreen, a refillable water bottle, and your festival ticket. A detailed list will be emailed to ticket holders." }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-6 text-left"
                  style={{ 
                    opacity: 0, 
                    animation: 'fade-in 0.5s forwards', 
                    animationDelay: `${0.1 * index}s` 
                  }}
                >
                  <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                  <p className="text-white/60">{faq.answer}</p>
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

export default About;
