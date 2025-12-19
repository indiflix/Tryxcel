import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1a5f7a] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_30c33875-34c7-4a27-85e4-66bbc662605d/artifacts/jynyx66u_WhatsApp%20Image%202025-12-13%20at%2016.44.43.jpeg"
              alt="Tryxcel Technologies"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Engineering intelligent, scalable, and future-ready technologies for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#4db5c0] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-[#4db5c0] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-[#4db5c0] transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#4db5c0] transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Embedded Engineering</li>
              <li className="text-gray-300 text-sm">AI Solutions</li>
              <li className="text-gray-300 text-sm">Display Technologies</li>
              <li className="text-gray-300 text-sm">Smart Wearables</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#4db5c0] mt-0.5" />
                <span className="text-gray-300 text-sm">office@tryxcel.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#4db5c0] mt-0.5" />
                <span className="text-gray-300 text-sm">+917676432134</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#4db5c0] mt-0.5" />
                <span className="text-gray-300 text-sm">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Tryxcel Technologies LLP. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-[#4db5c0] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4db5c0] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4db5c0] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4db5c0] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-4 text-center">
          <Link to="/privacy" className="text-gray-400 hover:text-[#4db5c0] text-xs mx-2">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/terms" className="text-gray-400 hover:text-[#4db5c0] text-xs mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
