import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogCategories } from '../components/blog/BlogCategories';
import { BlogNewsletter } from '../components/blog/BlogNewsletter';
import { BlogFeatured } from '../components/blog/BlogFeatured';

export function BlogPage() {
  return (
    <div className="pt-32">
      <BlogHero />
      <BlogCategories />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}