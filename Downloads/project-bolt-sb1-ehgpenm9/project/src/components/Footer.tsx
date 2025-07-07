import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sahil-Mangalraw',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sahil-verma9549629329',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:sahilmangalrav@gmail.com',
      icon: <Mail size={20} />
    },
    {
      name: 'Phone',
      href: 'tel:+919549629329',
      icon: <Phone size={20} />
    }
  ];

  return (
    <footer className="bg-[#0f172a] text-[#f1f5f9] border-t border-[#475569]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Name Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f1f5f9]">Sahil Verma</h3>
                <p className="text-[#94a3b8]">Linux & AI Enthusiast</p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Building automation-driven solutions using Linux, Cloud, and AI technologies. 
              Passionate about DevOps, cloud computing, and innovative software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f1f5f9]">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-[#94a3b8] hover:text-[#3B82F6] transition duration-200 text-left hover-lift"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f1f5f9]">Connect With Me</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3B82F6] transition duration-200 group"
                >
                  <div className="group-hover:scale-110 transition duration-200">
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* DockerHub Link */}
            <a
              href="https://hub.docker.com/u/sahilmangalraw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3B82F6] transition duration-200 group mt-3"
            >
              <div className="group-hover:scale-110 transition duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185"/>
                  <path d="M13.983 8.819h2.119a.186.186 0 0 0 .186-.186V6.747a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185"/>
                </svg>
              </div>
              <span>DockerHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#475569] mt-8 pt-8 text-center">
          <p className="text-[#94a3b8] text-sm flex items-center justify-center gap-2">
            © 2025 Sahil Verma. All rights reserved. Built with 
            <Heart size={16} className="text-red-500 animate-pulse" /> 
            + 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;