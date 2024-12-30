import React from 'react';

export function HomePartners() {
  const partners = [
    { name: "DHL", logo: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=150" },
    { name: "Maersk", logo: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?auto=format&fit=crop&q=80&w=150" },
    { name: "FedEx", logo: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&q=80&w=150" },
    { name: "UPS", logo: "https://images.unsplash.com/photo-1624921244388-a9e2409abcb2?auto=format&fit=crop&q=80&w=150" },
    { name: "DB Schenker", logo: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&fit=crop&q=80&w=150" },
    { name: "Kuehne+Nagel", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=150" }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}