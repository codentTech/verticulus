import { ExternalLink, Github, Globe } from 'lucide-react'
import Link from 'next/link'

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
      
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-white mb-4 sm:mb-6">
            Our <span className="text-accent-400">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Explore our latest projects and see how we've helped businesses 
            transform their ideas into successful digital solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              Our most impactful projects that showcase our expertise and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-theme-gray-200 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-sm sm:text-base">Project Image</span>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-theme-black font-medium text-sm sm:text-base">{project.category}</span>
                    <div className="flex space-x-2">
                      <a href={project.liveUrl} className="text-theme-gray-400 hover:text-theme-black transition-colors">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a href={project.githubUrl} className="text-theme-gray-400 hover:text-theme-black transition-colors">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-theme-black mb-3 sm:mb-4">{project.title}</h3>
                  <p className="text-sm sm:text-base text-theme-gray-600 mb-4 sm:mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-theme-gray-100 text-theme-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${index}`} className="btn-primary inline-flex items-center text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                    View Details
                    <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="bg-theme-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              All Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              Browse through our complete portfolio of successful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-theme-gray-200 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-xs sm:text-sm">Project Image</span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-theme-black font-medium text-xs sm:text-sm">{project.category}</span>
                    <div className="flex space-x-2">
                      <a href={project.liveUrl} className="text-theme-gray-400 hover:text-theme-black transition-colors">
                        <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                      <a href={project.githubUrl} className="text-theme-gray-400 hover:text-theme-black transition-colors">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-2 sm:mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-theme-gray-600 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-theme-gray-100 text-theme-black px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-theme-gray-100 text-theme-gray-600 px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link href={`/portfolio/${index}`} className="text-theme-black hover:text-theme-gray-700 font-medium text-xs sm:text-sm inline-flex items-center">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what our clients have to say 
              about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-theme-gray-200 rounded-full mr-3 sm:mr-4 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-xs sm:text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-theme-black text-sm sm:text-base">John Smith</h4>
                  <p className="text-theme-gray-600 text-xs sm:text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-theme-gray-600">
                "Verticulus delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding."
              </p>
            </div>
            
            <div className="card p-6 sm:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-theme-gray-200 rounded-full mr-3 sm:mr-4 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-xs sm:text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-theme-black text-sm sm:text-base">Sarah Johnson</h4>
                  <p className="text-theme-gray-600 text-xs sm:text-sm">Founder, FitnessApp</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-theme-gray-600">
                "The mobile app they built for us is incredible. The user experience is smooth, 
                and the performance is outstanding. Highly recommended!"
              </p>
            </div>
            
            <div className="card p-6 sm:p-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-theme-gray-200 rounded-full mr-3 sm:mr-4 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-xs sm:text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-theme-black text-sm sm:text-base">Mike Davis</h4>
                  <p className="text-theme-gray-600 text-xs sm:text-sm">CTO, RealEstatePro</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-theme-gray-600">
                "Working with Verticulus was a game-changer for our business. They understood 
                our needs perfectly and delivered a solution that drives results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}


    </div>
  )
}