import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: "The Future of Sustainable Logistics",
      date: "March 15, 2024",
      description: "Exploring eco-friendly transportation solutions and their impact on the logistics industry.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read"
    },
    {
      title: "Innovation in Fleet Management",
      date: "March 10, 2024",
      description: "How AI and IoT are revolutionizing the way we manage transport fleets.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read"
    },
    {
      title: "Global Supply Chain Trends",
      date: "March 5, 2024",
      description: "Key insights into emerging trends shaping the future of global logistics.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="py-20 bg-[#0a0f1a]" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-[#141b2d] rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}