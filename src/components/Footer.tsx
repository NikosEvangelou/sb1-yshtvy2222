import React from 'react';
import { Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#2B7582] p-2 rounded-full">
              <Truck className="h-6 w-6 text-text" />
            </div>
            <span className="ml-2 text-text font-bold font-georgia">Karastathis Transport</span>
          </div>
          <p className="text-text mt-4 md:mt-0 font-georgia">© {new Date().getFullYear()} Karastathis Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}