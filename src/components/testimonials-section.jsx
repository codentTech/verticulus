import React from "react";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mb-3">
            They Call. We Deliver.
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-theme-gray-200"
            >
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-theme-dark">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
