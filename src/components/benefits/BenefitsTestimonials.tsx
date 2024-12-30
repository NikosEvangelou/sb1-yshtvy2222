import React from 'react';
import { Star } from 'lucide-react';

export function BenefitsTestimonials() {
  const testimonials = [
    {
      content: "Karastathis Transport has consistently exceeded our expectations with their reliable service and professional team.",
      author: "Michael Brown",
      role: "Supply Chain Director",
      company: "Global Manufacturing Co."
    },
    {
      content: "Their commitment to excellence and customer satisfaction is unmatched in the industry.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      company: "Retail Solutions Inc."
    }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#09a2ae] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6">{testimonial.content}</p>
              <div>
                <div className="text-white font-medium">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.role}</div>
                <div className="text-gray-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}