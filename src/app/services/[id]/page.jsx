import { notFound } from "next/navigation";
import { IMAGES } from "../../../common/constants/images.constant";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, Users, Zap } from "lucide-react";

export default function ServiceDetail({ params }) {
  // Service data - in a real app, this would come from an API or database
  const services = [
    {
      id: "1",
      title: "AI & ML",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning.",
      longDescription:
        "Our AI & Machine Learning services help businesses leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications.",
      features: [
        "Predictive Analytics",
        "Machine Learning",
        "Intelligent Automation",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning Models",
      ],
      benefits: [
        "Automated decision making",
        "Improved efficiency",
        "Better customer insights",
        "Cost reduction",
        "Competitive advantage",
      ],
      process: [
        "Data Analysis & Preparation",
        "Model Development",
        "Training & Validation",
        "Integration & Deployment",
        "Monitoring & Optimization",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI",
        "AWS SageMaker",
      ],
      duration: "8-12 weeks",
      team: "3-5 developers",
      price: "Starting from $25,000",
      image: IMAGES.AI_ML_ICON,
    },
    {
      id: "2",
      title: "Custom Development",
      description:
        "Tailored software solutions built specifically for your business needs.",
      longDescription:
        "Our custom development services create tailored software solutions that perfectly fit your business requirements.",
      features: [
        "Custom Software",
        "Tailored Solutions",
        "Business-Specific",
        "Scalable Architecture",
        "Modern Technologies",
        "Best Practices",
      ],
      benefits: [
        "Perfect fit for your business",
        "Scalable solutions",
        "Modern technology stack",
        "Long-term maintainability",
        "Competitive advantage",
      ],
      process: [
        "Requirements Analysis",
        "Architecture Design",
        "Development & Testing",
        "Deployment",
        "Maintenance & Support",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
        "PostgreSQL",
        "MongoDB",
        "AWS",
      ],
      duration: "12-16 weeks",
      team: "4-6 developers",
      price: "Starting from $30,000",
      image: IMAGES.CODE_SCREENSHOT,
    },
    {
      id: "3",
      title: "Web Development",
      description: "Custom web applications built with modern technologies.",
      longDescription:
        "We create modern, responsive web applications that deliver exceptional user experiences.",
      features: [
        "React, Vue.js, Angular Development",
        "Node.js Backend Development",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Performance Optimization",
      ],
      benefits: [
        "Modern, responsive design",
        "Cross-platform compatibility",
        "Fast loading times",
        "SEO optimization",
        "Mobile-first approach",
      ],
      process: [
        "Design & Prototyping",
        "Frontend Development",
        "Backend Development",
        "Testing & QA",
        "Deployment & Launch",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Angular",
        "Node.js",
        "PHP",
        "Laravel",
        "MySQL",
      ],
      duration: "6-10 weeks",
      team: "2-4 developers",
      price: "Starting from $15,000",
      image: IMAGES.WEB_DEV_ICON,
    },
    {
      id: "4",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      longDescription:
        "We develop high-performance mobile applications for iOS and Android platforms.",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native Development",
        "Flutter Development",
        "App Store Optimization",
        "Mobile App Maintenance",
      ],
      benefits: [
        "Native performance",
        "Cross-platform compatibility",
        "App store optimization",
        "Regular updates",
        "User engagement",
      ],
      process: [
        "Platform Analysis",
        "UI/UX Design",
        "Development",
        "Testing",
        "App Store Submission",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS",
      ],
      duration: "10-14 weeks",
      team: "3-5 developers",
      price: "Starting from $20,000",
      image: IMAGES.MOBILE_DEV_ICON,
    },
    {
      id: "5",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces.",
      longDescription:
        "We create beautiful, intuitive user interfaces that provide exceptional user experiences.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "Brand Identity Design",
        "Usability Testing",
      ],
      benefits: [
        "Improved user satisfaction",
        "Higher conversion rates",
        "Reduced development time",
        "Consistent brand experience",
        "Better accessibility",
      ],
      process: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Implementation",
        "User Testing",
      ],
      technologies: [
        "Figma",
        "Sketch",
        "Adobe XD",
        "InVision",
        "Principle",
        "Framer",
      ],
      duration: "4-8 weeks",
      team: "2-3 designers",
      price: "Starting from $12,000",
      image: IMAGES.UI_UX_ICON,
    },
    {
      id: "6",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      longDescription:
        "We help businesses migrate to the cloud and optimize their infrastructure.",
      features: [
        "AWS/Azure/GCP Setup",
        "Serverless Architecture",
        "Container Orchestration",
        "CI/CD Pipeline Setup",
        "Monitoring & Logging",
        "Cost Optimization",
      ],
      benefits: [
        "Scalable infrastructure",
        "Cost optimization",
        "High availability",
        "Security & compliance",
        "Global reach",
      ],
      process: [
        "Infrastructure Assessment",
        "Migration Planning",
        "Implementation",
        "Testing & Optimization",
        "Monitoring & Support",
      ],
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      duration: "6-12 weeks",
      team: "2-4 engineers",
      price: "Starting from $18,000",
      image: IMAGES.CLOUD_ICON,
    },
  ];

  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-4">
            <Link
              href="/services"
              className="text-theme-gray-300 hover:text-theme-white flex items-center text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-white mb-3 sm:mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-theme-gray-300 mb-4 sm:mb-6">
                {service.longDescription}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
              What We Offer
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
              Comprehensive features and capabilities included in our{" "}
              {service.title} service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="card p-4 sm:p-6 text-center">
                <div className="icon-container-accent mb-3">
                  <Check className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="text-base font-semibold text-theme-black mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-theme-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
              Benefits
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
              Why choose our {service.title} service for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="card p-4 sm:p-6">
                <h3 className="text-base font-semibold text-theme-black mb-2">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
              Our Process
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
              How we deliver exceptional results for your {service.title}{" "}
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {service.process.map((step, index) => (
              <div key={index} className="card p-4 text-center">
                <div className="w-10 h-10 bg-accent-600 text-theme-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-theme-black mb-2">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-theme-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-white mb-2">
              Technologies We Use
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-300 max-w-2xl mx-auto">
              Modern technologies and tools for your {service.title} project
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-theme-gray-800 rounded-lg p-3 text-center"
              >
                <span className="text-theme-white font-medium text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base text-theme-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Let's discuss your {service.title} project and create something
            amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary text-sm px-6 py-3">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="btn-outline text-sm px-6 py-3">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
