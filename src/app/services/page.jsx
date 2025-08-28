import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Code, Smartphone, Palette, Database, Cloud, Shield, Zap, Users } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'React, Vue.js, Angular Development',
        'Node.js Backend Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization'
      ],
      price: 'Starting from $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'React Native Development',
        'Flutter Development',
        'App Store Optimization',
        'Mobile App Maintenance'
      ],
      price: 'Starting from $8,000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed for optimal user experience.',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design Systems',
        'Brand Identity Design',
        'Usability Testing'
      ],
      price: 'Starting from $3,000'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Robust database architecture and management solutions.',
      features: [
        'Database Architecture',
        'Data Modeling',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation'
      ],
      price: 'Starting from $4,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: [
        'AWS/Azure/GCP Setup',
        'Serverless Architecture',
        'Container Orchestration',
        'CI/CD Pipeline Setup',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      price: 'Starting from $6,000'
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your applications.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'SSL/TLS Implementation',
        'Data Encryption',
        'Security Monitoring',
        'Compliance Consulting'
      ],
      price: 'Starting from $5,000'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business needs, goals, and requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'We thoroughly test your solution to ensure quality and performance.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We deploy your solution and provide training and documentation.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to keep your solution running smoothly.'
    }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-white mb-4 sm:mb-6">
            Our <span className="text-accent-400">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
            We offer comprehensive software development services to help your business 
            thrive in the digital landscape. From web development to mobile apps, 
            we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="icon-container mb-4 sm:mb-6">
                  <div className="text-theme-black">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-theme-black mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-theme-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-theme-gray-600">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-theme-black mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-theme-black font-semibold text-sm sm:text-base">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-theme-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              Our Process
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              We follow a proven development process to ensure your project is delivered 
              on time and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {process.map((step, index) => (
              <div key={index} className="card p-6 sm:p-8 text-center">
                <div className="bg-theme-black text-theme-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-sm sm:text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-theme-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-4 sm:mb-6">
                Why Choose Verticulus?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="icon-container mr-3 sm:mr-4 flex-shrink-0">
                    <div className="text-theme-black">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-theme-black mb-1 sm:mb-2">Expert Team</h3>
                    <p className="text-sm sm:text-base text-theme-gray-600">Our team consists of experienced developers, designers, and project managers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-container mr-3 sm:mr-4 flex-shrink-0">
                    <div className="text-theme-black">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-theme-black mb-1 sm:mb-2">Latest Technologies</h3>
                    <p className="text-sm sm:text-base text-theme-gray-600">We use the latest technologies and frameworks to build modern, scalable solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-container mr-3 sm:mr-4 flex-shrink-0">
                    <div className="text-theme-black">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-theme-black mb-1 sm:mb-2">Quality Assurance</h3>
                    <p className="text-sm sm:text-base text-theme-gray-600">We follow strict quality standards and thoroughly test all our deliverables.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-container mr-3 sm:mr-4 flex-shrink-0">
                    <div className="text-theme-black">
                      <Cloud className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-theme-black mb-1 sm:mb-2">Ongoing Support</h3>
                    <p className="text-sm sm:text-base text-theme-gray-600">We provide ongoing support and maintenance to keep your solution running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-theme-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-theme-gray-500 text-sm sm:text-base px-4 text-center">Why Choose Us Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}


    </div>
  )
}