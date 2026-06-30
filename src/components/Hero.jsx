import React, { useEffect, useState } from 'react';
import { ChevronDown, Brain, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    '/assets/herosectionVideo-img/ai-herosection.mp4',
    '/assets/herosectionVideo-img/ai-robot1.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute bg-accent/30 animate-float"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* College Logo */}
          <div className="flex justify-center mb-8">
            <div className="float-slow">
              <img
                src="/assets/logo/image.png"
                alt="College Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain animate-glow"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xl md:text-4xl text-white/90 font-body">
             <strong> GM UNIVERSITY </strong>
            </p>
          </div>

          {/* Main heading with glitch effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            <div className="inline-block hover-glitch">
              <div className="gradient-text bg-gradient-to-r from-accent via-primary to-primary-light bg-clip-text text-transparent text-3xl md:text-4xl mb-2">
                Department of
              </div>
              <div className="gradient-text bg-gradient-to-r from-accent via-primary to-primary-light bg-clip-text text-transparent">
                Artificial Intelligence & Machine Learning
              </div>
              {/* <p className="text-xl md:text-4xl text-white/90 font-body">Faculty of Engineering and Technology</p> */}
            </div>
          </h1>

          {/* Animated tagline */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Where <span className="text-accent font-bold">Algorithms</span> meet{' '}
              <span className="text-primary font-bold">Innovation</span>, and{' '}
              <span className="text-primary-light font-bold">Dreams</span> become{' '}
              <span className="text-accent font-bold">Reality</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('department-overview')}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover-neon"
            >
              Explore Our Department
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-full font-semibold text-lg hover:bg-accent hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              View Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
