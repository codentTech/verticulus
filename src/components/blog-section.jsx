import React from "react";

export default function BlogSection({ blogPosts }) {
  return (
    <section className="bg-theme-light py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Blog</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Latest from Verticulus
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Insights, tutorials, and industry updates from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Blog Image</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-theme-dark mt-2">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
