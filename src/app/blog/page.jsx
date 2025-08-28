import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const featuredPost = {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends and technologies that are shaping the future of web development, from AI integration to performance optimization techniques.',
    author: 'John Doe',
    date: 'January 15, 2024',
    category: 'Web Development',
    readTime: '8 min read',
    image: '/placeholder'
  }

  const posts = [
    {
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn the essential best practices for building scalable React applications that can handle growth and maintain performance.',
      author: 'Jane Smith',
      date: 'January 12, 2024',
      category: 'React',
      readTime: '6 min read',
      image: '/placeholder'
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform mobile development approaches to choose the best solution for your project.',
      author: 'Mike Johnson',
      date: 'January 10, 2024',
      category: 'Mobile Development',
      readTime: '7 min read',
      image: '/placeholder'
    },
    {
      title: 'UI/UX Design Principles for Better User Experience',
      excerpt: 'Discover the fundamental principles of UI/UX design that can significantly improve your application\'s user experience.',
      author: 'Sarah Wilson',
      date: 'January 8, 2024',
      category: 'Design',
      readTime: '5 min read',
      image: '/placeholder'
    },
    {
      title: 'Optimizing Database Performance: A Comprehensive Guide',
      excerpt: 'Learn advanced techniques for optimizing database performance and ensuring your applications run smoothly.',
      author: 'David Brown',
      date: 'January 5, 2024',
      category: 'Database',
      readTime: '10 min read',
      image: '/placeholder'
    },
    {
      title: 'Cloud Computing: Choosing the Right Platform',
      excerpt: 'Compare different cloud platforms and learn how to choose the right one for your business needs.',
      author: 'Lisa Chen',
      date: 'January 3, 2024',
      category: 'Cloud',
      readTime: '9 min read',
      image: '/placeholder'
    },
    {
      title: 'Security Best Practices for Web Applications',
      excerpt: 'Implement essential security measures to protect your web applications from common vulnerabilities and attacks.',
      author: 'Alex Rodriguez',
      date: 'January 1, 2024',
      category: 'Security',
      readTime: '8 min read',
      image: '/placeholder'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design', 'Database', 'Cloud', 'Security', 'React']

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
              <div className="aspect-video lg:aspect-square bg-theme-gray-200 flex items-center justify-center">
                <span className="text-theme-gray-500 text-sm sm:text-base">Featured Post Image</span>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center mb-3 sm:mb-4">
                  <span className="bg-theme-black text-theme-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-theme-gray-400 mx-2 sm:mx-3">•</span>
                  <span className="text-theme-gray-600 text-xs sm:text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-black mb-3 sm:mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-theme-gray-600 mb-4 sm:mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-theme-gray-200 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-theme-gray-500 text-xs">Photo</span>
                    </div>
                    <div>
                      <p className="font-medium text-theme-black text-sm sm:text-base">{featuredPost.author}</p>
                      <p className="text-theme-gray-600 text-xs sm:text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link href="/blog/featured" className="btn-primary inline-flex items-center text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
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
              Latest Articles
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              Explore our latest articles covering various aspects of software development 
              and technology trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <article key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-theme-gray-200 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-xs sm:text-sm">Post Image</span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="bg-theme-black text-theme-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-theme-gray-400 mx-2">•</span>
                    <span className="text-theme-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-theme-black mb-2 sm:mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-gray-600 mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-theme-gray-200 rounded-full mr-2 flex items-center justify-center">
                        <span className="text-theme-gray-500 text-xs">Photo</span>
                      </div>
                      <div>
                        <p className="font-medium text-theme-black text-xs sm:text-sm">{post.author}</p>
                        <p className="text-theme-gray-600 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${index}`} className="text-theme-black hover:text-theme-gray-700 font-medium text-xs sm:text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-theme-black rounded-lg p-6 sm:p-8 lg:p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-white mb-3 sm:mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, tutorials, 
              and industry insights directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-0 focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 text-sm sm:text-base"
                />
                <button className="btn-accent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-black mb-3 sm:mb-4">
              Browse by Category
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-gray-600 max-w-2xl mx-auto px-4">
              Find articles on specific topics that interest you most.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {categories.slice(1).map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="card p-4 sm:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-theme-black">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}