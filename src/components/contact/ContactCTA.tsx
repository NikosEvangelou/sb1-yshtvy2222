import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactCTA() {
  return (
    <div className="py-16" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let us help you optimize your logistics operations. Our team is ready to provide you with the best solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-primary text-white font-medium rounded-lg hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}