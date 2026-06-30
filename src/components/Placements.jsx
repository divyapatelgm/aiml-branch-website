import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

const Placements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  const topRecruiters = [
    { image: '/assets/logo/IntelliPatt.png', package: '7.25 LPA', alt: 'Intellipaat' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', package: '6.25 LPA', alt: 'Infosys' },
    { image: 'https://www.itcinfotech.com/wp-content/uploads/2025/03/itc-logo-1.webp', package: '4.2 LPA', alt: 'ITC Infotech' },
    { image: '/assets/logo/tcs.png', name: 'TCS', package: '4.1 LPA', alt: 'TCS' },
    { image: 'https://cdn.worldvectorlogo.com/logos/slk-logo.svg', name: 'SLK', package: '4.0 LPA', alt: 'SLK' },
    { name: 'Skolar', package: '3.6 LPA' },
  ];

  const placementHighlights = [
    {
      title: 'Pre-Placement Training',
      description: 'Comprehensive training in aptitude, technical skills, and soft skills',
      icon: '📚',
    },
    {
      title: 'Mock Interviews',
      description: 'Regular mock interviews with industry professionals',
      icon: '🎯',
    },
    {
      title: 'Resume Building',
      description: 'Expert guidance on creating impactful resumes',
      icon: '📝',
    },
    {
      title: 'Industry Connections',
      description: 'Strong network with leading tech companies',
      icon: '🤝',
    },
  ];

  return (
    <section id="placements" className="py-20 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Placement Excellence
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Empowering students to achieve their career dreams
          </p> */}
        </div>

        {/* Placement Coordinators */}
        <div className={`relative z-10 mb-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Content Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Placement Coordinators */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Assistant Placement Coordinator */}
              <div className="relative group">
                {/* Background decorative element */}

                {/* Card Content with Overlapping Image */}
                <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-10 pl-28 text-left border border-accent/20">
                  {/* Faculty Image - Overlapping card content */}
                  <div className="absolute -top-12 -left-10">
                    <img
                      src="/assets/faculty/shilpa.png"
                      alt="Mrs. Shilpa R. N"
                      className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-black mb-2">Mrs. Shilpa R. N</h4>
                  <p className="text-accent text-sm">Placement Coordinator</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-accent text-sm">📞 +91-7411740162</p>
                    <a href="mailto:shilparn.fet.aiml@gmail.com" className="text-accent hover:text-accent-light text-sm block">
                      ✉️ shilparn.fet.aiml@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Placement Coordinator */}
              <div className="relative group">
                {/* Background decorative element */}

                {/* Card Content with Overlapping Image */}
                <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-10 pl-28 text-left border border-accent/20">
                  {/* Faculty Image - Overlapping card content */}
                  <div className="absolute -top-12 -left-10">
                    <img
                      src="/assets/faculty/mukta_pujar.jpg"
                      alt="Ms. Muktha Pujar"
                      className="w-32 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-black mb-2">Ms. Muktha Pujar</h4>
                  <p className="text-accent text-sm">Placement Coordinator</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-accent text-sm">📞 +91-9886391252</p>
                    <a href="mailto:mukthapujar.fet.aiml@gmu.ac.in" className="text-accent hover:text-accent-light text-sm block">
                      ✉️ mukthapujar.fet.aiml@gmu.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aptitude Test Button */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://leap.gmu.ac.in/Lakshya/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-10 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-full font-bold text-lg hover:from-accent-dark hover:to-primary-dark transform hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center space-x-3"
          >
            <span className="relative z-10">Lakshya Portal</span>
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-primary-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Top Recruiters */}


        {/* Placement Highlights */}
        <div className={`transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Our Placement Support
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-w-6xl mx-auto px-4">
            {placementHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-light/50 to-white rounded-2xl p-6 shadow-lg hover-3d cursor-pointer"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-bold text-primary-dark mb-2">{highlight.title}</h4>
                <p className="text-body">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Partners Section */}
        <div className={`mt-16 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary-dark mb-8">Our Placement Partners</h4>
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-light/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-accent/20 shadow-lg">
                  <img
                    src="/assets/Placement/placement partner.png"
                    alt="Placement Partner"
                    className="w-full max-w-[50rem] h-auto object-contain max-h-[300px] mx-auto"
                  />
                </div>
              </div>
            </div>
          
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Top Recruiters
          </h3>
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
            {topRecruiters.map((recruiter, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px_10px_40px_10px] shadow-lg p-4 cursor-pointer border-2 border-transparent hover:border-accent transition-all duration-300"
              >
                <div className="flex justify-center items-center">
                  <div>
                    {recruiter.image ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={recruiter.image}
                          alt={recruiter.alt || 'Company Logo'}
                          className={`${recruiter.name === 'ITC Infotech' ? 'h-20' : 'h-10'} mb-1 object-contain`}
                        />
                        {recruiter.name === 'SLK' && (
                          <p className="text-sm text-body text-center">{recruiter.name}</p>
                        )}
                      </div>
                    ) : (
                      <h4 className="text-2xl font-bold text-primary-dark mb-1">{recruiter.name}</h4>
                    )}
                  </div>
                  {/* <div className="text-right">
                    <p className="text-3xl font-bold text-accent">{recruiter.package}</p>
                    <p className="text-xs text-body">Package</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placed Students Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-primary-dark mb-3">Our Placed Students</h3>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {/* DXC Luxoft */}
            <img
              src="/assets/Placement/DXC_Luxoft.png"
              alt="DXC Luxoft Placed Students"
              className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />

            {/* Infosys */}
            <img
              src="/assets/Placement/Sunidhi-Infosys.jpg"
              alt="Sunidhi - Placed at Infosys"
              className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              onError={(e) => {
                e.target.src = '/assets/Placement/placeholder.jpg';
                e.target.alt = 'Image not found';
              }}
            />
            
            {/* SLK */}
            <img
              src="/assets/Placement/SLK-2025.jpg"
              alt="SLK Placed Students"
              className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>


    </section>
  );
};

export default Placements;
