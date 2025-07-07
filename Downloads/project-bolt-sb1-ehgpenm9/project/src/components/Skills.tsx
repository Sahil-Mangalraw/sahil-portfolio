import React from 'react';
import { Code, Settings, Cloud, Database, GitBranch, Zap, Brain, Server, Container, Workflow } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'DevOps',
      icon: <Settings size={32} />,
      description: 'Docker, Jenkins, CI/CD, Git',
      color: 'from-[#3B82F6] to-[#1e40af]',
      level: 85
    },
    {
      name: 'Python',
      icon: <Code size={32} />,
      description: 'Automation, Flask, Scripting',
      color: 'from-[#F59E0B] to-[#D97706]',
      level: 90
    },
    {
      name: 'Docker',
      icon: <Container size={32} />,
      description: 'Containerization, Orchestration',
      color: 'from-[#10B981] to-[#059669]',
      level: 80
    },
    {
      name: 'Jenkins',
      icon: <Workflow size={32} />,
      description: 'CI/CD Pipelines, Automation',
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      level: 75
    },
    {
      name: 'Flutter',
      icon: <Zap size={32} />,
      description: 'Mobile Development, UI/UX',
      color: 'from-[#06B6D4] to-[#0891B2]',
      level: 70
    },
    {
      name: 'MLOps',
      icon: <Brain size={32} />,
      description: 'Machine Learning, GenAI',
      color: 'from-[#EC4899] to-[#DB2777]',
      level: 65
    },
    {
      name: 'GenAI',
      icon: <Brain size={32} />,
      description: 'AI Models, Automation',
      color: 'from-[#F59E0B] to-[#D97706]',
      level: 70
    },
    {
      name: 'Cloud',
      icon: <Cloud size={32} />,
      description: 'AWS, Infrastructure',
      color: 'from-[#3B82F6] to-[#1e40af]',
      level: 60
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] mx-auto mb-6"></div>
          <p className="text-xl text-[#94a3b8]">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-[#475569] group hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-[#f1f5f9]">{skill.name}</h3>
              </div>
              
              <p className="text-[#94a3b8] text-sm mb-4">{skill.description}</p>
              
              <div className="w-full bg-[#475569] rounded-full h-2 mb-2">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right">
                <span className="text-sm text-[#94a3b8]">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-[#475569] animate-fade-in">
          <h3 className="text-2xl font-bold text-[#f1f5f9] mb-8 text-center">Additional Skills</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#f1f5f9] flex items-center gap-2">
                <Code size={20} className="text-[#3B82F6]" />
                Programming
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Shell Scripting', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] text-sm rounded-full border border-[#475569]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#f1f5f9] flex items-center gap-2">
                <Cloud size={20} className="text-[#F59E0B]" />
                Cloud & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Git', 'GitHub', 'VMware'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] text-sm rounded-full border border-[#475569]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#f1f5f9] flex items-center gap-2">
                <Brain size={20} className="text-[#10B981]" />
                AI & Automation
              </h4>
              <div className="flex flex-wrap gap-2">
                {['OpenCV', 'MediaPipe', 'Automation Scripts', 'Web Scraping'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1e293b] text-[#94a3b8] text-sm rounded-full border border-[#475569]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;