import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 animate-fade-in">
            I build automation-driven solutions using Linux, Cloud, and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Sahil Verma, a B.Tech Computer Science student at Vivekananda Global University (2023–2027), 
              with a strong passion for Linux, DevOps, Cloud Computing, and Generative AI. I enjoy transforming 
              technical ideas into real-world solutions — from automating tasks to building CI/CD pipelines.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm currently interning at Linux World Informatics, where I'm diving deep into modern tools 
              like Docker, Jenkins, and MLOps platforms. My goal is to bridge the gap between development 
              and operations while exploring the endless possibilities of AI automation.
            </p>
          </div>

          {/* Animated Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#68bbe3] to-[#055c9d] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coding workspace" 
                className="relative w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Experience Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#3B82F6] p-3 rounded-full">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">💼 Experience</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Flutter Dev at Octopyder</p>
              <p className="font-semibold text-gray-800">DevOps Intern at LinuxWorld</p>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F59E0B] p-3 rounded-full">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">👨‍🎓 Education</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">B.Tech CSE</p>
              <p className="text-gray-600">Vivekananda Global University</p>
              <p className="text-gray-600">2023–2027</p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#10B981] p-3 rounded-full">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">💡 Interests</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Automation</p>
              <p className="font-semibold text-gray-800">AI/GenOps</p>
              <p className="font-semibold text-gray-800">Cloud Tech</p>
              <p className="font-semibold text-gray-800">Startup Building</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;