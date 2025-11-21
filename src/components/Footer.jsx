"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-theme-black text-theme-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-accent-400/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-300/15 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-theme-white mb-2">
              Verticulus
            </h3>
            <p className="text-theme-gray-300 text-sm leading-relaxed mb-3 max-w-sm">
              Professional software development company delivering innovative
              solutions for businesses worldwide.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-theme-gray-800 rounded-lg flex items-center justify-center text-theme-gray-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-theme-gray-800 rounded-lg flex items-center justify-center text-theme-gray-400"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-theme-gray-800 rounded-lg flex items-center justify-center text-theme-gray-400"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-theme-white">
              Services
            </h4>
            <ul className="space-y-1.5">
              {[
                { name: "Web Development", slug: "web-development" },
                { name: "Mobile Development", slug: "mobile-development" },
                { name: "UI/UX Design", slug: "ui-ux-design" },
                { name: "AI & ML", slug: "ai-ml" },
                { name: "Cloud Solutions", slug: "cloud-solutions" },
                { name: "Custom Development", slug: "custom-development" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-theme-gray-300 text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-theme-white">
              Company
            </h4>
            <ul className="space-y-1.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/" },
                { name: "Careers", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Press", href: "/" },
                { name: "Partners", href: "/" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-theme-gray-300 text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Subscribe */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-theme-white">
              Contact
            </h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-theme-gray-300">
                <Mail className="w-3 h-3 mr-2 text-accent-400" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@verticulus.com&su=Inquiry%20from%20Verticulus%20Website&body=Hello%20Verticulus%20Team,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0A%0ABest%20regards,%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent-400 transition-colors duration-200"
                >
                  info@verticulus.com
                </a>
              </li>
              <li className="flex items-center text-theme-gray-300">
                <Phone className="w-3 h-3 mr-2 text-accent-400" />
                <a href="tel:+1234567890" className="text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start text-theme-gray-300 text-xs">
                <MapPin className="w-3 h-3 mr-2 text-accent-400 mt-0.5 flex-shrink-0" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </li>
            </ul>

            {/* Subscribe Section - Right Side */}
            <div className="border-t border-theme-gray-700 pt-3">
              <h5 className="text-sm font-medium text-theme-white mb-2">
                Subscribe
              </h5>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-theme-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full pl-7 pr-3 py-2 bg-theme-gray-800 border border-theme-gray-700 rounded-lg text-theme-white placeholder-theme-gray-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 transition-all duration-300 text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-accent-600 text-theme-white font-medium rounded-lg transition-all duration-300 text-sm"
                >
                  Subscribe
                </button>
              </form>

              {/* Success Message */}
              {isSubscribed && (
                <div className="mt-2 p-2 bg-accent-600/20 border border-accent-500/30 rounded-lg text-accent-400 text-xs">
                  ✅ Subscribed!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-gray-800 pt-4 text-center">
          <p className="text-theme-gray-400 text-xs">
            &copy; 2024 Verticulus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
