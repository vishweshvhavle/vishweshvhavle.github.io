import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, User, Briefcase, Code, Cpu, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

import alfredImage from './images/alfred.png';
import testBedImage from './images/testbed.png';
import navigationImage from './images/sim2.png';
import motionPredictionImage from './images/tnt.png';

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
      image: alfredImage,
      details: [
        "Designed and manufactured a UGV platform from scratch",
        "Equipped with Velodyne VLP-16 LiDAR, NVIDIA AGX Orin, Intel NUC, and Intel RealSense Depth Camera",
        "Developed UGV Firmware, Control System, Perception stack, SLAM, Navigation, and Path-planning",
        "Novel open-source platform for advanced robotics research"
      ],
      link: "https://github.com/yourusername/alfred-ugv"
    },
    {
      title: "Test Bed for Simulated Robotics",
      image: testBedImage,
      details: [
        "Developed a 200 sqm UGV Test-Bed facility",
        "Implemented 6 ceiling-mounted cameras and NVIDIA Jetsons",
        "Achieved average tracking error of less than 2 cm using novel camera-LiDAR cross-calibration",
        "Optimized image-processing pipeline for 22 FPS real-time trajectory detection",
        "Deployed UDP server-client network for efficient data transfer"
      ],
      link: "https://github.com/yourusername/ugv-testbed"
    },
    {
      title: "Navigation and Exploration Through Deep RL",
      image: navigationImage,
      details: [
        "Implemented Twin-delayed deep deterministic (TD3) policy gradient algorithm",
        "Applied to model-free, off-policy, online reinforcement learning",
        "Utilized ROS2 and Gazebo in Python on Turtlebot 3",
        "Incorporated observations from VLP-16 LiDAR for environment sensing"
      ],
      link: "https://github.com/yourusername/deep-rl-navigation"
    },
    {
      title: "Motion Prediction of Vehicular Traffic",
      image: motionPredictionImage,
      details: [
        "Developed frameworks for predicting future trajectories of traffic agents",
        "Investigated data-driven and model-based methods for trajectory predictions",
        "Integrated data-driven Trajectory Prediction framework using PyTorch",
        "Implemented on the autonomous vehicle project at IIIT Delhi"
      ],
      link: "https://github.com/yourusername/motion-prediction"
    },
    {
      title: "Solid Texture Synthesis",
      details: [
        "Implemented Solid Texture Synthesis from 2D Exemplars",
        "Used non-parametric texture optimization approach",
        "Integrated histogram matching for improved synthesized solid global statistics",
        "Developed end-to-end rendering pipeline using OpenGL and C++"
      ],
      link: "https://github.com/yourusername/solid-texture-synthesis"
    },
    {
      title: "Cylindrical Manipulator with Linear Gripper",
      details: [
        "Developed 3-DOF cylindrical robotic manipulator and linear gripper",
        "Implemented position control for package sorting",
        "Created Perception stack with Robot Hand-Eye Coordination",
        "Based on 'Single-Stage Keypoint-Based Category-Level Object Pose Estimation from an RGB Image' by Lin et al.",
        "Used Intel Realsense D455 camera for gripping point determination"
      ],
      link: "https://github.com/yourusername/cylindrical-manipulator"
    },
    {
      title: "Autonomous Central Navigation for Multi-Agent Robotics",
      details: [
        "Designed and fabricated 4 bots using ATMega microcontroller",
        "Incorporated manipulator for package drop functionality",
        "Designed central navigation system using ARuCo marker-based live tracking",
        "Implemented multi-agent path planning using A* algorithm"
      ],
      link: "https://github.com/yourusername/multi-agent-navigation"
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

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/paDdxFIi0uy6JXZO/scene.splinecode" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 p-4 md:p-6 backdrop-blur-md bg-black bg-opacity-50 z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4 md:mb-0">Vishwesh Vhavle</h1>
            <div className="flex space-x-2 md:space-x-4">
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

        <main className="flex-grow max-w-4xl mx-auto p-4 md:p-6 w-full mt-24 md:mt-32 mb-24">
          <div className="mt-6">
            {activeTab === 'about' && (
              <div>
                <div className="backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg mb-6 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-red-500">About Me</h2>
                  <p className="text-gray-300">
                    I'm a Computer Science Engineering student at IIIT Delhi, passionate about robotics, 
                    computer vision, and autonomous systems. My experience spans from developing UGV platforms 
                    to implementing cutting-edge algorithms in reinforcement learning and computer vision.
                  </p>
                </div>
                <div className="relative mb-6">
                  <div className="backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
                    <div className="flex items-start">
                      <img src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].title} className="w-48 h-48 object-cover rounded-lg mr-6 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-medium text-red-400 mb-2">{projects[currentProjectIndex].title}</h3>
                        {projects[currentProjectIndex].details.map((detail, index) => (
                          <p key={index} className="text-gray-300">{detail}</p>
                        ))}
                        <a href={projects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors mt-2 inline-block">
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button onClick={prevProject} className="p-2 rounded-full backdrop-blur-md bg-black bg-opacity-30 text-red-500 hover:text-red-400 transition-colors shadow-lg">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextProject} className="p-2 rounded-full backdrop-blur-md bg-black bg-opacity-30 text-red-500 hover:text-red-400 transition-colors shadow-lg">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Experience</h2>
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-6 last:mb-0 backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
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
                  <div key={index} className="mb-8 last:mb-0 backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
                    <div className="flex items-start">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="w-48 h-48 object-cover rounded-lg mr-6 flex-shrink-0" />
                      )}
                      <div>
                        <h3 className="text-xl font-medium text-red-400 mb-2">{project.title}</h3>
                        {project.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors mt-2 inline-block">
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Skills</h2>
                {skills.map((skillCategory, index) => (
                  <div key={index} className="mb-4 backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
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
                  <div key={index} className="mb-4 last:mb-0 backdrop-blur-md bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-medium text-red-400">{award.year}</h3>
                    <p className="text-gray-300">{award.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black bg-opacity-50 text-center text-gray-400 p-4 z-50 shadow-lg">
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