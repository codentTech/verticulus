import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and industry updates from our team of experts. 
            Stay informed about the latest trends in software development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Featured Post Image Placeholder</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 mx-3">•</span>
                  <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Photo</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-gray-600 text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link href="/blog/featured" className="btn-primary inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles covering various aspects of software development 
              and technology trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Post Image Placeholder</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Photo</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                        <p className="text-gray-600 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${index}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
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
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary-600 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, tutorials, 
              and industry insights directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find articles on specific topics that interest you most.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
