import React from "react";
import { Users, Clock, Zap } from "lucide-react";

export default function AwardsSection({ awards, stats }) {
  const defaultAwards = awards || [
    { name: "Clutch", icon: "🏆" },
    { name: "Clutch", icon: "🏆" },
    { name: "Clutch", icon: "🏆" },
    { name: "Upwork Top Rated Plus", icon: "⭐" },
    { name: "AWS Solutions Architect", icon: "☁️" },
    { name: "AWS Machine Learning", icon: "🤖" },
    { name: "AWS DevOps Engineer", icon: "⚙️" },
  ];

  const defaultStats = stats || [
    { number: "70+", label: "Successful Projects", icon: Users },
    { number: "200k+", label: "Development Hours", icon: Clock },
    { number: "52+", label: "Global Teams", icon: Users },
    { number: "10M+", label: "Active Product Users", icon: Zap },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full mb-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="text-sm font-medium text-gray-200">
              Achievements
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-theme-light mb-3">
            Awards & Certifications
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Recognition of our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {defaultAwards.map((award, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{award.icon}</div>
              <span className="text-theme-light text-sm">{award.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {defaultStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-theme-light mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
