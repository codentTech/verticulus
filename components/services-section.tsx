import React from 'react'

interface Service {
  icon: string
  title: string
  description: string
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="bg-theme-light py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Featured Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-4">
            What We Do Best.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-theme-dark mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
