
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Check, Info } from 'lucide-react';

const Tickets: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketTypes = [
    {
      id: "regular",
      name: "Regular Pass",
      price: 199,
      description: "General admission for all three days",
      features: [
        "Access to all main stages",
        "General festival grounds access",
        "Food and drink vendors",
        "Basic restroom facilities"
      ]
    },
    {
      id: "vip",
      name: "VIP Pass",
      price: 349,
      description: "Enhanced experience with exclusive areas",
      features: [
        "Everything in Regular Pass",
        "VIP viewing areas at main stages",
        "VIP-only bars and lounges",
        "Premium restroom facilities",
        "Fast-track entry"
      ],
      highlighted: true
    },
    {
      id: "premium",
      name: "Premium Pass",
      price: 499,
      description: "Ultimate festival experience with backstage access",
      features: [
        "Everything in VIP Pass",
        "Backstage access to selected stages",
        "Complimentary food and drinks",
        "Artist meet & greet opportunities",
        "Exclusive merchandise pack",
        "Private lounge areas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-festival-darker">
      <Navbar />
      
      <section className="pt-36 pb-16 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-festival-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-festival-highlight/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-block bg-festival-accent/80 text-white text-sm font-medium py-2 px-4 rounded-full mb-8 backdrop-blur-sm animate-pulse">
              Early Bird Tickets Now Available
            </div>
            
            <AnimatedText
              text="GET YOUR TICKETS"
              element="h1"
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
              animation="blur-in"
              splitType="chars"
            />
            
            <AnimatedText
              text="Secure your spot at India's premier electronic music festival. Early bird tickets are limited!"
              element="p"
              className="text-lg text-white/80"
              animation="fade-in"
              delay={0.3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {ticketTypes.map((ticket, index) => (
              <div 
                key={ticket.id}
                className={`rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer ${
                  selectedTicket === ticket.id
                    ? 'border-2 border-festival-accent bg-white/5'
                    : ticket.highlighted
                    ? 'bg-festival-accent/10 border border-festival-accent/20'
                    : 'bg-white/5 border border-white/5'
                }`}
                onClick={() => setSelectedTicket(ticket.id)}
                style={{ 
                  opacity: 0, 
                  animation: 'fade-in 0.5s forwards', 
                  animationDelay: `${0.1 * index}s` 
                }}
              >
                {ticket.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-festival-accent text-white text-xs font-medium py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold mb-2">{ticket.name}</h3>
                <p className="text-4xl font-display font-bold mb-4">${ticket.price}</p>
                <p className="text-white/60 text-sm mb-6">{ticket.description}</p>
                
                <div className="space-y-3 mb-6">
                  {ticket.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-festival-accent mt-0.5" size={16} />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 rounded-md transition-colors duration-300 ${
                    selectedTicket === ticket.id
                      ? 'bg-festival-accent text-white'
                      : ticket.highlighted
                      ? 'bg-festival-accent/80 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {selectedTicket === ticket.id ? 'Selected' : 'Select'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="glass-panel p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-display font-bold mb-8">Ticket Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-full h-fit">
                    <Info className="text-festival-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">What's Included</h3>
                    <p className="text-white/60 text-sm">
                      All tickets include access to the festival for all three days (October 15-17, 2024), with varying levels of amenities based on ticket type.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-full h-fit">
                    <Info className="text-festival-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Refund Policy</h3>
                    <p className="text-white/60 text-sm">
                      Tickets are non-refundable. However, tickets can be transferred to another person up to 30 days before the event.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-full h-fit">
                    <Info className="text-festival-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Age Restrictions</h3>
                    <p className="text-white/60 text-sm">
                      RechargeFest is strictly an 18+ event. Valid government-issued photo ID will be required for entry.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-full h-fit">
                    <Info className="text-festival-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Ticket Delivery</h3>
                    <p className="text-white/60 text-sm">
                      E-tickets will be sent to your email address after purchase. Physical wristbands can be collected at the box office with your e-ticket and ID.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-white/5 rounded-lg p-8 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-festival-accent/10 to-festival-highlight/10 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-4">Group Packages</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Coming with friends? Save with our group packages! Get special rates when booking 5 or more tickets together.
              </p>
              <button className="button-primary">
                Inquire About Group Rates
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Accommodation</h2>
              <p className="text-white/80 mb-6">
                We offer camping options within the festival grounds, as well as partnerships with nearby hotels for those who prefer a more comfortable stay.
              </p>
              <button className="button-secondary">
                View Accommodation Options
              </button>
            </div>
            
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Transportation</h2>
              <p className="text-white/80 mb-6">
                Shuttle services will be available from major transport hubs in Bangalore. Parking passes are also available for those driving to the venue.
              </p>
              <button className="button-secondary">
                View Transportation Options
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tickets;
