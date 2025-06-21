import React from 'react';
import { Code2, Database, Cloud, Smartphone, GitBranch, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "CSS/Tailwind", level: 92 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS (Swift)", level: 70 },
        { name: "Android", level: 68 },
        { name: "PWA", level: 88 }
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-red-600" />,
      title: "Version Control",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "GitLab CI", level: 80 },
        { name: "Bitbucket", level: 78 },
        { name: "Azure DevOps", level: 75 }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Tools & Others",
      skills: [
        { name: "Agile/Scrum", level: 92 },
        { name: "Testing", level: 88 },
        { name: "Microservices", level: 85 },
        { name: "System Design", level: 82 },
        { name: "Code Review", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 group-hover:text-emerald-600 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:from-emerald-600 group-hover:to-blue-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "Data Structures", "Algorithms", "System Architecture",
              "API Design", "Security", "Performance Optimization", "Team Leadership",
              "Project Management", "Technical Writing", "Code Review", "Mentoring"
            ].map((skill, index) => (
              <span key={index} className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;