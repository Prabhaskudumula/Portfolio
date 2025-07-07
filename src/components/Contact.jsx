import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </div>

        <div className=" max-w-6xl mx-auto justify-items-center">
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <a href="mailto:prabhasp196@gmail.com" className="hover:underline"><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div></a>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">
                      <a href="mailto:prabhasp196@gmail.com" className="hover:underline">prabhasp196@gmail.com</a>
                      </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+91 8978546022</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 ">
                  <a href="https://www.google.com/maps?q=Chennai,+India" target="_blank">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div></a>
                  <a href="https://www.google.com/maps?q=Chennai,+India" target="_blank">
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-medium">Chennai, India</p>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-500/30">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Quick Response</h4>
              <p className="text-gray-300">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;