"use client";

import React from "react";
import { Brain, Code, Search, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function ServicesSection({ services }) {
  const displayServices = services;

  return (
    <section className="py-16 bg-theme-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="category-badge">
            <div className="category-dot"></div>
            <span className="category-text">Services</span>
          </div>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            We specialize in cutting-edge technology solutions that drive
            innovation and growth for forward-thinking businesses.
          </p>
        </div>

        {/* Services Grid - | = = | Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - AI & ML */}
          <div className="lg:col-span-3">
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                  <div className="text-accent-600">
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-theme-black">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-theme-gray-600 text-sm leading-relaxed mb-4">
                Custom AI solutions, predictive analytics and machine learning
                models that transform your business operations efficiently. We
                develop intelligent automation systems using Python, TensorFlow,
                and OpenAI technologies for growth and innovation excellence
                solutions worldwide.
              </p>
              <div className="w-full h-56 bg-theme-black rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Animated AI Brain */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="w-16 h-16 bg-accent-400 rounded-full shadow-lg"
                      style={{ animation: "pulse 3s ease-in-out infinite" }}
                    ></div>
                    <div
                      className="absolute inset-0 w-16 h-16 border-2 border-accent-300 rounded-full"
                      style={{ animation: "ping 4s ease-in-out infinite" }}
                    ></div>
                    <div
                      className="absolute inset-0 w-16 h-16 border-2 border-accent-200 rounded-full"
                      style={{ animation: "ping 4s ease-in-out infinite 1s" }}
                    ></div>
                  </div>
                </div>

                {/* Floating Data Points - Repositioned */}
                <div
                  className="absolute top-6 left-8 w-4 h-4 bg-accent-400 rounded-full shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite" }}
                ></div>
                <div
                  className="absolute top-12 right-8 w-3 h-3 bg-accent-500 rounded-full shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 1s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-12 w-3 h-3 bg-accent-300 rounded-full shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 2s" }}
                ></div>
                <div
                  className="absolute bottom-12 right-6 w-4 h-4 bg-accent-500 rounded-full shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 3s" }}
                ></div>

                {/* Neural Network Lines - Repositioned */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <line
                      x1="15"
                      y1="25"
                      x2="85"
                      y2="35"
                      stroke="rgba(168, 85, 247, 0.6)"
                      strokeWidth="2"
                      style={{ animation: "pulse 5s ease-in-out infinite" }}
                    />
                    <line
                      x1="25"
                      y1="75"
                      x2="75"
                      y2="65"
                      stroke="rgba(196, 181, 253, 0.6)"
                      strokeWidth="2"
                      style={{
                        animation: "pulse 5s ease-in-out infinite 1.5s",
                      }}
                    />
                    <line
                      x1="35"
                      y1="15"
                      x2="65"
                      y2="85"
                      stroke="rgba(168, 85, 247, 0.6)"
                      strokeWidth="2"
                      style={{ animation: "pulse 5s ease-in-out infinite 3s" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/services/1"
                  className="btn-primary w-full mt-4 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Center - 4 Cards Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayServices.slice(0, 4).map((service, index) => (
                <div key={index} className="card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                      <div className="text-accent-600">{service.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-theme-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-theme-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/services/${index + 2}`}
                      className="btn-outline w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Custom Development */}
          <div className="lg:col-span-3">
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                  <div className="text-accent-600">
                    <Code className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-theme-black">
                  Custom Development
                </h3>
              </div>
              <p className="text-theme-gray-600 text-sm leading-relaxed mb-4">
                Bespoke software solutions, scalable web applications and custom
                systems that transform your business operations efficiently. We
                build innovative development solutions using React, Node.js, and
                modern cloud technologies for growth and success delivery.
              </p>
              <div className="w-full h-56 bg-theme-black rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Animated Code Blocks - Repositioned */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-3">
                    <div
                      className="w-24 h-4 bg-accent-400 rounded shadow-lg"
                      style={{ animation: "pulse 3s ease-in-out infinite" }}
                    ></div>
                    <div
                      className="w-20 h-4 bg-accent-500 rounded shadow-lg"
                      style={{ animation: "pulse 3s ease-in-out infinite 1s" }}
                    ></div>
                    <div
                      className="w-28 h-4 bg-accent-300 rounded shadow-lg"
                      style={{ animation: "pulse 3s ease-in-out infinite 2s" }}
                    ></div>
                  </div>
                </div>

                {/* Floating Brackets - Repositioned */}
                <div
                  className="absolute top-8 left-8 text-3xl text-accent-300 font-mono shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite" }}
                >
                  &#123;
                </div>
                <div
                  className="absolute top-10 right-8 text-3xl text-accent-500 font-mono shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 1.5s" }}
                >
                  &#125;
                </div>
                <div
                  className="absolute bottom-10 left-10 text-2xl text-accent-200 font-mono shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 3s" }}
                >
                  &#91;
                </div>
                <div
                  className="absolute bottom-8 right-10 text-2xl text-accent-500 font-mono shadow-lg"
                  style={{ animation: "bounce 4s ease-in-out infinite 4.5s" }}
                >
                  &#93;
                </div>

                {/* Animated Dots - Repositioned */}
                <div
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-300 rounded-full shadow-lg"
                  style={{ animation: "ping 5s ease-in-out infinite" }}
                ></div>
                <div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-500 rounded-full shadow-lg"
                  style={{ animation: "ping 5s ease-in-out infinite 2.5s" }}
                ></div>

                {/* Circuit-like Lines - Repositioned */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <line
                      x1="20"
                      y1="20"
                      x2="80"
                      y2="20"
                      stroke="rgba(168, 85, 247, 0.6)"
                      strokeWidth="1"
                      style={{ animation: "pulse 4s ease-in-out infinite" }}
                    />
                    <line
                      x1="20"
                      y1="80"
                      x2="80"
                      y2="80"
                      stroke="rgba(196, 181, 253, 0.6)"
                      strokeWidth="1"
                      style={{ animation: "pulse 4s ease-in-out infinite 2s" }}
                    />
                    <line
                      x1="20"
                      y1="20"
                      x2="20"
                      y2="80"
                      stroke="rgba(168, 85, 247, 0.6)"
                      strokeWidth="1"
                      style={{ animation: "pulse 4s ease-in-out infinite 1s" }}
                    />
                    <line
                      x1="80"
                      y1="20"
                      x2="80"
                      y2="80"
                      stroke="rgba(196, 181, 253, 0.6)"
                      strokeWidth="1"
                      style={{ animation: "pulse 4s ease-in-out infinite 3s" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/services/2"
                  className="btn-primary w-full mt-4 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
