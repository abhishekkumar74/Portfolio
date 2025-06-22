import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCards: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1 - Pixel Perfect */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-full relative">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Frontend Precision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I craft pixel-perfect interfaces using React.js, Next.js, and Tailwind CSS. Every component is clean, responsive, and built with performance in mind — down to the last pixel.
              </p>
            </motion.div>

            {/* Service 2 - High Quality */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center">
                    <div className="w-3 h-4 border-2 border-purple-500 border-b-0"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Clean & Scalable Code</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I focus on writing modular, maintainable, and production-ready code with technologies like Node.js, MongoDB, and REST APIs — ensuring long-term scalability and smooth performance.
              </p>
              {/* Orange dot indicator */}
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mt-6"></div>
            </motion.div>

            {/* Service 3 - Awesome Idea */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="absolute w-1 h-1 bg-yellow-500 rounded-full -mt-4"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Real-World Solutions</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              From brainstorming to full-stack development, I love transforming ideas into functional digital products — whether it's a student community app, a login system, or a custom portfolio site.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;