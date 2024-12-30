import React from 'react';
import { Hero } from '../components/Hero';
import { HomeStats } from '../components/home/HomeStats';
import { HomeServices } from '../components/home/HomeServices';
import { HomeTestimonials } from '../components/home/HomeTestimonials';
import { HomeContact } from '../components/home/HomeContact';

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeStats />
      <HomeServices />
      <HomeTestimonials />
      <HomeContact />
    </>
  );
}