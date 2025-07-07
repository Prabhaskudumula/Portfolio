import { Github, Linkedin, Mail, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-slide-up">
            Full-Stack Developer
          </h1>
          <h2 className="flex justify-center text-2xl md:text-3xl text-gray-300 mb-6 animate-slide-up animation-delay-300">
            MERN Stack & DSA
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-600">
            Passionate about building high-performance, user-centric web applications with a strong foundation in Data Structures and Algorithms. Currently pursuing BE in Computer Science with 8.1 CGPA.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-slide-up animation-delay-900">
          <a href="https://github.com/prabhaskudumula" className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/prabhaskudumula/" className="group flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="#contact" className="group flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-8 text-sm text-gray-400 animate-slide-up animation-delay-1200">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Top 20% on LeetCode</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>MERN Stack Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;