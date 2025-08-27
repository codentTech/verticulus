import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-theme-dark text-theme-light">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Verticulus</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional software development company delivering innovative solutions 
              for businesses worldwide. We specialize in web development, mobile apps, 
              and custom software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:info@devsarch.com" className="text-primary-400 hover:text-primary-300">
                  info@devsarch.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="text-primary-400 hover:text-primary-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                <span>123 Tech Street, Digital City, DC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Verticulus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
