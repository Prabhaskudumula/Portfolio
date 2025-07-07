import { Target, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To secure a challenging role at a forward-thinking company where I can contribute to innovative, impactful projects and collaborate with a dynamic team.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Bachelor of Engineering in Computer Science<br />
                <span className="text-cyan-400">Saveetha School of Engineering</span><br />
                2021–2025 | CGPA: 8.1
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-400">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">LeetCode Ranking</span>
                <span className="text-cyan-400 font-semibold">Top 20%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Academic Performance</span>
                <span className="text-green-400 font-semibold">8.1 CGPA</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Programming Languages</span>
                <span className="text-purple-400 font-semibold">C, Java, Python</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I strive to build high-performance, user-centric web applications and bring deep problem-solving skills backed by strong DSA fundamentals. Let's build the future—one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;