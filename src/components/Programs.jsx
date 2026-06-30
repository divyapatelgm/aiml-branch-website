import React from 'react';
import { useInView } from 'react-intersection-observer';
import progPyramid from "/assets/admission/progpyramid.png";
import { GraduationCap, BookOpen, Award, Briefcase, Brain, MessageSquare, Eye, Target, Bot, Database, Wifi, Cloud, ExternalLink } from 'lucide-react';

const Programs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const programs = [
    {
      icon: GraduationCap,
      title: 'B.Tech in  Artificial Intelligence and Machine Learning',
      duration: '4 Years',
      intake: '180 Students',
      highlights: [
        'State-of-the-art AI & ML curriculum',
        'Industry partnerships and collaborations',
        'Advanced research facilities',
        'Expert faculty with industry experience',
      ],
      color: 'from-accent to-primary',
      shape: 'rounded-[60px_20px_60px_20px]',
    },
    // {
    //   icon: Award,
    //   degree: 'M.Tech',
    //   title: 'Master of Technology',
    //   subtitle: 'Artificial Intelligence & Machine Learning',
    //   duration: '2 Years',
    //   intake: '30 Students',
    //   highlights: [
    //     'Advanced AI/ML concepts',
    //     'Research-oriented approach',
    //     'Thesis and publications',
    //     'Industry collaborations',
    //   ],
    //   color: 'from-primary to-primary-dark',
    //   shape: 'rounded-[20px_60px_20px_60px]',
    // },
    // {
    //   icon: BookOpen,
    //   icon: 'Ph.D',
    //   title: 'Doctor of Philosophy',
    //   subtitle: 'Artificial Intelligence & Machine Learning',
    //   duration: '3-5 Years',
    //   intake: '15 Students',
    //   highlights: [
    //     'Cutting-edge research',
    //     'International collaborations',
    //     'Conference presentations',
    //     'Patent opportunities',
    //   ],
    //   color: 'from-primary-dark to-accent',
    //   shape: 'rounded-[40px_40px_10px_40px]',
    // },
  ];
  

  const specializations = [
    {
      name: 'Deep Learning & Neural Networks',
      icon: Brain
    },
    {
      name: 'Natural Language Processing',
      icon: MessageSquare
    },
    {
      name: 'Computer Vision',
      icon: Eye
    },
    {
      name: 'Reinforcement Learning',
      icon: Target
    },
    {
      name: 'Large Language Models',
      icon: Bot
    },
    {
      name: 'Generative AI',
      icon: Database
    },
    {
      name: 'IoT & Edge AI',
      icon: Wifi
    },
    {
      name: 'Data Science',
      icon: Cloud
    },
  ];

  return (
    <section id="programs" className="py-10 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pr-0 lg:pl-16 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Programs & Courses
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-14 pb-14 h-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Column 1 - Programs Grid - Takes full width on mobile, half on desktop */}
          <div className="h-full">
            {/* Programs Grid */}
            <div className="flex justify-center -ml-12 md:-ml-24">
              <div className="w-full max-w-[1075px]">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="relative group">
                      {/* Enhanced card with better hover effects */}
                      <div className={`${program.shape} bg-gradient-to-br ${program.color} p-1`}>
                        <div className={`${program.shape} bg-white p-6 hover-3d cursor-pointer transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:translate-y-0 group-hover:rotate-0`}>
                          {/* Top section with centered icon and corner info */}
                          <div className="relative mb-4">
                            {/* Icon centered at top */}
                            <div className="flex justify-center">
                              <div className={`bg-gradient-to-br ${program.color} p-3 md:p-4 rounded-full group-hover:scale-125 transition-all duration-500 group-hover:rotate-12`}>
                                <program.icon className="w-10 h-10 md:w-14 md:h-14 text-white" />
                              </div>
                            </div>

                            {/* Duration and Intake at top corner */}
                            <div className="absolute top-0 right-0 text-base md:text-lg min-w-[240px] md:min-w-[280px]">
                              {/* Duration */}
                              <div className="text-right mb-2">
                                <span className="text-primary-dark font-bold text-sm md:text-base">Duration :</span>
                                <span className="font-semibold text-primary-dark/80 ml-1 md:ml-2 text-sm md:text-base">{program.duration}</span>
                              </div>

                              {/* Intake */}
                              <div className="text-right">
                                <span className="text-primary-dark font-bold text-sm md:text-base">Intake :</span>
                                <span className="font-semibold text-primary-dark/80 ml-1 md:ml-2 text-sm md:text-base">{program.intake}</span>
                              </div>
                            </div>
                          </div>

                          {/* Title with better styling */}
                          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center group-hover:text-primary transition-colors duration-300">
                            {program.title}
                          </h3>

                          {/* Horizontal line separator */}
                          <div className="w-48 md:w-64 h-0.5 bg-gradient-to-r from-accent/70 to-primary/70 mx-auto my-4 md:my-6 rounded-full mb-4 md:mb-6"></div>

                          {/* Responsive Layout for Schemes, Programs, and Courses */}
                          {/* Mobile/Tablet: Vertical stacking */}
                          <div className="block md:hidden space-y-6 md:space-y-8 mt-4 md:mt-6 px-2 md:px-4">
                            {/* 2025 Scheme */}
                            <div className="space-y-3 md:space-y-4">
                              <h1 className="text-lg md:text-xl font-bold text-primary-dark text-center">2025 Scheme</h1>
                              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS%20-%20AIML%20-2025.pdf"
                                  className="block bg-gradient-to-r from-primary to-primary-dark text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Program Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Ccourse_details%5CCourse%20Document%20-%20AIML%202025%20Scheme.pdf"
                                  className="block bg-gradient-to-r from-accent to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Course Document
                                </a>
                              </div>
                            </div>

                            {/* 2024 Scheme */}
                            <div className="space-y-3 md:space-y-4">
                              <h1 className="text-lg md:text-xl font-bold text-primary-dark text-center">2024 Scheme</h1>
                              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS-AIML-%202024.pdf"
                                  className="block bg-gradient-to-r from-primary to-accent text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Program Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/imgview?dummy=aiml2024&base=assets%2Fdownloadmaterial%2FCourse%20Document%20%20-%20AIML%202024%20Scheme%2FCourse%20Document%20%20-%20AIML%202024%20Scheme-&ext=png"
                                  className="block bg-gradient-to-r from-primary to-accent text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Course Document
                                </a>
                              </div>
                            </div>

                            {/* 2023 Scheme */}
                            <div className="space-y-3 md:space-y-4">
                              <h1 className="text-lg md:text-xl font-bold text-primary-dark text-center">2023 Scheme</h1>
                              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS%20-%20AIML%20-2023.pdf"
                                  className="block bg-gradient-to-r from-primary-dark to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Program Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Ccourse_details%5CCourse%20Document%20AIML%202023%20Scheme.pdf"
                                  className="block bg-gradient-to-r from-accent to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                  Course Document
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Desktop: 3-Column Layout */}
                          <div className="hidden md:grid md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6 px-2 md:px-4">
                            {/* First Column - Scheme Years */}
                            <div className="space-y-3 md:space-y-4">
                              <div className="space-y-4 md:space-y-6">
                                <h1 className="text-lg md:text-xl font-bold text-primary-dark">2025 Scheme</h1>
                                <h1 className="text-lg md:text-xl font-bold text-primary-dark">2024 Scheme</h1>
                                <h1 className="text-lg md:text-xl font-bold text-primary-dark">2023 Scheme</h1>
                              </div>
                            </div>

                            {/* Second Column - Programs */}
                            <div className="space-y-3 md:space-y-4">
                              <div className="space-y-4 md:space-y-6">
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS%20-%20AIML%20-2025.pdf"
                                  className="block bg-gradient-to-r from-primary to-primary-dark text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                  Program Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS-AIML-%202024.pdf"
                                  className="block bg-gradient-to-r from-primary to-accent text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                  Program Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS%20-%20AIML%20-2023.pdf"
                                  className="block bg-gradient-to-r from-primary-dark to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                  Program Document
                                </a>

                              </div>
                            </div>

                            {/* Third Column - Courses */}
                            <div className="space-y-3 md:space-y-4">
                              <div className="space-y-4 md:space-y-6">
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Ccourse_details%5CCourse%20Document%20-%20AIML%202025%20Scheme.pdf"
                                  className="block bg-gradient-to-r from-accent to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                  Course Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/imgview?dummy=aiml2024&base=assets%2Fdownloadmaterial%2FCourse%20Document%20%20-%20AIML%202024%20Scheme%2FCourse%20Document%20%20-%20AIML%202024%20Scheme-&ext=png"
                                  className="block bg-gradient-to-r from-primary to-accent text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                  Course Document
                                </a>
                                <a
                                  href="https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Ccourse_details%5CCourse%20Document%20AIML%202023%20Scheme.pdf"
                                  className="block bg-gradient-to-r from-accent to-primary text-white py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                 Course Document
                                </a>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Technology Roadmap */}
        <div className="hidden lg:block h-full">
          <div
            className={`transition-all duration-1000 delay-700 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-primary-light/20 via-white to-accent/10 rounded-3xl p-4 neural-card overflow-hidden border border-primary/20">

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>

              {/* Heading */}
              <div className="relative z-10 text-center mb-4">
                <h3 className="text-1xl md:text-4xl font-bold bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
                  AI & ML Technology
                </h3>

                <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-2 rounded-full"></div>

              
              </div>

              {/* Roadmap Image */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={progPyramid}
                  alt="AI ML Technology Roadmap"
                  className="w-full max-w-[900px] object-contain transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

          {/* Column 2 - Specializations Section - Hidden on mobile, shown on desktop */}
          {/*
          <div className="hidden lg:block h-full">
            <div className={`transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-primary-light/20 via-white to-accent/10 rounded-3xl p-4 md:p-6 neural-card overflow-hidden">
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-spin opacity-20"
                  style={{ animationDuration: '20s' }}
                ></div>

                <div className="relative z-10 text-center mb-6">
                  <div className={`inline-block transition-all duration-1000 delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent mb-4">
                      Areas of Specialization
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-0 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${(index * 100) + 800}ms` }}
                    >
                      <div className="flex items-center p-2 hover:bg-primary/5 rounded-lg transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent via-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 flex-shrink-0 mr-4">
                          <spec.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-base font-semibold text-primary-dark group-hover:text-primary transition-colors duration-300">
                          {spec.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
          */}
        </div>

        {/* Key Features */}
        {/* <div className={`mt-16 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Why Choose Our Programs?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Industry-Aligned Curriculum',
                description: 'Updated regularly with input from tech leaders and industry experts',
              },
              {
                title: 'Practical Learning',
                description: 'Extensive lab work, projects, and real-world problem solving',
              },
              {
                title: 'Global Recognition',
                description: 'Accredited programs recognized by leading international bodies',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover-3d cursor-pointer border-2 border-transparent hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <h4 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                <p className="text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Programs;
