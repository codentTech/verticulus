import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IMAGES } from "../../common/constants/images.constant";
import Image from "next/image";

export default function Blog() {
  const featuredPost = {
    id: 0,
    slug: "future-of-web-development-trends-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends and technologies that are shaping the future of web development, from AI integration to performance optimization techniques.",
    author: "John Doe",
    date: "January 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    image: IMAGES.BLOG_FEATURED,
  };

  const posts = [
    {
      id: 1,
      slug: "building-scalable-react-applications-best-practices",
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "Learn the essential best practices for building scalable React applications that can handle growth and maintain performance.",
      author: "Jane Smith",
      date: "January 12, 2024",
      category: "React",
      readTime: "6 min read",
      image: IMAGES.BLOG_1,
    },
    {
      id: 2,
      slug: "mobile-app-development-native-vs-cross-platform",
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "Compare native and cross-platform mobile development approaches to choose the best solution for your project.",
      author: "Mike Johnson",
      date: "January 10, 2024",
      category: "Mobile Development",
      readTime: "7 min read",
      image: IMAGES.BLOG_2,
    },
    {
      id: 3,
      slug: "ui-ux-design-principles-better-user-experience",
      title: "UI/UX Design Principles for Better User Experience",
      excerpt:
        "Discover the fundamental principles of UI/UX design that can significantly improve your application's user experience.",
      author: "Sarah Wilson",
      date: "January 8, 2024",
      category: "Design",
      readTime: "5 min read",
      image: IMAGES.BLOG_3,
    },
    {
      id: 4,
      slug: "optimizing-database-performance-comprehensive-guide",
      title: "Optimizing Database Performance: A Comprehensive Guide",
      excerpt:
        "Learn advanced techniques for optimizing database performance and ensuring your applications run smoothly.",
      author: "David Brown",
      date: "January 5, 2024",
      category: "Database",
      readTime: "10 min read",
      image: IMAGES.BLOG_4,
    },
    {
      id: 5,
      slug: "cloud-computing-choosing-right-platform",
      title: "Cloud Computing: Choosing the Right Platform",
      excerpt:
        "Compare different cloud platforms and learn how to choose the right one for your business needs.",
      author: "Lisa Chen",
      date: "January 3, 2024",
      category: "Cloud",
      readTime: "9 min read",
      image: IMAGES.BLOG_5,
    },
    {
      id: 6,
      slug: "security-best-practices-web-applications",
      title: "Security Best Practices for Web Applications",
      excerpt:
        "Implement essential security measures to protect your web applications from common vulnerabilities and attacks.",
      author: "Alex Rodriguez",
      date: "January 1, 2024",
      category: "Security",
      readTime: "8 min read",
      image: IMAGES.BLOG_6,
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Design",
    "Database",
    "Cloud",
    "Security",
    "React",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-white mb-4 sm:mb-6">
            Our <span className="text-accent-400">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-theme-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Insights, tutorials, and industry updates from our team of experts.
            Stay informed about the latest trends in software development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              Featured Article
            </h2>
          </div>

          <div className="card overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-block bg-theme-black text-theme-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
                  {featuredPost.category}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-black mb-3 sm:mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-theme-gray-600 mb-4 sm:mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-sm sm:text-base text-theme-gray-500">
                    {featuredPost.author} • {featuredPost.date} •{" "}
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 inline-block text-center"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-theme-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              All Articles
            </h2>
            <p className="text-lg sm:text-xl text-theme-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of articles and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <article key={index} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="inline-block bg-theme-black text-theme-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-gray-600 mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-theme-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-theme-black hover:text-theme-gray-700 font-medium text-xs sm:text-sm inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
    </div>
  );
}
