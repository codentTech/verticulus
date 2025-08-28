'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
            Verticulus
          </Link>

          {/* Desktop Navigation - Spread items */}
          <nav className="hidden lg:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg">
              Get Started
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg inline-block text-center w-full"
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
  )
}