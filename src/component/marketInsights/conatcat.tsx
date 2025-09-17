
// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="h-10 w-28">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 38">
                <g>
                  <path d={svgPaths.p236b5800} fill="white" />
                </g>
              </svg>
            </div>
            <p className="text-gray-400">
              Saudi Arabia's premier real estate platform connecting buyers, sellers, and investors with expert agents.
            </p>
            <div className="flex space-x-4">
              {/* Social Links */}
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-white rounded"></div>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-white rounded"></div>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-white rounded"></div>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Valuation</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Riyadh</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jeddah</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dammam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mecca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medina</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+966 11 123 4567</li>
              <li>info@premiumrealestate.sa</li>
              <li>King Fahd Road<br />Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Premium Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}