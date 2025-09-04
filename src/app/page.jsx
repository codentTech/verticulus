import React from "react";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import ProductShowcase from "../components/product-showcase";
import TechStackSection from "../components/tech-stack-section";
import SuccessStories from "../components/success-stories";
import TestimonialsSection from "../components/testimonials-section";
import AwardsSection from "../components/awards-section";
import BlogSection from "../components/blog-section";
import CTASection from "../components/cta-section";
import { IMAGES } from "../common/constants/images.constant";
import {
  Brain,
  Code,
  Search,
  Zap,
  Shield,
  Users,
  Settings,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies including React, Vue.js, Angular, and Node.js. We create responsive, scalable solutions that deliver exceptional user experiences and drive business growth.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms. We develop high-performance mobile apps using React Native, Flutter, Swift, and Kotlin for seamless user experiences.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that provide exceptional user experiences. Our design team creates wireframes, prototypes, and design systems using modern tools and best practices.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud. We help businesses migrate to the cloud and optimize infrastructure for maximum efficiency.",
    },
  ];

  const caseStudies = [
    {
      id: "1",
      image: IMAGES.CASE_STUDY_1,
      title:
        "Developed AI-Driven Fusebox Inspection, Optimized Assembly Efficiency",
      client: "KIA",
      stats: [
        { label: "Faster Inspection", value: "12%" },
        { label: "Cost Reduction", value: "10%" },
        { label: "Accuracy Rate", value: "95%" },
      ],
    },
    {
      id: "2",
      image: IMAGES.CASE_STUDY_2,
      title: "AWS Talent Augmentation & Cloud Migration",
      client: "CT Solutions",
      stats: [
        { label: "Efficiency Gain", value: "15%" },
        { label: "Uptime", value: "95%" },
        { label: "Cost Reduction", value: "30%" },
      ],
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Role of IoT Integration in Smart Enterprises",
      category: "Technology",
      image: IMAGES.BLOG_1,
    },
    {
      id: "2",
      title:
        "Leveraging GenAI for Business Innovation: Real-World Applications",
      category: "Technology",
      image: IMAGES.BLOG_2,
    },
    {
      id: "3",
      title: "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
      category: "Technology",
      image: IMAGES.BLOG_3,
    },
  ];

  return (
    <main>
      <HeroSection />
      <ServicesSection services={services} />
      <ProductShowcase />
      <TechStackSection />
      <SuccessStories caseStudies={caseStudies} />
      <TestimonialsSection />
      <AwardsSection />
      <BlogSection blogPosts={blogPosts} />
      <CTASection />
    </main>
  );
}
