import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection({ blogPosts }) {
  const posts = blogPosts || [
    {
      title: "The Role of IoT Integration in Smart Enterprises",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    },
    {
      title: "Leveraging GenAI for Business Innovation: Real-World Applications",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    },
    {
      title: "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="bg-theme-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Blog</span>
          </div>
          <h2 className="section-title">
            Latest Insights
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest trends and insights in software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-theme-black mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <Link 
                  href="/blog" 
                  className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/blog" 
            className="btn-primary inline-flex items-center"
          >
            View All Posts
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
