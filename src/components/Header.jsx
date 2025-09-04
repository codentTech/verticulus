"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
