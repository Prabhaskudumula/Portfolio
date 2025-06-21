import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Architected and developed scalable microservices handling 1M+ daily requests",
        "Reduced system latency by 40% through performance optimization",
        "Mentored 3 junior developers and conducted technical interviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      location: "Austin, TX",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications using modern web technologies and cloud services.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Azure", "Redis"],
      achievements: [
        "Built 5+ responsive web applications from concept to production",
        "Improved application performance by 35% through code optimization",
        "Integrated third-party APIs and payment processing systems"
      ]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2018 - 2020",
      description: "Contributed to the development of innovative SaaS platform, focusing on user experience and backend optimization.",
      technologies: ["JavaScript", "Express.js", "MongoDB", "React Native"],
      achievements: [
        "Developed mobile app features used by 50K+ active users",
        "Implemented real-time chat functionality using WebSocket",
        "Collaborated with design team to create intuitive user interfaces"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through my professional career, highlighting key roles and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-900 via-emerald-600 to-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="p-8">
                      <div className="flex items-center text-sm text-emerald-600 font-medium mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <ChevronRight size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;