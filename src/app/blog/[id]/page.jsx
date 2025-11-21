import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { IMAGES } from "../../../common/constants/images.constant";

export default function BlogDetail({ params }) {
  const slug = params?.id || params;

  // Hardcoded blog posts data
  const blogPosts = [
    {
      id: 0,
      slug: "future-of-web-development-trends-2024",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends and technologies that are shaping the future of web development, from AI integration to performance optimization techniques.",
      content: `
        <p>The landscape of web development is constantly evolving, driven by technological advancements and changing user expectations. As we move through 2024, several key trends are shaping the future of how we build and deploy web applications.</p>
        
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming increasingly sophisticated and accessible. Developers are now using AI-powered assistants to write boilerplate code, suggest optimizations, and even debug complex issues.</p>
        
        <h2>2. Performance Optimization</h2>
        <p>With users expecting faster load times and smoother experiences, performance optimization has become more critical than ever. Techniques like code splitting, lazy loading, and advanced caching strategies are essential for modern web applications.</p>
        
        <h2>3. Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to gain popularity as they bridge the gap between web and native applications. With features like offline functionality, push notifications, and app-like experiences, PWAs offer the best of both worlds.</p>
        
        <h2>4. Micro-Frontend Architecture</h2>
        <p>Large applications are increasingly adopting micro-frontend architecture, allowing teams to work independently on different parts of the application. This approach improves scalability and maintainability.</p>
        
        <h2>5. WebAssembly (WASM)</h2>
        <p>WebAssembly is enabling high-performance applications to run in the browser. From complex calculations to graphics-intensive applications, WASM is opening new possibilities for web development.</p>
        
        <p>As we continue through 2024, these trends will shape how we approach web development, making it more efficient, performant, and user-friendly than ever before.</p>
      `,
      author: "John Doe",
      date: "January 15, 2024",
      category: "Web Development",
      readTime: "8 min read",
      image: IMAGES.BLOG_FEATURED,
    },
    {
      id: 1,
      slug: "building-scalable-react-applications-best-practices",
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "Learn the essential best practices for building scalable React applications that can handle growth and maintain performance.",
      content: `
        <p>Building scalable React applications requires careful planning and adherence to best practices. As your application grows, maintaining code quality and performance becomes increasingly important.</p>
        
        <h2>1. Component Architecture</h2>
        <p>Design your components with reusability in mind. Break down complex components into smaller, focused pieces that can be easily tested and maintained. Use composition over inheritance and keep components pure when possible.</p>
        
        <h2>2. State Management</h2>
        <p>Choose the right state management solution for your application. For smaller apps, React's built-in state might be sufficient. For larger applications, consider Redux, Zustand, or Context API with useReducer.</p>
        
        <h2>3. Performance Optimization</h2>
        <p>Implement React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Use React.lazy for code splitting and implement proper loading states for better user experience.</p>
        
        <h2>4. Code Organization</h2>
        <p>Organize your code into logical folders and files. Separate concerns by feature rather than by type. Use consistent naming conventions and maintain a clear folder structure.</p>
        
        <h2>5. Testing Strategy</h2>
        <p>Implement comprehensive testing using Jest and React Testing Library. Write unit tests for components, integration tests for features, and end-to-end tests for critical user flows.</p>
        
        <p>By following these best practices, you can build React applications that are maintainable, performant, and ready to scale with your business needs.</p>
      `,
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
      content: `
        <p>Choosing between native and cross-platform mobile development is one of the most important decisions when starting a mobile project. Each approach has its advantages and trade-offs.</p>
        
        <h2>Native Development</h2>
        <p>Native development involves building separate applications for iOS and Android using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). This approach provides the best performance and access to platform-specific features.</p>
        
        <h2>Cross-Platform Development</h2>
        <p>Cross-platform frameworks like React Native, Flutter, and Xamarin allow you to write code once and deploy to multiple platforms. This approach reduces development time and cost while maintaining good performance.</p>
        
        <h2>Performance Considerations</h2>
        <p>Native apps typically offer the best performance as they're optimized for their respective platforms. Cross-platform apps have improved significantly but may still have performance overhead in complex applications.</p>
        
        <h2>Development Time and Cost</h2>
        <p>Cross-platform development reduces time to market and development costs by allowing you to maintain a single codebase. Native development requires separate teams and longer development cycles.</p>
        
        <h2>Platform-Specific Features</h2>
        <p>Native development provides immediate access to all platform features and APIs. Cross-platform frameworks may have limitations or require additional plugins for certain features.</p>
        
        <p>The choice between native and cross-platform depends on your project requirements, budget, timeline, and performance needs. Consider these factors carefully when making your decision.</p>
      `,
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
      content: `
        <p>Good UI/UX design is crucial for creating applications that users love to use. Understanding and applying fundamental design principles can significantly improve user satisfaction and engagement.</p>
        
        <h2>1. User-Centered Design</h2>
        <p>Always design with the user in mind. Conduct user research, create personas, and understand your users' needs, goals, and pain points. This understanding should guide every design decision.</p>
        
        <h2>2. Consistency</h2>
        <p>Maintain consistency across your application in terms of colors, typography, spacing, and interaction patterns. Consistency helps users learn your interface faster and reduces cognitive load.</p>
        
        <h2>3. Simplicity</h2>
        <p>Keep interfaces simple and intuitive. Remove unnecessary elements and focus on the core functionality. A clean, uncluttered interface is easier to use and more visually appealing.</p>
        
        <h2>4. Accessibility</h2>
        <p>Design for accessibility from the start. Ensure your application can be used by people with disabilities by following WCAG guidelines and implementing proper contrast ratios, keyboard navigation, and screen reader support.</p>
        
        <h2>5. Feedback and Response</h2>
        <p>Provide clear feedback for user actions. Use loading states, success messages, and error handling to keep users informed about what's happening in your application.</p>
        
        <p>By applying these principles, you can create user experiences that are not only functional but also delightful and engaging for your users.</p>
      `,
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
      content: `
        <p>Database performance optimization is critical for maintaining fast, responsive applications. Poor database performance can significantly impact user experience and system scalability.</p>
        
        <h2>1. Query Optimization</h2>
        <p>Write efficient queries by avoiding SELECT *, using appropriate indexes, and minimizing the number of database round trips. Use query analyzers to identify slow queries and optimize them.</p>
        
        <h2>2. Indexing Strategy</h2>
        <p>Create indexes on frequently queried columns and composite indexes for complex queries. Monitor index usage and remove unused indexes to maintain optimal performance.</p>
        
        <h2>3. Database Design</h2>
        <p>Design your database schema with performance in mind. Normalize data appropriately, use appropriate data types, and avoid over-normalization that can lead to complex joins.</p>
        
        <h2>4. Caching</h2>
        <p>Implement caching strategies at multiple levels. Use application-level caching, database query caching, and CDN caching to reduce database load and improve response times.</p>
        
        <h2>5. Connection Pooling</h2>
        <p>Use connection pooling to manage database connections efficiently. This reduces the overhead of establishing new connections and improves application performance.</p>
        
        <p>Regular monitoring and optimization of your database performance ensures your applications remain fast and responsive as they grow.</p>
      `,
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
      content: `
        <p>Choosing the right cloud platform is crucial for the success of your application. Each platform offers different features, pricing models, and capabilities that should align with your business requirements.</p>
        
        <h2>1. AWS (Amazon Web Services)</h2>
        <p>AWS is the market leader with the most comprehensive set of services. It offers excellent scalability, global infrastructure, and extensive service offerings. However, it can be complex for beginners and may be more expensive for smaller projects.</p>
        
        <h2>2. Microsoft Azure</h2>
        <p>Azure is particularly strong for enterprises using Microsoft technologies. It offers excellent integration with Windows, .NET, and Microsoft services. Azure also provides good hybrid cloud capabilities.</p>
        
        <h2>3. Google Cloud Platform (GCP)</h2>
        <p>GCP excels in data analytics, machine learning, and container orchestration. It offers competitive pricing and strong performance. GCP is particularly popular for data-intensive applications.</p>
        
        <h2>4. Key Considerations</h2>
        <p>When choosing a cloud platform, consider factors like pricing, service offerings, geographic presence, integration capabilities, and your team's expertise. Also evaluate the platform's security features and compliance certifications.</p>
        
        <h2>5. Multi-Cloud Strategy</h2>
        <p>Consider adopting a multi-cloud strategy to leverage the strengths of different platforms. This approach provides flexibility and reduces vendor lock-in, though it increases complexity.</p>
        
        <p>The right cloud platform depends on your specific needs, budget, and technical requirements. Take time to evaluate your options and choose the platform that best supports your business goals.</p>
      `,
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
      content: `
        <p>Web application security is more important than ever as cyber threats continue to evolve. Implementing security best practices from the start can protect your application and users from various attacks.</p>
        
        <h2>1. Input Validation and Sanitization</h2>
        <p>Always validate and sanitize user inputs to prevent injection attacks like SQL injection and XSS. Use parameterized queries and implement proper input validation on both client and server sides.</p>
        
        <h2>2. Authentication and Authorization</h2>
        <p>Implement strong authentication mechanisms using secure protocols like OAuth 2.0 or JWT. Use multi-factor authentication and implement proper session management with secure session tokens.</p>
        
        <h2>3. HTTPS and SSL/TLS</h2>
        <p>Always use HTTPS to encrypt data in transit. Implement proper SSL/TLS configurations and keep certificates up to date. Consider using HSTS headers to enforce HTTPS usage.</p>
        
        <h2>4. Security Headers</h2>
        <p>Implement security headers like Content Security Policy (CSP), X-Frame-Options, and X-Content-Type-Options to protect against various attacks and improve application security.</p>
        
        <h2>5. Regular Security Audits</h2>
        <p>Conduct regular security audits and vulnerability assessments. Use automated tools and manual testing to identify potential security issues. Keep dependencies updated to patch known vulnerabilities.</p>
        
        <p>Security should be a continuous process, not a one-time implementation. Regular monitoring, updates, and security assessments help maintain a secure application environment.</p>
      `,
      author: "Alex Rodriguez",
      date: "January 1, 2024",
      category: "Security",
      readTime: "8 min read",
      image: IMAGES.BLOG_6,
    },
    {
      id: 7,
      slug: "role-of-iot-integration-smart-enterprises",
      title: "The Role of IoT Integration in Smart Enterprises",
      excerpt:
        "Discover how IoT integration is transforming smart enterprises and enabling data-driven decision making.",
      content: `
        <p>Internet of Things (IoT) integration has become a cornerstone of modern smart enterprises, enabling unprecedented levels of connectivity, automation, and data-driven insights.</p>
        
        <h2>1. Enhanced Data Collection</h2>
        <p>IoT devices provide real-time data collection from various sources throughout the enterprise. This data enables better decision-making and operational efficiency.</p>
        
        <h2>2. Automation and Efficiency</h2>
        <p>IoT integration automates routine processes, reducing manual intervention and improving overall operational efficiency. Smart systems can respond to conditions automatically.</p>
        
        <h2>3. Predictive Maintenance</h2>
        <p>IoT sensors enable predictive maintenance by monitoring equipment health and predicting failures before they occur, reducing downtime and maintenance costs.</p>
        
        <h2>4. Improved Customer Experience</h2>
        <p>IoT enables personalized customer experiences through real-time data collection and analysis, allowing businesses to respond to customer needs more effectively.</p>
        
        <p>As enterprises continue to embrace digital transformation, IoT integration will play an increasingly vital role in creating smarter, more efficient operations.</p>
      `,
      author: "Tech Expert",
      date: "January 20, 2024",
      category: "Technology",
      readTime: "7 min read",
      image: IMAGES.BLOG_1,
    },
    {
      id: 8,
      slug: "leveraging-genai-business-innovation-real-world-applications",
      title:
        "Leveraging GenAI for Business Innovation: Real-World Applications",
      excerpt:
        "Explore how Generative AI is driving business innovation across various industries and use cases.",
      content: `
        <p>Generative AI (GenAI) is revolutionizing how businesses operate, innovate, and serve their customers. From content creation to problem-solving, GenAI offers transformative capabilities.</p>
        
        <h2>1. Content Generation and Marketing</h2>
        <p>GenAI enables businesses to create high-quality content at scale, from marketing copy to social media posts, significantly reducing content creation time and costs.</p>
        
        <h2>2. Customer Service Automation</h2>
        <p>AI-powered chatbots and virtual assistants provide 24/7 customer support, handling routine inquiries and freeing human agents for complex issues.</p>
        
        <h2>3. Product Development</h2>
        <p>GenAI assists in product design, prototyping, and testing by generating ideas, analyzing requirements, and suggesting improvements based on market data.</p>
        
        <h2>4. Data Analysis and Insights</h2>
        <p>GenAI can analyze vast amounts of data to identify patterns, generate insights, and provide recommendations that would be difficult for humans to discover.</p>
        
        <p>The applications of GenAI in business are vast and growing. Companies that embrace this technology early will gain significant competitive advantages.</p>
      `,
      author: "AI Specialist",
      date: "January 18, 2024",
      category: "Technology",
      readTime: "9 min read",
      image: IMAGES.BLOG_2,
    },
    {
      id: 9,
      slug: "modernizing-legacy-systems-roadmap-seamless-transition",
      title: "Modernizing Legacy Systems: A Roadmap for Seamless Transition",
      excerpt:
        "Learn how to modernize legacy systems without disrupting business operations, with a proven roadmap for success.",
      content: `
        <p>Modernizing legacy systems is a critical challenge for many organizations. A well-planned approach ensures a smooth transition while maintaining business continuity.</p>
        
        <h2>1. Assessment and Planning</h2>
        <p>Begin with a comprehensive assessment of your current systems. Identify dependencies, risks, and opportunities. Create a detailed modernization roadmap with clear milestones.</p>
        
        <h2>2. Incremental Migration</h2>
        <p>Adopt an incremental approach rather than a big-bang migration. This reduces risk and allows for learning and adjustment along the way.</p>
        
        <h2>3. API-First Strategy</h2>
        <p>Implement an API-first strategy to decouple legacy systems from new applications. This enables gradual modernization while maintaining integration.</p>
        
        <h2>4. Training and Change Management</h2>
        <p>Invest in training and change management to ensure your team is prepared for the new systems. Address concerns and provide adequate support during the transition.</p>
        
        <p>Successful legacy system modernization requires careful planning, stakeholder buy-in, and a commitment to continuous improvement throughout the process.</p>
      `,
      author: "System Architect",
      date: "January 16, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: IMAGES.BLOG_3,
    },
  ];

  // Find by slug first, fallback to ID for backward compatibility
  const post = blogPosts.find(
    (post) => post.slug === slug || post.id === parseInt(slug)
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-theme-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent-400 text-theme-white px-3 py-1 text-sm rounded-full mb-4">
              {post.category}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-white mb-4 sm:mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-theme-gray-300 text-sm sm:text-base mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <p className="text-lg sm:text-xl text-theme-gray-300">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden mb-8">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <article className="prose prose-lg max-w-none">
              <div
                className="text-theme-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <div className="mt-12 pt-8 border-t border-theme-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center text-theme-black hover:text-accent-600 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
