import React from 'react';

export function ContactHero() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#111] to-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to help with all your logistics needs. Contact us today for personalized solutions.
          </p>
        </div>
      </div>
    </div>
  );
}