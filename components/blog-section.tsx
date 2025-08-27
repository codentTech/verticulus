import React from 'react'

interface BlogPost {
  title: string
  category: string
  image: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <section className="bg-theme-light py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Our Blog</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest from Verticulus.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                <h3 className="text-lg font-semibold text-theme-dark mt-2">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
