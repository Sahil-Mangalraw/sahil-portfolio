import React, { useState } from 'react';
import { ExternalLink, Github, X, Play, Hand, Terminal, Workflow } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  icon: React.ReactNode;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: '🎮 Gesture Game Controller',
      description: 'Control game and volume using hand detection with OpenCV and MediaPipe.',
      fullDescription: 'This innovative project combines computer vision with gaming to create an immersive hands-free gaming experience. Using MediaPipe and OpenCV, the system tracks hand gestures in real-time and translates them into game controls. The application can control both the popular Hill Climb Racing game and system volume levels, showcasing practical applications of AI in entertainment and accessibility.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Sahil-Mangalraw/python.git',
      demo: '#',
      icon: <Hand size={24} />
    },
    {
      id: 2,
      title: '⚙️ Task CLI App',
      description: 'Python-based terminal task manager with CRUD operations.',
      fullDescription: 'A comprehensive command-line task management application built with Python. Features include creating, reading, updating, and deleting tasks, with data persistence and a clean terminal interface. The app demonstrates object-oriented programming principles and efficient data handling.',
      tech: ['Python', 'CLI', 'SQLite', 'OOP'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Sahil-Mangalraw/Task.git',
      demo: '#',
      icon: <Terminal size={24} />
    },
    {
      id: 3,
      title: '🚀 DevOps CI/CD Workflow',
      description: 'Automated app deployment using Docker, Jenkins, GitHub.',
      fullDescription: 'A comprehensive DevOps solution that automates the entire software delivery pipeline. This project implements a robust CI/CD workflow using Jenkins for continuous integration, Docker for containerization, and VMware for infrastructure management. The system automatically builds, tests, and deploys Flask applications, demonstrating modern DevOps practices and infrastructure as code principles.',
      tech: ['Docker', 'Jenkins', 'Flask', 'GitHub', 'VMware'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Sahil-Mangalraw/Devops.git',
      demo: '#',
      icon: <Workflow size={24} />
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] mx-auto mb-6"></div>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Here's a glimpse of the ideas I've brought to life using Python, DevOps, and cloud tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-[#475569] overflow-hidden group hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#3B82F6] p-2 rounded-full text-white">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">{project.title}</h3>
                <p className="text-[#94a3b8] mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0f172a] text-[#94a3b8] text-sm rounded-full border border-[#475569]"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f172a] text-[#f1f5f9] px-4 py-2 rounded-lg font-medium hover:bg-[#1e293b] transition duration-200 flex items-center justify-center border border-[#475569]"
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
            <div className="bg-[#1e293b] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#475569]">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-[#0f172a]/90 hover:bg-[#0f172a] text-[#f1f5f9] p-2 rounded-full transition duration-200"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#f1f5f9] mb-4">{selectedProject.title}</h3>
                <p className="text-[#94a3b8] mb-6 text-lg leading-relaxed">{selectedProject.fullDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-[#0f172a] text-[#94a3b8] rounded-full font-medium border border-[#475569]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f172a] text-[#f1f5f9] px-6 py-3 rounded-lg font-medium hover:bg-[#1e293b] transition duration-200 flex items-center gap-2 border border-[#475569]"
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