import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom CSS animations with modern color palette
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      
      * {
        font-family: 'Inter', sans-serif;
      }
      
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scale-in {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        50% {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
        }
      }
      
      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
      
      .animate-slide-in-left {
        animation: slide-in-left 0.8s ease-out forwards;
      }
      
      .animate-slide-in-right {
        animation: slide-in-right 0.8s ease-out forwards;
      }
      
      .animate-scale-in {
        animation: scale-in 0.6s ease-out forwards;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }
      .stagger-5 { animation-delay: 0.5s; }
      
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* Modern scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1e293b;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #3B82F6, #1e40af);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #1e40af, #1e3a8a);
      }
      
      /* Glassmorphism effect */
      .glass {
        background: rgba(30, 41, 59, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      /* Hover effects */
      .hover-lift {
        transition: all 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      
      /* Gradient text */
      .gradient-text {
        background: linear-gradient(135deg, #3B82F6, #F59E0B);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App bg-[#0f172a] text-[#f1f5f9] min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;