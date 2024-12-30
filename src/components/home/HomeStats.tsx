import React from 'react';
import { Truck, Package, Globe2, Users } from 'lucide-react';

export function HomeStats() {
  const stats = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Modern Fleet",
      description: "State-of-the-art vehicles equipped with advanced tracking systems",
      value: "500+"
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Successful Deliveries",
      description: "Consistently delivering excellence across all shipments",
      value: "1M+"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      title: "Global Coverage",
      description: "Extensive network reaching across multiple continents",
      value: "30+"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Satisfied Clients",
      description: "Building lasting relationships through exceptional service",
      value: "10K+"
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Karastathis?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-lg bg-[#1e2738] mb-4 group-hover:glow-primary transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400 mb-4">{stat.description}</p>
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}