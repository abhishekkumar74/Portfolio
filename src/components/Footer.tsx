import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, Zap, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-8 sm:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={16} />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              Abhi<span className="text-orange-500">shek</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            <motion.a
              href="https://github.com/abhishekkumar74"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhishekkumar74/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://twitter.com/Abhishek87098"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="Twitter"
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/_https_abhishek/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="Instagram"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@Abhishek-world"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="YouTube"
            >
              <Youtube size={18} />
            </motion.a>
            <motion.a
              href="mailto:abhishekkumar86448@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="Email"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href="tel:+9187984XXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              title="Phone"
            >
              <Phone size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-center md:text-right text-sm sm:text-base">
            <p className="flex items-center justify-center md:justify-end gap-1">
              © 2025 Abhishek kumar. Made with 
              <Heart className="text-orange-500" size={14} />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <motion.button
            onClick={scrollToTop}
            className="text-gray-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            whileHover={{ y: -2 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;