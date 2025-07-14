const Footer = () =>{
    return(
        <footer className="relative w-full py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold tracking-wider mb-4">
                <span className="text-white">FEET INFRA</span>
                <span className="text-orange-500">CRAFT</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building exceptional structures with precision, innovation, and unwavering commitment to excellence since 2010.
              </p>
              
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Commercial Construction</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Residential Building</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Renovations</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Construction Ave</li>
                <li>Building City, BC 12345</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">(555) 123-4567</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">info@feetinfra.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Feet Infra Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}
export default Footer;