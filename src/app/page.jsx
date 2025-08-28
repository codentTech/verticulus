import AwardsSection from "../components/awards-section";
import BlogSection from "../components/blog-section";
import CTASection from "../components/cta-section";
import HeroSection from "../components/hero-section";
import ProductShowcase from "../components/product-showcase";
import ServicesSection from "../components/services-section";
import SuccessStories from "../components/success-stories";
import TechStackSection from "../components/tech-stack-section";
import TestimonialsSection from "../components/testimonials-section";
import { IMAGES } from "../common/constants/images.constant";
import {
  Bot,
  Building2,
  Clock,
  Laptop,
  Search,
  Settings,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const featuredClients = [
    { name: "KIA", logo: IMAGES.CLIENT_KIA },
    { name: "WAJAD", logo: IMAGES.CLIENT_WAJAD },
    { name: "talkpresso", logo: IMAGES.CLIENT_TALKPRESSO },
    { name: "CT Solutions", logo: IMAGES.CLIENT_CT_SOLUTIONS },
  ];

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery Workshop",
      description:
        "Strategic planning and requirement gathering to align technology with business goals. We conduct business analysis and create detailed roadmaps.",
      features: [
        "Strategic Planning",
        "Requirement Gathering",
        "Business Alignment",
      ],
      image: IMAGES.PROCESS_DISCOVERY,
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI & ML",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning. We develop custom AI models and implement predictive analytics.",
      features: [
        "Predictive Analytics",
        "Machine Learning",
        "Intelligent Automation",
      ],
      image: IMAGES.AI_ML_ICON,
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Talent Augmentation",
      description:
        "Expert developers and designers to augment your existing team. Our professionals bring years of industry experience across multiple technologies.",
      features: ["Expert Developers", "Designers", "Team Augmentation"],
      image: IMAGES.TEAM_MEMBER_1,
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Custom Development",
      description:
        "Tailored software solutions built specifically for your business needs. We build scalable applications using modern technologies and best practices.",
      features: ["Custom Software", "Tailored Solutions", "Business-Specific"],
      image: IMAGES.CODE_SCREENSHOT,
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Application Modernization",
      description:
        "Transform legacy systems into modern, scalable applications. We analyze existing systems and implement cloud-native solutions.",
      features: ["Legacy Transformation", "Modern Applications", "Scalability"],
      image: IMAGES.CLOUD_INFRASTRUCTURE,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description:
        "Streamlined deployment and cloud infrastructure management. We architect cloud-native solutions using AWS, Azure, and Google Cloud.",
      features: [
        "Cloud Migration",
        "Infrastructure Management",
        "DevOps Automation",
      ],
      image: IMAGES.CLOUD_ICON,
    },
  ];

  const techStack = [
    "React",
    "Angular",
    "Vue",
    "Next.js",
    "GraphQL",
    "Android",
    "Swift",
    "Java",
    "Python",
    "Django",
    "Node.js",
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab",
    "GitHub",
  ];

  const testimonials = [
    {
      text: "Verticulus delivered exceptional results that exceeded our expectations. Their AI-driven solution transformed our manufacturing process.",
      author: "Muzhar Khan",
      title: "Head of Technology",
      company: "TechCorp Industries",
      avatar: IMAGES.TESTIMONIAL_1,
    },
    {
      text: "Working with Verticulus was a game-changer. Their modern approach to development delivered exactly what we needed.",
      author: "Mike Davis",
      title: "CEO",
      company: "TechStart",
      avatar: IMAGES.TESTIMONIAL_2,
    },
    {
      text: "The team's expertise in cloud solutions and talent augmentation helped us scale efficiently and maintain high performance.",
      author: "Sarah Johnson",
      title: "CTO, CT Solutions",
      avatar: IMAGES.TESTIMONIAL_3,
    },
  ];

  const awards = [
    { name: "Clutch", icon: "🏆" },
    { name: "Clutch", icon: "🏆" },
    { name: "Clutch", icon: "🏆" },
    { name: "Upwork Top Rated Plus", icon: "⭐" },
    { name: "AWS Solutions Architect", icon: "☁️" },
    { name: "AWS Machine Learning", icon: "🤖" },
    { name: "AWS DevOps Engineer", icon: "⚙️" },
  ];

  const stats = [
    { number: "70+", label: "Successful Projects", icon: Users },
    { number: "200k+", label: "Development Hours", icon: Clock },
    { number: "52+", label: "Global Teams", icon: Users },
    { number: "10M+", label: "Active Product Users", icon: Zap },
  ];

  const blogPosts = [
    {
      title: "The Role of IoT Integration in Smart Enterprises",
      category: "Technology",
      image: IMAGES.BLOG_1,
    },
    {
      title:
        "Leveraging GenAI for Business Innovation: Real-World Applications",
      category: "Technology",
      image: IMAGES.BLOG_2,
    },
    {
      title: "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
      category: "Technology",
      image: IMAGES.BLOG_3,
    },
  ];

  const caseStudies = [
    {
      image: IMAGES.CASE_STUDY_1,
      title: "Developed AI-Driven Fusebox Inspection, Optimized Assembly Efficiency",
      client: "KIA",
      stats: [
        { label: "12% Faster Inspection", value: "12%" },
        { label: "10% Lower Manpower Cost", value: "10%" },
      ],
    },
    {
      image: IMAGES.CASE_STUDY_2,
      title: "Provided AWS Talent Augmentation, Enhanced Cloud Efficiency",
      client: "CT Solutions",
      stats: [
        { label: "15% Efficiency", value: "15%" },
        { label: "95% Uptime", value: "95%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-theme-dark">
      <HeroSection featuredClients={featuredClients} />
      <ServicesSection services={services} />
      <ProductShowcase />
      <TechStackSection techStack={techStack} />
      <SuccessStories caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <AwardsSection awards={awards} stats={stats} />
      <BlogSection blogPosts={blogPosts} />
      <CTASection />
    </div>
  );
}
