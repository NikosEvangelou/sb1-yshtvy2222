import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export function ContactForm() {
  return (
    <div className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get in Touch</h2>
          <div className="bg-[#141b2d] rounded-lg border border-gray-800 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                required
              />
              <TextArea
                rows={4}
                placeholder="Your Message"
                required
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}