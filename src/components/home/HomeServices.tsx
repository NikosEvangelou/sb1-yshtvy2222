import React from 'react';
import { Truck, Clock, Shield, HeartHandshake } from 'lucide-react';
import { Box } from '../ui/Box';

export function HomeServices() {
  const services = [
    {
      icon: <Truck />,
      title: "Modern Fleet",
      description: "State-of-the-art vehicles equipped with advanced tracking systems"
    },
    {
      icon: <Clock />,
      title: "Express Delivery",
      description: "Time-critical shipments delivered with precision and speed"
    },
    {
      icon: <Shield />,
      title: "Secure Transport",
      description: "Advanced security measures for valuable cargo protection"
    },
    {
      icon: <HeartHandshake />,
      title: "Customer Focus",
      description: "Dedicated support team available 24/7 for your needs"
    }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Box key={index}>
              <div className="w-12 h-12 bg-[#2B7582] rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
}