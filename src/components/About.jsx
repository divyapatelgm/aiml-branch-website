import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const HexagonCard = ({
  size = 'medium',
  className = '',
  index = 0,
  image,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRipple, setShowRipple] = useState(false);

  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-40 h-40',
    large: 'w-48 h-48',
  };

  const handleClick = () => {
    setIsAnimating(true);
    setShowRipple(true);

    // Reset animations after completion
    setTimeout(() => {
      setIsAnimating(false);
      setShowRipple(false);
    }, 1000);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Ripple Wave Effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${showRipple ? 'animate-ping bg-accent/30 scale-150' : 'scale-100 opacity-0'}`}></div>

      {/* Cinematic Entry Animation Container */}
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isAnimating
            ? 'scale-110 rotate-3'
            : 'scale-100 rotate-0'
        }`}
        style={{
          animationDelay: `${index * 150}ms`,
          animation: 'fadeInUp 1s ease-out forwards',
        }}
      >
        {/* Hexagon Card */}
        <div
          className={`relative hexagon-card cursor-pointer ${sizeClasses[size]} transform-gpu hover:scale-125 transition-all duration-500 overflow-hidden`}
          onClick={handleClick}
        >
          {/* Main Image Background - fills entire hexagon */}
          <div
            className="absolute inset-0 hexagon-shape"
            style={{
              zIndex: -1,
              background: image
                ? `url(${image})`
                : '#6B4226',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          ></div>

          {/* Optional overlay for better visual appeal */}
          <div
            className="absolute inset-0 hexagon-shape"
            style={{
              zIndex: 0,
              background: 'rgba(0, 0, 0, 0.2)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          ></div>

          {/* Hover glow */}
          <div className="absolute inset-0 bg-accent/40 hexagon-shape opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md -z-10"></div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hexagonData = [
    {
      size: 'large',
      image: '/assets/about/plant.jpg',
    },
    {
      size: 'medium',
      image: '/assets/about/paggi.jpg',
    },
    {
      size: 'medium',
      image: '/assets/about/kannada.jpg',
    },
    {
      size: 'large',
      image: '/assets/about/SIH-2025.jpg',
    },
    {
      size: 'medium',
      image: '/assets/about/ignitron.jpg',
    },
    {
      size: 'large',
      image: '/assets/about/SIH.jpg',
    },
    {
      size: 'medium',
      image: '/assets/about/inaguration.jpg',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="max-w-screen-2xl mr-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-transparent" ref={ref}>
        {/* Section Header */}
        <div className={`text-center -mt-16 mb-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4 font-heading">
            About the Department
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto">
            Leading the future of Artificial Intelligence and Machine Learning through innovation, excellence, and collaboration
          </p> */}
        </div>

       

        {/* Department Highlights Container */}
        <div className={`-mt-24 mb-10 ml-4 sm:ml-6 md:ml-0 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-transparent rounded-3xl pl-6 pr-6 pt-8 pb-8 md:pl-12 md:pr-12 md:pt-12 md:pb-12 w-full">

            {/* Two Grids Inside Department Highlights */}
            <div className="grid lg:grid-cols-3 gap-12 items-start bg-transparent">
              {/* Grid 1 - Welcome Text and Video - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  {/* Warm Organic Welcome Card with Natural Elements */}
                  <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200/50 overflow-hidden group">

                    {/* Organic Background Patterns */}
                    <div className="absolute inset-0">
                      <div className="absolute top-6 right-6 w-16 h-16 rounded-full" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)'}}></div>
                      <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full" style={{background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)'}}></div>
                      <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full" style={{background: 'radial-gradient(circle, rgba(250, 204, 21, 0.4) 0%, transparent 70%)'}}></div>
                    </div>

                    {/* Natural Accent Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-400"></div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-6 bg-gradient-to-t from-orange-300 to-amber-300 rounded-full opacity-80"></div>

                    {/* Content Container */}
                    <div className="relative z-10 max-w-8xl mx-auto -ml-4 md:-ml-8">
                      {/* Organic Welcome Header */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <div className="mr-4">
                            <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-2"></div>
                            <div className="w-2 h-6 bg-gradient-to-b from-orange-400 to-amber-500 rounded-full"></div>
                          </div>
                          <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
                            AI & ML
                          </h2>
                        </div>

                        {/* Flowing Accent Line */}
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                          <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rotate-45 shadow-sm"></div>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
                        </div>
                      </div>

                      {/* Natural Typography */}
                      <div className="space-y-6 space-x-100">
                        <p className="text-lg text-amber-800 leading-relaxed font-medium">

                          The Department of Artificial Intelligence & Machine Learning was established to meet the growing demand for intelligent technologies.
                          It focuses on modern areas such as Artificial Intelligence, Machine Learning, Deep Learning, Large Language Models, Generative AI, MLOps and Data Science.
                          Our goal is to produce skilled professionals with strong analytical and problem-solving abilities.
                          The curriculum is carefully designed to balance theory, coding, and hands-on learning.<br />
                          We emphasize innovation, research, and industry-oriented training.
                          Students are encouraged to participate in internships and collaborative projects with companies.
                          The department has well-equipped labs, experienced faculty, and a vibrant academic culture.
                          Workshops, seminars, and expert talks help students stay updated with the latest trends.
                          Regular mentoring sessions guide students toward higher studies and career growth.<br />
                          We also promote ethical values, teamwork, and a spirit of lifelong learning.
                          Our graduates have excelled in diverse fields including software development, AI research, and entrepreneurship.
                          The department maintains strong links with industry and academic partners.
                          We constantly upgrade our programs to match global standards.
                          With commitment and collaboration, we aim to shape the next generation of technology leaders.<br />
                          The Department of AI & ML welcomes all who are passionate about learning and innovation.
                        </p>

                        {/* Organic Feature Badges */}
                        <div className="flex flex-wrap gap-3 mt-8">
                          <div className="group/badge relative px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
                            <div className="absolute -top-1 -left-1 w-3 h-3 bg-amber-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-sm font-semibold text-amber-800">Advanced Labs</span>
                          </div>

                          <div className="group/badge relative px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-md">
                            <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-sm font-semibold text-orange-800">Expert Faculty</span>
                          </div>

                          <div className="group/badge relative px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-md">
                            <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-sm font-semibold text-yellow-800">Innovation Hub</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Warm Hover Enhancement */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-orange-50/20 to-yellow-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Grid 2 - Hexagon Cards in Pyramid Layout - Takes 1 column */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="relative">
                  {/* Hexagon Cards in 3-Row Layout */}
                  <div className="flex flex-col items-center gap-6">
                    {/* First Row - Two Hexagons */}
                    <div className="flex gap-12 justify-center">
                      {hexagonData.slice(0, 2).map((hexagon, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-1000 ${
                            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                          style={{ transitionDelay: `${Math.random() * 1000}ms` }}
                        >
                          <HexagonCard
                            size={hexagon.size}
                            image={hexagon.image}
                            index={index}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Second Row - Three Hexagons */}
                    <div className="flex gap-8 justify-center">
                      {hexagonData.slice(2, 5).map((hexagon, index) => (
                        <div
                          key={index + 2}
                          className={`transition-all duration-1000 ${
                            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                          style={{ transitionDelay: `${Math.random() * 1000 + 500}ms` }}
                        >
                          <HexagonCard
                            size={hexagon.size}
                            image={hexagon.image}
                            index={index + 2}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Third Row - Two Hexagons */}
                    <div className="flex gap-12 justify-center">
                      {hexagonData.slice(5, 7).map((hexagon, index) => (
                        <div
                          key={index + 5}
                          className={`transition-all duration-1000 ${
                            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                          style={{ transitionDelay: `${Math.random() * 1000 + 1000}ms` }}
                        >
                          <HexagonCard
                            size={hexagon.size}
                            image={hexagon.image}
                            index={index + 5}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
