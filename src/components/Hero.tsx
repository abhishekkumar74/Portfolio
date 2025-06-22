import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Software Developer', 'Website Developer', 'App Developer'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    let timeout: number;
    
    if (displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTitle, currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating icon animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants2 = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 8, -8, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const floatingVariants4 = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 8, -8, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 pt-20">
      {/* Gradient Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-2xl"></div>

      {/* Floating Icons - Responsive positioning */}
      <motion.div
        className="absolute top-1/4 right-4 sm:right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants}
        animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Ai</span>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-8 sm:right-1/6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants2}
        animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Ps</span>
      </motion.div>

      <motion.div
        className="absolute top-1/5 left-6 sm:left-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-black rounded-300 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
        variants={floatingVariants4}
        animate="animate"
      >
        <span className="text-white font-bold text-sm sm:text-xl">Git</span>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-6 sm:right-1/5 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
        variants={floatingVariants3}
        animate="animate"
      >
        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm"></div>
        </div>
      </motion.div>

      {/* Additional floating elements - Hidden on mobile for cleaner look */}
      <motion.div
        className="hidden sm:block absolute top-1/2 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-md"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      ></motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-1/4 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-md"
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
          transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p 
              className="text-orange-500 text-base sm:text-lg font-medium mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Abhishek kumar
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2 min-h-[2rem] sm:min-h-[2.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A <span className="text-green-500 font-semibold">{displayText}</span>
              <span className="animate-pulse">| From <span className="text-purple-500 font-semibold">Darbhanga, Bihar</span></span>
            </motion.div>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              
            </motion.div>
            
            <motion.p 
              className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I'm Abhishek Kumar, a Software Developer based in Darbhanga, Bihar. I'm passionate about building clean, scalable, and user-focused web applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToAbout}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
              
              
              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="https://www.facebook.com/theabhishek501/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/Abhishek87098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/abhishekkumar74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/_https_abhishek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Profile Image Container - Responsive sizing */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-purple-200 rounded-full opacity-20"></div>
                <img
                  src="/Hero.png"
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-2 sm:border-4 border-white"
                />
              </div>
              
              {/* Decorative elements around image - Responsive sizing */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              ></motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-orange-500 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;