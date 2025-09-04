import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../common/constants/images.constant";

export default function Portfolio() {
  const featuredProjects = [
    {
      title: "AI-Powered E-commerce Platform",
      description:
        "A modern e-commerce solution with AI-driven product recommendations and personalized shopping experience.",
      image: IMAGES.PROJECT_1,
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: IMAGES.PROJECT_2,
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Biometrics", "Security"],
      link: "#",
      github: "#",
    },
    {
      title: "Cloud Infrastructure Dashboard",
      description:
        "Comprehensive dashboard for managing cloud resources across multiple platforms with cost optimization.",
      image: IMAGES.PROJECT_3,
      category: "Cloud Solutions",
      technologies: ["AWS", "React", "Python", "Docker"],
      link: "#",
      github: "#",
    },
  ];

  const allProjects = [
    {
      title: "E-learning Platform",
      description:
        "Interactive learning platform with video streaming, quizzes, and progress tracking.",
      image: IMAGES.PROJECT_4,
      category: "Web Development",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      link: "#",
      github: "#",
    },
    {
      title: "Inventory Management System",
      description:
        "Comprehensive inventory tracking system with barcode scanning and reporting.",
      image: IMAGES.PROJECT_5,
      category: "Web Development",
      technologies: ["Angular", "C#", "SQL Server", "Barcode API"],
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile app for tracking workouts, nutrition, and health metrics with social features.",
      image: IMAGES.PROJECT_6,
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Health APIs", "Social"],
      link: "#",
      github: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing and management platform with virtual tours and advanced search.",
      image: IMAGES.PROJECT_1,
      category: "Web Development",
      technologies: ["Next.js", "PostgreSQL", "3D Tours", "Search"],
      link: "#",
      github: "#",
    },
    {
      title: "Supply Chain Analytics",
      description:
        "Data-driven supply chain optimization platform with predictive analytics.",
      image: IMAGES.PROJECT_2,
      category: "Data Analytics",
      technologies: ["Python", "TensorFlow", "Big Data", "Analytics"],
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform for patient management and medical records.",
      image: IMAGES.PROJECT_3,
      category: "Enterprise",
      technologies: ["Java", "Spring", "Oracle", "HIPAA"],
      link: "#",
      github: "#",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "The AI-powered platform they built transformed our business. Sales increased by 40% in the first quarter.",
      avatar: IMAGES.TESTIMONIAL_1,
    },
    {
      name: "Mike Davis",
      role: "CTO, FinanceCorp",
      content:
        "Their mobile banking app exceeded our expectations. The security features and user experience are outstanding.",
      avatar: IMAGES.TESTIMONIAL_2,
    },
    {
      name: "Lisa Chen",
      role: "Product Manager, CloudTech",
      content:
        "The cloud dashboard they developed saved us 30% on infrastructure costs and improved our operational efficiency.",
      avatar: IMAGES.TESTIMONIAL_3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-white mb-4 sm:mb-6">
            Our <span className="text-accent-400">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Explore our diverse portfolio of successful projects across various
            industries and technologies.
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
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto">
              Showcasing our most innovative and impactful work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-theme-black text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-theme-gray-400 hover:text-theme-black transition-colors"
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a
                        href={project.link}
                        className="text-theme-gray-400 hover:text-theme-black transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-theme-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-theme-gray-600 mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-theme-gray-100 text-theme-black px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary w-full px-4 sm:px-6 py-2 sm:py-3">
                    View Project
                  </button>
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
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-theme-black text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-theme-gray-400 hover:text-theme-black transition-colors"
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                      <a
                        href={project.link}
                        className="text-theme-gray-400 hover:text-theme-black transition-colors"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-gray-600 mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-theme-gray-100 text-theme-black px-2 py-1 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-theme-gray-100 text-theme-black px-2 py-1 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Link
                    href={project.link}
                    className="text-theme-black hover:text-theme-gray-700 font-medium text-xs sm:text-sm inline-flex items-center"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
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
              Client Testimonials
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto">
              Hear from our clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme-black text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-theme-gray-600 text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-theme-gray-600 text-sm sm:text-base italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
