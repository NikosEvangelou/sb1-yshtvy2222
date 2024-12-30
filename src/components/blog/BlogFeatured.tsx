import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function BlogFeatured() {
  return (
    <div className="py-16 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Article</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8"
              alt="Featured Article"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-4 text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Future of Sustainable Logistics: Innovations Shaping Tomorrow
            </h3>
            <p className="text-gray-400 mb-6">
              Explore how emerging technologies and sustainable practices are transforming the logistics industry, 
              from electric vehicles to AI-powered route optimization.
            </p>
            <Button variant="primary">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}