import React from 'react'

export default function ProductShowcase() {
  return (
    <section className="bg-theme-light py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-6">
              The Ultimate Platform for Seamless Recruitment Management
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your hiring process with our comprehensive recruitment platform designed for modern businesses.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-theme-light font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Watch trial
            </button>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-4 transform rotate-3">
              <div className="bg-theme-light rounded-lg p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-theme-dark">Job posts</h4>
                    <span className="text-sm text-gray-500">Right</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">Senior Developer</span>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">UI/UX Designer</span>
                      <span className="text-xs text-gray-400">1 week ago</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-600">DevOps Engineer</span>
                      <span className="text-xs text-gray-400">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
