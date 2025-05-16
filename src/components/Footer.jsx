import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-4">
              <span className="font-bold text-xl text-blue-400">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6">
              The easiest way to sell your unused software licenses and recover value from idle IT assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">License Types</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Individual</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Subscription</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Perpetual</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Volume</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  Tech Park, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@softsell.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} SoftSell. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;