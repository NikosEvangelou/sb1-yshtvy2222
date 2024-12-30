import React from 'react';
import { Check } from 'lucide-react';

export function ServicePricing() {
  const plans = [
    {
      name: "Standard",
      price: "Contact Us",
      features: [
        "Up to 5 tons cargo",
        "Standard delivery time",
        "Basic tracking",
        "Email support",
        "Insurance included"
      ]
    },
    {
      name: "Premium",
      price: "Contact Us",
      features: [
        "Up to 20 tons cargo",
        "Express delivery options",
        "Real-time GPS tracking",
        "24/7 phone support",
        "Premium insurance coverage",
        "Priority handling"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited cargo capacity",
        "Custom delivery schedules",
        "Advanced fleet management",
        "Dedicated account manager",
        "Comprehensive insurance",
        "Custom solutions",
        "API integration"
      ]
    }
  ];

  return (
    <div className="py-16" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}