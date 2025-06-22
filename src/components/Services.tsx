import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, Check, Star, Clock, Users, Award, Zap, Shield, MessageCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { ref } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>('basic');

  const services = [
    {
      id: 1,
      title: "Web Development",
      subtitle: "Full-Stack Solutions",
      price: {
        basic: "$999",
        standard: "$1,999",
        premium: "$3,999"
      },
      description: "Complete web development solutions from concept to deployment. Modern, responsive, and high-performance websites that drive results.",
      fullDescription: "Transform your business with cutting-edge web development solutions. We specialize in creating modern, responsive websites that not only look stunning but also deliver exceptional user experiences and drive real business results.",
      features: {
        basic: ["Responsive Design", "5 Pages", "Contact Form", "Basic SEO", "1 Month Support"],
        standard: ["Everything in Basic", "10 Pages", "CMS Integration", "Advanced SEO", "E-commerce Ready", "3 Months Support"],
        premium: ["Everything in Standard", "Unlimited Pages", "Custom Features", "Performance Optimization", "Security Audit", "1 Year Support"]
      },
      icon: "🚀",
      bgColor: "from-blue-500 via-purple-500 to-pink-500",
      delivery: "2-4 weeks",
      revisions: "Unlimited",
      popular: true
    },
    {
      id: 2,
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      price: {
        basic: "$599",
        standard: "$1,199",
        premium: "$2,499"
      },
      description: "User-centered design that creates intuitive, engaging, and conversion-focused digital experiences.",
      fullDescription: "Create digital experiences that users love and businesses benefit from. Our UI/UX design process combines user research, creative design, and usability testing to deliver interfaces that are both beautiful and functional.",
      features: {
        basic: ["Wireframes", "3 Screen Designs", "Basic Prototype", "Design Guidelines", "1 Revision"],
        standard: ["Everything in Basic", "Complete UI Kit", "Interactive Prototype", "User Testing", "3 Revisions"],
        premium: ["Everything in Standard", "Custom Illustrations", "Animation Design", "Design System", "Unlimited Revisions"]
      },
      icon: "✨",
      bgColor: "from-pink-500 via-red-500 to-orange-500",
      delivery: "1-3 weeks",
      revisions: "3-5",
      popular: false
    },
    {
      id: 3,
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform",
      price: {
        basic: "$1,499",
        standard: "$2,999",
        premium: "$5,999"
      },
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      fullDescription: "Bring your ideas to life with powerful mobile applications. We develop both native and cross-platform apps that provide exceptional user experiences.",
      features: {
        basic: ["Cross-Platform App", "Basic Features", "App Store Submission", "1 Month Support", "Basic Testing"],
        standard: ["Everything in Basic", "Advanced Features", "Push Notifications", "Analytics Integration", "3 Months Support"],
        premium: ["Everything in Standard", "Native Performance", "Custom Animations", "Backend Integration", "1 Year Support"]
      },
      icon: "📱",
      bgColor: "from-green-500 via-teal-500 to-cyan-500",
      delivery: "4-8 weeks",
      revisions: "Unlimited",
      popular: true
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      subtitle: "Online Store Development",
      price: {
        basic: "$1,299",
        standard: "$2,599",
        premium: "$4,999"
      },
      description: "Complete e-commerce solutions that help you sell online with secure payment processing and inventory management.",
      fullDescription: "Build a powerful online store that drives sales and grows your business. Our e-commerce solutions include everything you need to start selling online.",
      features: {
        basic: ["Product Catalog", "Payment Gateway", "Basic Analytics", "Mobile Responsive", "1 Month Support"],
        standard: ["Everything in Basic", "Advanced Analytics", "Inventory Management", "Customer Reviews", "3 Months Support"],
        premium: ["Everything in Standard", "Multi-vendor Support", "Advanced Marketing", "Custom Integrations", "1 Year Support"]
      },
      icon: "🛒",
      bgColor: "from-orange-500 via-red-500 to-pink-500",
      delivery: "3-6 weeks",
      revisions: "Unlimited",
      popular: false
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Award, color: "from-blue-500 via-purple-500 to-pink-500" },
    { label: "Happy Clients", value: "30+", icon: Users, color: "from-green-500 via-teal-500 to-cyan-500" },
    { label: "Years Experience", value: "3+", icon: Clock, color: "from-orange-500 via-red-500 to-pink-500" },
    { label: "Success Rate", value: "98%", icon: Star, color: "from-yellow-500 via-orange-500 to-red-500" }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-15 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} className="fill-orange-500" />
              Premium Services
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Drive Results</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive digital solutions. From web development to mobile apps, 
              we deliver exceptional results that help you grow and succeed in the digital world.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden group ${
                  service.popular ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ Popular
                  </div>
                )}
                
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.bgColor} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-orange-500 font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Service Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
                      <Clock size={14} className="text-blue-500" />
                      {service.delivery}
                    </span>
                    <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                      <MessageCircle size={14} className="text-green-500" />
                      {service.revisions}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-orange-500">
                    From {service.price.basic}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Packages</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${selectedService.bgColor} flex items-center justify-center rounded-t-2xl`}>
                  <div className="text-8xl">
                    {selectedService.icon}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">{selectedService.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{selectedService.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed">{selectedService.fullDescription}</p>

                    <div className="mt-8 grid grid-cols-2 gap-6 text-gray-700">
                      <div className="flex items-center gap-3">
                        <Clock className="text-orange-500" size={24} />
                        <div>
                          <p className="font-bold">Delivery Time</p>
                          <p>{selectedService.delivery}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-orange-500" size={24} />
                        <div>
                          <p className="font-bold">Revisions</p>
                          <p>{selectedService.revisions}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Pricing) */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h3>
                    
                    <div className="flex bg-gray-200 rounded-full p-1 mb-6">
                      {['basic', 'standard', 'premium'].map(pkg => (
                        <button
                          key={pkg}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`w-full py-2 rounded-full font-medium transition-all text-sm relative
                            ${selectedPackage === pkg ? 'text-orange-600 bg-white shadow-md' : 'text-gray-600 hover:bg-gray-300'}`}
                        >
                          <span className="relative z-10 capitalize">{pkg}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mb-6 text-center">
                      <p className="text-5xl font-bold text-gray-900">
                        {selectedService.price[selectedPackage]}
                      </p>
                      <p className="text-gray-500">one-time payment</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {selectedService.features[selectedPackage].map((feature: string, index: number) => (
                        <li 
                          key={index} 
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <Check className="w-5 h-5 bg-green-500 text-white rounded-full p-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${selectedService.bgColor} hover:opacity-90 transition-opacity`}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </section>
  );
};

export default Services;