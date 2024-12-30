import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function BlogGrid() {
  const posts = [
    {
      title: "Revolutionizing Fleet Management with IoT",
      excerpt: "How Internet of Things is transforming fleet management and improving efficiency.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Green Logistics: A Sustainable Future",
      excerpt: "Exploring eco-friendly practices in modern logistics operations.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      title: "Supply Chain Resilience in 2024",
      excerpt: "Strategies for building robust and adaptable supply chains.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Industry"
    }
  ];

  return (
    <div className="py-16 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-[#141b2d] rounded-lg border border-gray-800 overflow-hidden hover:border-primary transition-all duration-300 group">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Button variant="primary" className="inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}