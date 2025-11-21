import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection({ blogPosts }) {
  const posts = blogPosts || [
    {
      id: "1",
      slug: "role-of-iot-integration-smart-enterprises",
      title: "The Role of IoT Integration in Smart Enterprises",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    },
    {
      id: "2",
      slug: "leveraging-genai-business-innovation-real-world-applications",
      title:
        "Leveraging GenAI for Business Innovation: Real-World Applications",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    },
    {
      id: "3",
      slug: "modernizing-legacy-systems-roadmap-seamless-transition",
      title: "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-theme-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Blog</span>
          </div>
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends and insights in software
            development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug || post.id}`}
              className="card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-theme-black text-theme-white px-2 py-1 rounded-full text-xs font-medium mb-3">
                  {post.category}
                </div>
                <h3 className="text-lg font-semibold text-theme-black mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center">
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="/blog" className="btn-primary inline-flex items-center">
            View All Posts
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
