import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, FileText, CheckCircle, Users, Phone, Mail, ExternalLink } from 'lucide-react';

const Admissions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const admissionProcess = [
    {
      step: '01',
      title: 'Application',
      description: 'Fill out the online application form with required documents',
      icon: FileText,
      color: 'from-accent to-primary',
    },
    {
      step: '02',
      title: 'Entrance Exam',
      description: 'Appear for entrance examination (KCET/GMU Entrance/Any equivalent entrance test)',
      icon: CheckCircle,
      color: 'from-accent to-primary',
    },
    {
      step: '03',
      title: 'Counseling',
      description: 'Attend counseling session and document verification',
      icon: Users,
      color: 'from-accent to-primary',
    },
    {
      step: '04',
      title: 'Admission',
      description: 'Complete fee payment and secure your seat',
      icon: CheckCircle,
      color: 'from-accent to-primary',
    },
  ];

  const eligibilityCriteria = [
    {
      program: 'B.Tech in Artificial Intelligence and Machine Learning',
      criteria: [
        'Pass in 10+2 (or equivalent) with English as one of the languages and Physics, Mathematics as compulsory subjects along with Chemistry / Biotechnology / Biology / Computer Science / Electronics as the optional subjects.',
        'The candidate should have obtained at least 45% mark. However, in the case of candidates from Karnataka belonging to SC/ST/CAT-1, marks shall not be less than 40%.',
        'KCET/GMU Entrance/Any equivalent entrance test.',
      ],
    },
  ];

  return (
    <section id="admissions" className="py-12 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Admissions
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          
        </div>

        {/* Admissions Coordinators */}
        <div className={`relative z-10 mb-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Content Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Admissions Coordinators */}
            <div className="max-w-2xl mx-auto">
              {/* Main Admissions Coordinator */}
              <div className="relative group">
                {/* Card Content with Overlapping Image */}
                <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-10 pl-28 text-left border border-accent/20">
                  {/* Faculty Image - Overlapping card content */}
                  <div className="absolute -top-12 -left-10">
                    <img
                      src="/assets/faculty/Darshan_A.jpg"
                      alt="Mr. Darshan A"
                      className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-black mb-2">Mr. Darshan A</h4>
                  <p className="text-accent text-sm">Admission Coordinator</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-accent text-sm">📞 +91 8431032270</p>
                    <a href="mailto:darshana.fet.scst.aiml@gmu.ac.in" className="text-accent hover:text-accent-light text-sm block">
                      ✉️ darshana.fet.scst.aiml@gmu.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="text-center mt-6 mb-6">
              <a
                href="https://erp.gmit.info/admission/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-8 py-4 bg-accent text-white hover:text-accent rounded-full font-bold text-lg hover:bg-accent-dark transform hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
              >
                <span className="relative z-10">Apply Now</span>
                <ExternalLink className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Achievement and Admission Process Grid */}
        <div className={`grid lg:grid-cols-[30%_70%] gap-8 mb-16 transition-all duration-1000 delay-250 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Left Side - Our Achievements (30%) */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Our Achievements</h3>
                <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
              </div>

              <div className="bg-gradient-to-br from-primary-light/50 to-white rounded-3xl p-6 shadow-xl border border-accent/20">
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="/assets/admission/Sanjana_K.jpg"
                      alt="VTU 4th Rank Holder"
                      className="w-60 h-72 rounded-full object-cover border-4 border-accent mx-auto shadow-xl"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-primary-dark mb-2">VTU 4th Rank Holder</h4>
                  <p className="text-accent text-xs mb-3">Sanjana K - Outstanding Academic Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Admission Process (70%) */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
              Admission Process
            </h3>
            <div className="max-w-5xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary hidden lg:block"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {admissionProcess.map((process, index) => (
                  <div
                    key={index}
                    className="relative group flex flex-col items-center"
                  >
                    {/* Step Number Circle */}
                    <div className={`bg-gradient-to-br ${process.color} text-white text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}>
                      {process.step}
                    </div>

                    {/* Card */}
                    <div className={`bg-gradient-to-br ${process.color} rounded-[40px_10px_40px_10px] p-1 w-full`}>
                      <div className="bg-white rounded-[40px_10px_40px_10px] p-6 hover-3d cursor-pointer">
                        <div className={`bg-gradient-to-br ${process.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <process.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-primary-dark mb-3 text-center">{process.title}</h4>
                        <p className="text-sm text-body text-center leading-relaxed">{process.description}</p>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-[40px_10px_40px_10px]`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Eligibility Criteria - Updated for B.Tech only */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
            Eligibility Criteria
          </h3>
          <div className="max-w-4xl mx-auto">
            {eligibilityCriteria.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer border-2 border-transparent hover:border-accent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full inline-block mb-4">
                  <h4 className="font-bold">{program.program}</h4>
                </div>

                <div className="space-y-3">
                  {program.criteria.map((criterion, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-body leading-relaxed">{criterion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Coordinator */}
        

        {/* Additional Info */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
            {[
              {
                title: 'Scholarships Available',
                description: 'Merit-based and need-based scholarships for deserving students',
                icon: '🎓',
                link: 'https://gmu.ac.in/scholorships',
              },
              {
                title: 'Hostel Facilities',
                description: 'Separate hostels for boys and girls with modern amenities',
                icon: '🏠',
                link: 'https://gmu.ac.in/gmuhostels',
              },
              // {
              //   title: 'Financial Aid',
              //   description: 'Education loans and installment payment options available',
              //   icon: '💰',
              // },
            ].map((info, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-light/50 to-white rounded-2xl p-6 text-center shadow-lg hover-morph ${info.link ? 'cursor-pointer' : ''}`}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h4 className="text-lg font-bold text-primary-dark mb-2">{info.title}</h4>
                <p className="text-sm text-body mb-4">{info.description}</p>

                {/* Scholarship PDF Link */}
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors duration-300"
                  >
                    <span>View Details</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
