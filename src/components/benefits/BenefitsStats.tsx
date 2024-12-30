import React from 'react';

export function BenefitsStats() {
  const stats = [
    { label: "On-Time Delivery", value: 99.8, color: "#2B7582" },
    { label: "Customer Satisfaction", value: 98.5, color: "#2B7582" },
    { label: "Fleet Reliability", value: 99.2, color: "#2B7582" },
    { label: "Safety Rating", value: 99.5, color: "#2B7582" }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="8"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - stat.value / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    style={{
                      filter: `drop-shadow(0 0 6px ${stat.color}40)`
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#2B7582] font-cambria">{stat.value}%</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white text-center">{stat.label}</h3>
            </div>
          ))}
        </div>
        <p className="text-text text-center mt-12">
          Based on data collected from over 100,000 deliveries in the past year
        </p>
      </div>
    </div>
  );
}