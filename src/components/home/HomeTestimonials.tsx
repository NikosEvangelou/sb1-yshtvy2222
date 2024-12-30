import React from 'react';
import { Star } from 'lucide-react';

export function HomeTestimonials() {
  const testimonials = [
    {
      content: "Excellent service, very professional and reliable. I have been working with them for years and they never let me down. The drivers are very polite and always on time. I highly recommend them.",
      author: "Dimitris Karagiannis",
      role: "Business Owner",
      company: "DK Logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Maria Garcia",
      role: "Operations Director",
      company: "Tech Solutions Inc.",
      content: "Their dedication to customer service and attention to detail sets them apart in the industry.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "David Chen",
      role: "Supply Chain Head",
      company: "Manufacturing Pro",
      content: "We've seen significant improvements in our delivery times since partnering with Karastathis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author || testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="text-white font-medium">{testimonial.author || testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}