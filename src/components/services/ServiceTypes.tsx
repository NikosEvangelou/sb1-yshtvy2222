import React from 'react';
import { Truck, Ship, Plane, Package } from 'lucide-react';

export function ServiceTypes() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Road Transport",
      description: "Door-to-door delivery across Europe with our modern fleet of trucks.",
      features: ["Temperature-controlled transport", "Express delivery", "Full & partial loads", "GPS tracking"]
    },
    {
      icon: <Ship className="h-8 w-8 text-primary" />,
      title: "Sea Freight",
      description: "International shipping solutions for your cargo needs.",
      features: ["Container shipping", "Bulk cargo", "Port-to-port service", "Custom clearance"]
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Air Freight",
      description: "Fast and reliable air transport services worldwide.",
      features: ["Express air freight", "Charter service", "Door-to-airport", "Dangerous goods"]
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Warehousing",
      description: "Secure storage and distribution solutions.",
      features: ["Climate control", "24/7 security", "Inventory management", "Order fulfillment"]
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#141b2d] rounded-lg border border-gray-800 p-8 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-[#1e2738] group-hover:glow-primary transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}