"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection({ featuredClients }) {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  // Sample featured clients for demo
  const sampleClients =
    featuredClients && featuredClients.length > 0
      ? featuredClients
      : [
          { name: "TechCorp", logo: "" },
          { name: "InnovateLab", logo: "" },
          { name: "DataFlow Systems", logo: "" },
          { name: "CloudVision", logo: "" },
        ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background with mouse interaction */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `
              radial-gradient(600px circle at ${mousePosition.x}% ${
              mousePosition.y
            }%, 
                rgba(59, 130, 246, 0.15), 
                rgba(147, 51, 234, 0.1) 40%, 
                transparent 70%
              ),
              radial-gradient(800px circle at ${100 - mousePosition.x}% ${
              100 - mousePosition.y
            }%, 
                rgba(236, 72, 153, 0.08), 
                transparent 50%
              )
            `,
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {/* Large floating circles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`circle-${i}`}
              className="absolute rounded-full border border-white/5 animate-float"
              style={{
                width: `${120 + i * 40}px`,
                height: `${120 + i * 40}px`,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 3}s`,
                transform: `translate(${
                  (mousePosition.x - 50) * (0.01 + i * 0.002)
                }px, ${(mousePosition.y - 50) * (0.01 + i * 0.002)}px)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full border border-blue-400/10 animate-pulse"
                style={{ animationDelay: `${i * 1}s` }}
              />
            </div>
          ))}

          {/* Morphing blob shapes */}
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 opacity-30 animate-morph"
            style={{
              background:
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${
                (mousePosition.y - 50) * 0.05
              }px)`,
            }}
          />

          <div
            className="absolute bottom-1/3 left-1/5 w-48 h-48 opacity-20 animate-morph-reverse"
            style={{
              background:
                "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animationDelay: "3s",
              transform: `translate(${(mousePosition.x - 50) * -0.03}px, ${
                (mousePosition.y - 50) * -0.03
              }px)`,
            }}
          />

          {/* Particle field */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
              </linearGradient>
            </defs>
            <path
              d={`M 0,${mousePosition.y * 4} Q ${mousePosition.x * 8},${
                mousePosition.y * 2
              } 800,${mousePosition.y * 6}`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="transition-all duration-1000 ease-out"
            />
            <path
              d={`M ${mousePosition.x * 8},0 Q ${mousePosition.x * 4},400 ${
                mousePosition.x * 6
              },800`}
              stroke="rgba(236, 72, 153, 0.4)"
              strokeWidth="1"
              fill="none"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                Drive Success with{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  AI
                </span>{" "}
                and Expert Engineering
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                No red tape. No gimmicks. Just real outcomes - And yes, AI
                powers our code
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Talk with an Expert</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>

              <Link
                href="/portfolio"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right side - Animated visualization */}
          <div
            className={`relative flex items-center justify-center transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative w-96 h-96">
              {/* Central rotating system */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer rotating ring */}
                  <div className="w-72 h-72 rounded-full border-2 border-gradient animate-spin-slow">
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div
                      className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute right-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>

                  {/* Middle ring */}
                  <div className="absolute inset-12 rounded-full border border-dashed border-white/20 animate-spin-reverse">
                    <div className="absolute top-0 left-1/2 w-6 h-6 rounded-full border-2 border-blue-400/50 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Inner core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse-slow flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating orbs around the system */}
              <div
                className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float transition-transform duration-500"
                style={{
                  transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${
                    (mousePosition.y - 50) * 0.1
                  }px)`,
                }}
              ></div>
              <div
                className="absolute bottom-12 left-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float transition-transform duration-700"
                style={{
                  animationDelay: "1s",
                  transform: `translate(${(mousePosition.x - 50) * -0.08}px, ${
                    (mousePosition.y - 50) * -0.08
                  }px)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes morph {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 80% 20% 50% 80% / 55% 40% 60% 45%;
          }
          75% {
            border-radius: 40% 70% 30% 90% / 60% 50% 40% 50%;
          }
        }

        @keyframes morph-reverse {
          0%,
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 70% 30% 50% 60% / 60% 50% 30% 40%;
          }
          50% {
            border-radius: 20% 80% 40% 60% / 45% 60% 55% 40%;
          }
          75% {
            border-radius: 60% 40% 80% 30% / 50% 40% 60% 50%;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .animate-morph-reverse {
          animation: morph-reverse 10s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .border-gradient {
          border-image: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.5),
              rgba(147, 51, 234, 0.5),
              rgba(236, 72, 153, 0.5)
            )
            1;
        }
      `}</style>
    </section>
  );
}
