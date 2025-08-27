import React from 'react'

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-8">
          Let's Build Something Extraordinary Together.
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-theme-light font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
          Get in Touch
        </button>
      </div>
    </section>
  )
}
