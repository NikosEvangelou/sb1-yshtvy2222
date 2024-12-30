import React from 'react';
import { ClipboardCheck, PackageSearch, Timer, Truck, CheckCircle } from 'lucide-react';

export function ServiceProcess() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      title: "Book Your Service",
      description: "Simple online booking process with instant quotes"
    },
    {
      icon: <PackageSearch className="h-6 w-6 text-primary" />,
      title: "Package Processing",
      description: "Careful handling and documentation of your cargo"
    },
    {
      icon: <Timer className="h-6 w-6 text-primary" />,
      title: "Route Planning",
      description: "Optimal route selection for efficient delivery"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Transportation",
      description: "Safe and secure transport to destination"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Delivery",
      description: "On-time delivery with proof of receipt"
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#1e2738] transform -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-[#141b2d] border border-gray-800 relative z-10 group-hover:border-primary group-hover:glow-primary transition-all duration-300"
                >
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white text-center">{step.title}</h3>
                <p className="mt-2 text-gray-400 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}