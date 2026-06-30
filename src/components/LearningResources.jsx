import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Laptop, Database, Cloud, Code, Brain, X } from 'lucide-react';

const LearningResources = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedResource, setSelectedResource] = useState(null);



  const resources = [
    {
      icon: Code,
      title: 'Leap',
      description: 'Provides a comprehensive introduction to data handling, analysis, and visualization using Python Language.',
      features: ['PyCharm', 'Jupyter Notebooks', 'Git & GitHub'],
      color:'from-accent to-primary',
      image: '/assets/learning_resourses/lab.jpg',
      details: 'Professional development environment with PyCharm Professional, JupyterHub, VS Code, and unlimited private repositories on GitHub.',
      link: 'https://leap.gmu.ac.in',
    },
    {
      icon: Laptop,
      title: 'AI/ML Labs',
      description: 'State-of-the-art labs with high-performance GPUs and computing clusters',
      features: ['NVIDIA GPU Workstations', 'Cloud Computing Access', 'Latest Software Tools'],
      color:'from-accent to-primary',
      image: '/assets/learning_resourses/lab.jpg',
      details: 'Our AI/ML labs feature cutting-edge NVIDIA RTX 4090 GPUs, high-speed networking, and 24/7 access for students and researchers.',
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Access to thousands of research papers, e-books, and online courses',
      features: ['IEEE/ACM Access', 'Springer Journals', 'Online Course Platforms'],
      color:'from-accent to-primary',
      image: '/assets/learning_resourses/gmu-library.png',
      details: 'Comprehensive digital library with access to IEEE Xplore, Springer Nature, ScienceDirect, and premium online learning platforms like Coursera and edX.',
    },
    
  ];



  const Popup = ({ resource, onClose }) => {
    if (!resource) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-fade-in-up">
          {/* Header */}
          <div className={`bg-gradient-to-r ${resource.color} p-6 rounded-t-3xl`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`bg-white/20 w-16 h-16 rounded-full flex items-center justify-center`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{resource.title}</h3>
                  <p className="text-white/90">{resource.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Actual image display */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-48 rounded-2xl mb-6 overflow-hidden relative">
              <img
                src={resource.image}
                alt={`${resource.title} illustration`}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  console.error(`Failed to load image: ${resource.image}`);
                  e.target.style.display = 'none';
                  e.target.parentNode.querySelector('.fallback-placeholder').style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="fallback-placeholder absolute inset-0 flex-col items-center justify-center text-center bg-gradient-to-br from-gray-100 to-gray-200 hidden">
                <div className="text-gray-500 font-medium text-sm">{resource.title}</div>
                <div className="text-xs text-gray-400 mt-1">Image not found</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="learning-resources" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Learning Resources
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative group h-full">
                <div className={`bg-gradient-to-br ${resource.color} rounded-[40px_10px_40px_10px] p-1 h-full`}>
                  <div className="bg-white rounded-[40px_10px_40px_10px] p-6 h-full hover-3d relative overflow-hidden">
                    <div className={`bg-gradient-to-br ${resource.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3">{resource.title}</h3>
                    <p className="text-body mb-4 leading-relaxed">{resource.description}</p>

                    {resource.link ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 bg-gradient-to-r ${resource.color} text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center block`}
                      >
                        Open Leap
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedResource(resource)}
                        className={`w-full py-3 px-6 bg-gradient-to-r ${resource.color} text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-[40px_10px_40px_10px]`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        {/* <div className={`mb-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Department Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-light/50 to-white rounded-2xl p-6 text-center shadow-lg hover-morph cursor-pointer"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h4 className="text-lg font-bold text-primary-dark mb-2">{facility.title}</h4>
                <p className="text-sm text-body">{facility.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Additional Resources */}
        {/* <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-light to-accent/20 rounded-3xl p-8 md:p-12 neural-card">
            <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
              Additional Learning Support
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Online Learning Platforms',
                  description: 'Free access to Coursera, edX, and Udacity courses',
                },
                {
                  title: 'Industry Workshops',
                  description: 'Regular workshops by industry experts and professionals',
                },
                {
                  title: 'Mentorship Programs',
                  description: 'One-on-one mentorship from faculty and alumni',
                },
                {
                  title: 'Certification Support',
                  description: 'Guidance for AWS, Google Cloud, and Azure certifications',
                },
                {
                  title: 'Research Support',
                  description: 'Funding and resources for student research projects',
                },
                {
                  title: '24/7 Lab Access',
                  description: 'Round-the-clock access to computing facilities',
                },
              ].map((support, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-3d cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-primary-dark mb-2">{support.title}</h4>
                  <p className="text-sm text-body">{support.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Popup */}
      <Popup resource={selectedResource} onClose={() => setSelectedResource(null)} />
    </section>
  );
};

export default LearningResources;
