import React from 'react';
import { Shield, Clock, Truck, Users, Globe2, HeartHandshake, Leaf, BadgeCheck } from 'lucide-react';

export function BenefitsGrid() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Maximum Security",
      description: "Advanced security systems and protocols to protect your cargo"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Efficiency",
      description: "Optimized routes and schedules for faster deliveries"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Modern Fleet",
      description: "State-of-the-art vehicles with latest technology"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Highly trained professionals at your service"
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Global Network",
      description: "Extensive network of partners worldwide"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Customer Focus",
      description: "Dedicated support and personalized solutions"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Commitment to sustainable practices"
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Quality Assured",
      description: "ISO certified operations and processes"
    }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 hover:border-[#09a2ae] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#09a2ae] rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}