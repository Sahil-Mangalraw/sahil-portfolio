import React from 'react';
import { GraduationCap, Briefcase, Heart, Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023-2027',
      title: 'B.Tech Computer Science',
      institution: 'Vivekananda Global University',
      description: 'Pursuing Computer Science with focus on DevOps, Cloud, and AI'
    },
    {
      year: '2024',
      title: 'DevOps Intern',
      institution: 'LinuxWorld Informatics',
      description: 'Learning Docker, Jenkins, and modern DevOps practices'
    },
    {
      year: '2024',
      title: 'Flutter Developer',
      institution: 'Octopyder',
      description: 'Mobile app development and AI-based logic implementation'
    },
    {
      year: '2023',
      title: 'Startup Experience',
      institution: 'Accurate Solutions',
      description: 'Student-hostel matchmaking platform development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] mx-auto mb-6"></div>
          <p className="text-xl text-[#94a3b8]">
            I build automation-driven solutions using Linux, Cloud, and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I'm Sahil Verma, a B.Tech Computer Science student at Vivekananda Global University (2023–2027), 
              with a strong passion for Linux, DevOps, Cloud Computing, and Generative AI. I enjoy transforming 
              technical ideas into real-world solutions — from automating tasks to building CI/CD pipelines.
            </p>
            
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I'm currently interning at Linux World Informatics, where I'm diving deep into modern tools 
              like Docker, Jenkins, and MLOps platforms. My goal is to bridge the gap between development 
              and operations while exploring the endless possibilities of AI automation.
            </p>
          </div>

          {/* Animated Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coding workspace" 
                className="relative w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-[#f1f5f9] mb-8 text-center">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3B82F6] to-[#F59E0B]"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-[#0f172a] p-6 rounded-2xl border border-[#475569] hover-lift">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-[#3B82F6]" />
                        <span className="text-[#F59E0B] font-semibold">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#f1f5f9] mb-1">{item.title}</h4>
                      <p className="text-[#3B82F6] font-medium mb-2">{item.institution}</p>
                      <p className="text-[#94a3b8] text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-[#1e293b] z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience Card */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-[#475569] hover-lift animate-scale-in stagger-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#3B82F6] p-3 rounded-full">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9]">💼 Experience</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-[#94a3b8]">Flutter Dev at Octopyder</p>
              <p className="font-semibold text-[#94a3b8]">DevOps Intern at LinuxWorld</p>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-[#475569] hover-lift animate-scale-in stagger-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F59E0B] p-3 rounded-full">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9]">👨‍🎓 Education</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-[#94a3b8]">B.Tech CSE</p>
              <p className="text-[#94a3b8]">Vivekananda Global University</p>
              <p className="text-[#94a3b8]">2023–2027</p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-[#475569] hover-lift animate-scale-in stagger-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#10B981] p-3 rounded-full">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9]">💡 Interests</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-[#94a3b8]">Automation</p>
              <p className="font-semibold text-[#94a3b8]">AI/GenOps</p>
              <p className="font-semibold text-[#94a3b8]">Cloud Tech</p>
              <p className="font-semibold text-[#94a3b8]">Startup Building</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;