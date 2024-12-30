import React from 'react';
import { Shield, Globe2, Clock, Leaf } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Transport",
      description: "State-of-the-art security for your valuable cargo"
    },
    {
      icon: <Globe2 className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      description: "Extensive network across key global routes"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Service",
      description: "Round-the-clock support and monitoring"
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Eco-Conscious",
      description: "Sustainable practices for a greener future"
    }
  ];

  return (
    <div className="py-24 bg-[#0a0f1a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-lg bg-[#1e2738] mb-4 group-hover:glow-primary transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}