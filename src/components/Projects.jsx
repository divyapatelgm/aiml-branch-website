import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Zap, Globe, X, Brain, Wifi, Database, MessageSquare, Eye, Target } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Modal handlers
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Deep Fake Detection System',
      description: 'Deep fake detection using Deep Learning & CNN',
      category: 'CyberSecurity',
      tech: ['TensorFlow', 'Python', 'CNN'],
      icon: '🌐',
      color: 'from-accent to-primary',
      images: '/assets/project/Secure_sight.png',
      students: ['Sourab R R', 'Sahana H S', 'Sahal B', 'Shravani N D'],
      features: [
        'Deep Learning–based facial forgery detection',
        'Robust CNN architecture for image/video analysis',
        'High-accuracy prediction on real-world datasets',
        'Ethical AI solution to combat misinformation'
      ]
    },
    {
      title: 'Plant Monitoring System',
      description: 'Real-time plant health monitoring using IoT and ML',
      category: 'Smart City',
      tech: ['Flutter', 'ESP8266', 'IoT'],
      icon: '🌿',
      color: 'from-accent to-primary',
      images: '/assets/project/Plant_monitoring_system.jpg',
      students: ['Vruthvik R Vanjre', 'Shivakumar R Bhandari', 'Sujay V', 'Srinivas'],
      features: [
        'Real-time environmental data collection and alerts',
        'IoT-based smart agriculture integration',
        'Mobile app interface for remote monitoring',
        'Predictive plant health analysis using ML'
      ]
    },
    {
      title: 'Tensou Robot',
      description: 'Intelligent Pesticides Sprinkling Robot.',
      category: 'Agriculture',
      tech: ['IoT', 'Flutter', 'YoloV5'],
      icon: '🤖',
      color: 'from-accent to-primary',
      images: '/assets/project/tenso_robot.jpg',
      students: ['Vruthvik R Vanjre', 'Shivakumar R Bhandari', 'Sujay V', 'Vinayak M V', 'Syed Umarsha Khadri', 'Spandana A M'],
      features: [
        'Autonomous object detection using YoloV5',
        'Smart pesticide spraying based on crop detection',
        'IoT-enabled control and real-time monitoring',
        'Efficient and eco-friendly agricultural automation'
      ]
    },
    {
      title: 'Threat Detection System',
      description: 'AI-based system for identifying security threats in real-time using surveillance footage',
      category: 'AI & Security',
      tech: ['CNN', 'Reinforcement Learning', 'CV'],
      icon: '📷',
      color: 'from-accent to-primary',
      images: '/assets/project/Secure_sight.png',
      students: ['Shivakumar R Bhandari', 'Sanket A Barde', 'Sambhav V N', 'Srinivas'],
      features: [
        'Real-time surveillance and threat identification',
        'Reinforcement learning for adaptive decision-making',
        'Automated alert and response mechanism',
        'Scalable and efficient security AI solution'
      ]
    },
    {
      title: 'Build & Hosted Own CouchDB Database',
      description: 'Built own home server & hosted CouchDB database',
      category: 'FinTech',
      tech: ['CouchDB', 'PHP', 'SQL'],
      icon: '🔒',
      color: 'from-accent to-primary',
      images: '/assets/project/couchDB.jpg',
      students: ['Vruthvik R Vanjre'],
      features: [
        'Self-hosted database server deployment',
        'RESTful API integration for data access',
        'Secure and scalable backend setup',
        'Hands-on implementation of NoSQL technologies'
      ]
    },
    {
      title: 'Agricultural Yield Prediction',
      description: 'AI system for crop yield forecasting and optimization',
      category: 'AgriTech',
      tech: ['Random Forest', 'IoT', 'Data Analytics'],
      icon: '🌾',
      color: 'from-accent to-primary',
      images: '/assets/project/Yeild_detection.jpg',
      students: ['Vruthvik R Vanjre', 'Shivakumar R Bhandari', 'Sujay V', 'Vinayak M V', 'Syed Umarsha Khadri', 'Spandana A M'],
      features: [
        'Predictive analytics for yield estimation',
        'IoT-driven soil and weather data collection',
        'Data visualization and report generation',
        'Decision support for smart farming practices'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Student Projects & Models
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Innovative solutions developed by our talented students
          </p> */}
        </div>

        <div className="relative z-10 mb-6">
          {/* Main Content Layout */}
          <div className="max-w-2xl mx-auto">
            {/* Project Coordinator */}
            <div className="relative group">
              {/* Background decorative element */}

              {/* Card Content with Overlapping Image */}
              <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-10 pl-28 text-left border border-accent/20">
                {/* Faculty Image - Overlapping card content */}
                <div className="absolute -top-12 -left-10">
                  <img
                    src="/assets/faculty/Jayalakshmi_M.jpg"
                    alt="Prof. Jayalakshmi M"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                  />
                </div>

                <h4 className="text-2xl font-bold text-black mb-2">Prof. Jayalakshmi M</h4>
                <p className="text-accent text-sm">Project Coordinator</p>
                <div className="mt-4 space-y-2">
                  <p className="text-accent text-sm">📞 +91-9036498436</p>
                  <a href="mailto:jayalakshmim.fet.scst.aiml@gmu.ac.in" className="text-accent hover:text-accent-light text-sm block">
                    ✉️ jayalakshmim.fet.scst.aiml@gmu.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative group h-full">
                <div className={`bg-gradient-to-br ${project.color} rounded-[40px_10px_40px_10px] p-1 h-full`}>
                  <div className="bg-white rounded-[40px_10px_40px_10px] p-6 h-full hover-3d cursor-pointer">
                    <div className="text-6xl mb-4">{project.icon}</div>
                    <div className={`inline-block bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3">{project.title}</h3>
                    <p className="text-body mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-primary-light/30 text-primary-dark px-3 py-1 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => openModal(project)}
                      className="w-full bg-gradient-to-r text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{ background: `linear-gradient(to right, ${project.color})` }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-[40px_10px_40px_10px]`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Projects Section - Always Visible */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent mb-4">
              Ongoing Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto">
              Cutting-edge research initiatives and innovative projects driving technological advancement
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Driverless Buggy - Self Driving Vehicle',
                description: 'Autonomous vehicle technology for agricultural and industrial applications with advanced navigation and obstacle avoidance systems.',
                status: 'In Progress',
                icon: Target,
                duration: '2025-2026'
              },
              {
                title: 'Delivery Drone',
                description: 'Unmanned aerial vehicle system for automated package delivery with GPS tracking and payload management capabilities.',
                status: 'Development',
                icon: Wifi,
                duration: '2025-2026'
              },
              {
                title: 'Smart Irrigation - Automatic Plant Watering System',
                description: 'IoT-based intelligent irrigation system that monitors soil moisture and weather conditions for optimal water usage.',
                status: 'Active',
                icon: Database,
                duration: '2025-2026'
              },
              {
                title: 'Smart Acoustic - Based Damage Alert System',
                description: 'Acoustic monitoring system using AI to detect structural damage through sound pattern analysis and early warning alerts.',
                status: 'Research Phase',
                icon: MessageSquare,
                duration: '2025-2026'
              },
              {
                title: 'Automated Audio Playback System using Arduino',
                description: 'Arduino-based automated audio system for educational and entertainment purposes with programmable playback schedules.',
                status: 'Pilot Testing',
                icon: Brain,
                duration: '2025-2026'
              },
              {
                title: 'Automatic Pesticide Sprayer Attachment for Mini Tractor',
                description: 'Automated pesticide spraying system integrated with mini tractors for precise and efficient crop protection.',
                status: 'In Progress',
                icon: Eye,
                duration: '2025-2026' 
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 7) * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 h-full group-hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent via-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 mr-4">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'Research Phase' ? 'bg-purple-100 text-purple-800' :
                        project.status === 'Development' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-primary-dark/70">
                    
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={`mb-32 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Code, label: 'Software Development', count: 45 },
              { icon: Cpu, label: 'Hardware Projects', count: 28 },
              { icon: Zap, label: 'AI/ML Models', count: 62 },
              { icon: Globe, label: 'Web Applications', count: 38 },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-light/50 to-white rounded-2xl p-6 text-center shadow-lg hover-morph cursor-pointer"
              >
                <category.icon className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary-dark mb-1">{category.label}</h4>
                <p className="text-2xl font-bold text-primary">{category.count}</p>
              </div>
            ))}
          </div>
        </div> */}

        

      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative p-8">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Project Details</h3>

                  {/* Project Images Gallery */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Array.isArray(selectedProject.images) ? (
                        selectedProject.images.map((image, idx) => (
                          <div key={idx} className="relative group">
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-2 aspect-square">
                              <img
                                src={image}
                                alt={`${selectedProject.title} - Image ${idx + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
                          </div>
                        ))
                      ) : (
                        <div className="relative group col-span-2 md:col-span-3">
                          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-2">
                            <img
                              src={`${selectedProject.images}`}
                              alt={`${selectedProject.title} - Project Image`}
                              className="w-full h-64 object-fill rounded-lg"
                              onError={(e) => {
                                e.target.src = '/assets/project/placeholder.jpg';
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Student Names */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-dark">Project Team:</h4>
                    <div className="space-y-1">
                      {selectedProject.students.map((student, idx) => (
                        <p key={idx} className="text-gray-700">• {student}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${selectedProject.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {selectedProject.category}
                    </div>
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-dark">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, idx) => (
                        <span key={idx} className="bg-primary-light/30 text-primary-dark px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary-light/20 rounded-2xl p-6">
                    <h4 className="font-semibold text-primary-dark mb-3">Project Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      {selectedProject.features && selectedProject.features.length > 0 ? (
                        selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-accent mr-2">✓</span>
                            {feature}
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-center">
                            <span className="text-accent mr-2">✓</span>
                            Advanced AI/ML implementation
                          </li>
                          <li className="flex items-center">
                            <span className="text-accent mr-2">✓</span>
                            Real-world application
                          </li>
                          <li className="flex items-center">
                            <span className="text-accent mr-2">✓</span>
                            Student-led development
                          </li>
                          <li className="flex items-center">
                            <span className="text-accent mr-2">✓</span>
                            Industry-standard technologies
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;


