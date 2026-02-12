import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#66033e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4"> footwear👟</h2>
            <p className="text-pink-200 text-sm">
              Building modern and responsive web applications with great user
              experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-200">
              <li>
                <a href="https://www.instagram.com/" className="hover:text-gray-400 transition flex gap-x-5">
                <FaInstagram  className="text-[#e6a90e] h-10 w-10"/>
               instagram
                </a>
              </li>
           
              <li>
                <a href="https://www.facebook.com/" className="hover:text-gray-400 transition flex gap-x-5">
                  <FaFacebook className="text-[#0e52e6] h-10 w-10" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/" className="hover:text-gray-400 transition flex gap-x-5">
                  <FaTwitter  className="text-[#0e7ae6] h-10 w-10"  />
                  twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-pink-200 text-sm">Email: info@footwear👟.com</p>
            <p className="text-pink-200 text-sm">Phone: +1 234 567 890</p>
            <p className="text-pink-200 text-sm">Location: hyderabad </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-8 pt-6 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} footwear👟. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
