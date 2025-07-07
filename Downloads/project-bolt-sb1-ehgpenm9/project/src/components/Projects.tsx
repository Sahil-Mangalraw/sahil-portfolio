import React, { useState } from 'react';
import { ExternalLink, Github, X, Play } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: '🎮 Hand Gesture Game Controller',
      description: 'Control Hill Climb Racing game and system volume with real-time hand tracking using OpenCV.',
      fullDescription: 'This innovative project combines computer vision with gaming to create an immersive hands-free gaming experience. Using MediaPipe and OpenCV, the system tracks hand gestures in real-time and translates them into game controls. The application can control both the popular Hill Climb Racing game and system volume levels, showcasing practical applications of AI in entertainment and accessibility.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: '⚙️ CI/CD Pipeline with Docker & Jenkins',
      description: 'Created an automated deployment flow for Flask app using Docker-in-Docker and Jenkins.',
      fullDescription: 'A comprehensive DevOps solution that automates the entire software delivery pipeline. This project implements a robust CI/CD workflow using Jenkins for continuous integration, Docker for containerization, and VMware for infrastructure management. The system automatically builds, tests, and deploys Flask applications, demonstrating modern DevOps practices and infrastructure as code principles.',
      tech: ['Docker', 'Jenkins', 'Flask', 'GitHub', 'VMware'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: '🤖 Python Automation Toolkit',
      description: 'Automated WhatsApp, Instagram DMs, Email sending, and data scraping using scripts.',
      fullDescription: 'A comprehensive automation suite that streamlines digital communication and data collection tasks. The toolkit includes modules for automated WhatsApp messaging, Instagram direct message management, email campaigns, and web scraping capabilities. Built with Python and various APIs, this project demonstrates the power of automation in reducing manual tasks and increasing productivity.',
      tech: ['Python', 'Selenium', 'SMTP', 'Web Scraping', 'APIs'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's a glimpse of the ideas I've brought to life using Python, DevOps, and cloud tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#68bbe3] to-[#0e86d4] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-[#3B82F6] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2563EB] transition duration-200 flex items-center justify-center gap-2"
                  >
                    <Play size={16} />
                    View Details
                  </button>
                  <a
                    href={project.github}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition duration-200 flex items-center justify-center"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition duration-200"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#1F2937] mb-4">{selectedProject.title}</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedProject.fullDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-[#68bbe3] to-[#0e86d4] text-white rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-200 flex items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="bg-[#3B82F6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2563EB] transition duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;