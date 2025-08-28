import React from 'react'

export default function ProductShowcase() {
  return (
    <section className="bg-theme-light py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Demo</span>
          </div>
          <h2 className="section-title">
            See Our Platform in Action
          </h2>
          <p className="section-subtitle">
            Watch how our innovative solutions transform your business operations and drive real results.
          </p>
        </div>

        {/* Full Width Video Container */}
        <div className="w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/SzMiJFOa6w8?si=-o6jCvTJZmKL_I6h&autoplay=1&mute=1&loop=1&playlist=SzMiJFOa6w8&controls=1&rel=0&modestbranding=1"
              title="Product Showcase Video"
              className="w-full h-full absolute inset-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Call to Action Below Video */}
        <div className="text-center mt-12">
          <p className="text-lg text-theme-gray-600 mb-6">
            Ready to experience the future of business technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started Today
            </button>
            <button className="btn-outline">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}