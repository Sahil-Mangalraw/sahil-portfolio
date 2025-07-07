import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Linux Enthusiast 💻',
    'DevOps Learner ⚙️',
    'Cloud Explorer ☁️',
    'AI Innovator 🤖'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAF9F6] to-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#68bbe3] to-[#0e86d4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#055c9d] to-[#003060] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Sahil Verma" 
                className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] opacity-0 group-hover:opacity-20 transition duration-500"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left order-2 md:order-1 space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] leading-tight animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] bg-clip-text text-transparent">
                Sahil Verma
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center md:justify-start">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] animate-fade-in-delay-1">
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-delay-2">
            I'm a B.Tech CSE student who loves building automation tools, cloud-native workflows, 
            and real-world AI applications. Currently exploring GenOps, Docker pipelines, and startup development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-[#2563EB] transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Projects
              <ArrowRight size={20} />
            </button>
            
            <a
              href="#"
              className="bg-[#F59E0B] text-[#1F2937] px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-[#D97706] transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#3B82F6]" />
      </div>
    </section>
  );
};

export default Hero;