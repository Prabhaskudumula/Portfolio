import { ExternalLink, Github, ShoppingCart, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shop Vibe",
      description: "A feature-rich e-commerce platform with product filtering, cart management, and a sleek, modern UI. Designed for real-world scalability and polished UX.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: ["Product Filtering", "Cart Management", "User Authentication", "Payment Integration"],
      icon: ShoppingCart,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Driver Drowsiness Detection",
      description: "A real-time dashboard application simulating facial recognition and alert systems for drowsy driving detection. Built to integrate seamlessly with ML models like TensorFlow.js.",
      tech: ["React", "TensorFlow.js", "WebRTC", "Real-time Analytics"],
      features: ["Facial Recognition", "Real-time Alerts", "Dashboard Analytics", "ML Integration"],
      icon: Eye,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Github className="w-4 h-4" />
                    <a href="https://github.com/Prabhaskudumula/E-commerce.git">View Code</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;