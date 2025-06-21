import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      year: "2016 - 2018",
      gpa: "3.8/4.0",
      coursework: [
        "Advanced Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Software Engineering"
      ],
      honors: ["Dean's List", "Outstanding Graduate Student Award"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      year: "2012 - 2016",
      gpa: "3.7/4.0",
      coursework: [
        "Data Structures",
        "Computer Networks",
        "Database Systems",
        "Web Development"
      ],
      honors: ["Magna Cum Laude", "Phi Beta Kappa"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-ASA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      credentialId: "CKA-345678"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and professional certifications that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Academic Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-emerald-600 mr-3" />
              Academic Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-lg text-emerald-600 font-semibold mb-1">{edu.school}</p>
                      <p className="text-gray-600 mb-2">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {edu.year}
                      </div>
                      <div className="text-emerald-600 font-semibold">GPA: {edu.gpa}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen size={16} className="mr-2 text-emerald-600" />
                        Relevant Coursework
                      </h5>
                      <ul className="space-y-1">
                        {edu.coursework.map((course, courseIndex) => (
                          <li key={courseIndex} className="text-gray-700 text-sm">• {course}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award size={16} className="mr-2 text-emerald-600" />
                        Honors & Awards
                      </h5>
                      <ul className="space-y-1">
                        {edu.honors.map((honor, honorIndex) => (
                          <li key={honorIndex} className="text-gray-700 text-sm">• {honor}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-emerald-600 mr-3" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                      <p className="text-emerald-600 font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-600">Credential ID: {cert.credentialId}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Continuous Learning</h4>
              <p className="text-gray-700 mb-4">
                Committed to staying current with industry trends and emerging technologies through:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Regular participation in tech conferences and workshops
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Online courses and professional development programs
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Active contribution to open-source projects
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Mentoring and knowledge sharing within the developer community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;