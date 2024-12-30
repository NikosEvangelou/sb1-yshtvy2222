import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function BlogNewsletter() {
  return (
    <div className="py-16 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141b2d] rounded-lg border border-gray-800 p-12">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-8">
              Stay updated with the latest insights and news in logistics and transportation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}