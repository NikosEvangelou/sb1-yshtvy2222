import React from 'react';
import { BenefitsHero } from '../components/benefits/BenefitsHero';
import { BenefitsGrid } from '../components/benefits/BenefitsGrid';
import { BenefitsStats } from '../components/benefits/BenefitsStats';
import { BenefitsTestimonials } from '../components/benefits/BenefitsTestimonials';
import { BenefitsCTA } from '../components/benefits/BenefitsCTA';

export function BenefitsPage() {
  return (
    <div className="pt-32">
      <BenefitsHero />
      <BenefitsGrid />
      <BenefitsStats />
      <BenefitsTestimonials />
      <BenefitsCTA />
    </div>
  );
}