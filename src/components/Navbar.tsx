import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';

export function NavBar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="shadow-xl rounded-[48px] bg-gradient-to-b from-[#222222]/30 to-[#3a3a3a]/30 backdrop-blur-sm max-w-7xl mx-auto transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center">
              <div className="p-2.5 rounded-full bg-gradient-to-r from-[#2B7582] to-[#2B7582]/80 shadow-lg shadow-[#2B7582]/20">
                <Truck className="h-8 w-8 text-text" />
              </div>
              <span className="ml-3 text-xl font-bold text-text">Karastathis Transport</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-text/90 hover:text-[#2B7582] transition-colors duration-300 font-medium relative group ${
                    location.pathname === item.path ? 'text-[#2B7582]' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2B7582] transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}