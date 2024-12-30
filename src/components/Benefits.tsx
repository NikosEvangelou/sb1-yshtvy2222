import React from 'react';
import { Award, Clock, Truck, Users } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-text" />,
      title: "50+ Years of Excellence",
      description: "Trusted by businesses since 1970, delivering unmatched expertise in logistics."
    },
    {
      icon: <Clock className="w-6 h-6 text-text" />,
      title: "On-Time, Every Time",
      description: "99.8% on-time delivery rate, ensuring your cargo arrives exactly when promised."
    },
    {
      icon: <Truck className="w-6 h-6 text-text" />,
      title: "Modern Fleet",
      description: "State-of-the-art vehicles equipped with advanced tracking and temperature control."
    },
    {
      icon: <Users className="w-6 h-6 text-text" />,
      title: "Expert Team",
      description: "Highly trained professionals dedicated to the safety and security of your cargo."
    }
  ];

  return (
    <div className="relative py-16" style={{ backgroundColor: 'rgb(3, 3, 3)' }} id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-text text-center mb-12">Why Choose Us</h2>
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative p-6 bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-lg hover:border-gray-700 transition-colors flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary shadow-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium text-text mb-2">{benefit.title}</h3>
                <p className="text-text/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}