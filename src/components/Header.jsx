"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesDropdown = [
    { name: "AI & Machine Learning", href: "/services/ai-ml" },
    { name: "Custom Development", href: "/services/custom-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  ];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="px-6">
        <div className="flex justify-between items-center py-4">
          {/* Dynamic Animated Logo */}
          <Link
            href="/"
            className="relative group"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <div className="relative">
              {/* Main Logo Container */}
              <div className="relative px-5 py-2 rounded-lg transform transition-all duration-500 group-hover:scale-110">
                {/* Moving Background Elements */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  {/* Animated Gradient Stripes */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-600 to-purple-500 animate-gradient-x-reverse opacity-50"></div>

                  {/* Moving Dots */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-2 left-4 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>

                  {/* Floating Lines */}
                  <div className="absolute top-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                  <div className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-pulse delay-300"></div>
                </div>

                {/* Logo Text with Moving Effects */}
                <span className="relative z-10 text-2xl font-bold text-white tracking-wide">
                  <span className="inline-block animate-pulse">V</span>
                  <span className="inline-block animate-pulse delay-100">
                    e
                  </span>
                  <span className="inline-block animate-pulse delay-200">
                    r
                  </span>
                  <span className="inline-block animate-pulse delay-300">
                    t
                  </span>
                  <span className="inline-block animate-pulse delay-400">
                    i
                  </span>
                  <span className="inline-block animate-pulse delay-500">
                    c
                  </span>
                  <span className="inline-block animate-pulse delay-600">
                    u
                  </span>
                  <span className="inline-block animate-pulse delay-700">
                    l
                  </span>
                  <span className="inline-block animate-pulse delay-800">
                    u
                  </span>
                  <span className="inline-block animate-pulse delay-900">
                    s
                  </span>
                </span>

                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-border animate-spin-slow opacity-50"></div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              </div>

              {/* Floating Elements Around Logo */}
              <div className="absolute -top-3 -left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-75"></div>
              <div className="absolute -bottom-3 -left-2 w-2 h-2 bg-white rounded-full animate-ping delay-300 opacity-75"></div>
              <div className="absolute -bottom-2 -right-3 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-500 opacity-75"></div>

              {/* Moving Lines */}
              <div className="absolute -top-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
              <div className="absolute -bottom-1 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse delay-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() =>
                  item.hasDropdown && setIsServicesOpen(false)
                }
              >
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide relative flex items-center"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-64 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {/* Invisible bridge to prevent gap */}
                        <div className="h-2 w-full"></div>
                        <div className="bg-black border border-gray-700 rounded-lg shadow-xl py-2">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 text-sm"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <div className="border-t border-gray-700 mt-2 pt-2">
                            <Link
                              href="/services"
                              className="block px-4 py-3 text-blue-400 hover:text-blue-300 hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide relative"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="relative group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide flex items-center justify-between w-full"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l border-gray-700 pl-4">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg inline-block text-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
