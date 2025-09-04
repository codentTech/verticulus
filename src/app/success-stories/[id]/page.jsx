import { notFound } from "next/navigation";
import { IMAGES } from "../../../common/constants/images.constant";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

export default function SuccessStoryDetail({ params }) {
  // Success stories data - in a real app, this would come from an API or database
  const successStories = [
    {
      id: "1",
      title: "AI-Driven Fusebox Inspection System",
      client: "KIA Motors",
      industry: "Automotive Manufacturing",
      description:
        "Developed an AI-powered inspection system that revolutionized KIA's manufacturing process by automating quality control and reducing defects.",
      longDescription:
        "KIA Motors was facing challenges with manual inspection processes that were time-consuming, error-prone, and costly. We developed a comprehensive AI-driven inspection system that transformed their manufacturing process.",
      challenge:
        "Manual inspection processes were slow, inconsistent, and expensive. The existing system couldn't keep up with production demands and was prone to human error.",
      solution:
        "We developed a computer vision-based AI system that could automatically inspect fuseboxes for defects, measure dimensions, and ensure quality standards. The system integrated seamlessly with existing production lines.",
      results: [
        "12% faster inspection process",
        "10% reduction in manpower costs",
        "95% accuracy in defect detection",
        "Real-time quality monitoring",
        "Scalable across multiple production lines",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "AWS",
        "React",
      ],
      duration: "16 weeks",
      team: "5 developers",
      image: IMAGES.CASE_STUDY_1,
      stats: [
        { label: "Faster Inspection", value: "12%", icon: TrendingUp },
        { label: "Cost Reduction", value: "10%", icon: DollarSign },
        { label: "Accuracy Rate", value: "95%", icon: Check },
        { label: "Team Size", value: "5", icon: Users },
      ],
      process: [
        "Requirements Analysis",
        "AI Model Development",
        "System Integration",
        "Testing & Validation",
        "Deployment & Training",
      ],
    },
    {
      id: "2",
      title: "AWS Talent Augmentation & Cloud Migration",
      client: "CT Solutions",
      industry: "Technology Services",
      description:
        "Provided AWS expertise and helped migrate legacy systems to cloud infrastructure, improving efficiency and reducing costs.",
      longDescription:
        "CT Solutions was struggling with legacy infrastructure that was expensive to maintain and difficult to scale. We provided AWS expertise and helped them migrate to a modern cloud infrastructure.",
      challenge:
        "Legacy infrastructure was expensive, difficult to maintain, and couldn't scale with business growth. The team lacked cloud expertise.",
      solution:
        "We provided AWS-certified developers and architects to help migrate their systems to AWS. We implemented modern DevOps practices and automated deployment pipelines.",
      results: [
        "15% improvement in operational efficiency",
        "95% uptime achieved",
        "30% reduction in infrastructure costs",
        "Faster deployment cycles",
        "Improved security and compliance",
      ],
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Python",
      ],
      duration: "12 weeks",
      team: "4 developers",
      image: IMAGES.CASE_STUDY_2,
      stats: [
        { label: "Efficiency Gain", value: "15%", icon: TrendingUp },
        { label: "Uptime", value: "95%", icon: Check },
        { label: "Cost Reduction", value: "30%", icon: DollarSign },
        { label: "Team Size", value: "4", icon: Users },
      ],
      process: [
        "Infrastructure Assessment",
        "Migration Planning",
        "Cloud Implementation",
        "Testing & Optimization",
        "Handover & Support",
      ],
    },
    {
      id: "3",
      title: "E-commerce Platform Development",
      client: "talkpresso",
      industry: "Retail & E-commerce",
      description:
        "Built a modern e-commerce platform with advanced features including AI-powered recommendations and seamless payment integration.",
      longDescription:
        "talkpresso needed a modern e-commerce platform that could handle high traffic, provide personalized shopping experiences, and integrate with multiple payment systems. We developed a scalable solution that exceeded their expectations.",
      challenge:
        "Existing platform was outdated, slow, and couldn't handle increasing traffic. They needed modern features like AI recommendations and mobile optimization.",
      solution:
        "We built a modern e-commerce platform using React and Node.js with AI-powered product recommendations, mobile-first design, and seamless payment integration.",
      results: [
        "40% increase in sales",
        "60% improvement in page load speed",
        "85% mobile conversion rate",
        "Seamless payment integration",
        "AI-powered recommendations",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "AI/ML"],
      duration: "14 weeks",
      team: "6 developers",
      image: IMAGES.PROJECT_1,
      stats: [
        { label: "Sales Increase", value: "40%", icon: TrendingUp },
        { label: "Load Speed", value: "60%", icon: TrendingUp },
        { label: "Mobile Conversion", value: "85%", icon: Check },
        { label: "Team Size", value: "6", icon: Users },
      ],
      process: [
        "Requirements Gathering",
        "Design & Prototyping",
        "Development",
        "Testing & QA",
        "Launch & Optimization",
      ],
    },
  ];

  const story = successStories.find((s) => s.id === params.id);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-4">
            <Link
              href="/"
              className="text-theme-gray-300 hover:text-theme-white flex items-center text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <div className="inline-block bg-accent-600 text-theme-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                {story.industry}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-white mb-3 sm:mb-4">
                {story.title}
              </h1>
              <p className="text-base sm:text-lg text-theme-gray-300 mb-4 sm:mb-6">
                {story.longDescription}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center text-theme-gray-300">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{story.client}</span>
                </div>
                <div className="flex items-center text-theme-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{story.duration}</span>
                </div>
                <div className="flex items-center text-theme-gray-300">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{story.team}</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {story.stats.map((stat, index) => (
              <div key={index} className="card p-4 sm:p-6 text-center">
                <div className="icon-container-accent mb-3">
                  <stat.icon className="h-5 w-5 text-accent-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-theme-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="bg-theme-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-4">
                The Challenge
              </h2>
              <p className="text-base text-theme-gray-600 leading-relaxed">
                {story.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-4">
                Our Solution
              </h2>
              <p className="text-base text-theme-gray-600 leading-relaxed">
                {story.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
              Results & Impact
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
              The measurable outcomes and business impact achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {story.results.map((result, index) => (
              <div key={index} className="card p-4 sm:p-6">
                <div className="icon-container-accent mb-3">
                  <Check className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="text-base font-semibold text-theme-black mb-2">
                  {result}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-theme-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-white mb-2">
              Our Process
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-300 max-w-2xl mx-auto">
              How we delivered exceptional results for {story.client}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {story.process.map((step, index) => (
              <div
                key={index}
                className="bg-theme-gray-800 rounded-lg p-4 text-center"
              >
                <div className="w-10 h-10 bg-accent-600 text-theme-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-theme-white mb-2">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-2">
              Technologies Used
            </h2>
            <p className="text-sm sm:text-base text-theme-gray-600 max-w-2xl mx-auto">
              Modern technologies and tools that powered this success story
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {story.technologies.map((tech, index) => (
              <div key={index} className="card p-3 text-center">
                <span className="text-theme-black font-medium text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-theme-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-theme-black mb-3 sm:mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-sm sm:text-base text-theme-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create amazing results together
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary text-sm px-6 py-3">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="btn-outline text-sm px-6 py-3">
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
