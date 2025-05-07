import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-11/12 mx-auto grid md:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">App Gallery</h2>
          <p className="text-sm text-gray-300">
            Explore top apps across various categories and stay productive,
            educated, and healthy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-medium mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/developer" className="hover:text-blue-400">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium mb-2">Connect with Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/share/16Fjh4kbAR/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={23} className="hover:text-blue-500" />
            </a>
            <a
              href="https://x.com/RashikKhan513"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={23}className="hover:text-sky-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={23}className="hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/rashik218"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={23}className="hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-2">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@appgallery.com</p>
          <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} App Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
