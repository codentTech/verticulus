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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business 
            thrive in the digital landscape. From web development to mobile apps, 
            we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Zap className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-primary-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven development process to ensure your project is delivered 
              on time and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Verticulus?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team consists of experienced developers, designers, and project managers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Technologies</h3>
                    <p className="text-gray-600">We use the latest technologies and frameworks to build modern, scalable solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">We follow strict quality standards and thoroughly test all our deliverables.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Cloud className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide ongoing support and maintenance to keep your solution running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500">Why Choose Us Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution 
            that meets your business needs.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
