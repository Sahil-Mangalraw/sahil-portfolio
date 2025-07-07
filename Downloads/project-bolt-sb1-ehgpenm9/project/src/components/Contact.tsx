import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sahilmangalrav@gmail.com',
      href: 'mailto:sahilmangalrav@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 95496 29329',
      href: 'tel:+919549629329'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/Sahil-Mangalraw',
      href: 'https://github.com/Sahil-Mangalraw'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sahil-verma9549629329',
      href: 'https://linkedin.com/in/sahil-verma9549629329'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FAF9F6] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm open to collaboration, internships, freelance work, and tech conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F59E0B] text-[#1F2937] px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Get in touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                  >
                    <div className="bg-gradient-to-r from-[#68bbe3] to-[#0e86d4] p-3 rounded-full text-white group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937]">{item.label}</p>
                      <p className="text-gray-600 group-hover:text-[#3B82F6] transition duration-200">{item.value}</p>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Docker Hub Link */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold text-[#1F2937] mb-3">Also find me on:</h4>
              <a
                href="https://hub.docker.com/u/sahilmangalraw"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
              >
                <div className="bg-[#2496ED] p-2 rounded text-white group-hover:scale-110 transition duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185"/>
                    <path d="M13.983 8.819h2.119a.186.186 0 0 0 .186-.186V6.747a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2937]">DockerHub</p>
                  <p className="text-gray-600 group-hover:text-[#3B82F6] transition duration-200">hub.docker.com/u/sahilmangalraw</p>
                </div>
                <ExternalLink size={16} className="text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;