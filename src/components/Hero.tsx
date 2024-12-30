import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[90vh] object-cover"
          src="https://p.turbosquid.com/ts-thumb/AR/lppfee/ZQsL0B3a/2021_volvo_fh_trn/jpg/1608569740/1920x1080/turn_fit_q99/2b709360c69bcf80e1fa22e3412c13420167e33c/2021_volvo_fh_trn-14.jpg"
          alt="Volvo FH Truck"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 h-[90vh] flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-text font-georgia sm:text-5xl lg:text-6xl">
          Karastathis Transport
        </h1>
        <p className="mt-6 text-xl text-text font-georgia max-w-3xl">
          Your trusted partner in logistics since 1970. Delivering excellence with reliability, precision, and care.
        </p>
        <div className="mt-10">
          <Button as="a" href="#contact">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}