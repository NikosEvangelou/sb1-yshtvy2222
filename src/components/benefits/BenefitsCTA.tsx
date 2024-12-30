import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BenefitsCTA() {
  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied clients who trust Karastathis Transport for their logistics needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#09a2ae] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}