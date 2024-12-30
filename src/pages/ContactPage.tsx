import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactLocations } from '../components/contact/ContactLocations';
import { ContactFAQ } from '../components/contact/ContactFAQ';
import { ContactCTA } from '../components/contact/ContactCTA';

export function ContactPage() {
  return (
    <div className="pt-32">
      <ContactHero />
      <ContactForm />
      <ContactLocations />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}