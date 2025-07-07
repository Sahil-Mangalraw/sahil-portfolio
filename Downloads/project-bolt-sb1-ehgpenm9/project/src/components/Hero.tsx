import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import profileImg from "../assets/profile.jpg.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/Sahil-Mangalraw',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/sahil-verma9549629329',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:sahilmangalrav@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#3B82F6] to-[#1e40af] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#475569] to-[#64748b] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] via-[#F59E0B] to-[#3B82F6] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-glow"></div>
            <div className="relative">
              <img 
                src={profileImg}
                alt="Sahil Verma" 
                className="w-80 h-80 rounded-full object-cover border-4 border-[#1e293b] shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#F59E0B] to-[#3B82F6] opacity-0 group-hover:opacity-20 transition duration-500"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left order-1 lg:order-1 space-y-8">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#f1f5f9] leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Sahil Verma
                </span>
              </h1>
            </div>
            
            <div className="h-20 flex items-center justify-center lg:justify-start animate-slide-in-left stagger-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#94a3b8]">
                <Typewriter
                  options={{
                    strings: ['Linux', 'Cloud', 'DevOps', 'Automation', 'GenAI'],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                    cursor: '|',
                    cursorClassName: 'text-[#F59E0B]'
                  }}
                />
              </h2>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-[#94a3b8] leading-relaxed max-w-2xl animate-slide-in-left stagger-2">
            I'm a B.Tech CSE student who loves building automation tools, cloud-native workflows, 
            and real-world AI applications. Currently exploring GenOps, Docker pipelines, and startup development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left stagger-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-[#2563EB] transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl hover-lift"
            >
              Explore Projects
              <ArrowRight size={20} />
            </button>
            
            <a
              href="https://drive.google.com/your_resume_link_here"
              className="bg-[#F59E0B] text-[#0f172a] px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-[#D97706] transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl hover-lift"
            >
              📄 Download Resume
              <Download size={20} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 animate-slide-in-left stagger-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e293b] p-3 rounded-full text-[#f1f5f9] hover:text-[#3B82F6] transform hover:scale-110 transition duration-300 hover-lift"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
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