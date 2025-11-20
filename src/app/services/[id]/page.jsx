"use client";

import { notFound } from "next/navigation";
import { IMAGES } from "../../../common/constants/images.constant";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock,
  Users,
  Zap,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function ServiceDetail({ params }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Ensure params is available (handles both server and client components)
  const serviceId = params?.id || params;

  // Service data - in a real app, this would come from an API or database
  const services = [
    {
      id: "1",
      slug: "ai-ml",
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
      category: "AI & Machine Learning",
      stats: {
        projects: "50+",
        clients: "30+",
        satisfaction: "98%",
        successRate: "95%",
      },
      testimonials: [
        {
          text: "Verticulus transformed our manufacturing process with their AI-driven inspection system. The results exceeded our expectations with 12% faster inspection times.",
          author: "Muzhar Khan",
          title: "Head of Technology",
          company: "KIA",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
        {
          text: "The AI solutions provided by Verticulus helped us automate critical decision-making processes, resulting in significant cost savings and improved efficiency.",
          author: "Sarah Chen",
          title: "CTO",
          company: "TechInnovate",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "What types of AI models can you develop?",
          answer:
            "We develop various AI models including predictive analytics, natural language processing, computer vision, deep learning models, and custom machine learning solutions tailored to your business needs.",
        },
        {
          question: "How long does it take to implement an AI solution?",
          answer:
            "Implementation timeframes vary based on complexity, but typically range from 8-12 weeks for standard AI solutions. Complex projects may take longer, and we provide detailed timelines during our initial consultation.",
        },
        {
          question: "Do you provide ongoing support for AI models?",
          answer:
            "Yes, we offer comprehensive ongoing support including model monitoring, performance optimization, retraining, and updates to ensure your AI solutions continue to deliver optimal results.",
        },
        {
          question: "What data is required for AI model development?",
          answer:
            "The data requirements depend on your specific use case. We'll work with you to assess your existing data, identify any gaps, and help you collect or prepare the necessary data for model training.",
        },
      ],
      relatedBlogs: [
        {
          id: "1",
          title:
            "Leveraging GenAI for Business Innovation: Real-World Applications",
          category: "AI & ML",
          image: IMAGES.BLOG_2,
        },
        {
          id: "2",
          title: "The Role of IoT Integration in Smart Enterprises",
          category: "Technology",
          image: IMAGES.BLOG_1,
        },
      ],
    },
    {
      id: "2",
      slug: "custom-development",
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
      category: "Custom Development",
      stats: {
        projects: "70+",
        clients: "45+",
        satisfaction: "97%",
        successRate: "96%",
      },
      testimonials: [
        {
          text: "Verticulus built a custom solution that perfectly fits our business needs. The team's expertise and attention to detail resulted in a scalable, maintainable system.",
          author: "Mike Davis",
          title: "CEO",
          company: "TechStart",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
        {
          text: "The custom development approach allowed us to have exactly what we needed without compromise. Highly recommend their services.",
          author: "David Park",
          title: "Founder",
          company: "InnovateLab",
          avatar: IMAGES.TESTIMONIAL_3,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "What's included in custom development services?",
          answer:
            "Our custom development services include requirements analysis, architecture design, full-stack development, testing, deployment, documentation, and ongoing support. We work closely with you to ensure the solution meets all your business requirements.",
        },
        {
          question: "Can you integrate with our existing systems?",
          answer:
            "Absolutely. We specialize in integrating new custom solutions with existing systems, APIs, and third-party services. We ensure seamless integration while maintaining data integrity and system performance.",
        },
        {
          question: "How do you ensure code quality?",
          answer:
            "We follow industry best practices including code reviews, automated testing, continuous integration, and comprehensive documentation. Our team maintains high coding standards and conducts regular quality assurance checks.",
        },
        {
          question: "What happens after the project is completed?",
          answer:
            "After project completion, we provide training, documentation, and ongoing support packages. We also offer maintenance services to keep your solution updated and running smoothly.",
        },
      ],
      relatedBlogs: [
        {
          id: "3",
          title:
            "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
          category: "Development",
          image: IMAGES.BLOG_3,
        },
        {
          id: "1",
          title: "Building Scalable React Applications: Best Practices",
          category: "Web Development",
          image: IMAGES.BLOG_1,
        },
      ],
    },
    {
      id: "3",
      slug: "web-development",
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
      category: "Web Development",
      stats: {
        projects: "100+",
        clients: "60+",
        satisfaction: "99%",
        successRate: "98%",
      },
      testimonials: [
        {
          text: "Verticulus delivered a modern, responsive web application that exceeded our expectations. The user experience is exceptional and the performance is outstanding.",
          author: "Jane Smith",
          title: "Product Manager",
          company: "Digital Solutions",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
        {
          text: "Their web development team created a beautiful, fast, and SEO-optimized website that has significantly improved our online presence and customer engagement.",
          author: "Robert Kim",
          title: "Marketing Director",
          company: "BrandCo",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Which frameworks do you use for web development?",
          answer:
            "We use modern frameworks including React, Vue.js, Angular for frontend, and Node.js, PHP, Laravel for backend development. We choose the best technology stack based on your project requirements.",
        },
        {
          question: "Do you provide SEO optimization?",
          answer:
            "Yes, we implement SEO best practices including semantic HTML, meta tags, structured data, mobile optimization, and performance optimization to ensure your website ranks well in search engines.",
        },
        {
          question: "Can you build e-commerce solutions?",
          answer:
            "Absolutely. We develop custom e-commerce solutions with features like product management, shopping cart, payment integration, inventory management, and order processing.",
        },
        {
          question: "How do you ensure website security?",
          answer:
            "We implement security best practices including SSL certificates, secure authentication, data encryption, regular security audits, and protection against common vulnerabilities like XSS and SQL injection.",
        },
      ],
      relatedBlogs: [
        {
          id: "1",
          title: "Building Scalable React Applications: Best Practices",
          category: "Web Development",
          image: IMAGES.BLOG_1,
        },
        {
          id: "6",
          title: "Security Best Practices for Web Applications",
          category: "Security",
          image: IMAGES.BLOG_6,
        },
      ],
    },
    {
      id: "4",
      slug: "mobile-development",
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
      category: "Mobile Development",
      stats: {
        projects: "80+",
        clients: "50+",
        satisfaction: "98%",
        successRate: "97%",
      },
      testimonials: [
        {
          text: "The mobile app developed by Verticulus has been a game-changer for our business. It's fast, intuitive, and our users love it. The app store optimization helped us achieve great visibility.",
          author: "Lisa Anderson",
          title: "CEO",
          company: "MobileFirst",
          avatar: IMAGES.TESTIMONIAL_3,
          rating: 5,
        },
        {
          text: "Verticulus created both iOS and Android versions of our app with a single codebase using React Native. The development was efficient and the apps perform excellently on both platforms.",
          author: "James Wilson",
          title: "CTO",
          company: "AppTech",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Do you develop native or cross-platform apps?",
          answer:
            "We develop both native (iOS and Android) and cross-platform apps using React Native and Flutter. We'll recommend the best approach based on your requirements, budget, and timeline.",
        },
        {
          question: "How long does it take to develop a mobile app?",
          answer:
            "Typical mobile app development takes 10-14 weeks, depending on complexity, features, and platform requirements. Simple apps may take less time, while complex enterprise apps may require more time.",
        },
        {
          question: "Do you handle app store submission?",
          answer:
            "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including preparing all required materials, metadata, and ensuring compliance with store guidelines.",
        },
        {
          question: "What about app maintenance and updates?",
          answer:
            "We offer comprehensive maintenance packages including bug fixes, feature updates, performance optimization, and ensuring compatibility with new OS versions. We also provide 24/7 support options.",
        },
      ],
      relatedBlogs: [
        {
          id: "2",
          title: "Mobile App Development: Native vs Cross-Platform",
          category: "Mobile Development",
          image: IMAGES.BLOG_2,
        },
        {
          id: "3",
          title: "UI/UX Design Principles for Better User Experience",
          category: "Design",
          image: IMAGES.BLOG_3,
        },
      ],
    },
    {
      id: "5",
      slug: "ui-ux-design",
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
      category: "UI/UX Design",
      stats: {
        projects: "90+",
        clients: "55+",
        satisfaction: "99%",
        successRate: "98%",
      },
      testimonials: [
        {
          text: "The UI/UX design work from Verticulus transformed our product. The user experience improvements led to a 40% increase in user engagement and significantly higher conversion rates.",
          author: "Sarah Johnson",
          title: "Product Lead",
          company: "DesignCo",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
        {
          text: "Working with Verticulus designers was a pleasure. They understood our brand perfectly and created a design system that's both beautiful and functional across all platforms.",
          author: "Emily Chen",
          title: "Creative Director",
          company: "BrandStudio",
          avatar: IMAGES.TESTIMONIAL_3,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "What design tools do you use?",
          answer:
            "We use industry-standard design tools including Figma, Sketch, Adobe XD, and InVision for wireframing, prototyping, and design implementation. We choose tools based on project requirements and team collaboration needs.",
        },
        {
          question: "Do you conduct user research?",
          answer:
            "Yes, we conduct comprehensive user research including user interviews, surveys, usability testing, and competitive analysis to ensure our designs meet user needs and business goals.",
        },
        {
          question: "Can you create design systems?",
          answer:
            "Absolutely. We create comprehensive design systems including component libraries, style guides, and design documentation to ensure consistency across your products and enable efficient development.",
        },
        {
          question: "How do you ensure accessibility in designs?",
          answer:
            "We follow WCAG accessibility guidelines, ensuring our designs are accessible to users with disabilities. This includes proper color contrast, keyboard navigation support, and screen reader compatibility.",
        },
      ],
      relatedBlogs: [
        {
          id: "3",
          title: "UI/UX Design Principles for Better User Experience",
          category: "Design",
          image: IMAGES.BLOG_3,
        },
        {
          id: "1",
          title: "Building Scalable React Applications: Best Practices",
          category: "Web Development",
          image: IMAGES.BLOG_1,
        },
      ],
    },
    {
      id: "6",
      slug: "cloud-solutions",
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
      category: "Cloud Solutions",
      stats: {
        projects: "60+",
        clients: "35+",
        satisfaction: "97%",
        successRate: "96%",
      },
      testimonials: [
        {
          text: "Verticulus helped us migrate to AWS and optimize our cloud infrastructure. The result was 30% cost reduction and 95% uptime. Their expertise in cloud solutions is outstanding.",
          author: "Alex Rodriguez",
          title: "CTO",
          company: "CT Solutions",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
        {
          text: "The cloud migration was seamless thanks to Verticulus. They handled everything from planning to implementation, and our infrastructure is now more scalable and cost-effective.",
          author: "Michael Brown",
          title: "IT Director",
          company: "CloudTech",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Which cloud platforms do you work with?",
          answer:
            "We work with all major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. We help you choose the best platform based on your requirements, budget, and existing infrastructure.",
        },
        {
          question: "How do you ensure cloud security?",
          answer:
            "We implement comprehensive cloud security measures including identity and access management, encryption, network security, compliance with industry standards, and regular security audits.",
        },
        {
          question: "Can you help with cloud cost optimization?",
          answer:
            "Yes, we analyze your cloud usage and implement cost optimization strategies including right-sizing resources, reserved instances, auto-scaling, and eliminating unused resources to reduce costs while maintaining performance.",
        },
        {
          question: "Do you provide 24/7 cloud monitoring?",
          answer:
            "Yes, we offer 24/7 cloud monitoring and support services including performance monitoring, alerting, automated scaling, and incident response to ensure your cloud infrastructure runs smoothly.",
        },
      ],
      relatedBlogs: [
        {
          id: "5",
          title: "Cloud Computing: Choosing the Right Platform",
          category: "Cloud",
          image: IMAGES.BLOG_5,
        },
        {
          id: "6",
          title: "Security Best Practices for Web Applications",
          category: "Security",
          image: IMAGES.BLOG_6,
        },
      ],
    },
    {
      id: "7",
      slug: "database-design",
      title: "Database Design",
      description: "Robust database architecture and management solutions.",
      longDescription:
        "We design secure, high-performance databases that power mission-critical applications. From data modeling to performance optimization, our team ensures your data layer is reliable, scalable, and future-proof.",
      features: [
        "Database Architecture",
        "Data Modeling",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Security Implementation",
      ],
      benefits: [
        "High availability and reliability",
        "Optimized query performance",
        "Secure data storage",
        "Streamlined migrations",
        "Compliance-ready infrastructure",
      ],
      process: [
        "Requirements & Audit",
        "Schema & Modeling",
        "Implementation",
        "Performance Tuning",
        "Training & Handover",
      ],
      technologies: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "AWS RDS",
        "Azure SQL",
      ],
      duration: "4-6 weeks",
      team: "2-3 engineers",
      price: "Starting from $12,000",
      image: IMAGES.DATABASE_VISUAL,
      category: "Database Design",
      stats: {
        projects: "40+",
        clients: "25+",
        satisfaction: "98%",
        successRate: "97%",
      },
      testimonials: [
        {
          text: "Verticulus re-architected our databases and reduced query times by over 60%. The migration was seamless and the documentation was excellent.",
          author: "Laura Green",
          title: "Director of Engineering",
          company: "DataFlow Systems",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
        {
          text: "The team helped us consolidate multiple data sources into a single, reliable platform. Reporting is faster and maintenance is drastically easier.",
          author: "Ethan Brooks",
          title: "CTO",
          company: "Insight Analytics",
          avatar: IMAGES.TESTIMONIAL_2,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Which databases do you specialize in?",
          answer:
            "We support relational and NoSQL databases including PostgreSQL, MySQL, SQL Server, MongoDB, Redis, and managed services like AWS RDS and Azure SQL.",
        },
        {
          question: "Do you handle zero-downtime migrations?",
          answer:
            "Yes. We plan phased migrations with replication, cutover rehearsals, and roll-back procedures to minimize or eliminate downtime.",
        },
        {
          question: "Can you optimize our existing database?",
          answer:
            "Absolutely. We conduct performance audits, analyze slow queries, improve indexing strategies, and implement caching or sharding where needed.",
        },
        {
          question: "Do you provide documentation and training?",
          answer:
            "Every engagement includes comprehensive documentation, runbooks, and handover workshops so your internal teams can operate the system confidently.",
        },
      ],
      relatedBlogs: [
        {
          id: "4",
          title: "Optimizing Database Performance: A Comprehensive Guide",
          category: "Database",
          image: IMAGES.BLOG_4,
        },
        {
          id: "6",
          title: "Security Best Practices for Web Applications",
          category: "Security",
          image: IMAGES.BLOG_6,
        },
      ],
    },
    {
      id: "8",
      slug: "security-services",
      title: "Security Services",
      description:
        "Comprehensive security solutions to protect your applications.",
      longDescription:
        "Protect your applications and data with proactive security assessments, monitoring, and remediation plans. We combine automated tooling with experienced security engineers to mitigate risks before they impact your business.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "SSL/TLS Implementation",
        "Data Encryption",
        "Security Monitoring",
        "Compliance Consulting",
      ],
      benefits: [
        "Early vulnerability detection",
        "Stronger compliance posture",
        "Reduced breach risk",
        "Continuous monitoring",
        "Actionable remediation plans",
      ],
      process: [
        "Assessment & Planning",
        "Threat Modeling",
        "Testing & Validation",
        "Remediation Support",
        "Monitoring & Reporting",
      ],
      technologies: [
        "OWASP ZAP",
        "Burp Suite",
        "Snyk",
        "AWS Security Hub",
        "Azure Defender",
        "Splunk",
      ],
      duration: "3-6 weeks",
      team: "2-4 security engineers",
      price: "Starting from $14,000",
      image: IMAGES.SECURITY_ICON,
      category: "Security Services",
      stats: {
        projects: "55+",
        clients: "30+",
        satisfaction: "99%",
        successRate: "98%",
      },
      testimonials: [
        {
          text: "Verticulus helped us pass a critical compliance audit on the first attempt. Their team uncovered issues our internal tools completely missed.",
          author: "Priya Nair",
          title: "CISO",
          company: "Finlytics",
          avatar: IMAGES.TESTIMONIAL_3,
          rating: 5,
        },
        {
          text: "Their penetration testing report was thorough, prioritized realistically, and included clear remediation guidance for our developers.",
          author: "Mark Ellis",
          title: "Head of Engineering",
          company: "SecurePay",
          avatar: IMAGES.TESTIMONIAL_1,
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Do you provide ongoing security monitoring?",
          answer:
            "Yes. We offer continuous monitoring, alert triage, and incident response retainers tailored to your infrastructure and compliance needs.",
        },
        {
          question: "Can you help us achieve compliance certifications?",
          answer:
            "We advise on SOC 2, ISO 27001, HIPAA, GDPR, and PCI DSS readiness, including gap analysis, policy development, and audit preparation.",
        },
        {
          question: "What types of penetration tests do you perform?",
          answer:
            "We run black-box, gray-box, and white-box penetration tests across web apps, APIs, cloud infrastructure, and mobile applications.",
        },
        {
          question: "Do you offer secure SDLC consulting?",
          answer:
            "Absolutely. We can embed secure coding practices, threat modeling, and automated security scans into your development lifecycle.",
        },
      ],
      relatedBlogs: [
        {
          id: "6",
          title: "Security Best Practices for Web Applications",
          category: "Security",
          image: IMAGES.BLOG_6,
        },
        {
          id: "2",
          title: "Mobile App Development: Native vs Cross-Platform",
          category: "Mobile Development",
          image: IMAGES.BLOG_2,
        },
      ],
    },
  ];

  const service = services.find(
    (s) => s.slug === serviceId || s.id === serviceId
  );

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
              {/* Service Overview Stats */}
              {service.stats && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-theme-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-theme-white mb-1">
                      {service.stats.projects}
                    </div>
                    <div className="text-sm text-theme-gray-400">Projects</div>
                  </div>
                  <div className="bg-theme-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-theme-white mb-1">
                      {service.stats.clients}
                    </div>
                    <div className="text-sm text-theme-gray-400">Clients</div>
                  </div>
                  <div className="bg-theme-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-theme-white mb-1">
                      {service.stats.satisfaction}
                    </div>
                    <div className="text-sm text-theme-gray-400">
                      Satisfaction
                    </div>
                  </div>
                  <div className="bg-theme-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-theme-white mb-1">
                      {service.stats.successRate}
                    </div>
                    <div className="text-sm text-theme-gray-400">
                      Success Rate
                    </div>
                  </div>
                </div>
              )}
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
              <div
                key={index}
                className="flex items-center gap-2 card p-4 sm:p-6 text-center"
              >
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

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-theme-gray-50 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
                Common questions about our {service.title} services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="card overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-theme-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-theme-black pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-theme-gray-600 flex-shrink-0 transition-transform duration-200 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-sm sm:text-base text-theme-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific Testimonials Section */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="bg-theme-gray-50 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
                What Our Clients Say About {service.title}
              </h2>
              <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
                Real feedback from clients who have used our {service.title}{" "}
                services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.testimonials.map((testimonial, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-theme-black">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-theme-gray-600">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-theme-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-theme-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blog/News Section */}
      {service.relatedBlogs && service.relatedBlogs.length > 0 && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
                Related Articles & Insights
              </h2>
              <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
                Explore related content about {service.title} and stay updated
                with the latest trends
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.relatedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-theme-black text-theme-white px-2 py-1 rounded-full text-xs font-medium mb-3">
                      {blog.category}
                    </div>
                    <h3 className="text-lg font-semibold text-theme-black mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center text-sm">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="btn-outline inline-flex items-center"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-gray-100">
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
