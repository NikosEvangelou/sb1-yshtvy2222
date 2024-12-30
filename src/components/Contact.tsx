import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-20 bg-[#0a0f1a]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-[#1e2738] group-hover:glow-primary transition-all duration-300">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <span className="ml-3 text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-[#1e2738] group-hover:glow-primary transition-all duration-300">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="ml-3 text-gray-300">info@karastathis.com</span>
            </div>
            <div className="flex items-center p-6 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-[#1e2738] group-hover:glow-primary transition-all duration-300">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="ml-3 text-gray-300">123 Logistics Avenue, Transport City, TC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}