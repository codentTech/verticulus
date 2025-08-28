import React from "react";
import Image from "next/image";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="bg-theme-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Testimonials</span>
          </div>
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-theme-black">{testimonial.author}</h4>
                  <p className="text-sm text-theme-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-theme-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-theme-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
