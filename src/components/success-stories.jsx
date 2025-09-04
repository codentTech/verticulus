import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Users, Clock } from "lucide-react";

export default function SuccessStories({ caseStudies }) {
  const displayCaseStudies = caseStudies || [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      title:
        "Developed AI-Driven Fusebox Inspection, Optimized Assembly Efficiency",
      client: "KIA",
      stats: [
        { label: "Faster Inspection", value: "12%" },
        { label: "Cost Reduction", value: "10%" },
        { label: "Accuracy Rate", value: "95%" },
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      title: "AWS Talent Augmentation & Cloud Migration",
      client: "CT Solutions",
      stats: [
        { label: "Efficiency Gain", value: "15%" },
        { label: "Uptime", value: "95%" },
        { label: "Cost Reduction", value: "30%" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-theme-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Success Stories</span>
          </div>
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Real results from real clients. See how we've helped businesses
            achieve their goals and drive growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayCaseStudies.map((study, index) => (
            <Link
              key={index}
              href={`/success-stories/${study.id}`}
              className="card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-theme-black mb-4">
                {study.title}
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-theme-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{study.client}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-accent-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-theme-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
