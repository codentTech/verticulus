"use client";

import React from "react";

export default function TechStackSection({ techStack }) {
  // Sample tech stack for demo if none provided
  const sampleTechStack =
    techStack && techStack.length > 0
      ? techStack
      : [
          "React",
          "Next.js",
          "Vue.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Node.js",
          "Python",
          "Java",
          "C#",
          "PHP",
          "Ruby",
          "Go",
          "Rust",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
        ];

  return (
    <section className="bg-theme-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Technology</span>
          </div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Frontend • Backend • Cloud • DevOps
          </p>
        </div>

        {/* Compact Auto-Scroll Carousel */}
        <div className="space-y-4">
          {/* Line 1 - Frontend */}
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-scroll-left">
              {sampleTechStack.slice(0, 8).map((tech, index) => (
                <div
                  key={index}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {sampleTechStack.slice(0, 8).map((tech, index) => (
                <div
                  key={`dup1-${index}`}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Triple for extra smoothness */}
              {sampleTechStack.slice(0, 8).map((tech, index) => (
                <div
                  key={`dup1b-${index}`}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line 2 - Backend */}
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-scroll-right">
              {sampleTechStack.slice(8, 16).map((tech, index) => (
                <div
                  key={index + 8}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {sampleTechStack.slice(8, 16).map((tech, index) => (
                <div
                  key={`dup2-${index + 8}`}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
              {/* Triple for extra smoothness */}
              {sampleTechStack.slice(8, 16).map((tech, index) => (
                <div
                  key={`dup2b-${index + 8}`}
                  className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                >
                  <span className="text-theme-gray-700 font-medium text-xs">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line 3 - Cloud & DevOps */}
          {sampleTechStack.length > 16 && (
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-scroll-left">
                {sampleTechStack.slice(16, 24).map((tech, index) => (
                  <div
                    key={index + 16}
                    className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                  >
                    <span className="text-theme-gray-700 font-medium text-xs">
                      {tech}
                    </span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {sampleTechStack.slice(16, 24).map((tech, index) => (
                  <div
                    key={`dup3-${index + 16}`}
                    className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                  >
                    <span className="text-theme-gray-700 font-medium text-xs">
                      {tech}
                    </span>
                  </div>
                ))}
                {/* Triple for extra smoothness */}
                {sampleTechStack.slice(16, 24).map((tech, index) => (
                  <div
                    key={`dup3b-${index + 16}`}
                    className="bg-theme-gray-50 rounded-lg px-3 py-2 text-center border border-theme-gray-200 flex-shrink-0 min-w-[90px] hover:bg-accent-50 hover:border-accent-200 transition-all duration-200"
                  >
                    <span className="text-theme-gray-700 font-medium text-xs">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 28s linear infinite;
        }

        /* Pause animation on hover */
        .overflow-hidden:hover .animate-scroll-left,
        .overflow-hidden:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
