import { Award, Heart, Target, Users } from 'lucide-react'

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
      
      {/* Hero Section */}
      <section className="bg-theme-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-theme-white mb-6">
            About <span className="text-accent-400">Verticulus</span>
          </h1>
          <p className="text-xl text-theme-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-theme-black mb-6">Our Story</h2>
              <p className="text-lg text-theme-gray-600 mb-6">
                Founded in 2019, Verticulus began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service software development company.
              </p>
              <p className="text-lg text-theme-gray-600">
                Today, we work with clients across various industries, from startups to enterprise companies, helping them build innovative solutions that drive growth and success.
              </p>
            </div>
            <div className="bg-theme-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-theme-gray-500">Company Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-theme-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-theme-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to 
              software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="icon-container mb-6">
                  <div className="text-theme-black">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-theme-black mb-4">{value.title}</h3>
                <p className="text-theme-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-black mb-6">Our Team</h2>
            <p className="text-xl text-theme-gray-600 max-w-2xl mx-auto">
              The talented individuals who make Verticulus what it is today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-32 h-32 bg-theme-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-theme-gray-500 text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-theme-black mb-2">{member.name}</h3>
                <p className="text-theme-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-theme-black py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-theme-white mb-2">5+</div>
              <div className="text-theme-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-theme-white mb-2">100+</div>
              <div className="text-theme-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-theme-white mb-2">50+</div>
              <div className="text-theme-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-theme-white mb-2">15+</div>
              <div className="text-theme-gray-300">Team Members</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}