import React from 'react';
import { Code, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code size={32} className="text-[#3B82F6]" />,
      skills: ['Python', 'Shell Scripting', 'Flask', 'Flutter'],
      color: 'from-[#3B82F6] to-[#1E40AF]'
    },
    {
      title: 'DevOps & Automation',
      icon: <Settings size={32} className="text-[#F59E0B]" />,
      skills: ['Docker', 'Jenkins', 'Git', 'CI/CD Pipelines', 'VMware', 'GitHub Actions'],
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      title: 'Cloud & AI',
      icon: <Cloud size={32} className="text-[#10B981]" />,
      skills: ['AWS (Basics)', 'MLOps', 'GenOps', 'OpenCV', 'Automation Scripts'],
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#FAF9F6] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937]">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-200 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Skill Bars */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Python', level: 85 },
              { skill: 'Docker', level: 80 },
              { skill: 'Linux', level: 90 },
              { skill: 'CI/CD', level: 75 },
              { skill: 'Flask', level: 70 },
              { skill: 'Cloud Platforms', level: 65 }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#1F2937]">{item.skill}</span>
                  <span className="text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#68bbe3] to-[#055c9d] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;