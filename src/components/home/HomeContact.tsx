import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function HomeContact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@karastathis.com", "support@karastathis.com"]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Logistics Avenue", "Transport City, TC 12345"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Monday - Friday: 24/7", "Weekend: 24/7"]
    }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(3, 3, 3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Ready to optimize your logistics? Contact us today for a customized solution that meets your transportation needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary rounded-lg mr-3">
                      {info.icon}
                    </div>
                    <h3 className="text-white font-medium">{info.title}</h3>
                  </div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 ml-12">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}