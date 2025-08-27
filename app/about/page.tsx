import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great results.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and creating solutions that make a difference.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly innovate and stay ahead of the latest technologies and trends.',
    },
  ]

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/placeholder',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: '/placeholder',
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      image: '/placeholder',
    },
    {
      name: 'Sarah Wilson',
      role: 'Project Manager',
      image: '/placeholder',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">Verticulus</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Verticulus began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service software development company.
              </p>
              <p className="text-lg text-gray-600">
                Today, we work with clients across various industries, from startups to enterprise companies, helping them build innovative solutions that drive growth and success.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500">Company Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to 
              software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make Verticulus what it is today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
