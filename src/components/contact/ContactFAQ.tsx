import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function ContactFAQ() {
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We operate globally with a strong presence in North America, Europe, and Asia. Our network allows us to provide comprehensive logistics solutions worldwide."
    },
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment through our online tracking system using your tracking number. We provide real-time updates on your cargo's location and status."
    },
    {
      question: "What types of cargo do you handle?",
      answer: "We handle various types of cargo including general freight, temperature-controlled goods, hazardous materials, and oversized cargo. Each type is managed with appropriate care and expertise."
    },
    {
      question: "How do I get a quote?",
      answer: "You can request a quote through our online form, by email, or by calling our customer service. We'll provide a detailed quote based on your specific requirements."
    }
  ];

  return (
    <div className="py-16" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  <Plus className="hidden group-open:block w-5 h-5 text-[#2B7582]" />
                  <Minus className="block group-open:hidden w-5 h-5 text-[#2B7582]" />
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}