import { Database, Globe, Code2, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Back-End",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "Express.js", "Node.js"]
    },
    {
      title: "Programming",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: ["C", "Java", "Python", "JavaScript"]
    },
    {
  title: "Version Control",
  icon: Brain, 
  color: "from-yellow-500 to-orange-500",
  skills: ["Git", "GitHub", "GitLab", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized in the MERN stack with strong foundations in Data Structures and Algorithms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">MERN Stack Expertise</h3>
            <p className="text-gray-300 mb-6">Full-stack development with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;