import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ExternalLink, Github, Globe } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'A secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'AWS'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Project Management Tool',
      category: 'Web Development',
      description: 'A comprehensive project management platform with task tracking, team collaboration, and reporting features.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Restaurant Ordering System',
      category: 'Web Development',
      description: 'An online ordering system for restaurants with menu management, order tracking, and delivery integration.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Twilio'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'A fitness tracking mobile app with workout plans, progress monitoring, and social features.',
      technologies: ['Flutter', 'Firebase', 'Google Fit API', 'Cloud Functions'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'A real estate listing platform with property search, virtual tours, and agent management.',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'AWS S3'],
      image: '/placeholder',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design']

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            transform their ideas into successful digital solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most impactful projects that showcase our expertise and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image Placeholder</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-medium">{project.category}</span>
                    <div className="flex space-x-2">
                      <a href={project.liveUrl} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Globe className="h-5 w-5" />
                      </a>
                      <a href={project.githubUrl} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${index}`} className="btn-primary inline-flex items-center">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our complete portfolio of successful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image Placeholder</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-600 font-medium text-sm">{project.category}</span>
                    <div className="flex space-x-2">
                      <a href={project.liveUrl} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Globe className="h-4 w-4" />
                      </a>
                      <a href={project.githubUrl} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link href={`/portfolio/${index}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                    View Details
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Smith</h4>
                  <p className="text-gray-600 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Verticulus delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Founder, FitnessApp</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The mobile app they built for us is incredible. The user experience is smooth, 
                and the performance is outstanding. Highly recommended!"
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Davis</h4>
                  <p className="text-gray-600 text-sm">CTO, RealEstatePro</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with Verticulus was a game-changer for our business. They understood 
                our needs perfectly and delivered a solution that drives results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch with us to discuss 
            your project requirements.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
