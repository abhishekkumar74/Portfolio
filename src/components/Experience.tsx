import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experiences } from '../data/portfolio';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Experience & <span className="text-orange-500">Education</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Briefcase className="text-orange-500" size={28} />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {workExperience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-gray-300 last:border-l-0"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-orange-500 text-xs sm:text-sm font-medium">{exp.period}</span>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600 font-medium mb-3 text-sm sm:text-base">{exp.company}</p>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <GraduationCap className="text-orange-500" size={28} />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {education.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-gray-300 last:border-l-0"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-orange-500 text-xs sm:text-sm font-medium">{exp.period}</span>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600 font-medium mb-3 text-sm sm:text-base">{exp.company}</p>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;