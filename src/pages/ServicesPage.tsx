import React from 'react';
import { ServiceHero } from '../components/services/ServiceHero';
import { Features } from '../components/Features';
import { ServiceTypes } from '../components/services/ServiceTypes';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServicePricing } from '../components/services/ServicePricing';

export function ServicesPage() {
  return (
    <div className="pt-32">
      <ServiceHero />
      <Features />
      <ServiceTypes />
      <ServiceProcess />
      <ServicePricing />
    </div>
  );
}