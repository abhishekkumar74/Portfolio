import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom cursor effect
    const cursor = document.querySelector("#cursor") as HTMLElement;
    const cursor2 = document.querySelector("#cursor2") as HTMLElement;
    
    if (cursor && cursor2) {
      document.addEventListener("mousemove", function (e) {
        cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
      });

      // Hover effects for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [class*="cursor-pointer"], [class*="hover"]');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.width = '50px';
          cursor.style.height = '50px';
          cursor.style.borderColor = 'rgba(249, 115, 22, 0.5)';
          cursor.style.borderWidth = '3px';
          
          cursor2.style.width = '8px';
          cursor2.style.height = '8px';
          cursor2.style.backgroundColor = 'rgba(249, 115, 22, 0.5)';
        });

        element.addEventListener('mouseleave', () => {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.borderColor = '#f97316';
          cursor.style.borderWidth = '2px';
          
          cursor2.style.width = '4px';
          cursor2.style.height = '4px';
          cursor2.style.backgroundColor = '#f97316';
        });
      });
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Custom Cursors */}
      <div id="cursor"></div>
      <div id="cursor2"></div>
      
      <Header />
      <Hero />
      <ServiceCards />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;