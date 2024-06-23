import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, User, Book, Briefcase, Code, Cpu, Award } from 'lucide-react';

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

  // ... (other data arrays remain the same)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div id="spline-container" className="fixed inset-0 z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6 bg-black bg-opacity-80">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-red-500">Vishwesh Vhavle</h1>
            <div className="flex space-x-4">
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
          </div>
        </header>

        <main className="flex-grow max-w-4xl mx-auto p-6 w-full">
          <div className="mt-6">
            {activeTab === 'about' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">About Me</h2>
                <p className="text-gray-300 mb-6">
                  I'm a Computer Science Engineering student at IIIT Delhi, passionate about robotics, 
                  computer vision, and autonomous systems. My experience spans from developing UGV platforms 
                  to implementing cutting-edge algorithms in reinforcement learning and computer vision.
                </p>
                <div className="overflow-hidden rounded-lg">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                      <div key={index} className="w-full flex-shrink-0 flex items-start space-x-4">
                        <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-lg" />
                        <div>
                          <h3 className="text-xl font-medium text-red-400">{project.title}</h3>
                          <p className="text-gray-300">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ... (other tab contents remain the same) */}
          </div>
        </main>

        <footer className="bg-black bg-opacity-80 text-center text-gray-400 p-4 mt-8">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="mailto:vishweshvhavle@gmail.com" className="text-red-500 hover:text-red-400 transition-colors"><Mail size={20} /></a>
            <a href="tel:+918850092742" className="text-red-500 hover:text-red-400 transition-colors"><Phone size={20} /></a>
            <a href="https://github.com/vishweshvhavle" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/vishweshvhavle" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors"><Linkedin size={20} /></a>
          </div>
          <p>&copy; 2024 Vishwesh Vhavle. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
