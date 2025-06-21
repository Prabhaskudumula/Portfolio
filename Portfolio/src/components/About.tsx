import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code and staying current with emerging technologies."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Team Collaboration",
      description: "Strong communicator who thrives in collaborative environments and mentors junior developers."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
      title: "Problem Solving",
      description: "Creative problem solver with a track record of delivering innovative solutions to complex challenges."
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Results Driven",
      description: "Focused on delivering measurable business value through technology and process improvements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-900 to-emerald-600 rounded-2xl shadow-2xl max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-emerald-600/90 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={64} className="text-white" />
                  </div>
                  <p className="text-lg font-medium">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm a dedicated software engineer with a passion for creating robust, scalable applications 
              that solve real-world problems. With extensive experience in modern web technologies and 
              cloud platforms, I bring both technical expertise and strategic thinking to every project.
            </p>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              My journey in technology has taken me from startups to enterprise environments, where I've 
              consistently delivered high-quality solutions while collaborating with diverse teams and 
              stakeholders. I believe in continuous learning and staying at the forefront of technological 
              innovation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;