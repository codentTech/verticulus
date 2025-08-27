import React from 'react'
import { Users, Clock, Zap } from 'lucide-react'

interface Award {
  name: string
  icon: string
}

interface Stat {
  number: string
  label: string
  icon: any
}

interface AwardsSectionProps {
  awards: Award[]
  stats: Stat[]
}

export default function AwardsSection({ awards, stats }: AwardsSectionProps) {
  return (
    <section className="bg-theme-dark py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-400 mb-2">Achievements</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-theme-light mb-4">
            Awards & Certifications.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition of our expertise and commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{award.icon}</div>
              <span className="text-theme-light text-sm">{award.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-theme-light mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
