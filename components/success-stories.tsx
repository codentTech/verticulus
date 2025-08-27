import React from 'react'

interface CaseStudy {
  image: string
  title: string
  client: string
  stats: Array<{
    label: string
    value: string
  }>
}

interface SuccessStoriesProps {
  caseStudies: CaseStudy[]
}

export default function SuccessStories({ caseStudies }: SuccessStoriesProps) {
  return (
    <section className="bg-theme-light py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-4">
            Success Stories.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects with real clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Case Study Image</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-dark mb-4">{study.title}</h3>
              <p className="text-gray-600 mb-4">Client: {study.client}</p>
              <div className="grid grid-cols-2 gap-4">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
