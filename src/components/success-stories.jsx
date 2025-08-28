import React from "react";

export default function SuccessStories({ caseStudies }) {
  return (
    <section className="bg-theme-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Results</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-theme-dark mb-3">
            Success Stories
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Real results from real projects with real clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Case Study Image</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-dark mb-4">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4">Client: {study.client}</p>
              <div className="grid grid-cols-2 gap-4">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
