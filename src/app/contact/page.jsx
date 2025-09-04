"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "../../common/constants/images.constant";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@verticulus.com",
      description: "Send us an email anytime",
      isEmail: true,
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (234) 567-890",
      description: "Mon-Fri from 8am to 6pm",
      isEmail: false,
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Tech Street, Digital City, DC 12345",
      description: "Visit us anytime",
      isEmail: false,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend: 10:00 AM - 4:00 PM",
      isEmail: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-white mb-4 sm:mb-6">
            Get in <span className="text-accent-400">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Ready to start your project? Let's discuss your ideas and turn them
            into reality. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-theme-black mb-6 sm:mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-theme-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-theme-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-theme-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-theme-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-theme-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">
                      Mobile Development
                    </option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-theme-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-theme-gray-300 rounded-lg focus:ring-2 focus:ring-theme-black focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-theme-black mb-6 sm:mb-8">
                Contact Information
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="icon-container mr-3 sm:mr-4">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-theme-black mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      {info.isEmail ? (
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@verticulus.com&su=Inquiry%20from%20Verticulus%20Website&body=Hello%20Verticulus%20Team,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0A%0ABest%20regards,%0A[Your%20Name]"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-theme-gray-600 mb-1 hover:text-accent-600 transition-colors duration-200 cursor-pointer"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-theme-gray-600 mb-1">
                          {info.details}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-theme-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Map Placeholder */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">
                  Our Office
                </h3>
                <div className="rounded-lg aspect-video overflow-hidden">
                  <Image
                    src={IMAGES.CONTACT_OFFICE}
                    alt="Our Office"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-theme-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-sm sm:text-base text-theme-gray-600">
                Project timelines vary depending on complexity and scope. Small
                projects typically take 4-8 weeks, while larger projects can
                take 3-6 months. We'll provide a detailed timeline during our
                initial consultation.
              </p>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">
                Do you provide ongoing support?
              </h3>
              <p className="text-sm sm:text-base text-theme-gray-600">
                Yes, we offer ongoing support and maintenance packages to ensure
                your application continues to run smoothly and stays up-to-date
                with the latest technologies.
              </p>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">
                What technologies do you use?
              </h3>
              <p className="text-sm sm:text-base text-theme-gray-600">
                We use modern, industry-standard technologies including React,
                Vue.js, Node.js, Python, and various cloud platforms. We choose
                the best technology stack for each project.
              </p>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">
                How do you handle project communication?
              </h3>
              <p className="text-sm sm:text-base text-theme-gray-600">
                We maintain regular communication through scheduled meetings,
                progress reports, and project management tools. You'll always
                know the status of your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
