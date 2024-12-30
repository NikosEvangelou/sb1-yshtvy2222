import React from 'react';
import { Truck, Ship, Plane, Package, Leaf, Globe2, Shield, Settings } from 'lucide-react';

export function BlogCategories() {
  const categories = [
    { icon: <Truck className="h-6 w-6" />, name: "Road Transport" },
    { icon: <Ship className="h-6 w-6" />, name: "Maritime" },
    { icon: <Plane className="h-6 w-6" />, name: "Air Freight" },
    { icon: <Package className="h-6 w-6" />, name: "Warehousing" },
    { icon: <Leaf className="h-6 w-6" />, name: "Sustainability" },
    { icon: <Globe2 className="h-6 w-6" />, name: "Global Trade" },
    { icon: <Shield className="h-6 w-6" />, name: "Security" },
    { icon: <Settings className="h-6 w-6" />, name: "Technology" }
  ];

  return (
    <div className="py-16 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-4 bg-[#141b2d] rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="p-2 bg-[#1e2738] rounded-lg mb-2 group-hover:glow-primary">
                {category.icon}
              </div>
              <span className="text-gray-300 text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}