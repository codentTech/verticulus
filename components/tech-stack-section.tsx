import React from 'react'

interface TechStackSectionProps {
  techStack: string[]
}

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-4">
            Yes. We Cover your Tech Stack.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From frontend to backend, mobile to cloud, we have expertise in all modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-theme-light rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <span className="text-gray-700 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
