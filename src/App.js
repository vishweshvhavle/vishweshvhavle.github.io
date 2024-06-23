import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, User, Briefcase, Code, Cpu, Award } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const tabs = [
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'awards', label: 'Awards', icon: <Award size={20} /> },
  ];

  const projects = [
    {
      title: "Alfred: Autonomous Mobile Robot",
      description: "Designed and manufactured a novel open-source UGV platform with advanced sensors and developed its entire stack.",
      image: "/api/placeholder/150/150"
    },
    {
      title: "Test Bed for Simulated Robotics",
      description: "Developed a 200 sqm UGV Test-Bed facility with ceiling-mounted cameras for real-time trajectory detection.",
      image: "/api/placeholder/150/150"
    },
    {
      title: "Navigation and Exploration Through Deep RL",
      description: "Implemented TD3 policy gradient algorithm for reinforcement learning on Turtlebot 3.",
      image: "/api/placeholder/150/150"
    },
    {
      title: "Motion Prediction of Vehicular Traffic",
      description: "Developed frameworks for predicting future trajectories of traffic agents in autonomous vehicles.",
      image: "/api/placeholder/150/150"
    }
  ];

  const experiences = [
    {
      title: "Research Assistant",
      company: "Vision Lab, IIIT Delhi",
      period: "May 2022 – Present",
      description: "Designed UGV platforms, developed Test-Bed facilities, and contributed to Multi-Object Tracking frameworks."
    },
    {
      title: "Research Intern",
      company: "Department of Electrical Engineering, IIT Delhi",
      period: "Dec 2022 – Feb 2023",
      description: "Implemented embedded systems programming and developed a mobile app for radial artery pulse data measurement."
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["C/C++", "Python", "Java", "Bash (Shell)", "MATLAB", "PHP", "Elixir"] },
    { category: "Tools and Technologies", items: ["OpenCV", "ROS1/ROS2", "PyTorch", "OpenGL", "Git", "Linux", "Windows"] },
    { category: "Hardware", items: ["ATmega", "ATtiny", "Raspberry Pi", "ESP8266"] },
    { category: "Tools and Prototyping", items: ["Autodesk Fusion 360", "Adobe Creative Suite", "Microsoft Office", "Figma", "Tinkercad"] },
  ];

  const awards = [
    { year: 2023, title: "Top-Up Fellowship by ARTPARK, IISc Bangalore" },
    { year: 2023, title: "Summer Undergraduate Research Fellowship by IIIT Delhi" },
    { year: 2022, title: "Seed Funded ₹7 Lakh from the Government of India under the Nidhi-Prayas Scheme" },
    { year: 2021, title: "Finalist at Flipkart's GRiD 3.0 Robotics Competition" },
    { year: 2021, title: "Granted 50% Merit Scholarship by IIIT Delhi" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/paDdxFIi0uy6JXZO/scene.splinecode" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 p-4 md:p-6 backdrop-blur-md bg-black bg-opacity-30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-2 md:space-x-4 mb-4 md:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                </button>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-red-500">Vishwesh Vhavle</h1>
          </div>
        </header>

        <main className="flex-grow max-w-4xl mx-auto p-4 md:p-6 w-full mt-24 md:mt-32 mb-24">
          <div className="mt-6">
            {activeTab === 'about' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">About Me</h2>
                <p className="text-gray-300 mb-6">
                  I'm a Computer Science Engineering student at IIIT Delhi, passionate about robotics, 
                  computer vision, and autonomous systems. My experience spans from developing UGV platforms 
                  to implementing cutting-edge algorithms in reinforcement learning and computer vision.
                </p>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                      <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between p-4">
                        <img src={project.image} alt={project.title} className="h-24 md:h-full object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-red-400">{project.title}</h3>
                          <p className="text-gray-300">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Experience</h2>
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-xl font-medium text-red-400">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} | {exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Projects</h2>
                {projects.map((project, index) => (
                  <div key={index} className="flex flex-col md:flex-row mb-6 last:mb-0">
                    <img src={project.image} alt={project.title} className="w-full md:w-24 h-48 md:h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                    <div>
                      <h3 className="text-xl font-medium text-red-400">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Skills</h2>
                {skills.map((skillCategory, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium text-red-400 mb-2">{skillCategory.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'awards' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Awards & Achievements</h2>
                {awards.map((award, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h3 className="text-lg font-medium text-red-400">{award.year}</h3>
                    <p className="text-gray-300">{award.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black bg-opacity-30 text-center text-gray-400 p-4">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="mailto:vishweshvhavle@gmail.com" className="text-red-500 hover:text-red-400 transition-colors"><Mail size={20} /></a>
            <a href="tel:+918850092742" className="text-red-500 hover:text-red-400 transition-colors"><Phone size={20} /></a>
            <a href="https://github.com/vishweshvhavle" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/vishweshvhavle" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors"><Linkedin size={20} /></a>
          </div>
          <p className="text-sm">&copy; 2024 Vishwesh Vhavle. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;