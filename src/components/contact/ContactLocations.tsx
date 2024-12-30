import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactLocations() {
  const locations = [
    {
      city: "New York",
      address: "123 Logistics Avenue, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@karastathis.com",
      hours: "24/7"
    },
    {
      city: "London",
      address: "456 Transport Street, London EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@karastathis.com",
      hours: "24/7"
    },
    {
      city: "Singapore",
      address: "789 Shipping Road, Singapore 018956",
      phone: "+65 6789 0123",
      email: "singapore@karastathis.com",
      hours: "24/7"
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#141b2d] rounded-lg border border-gray-800 p-6 hover:border-primary transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-[#1e2738] group-hover:glow-primary transition-all duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">{location.city}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400">{location.address}</p>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  {location.phone}
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  {location.email}
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  {location.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}