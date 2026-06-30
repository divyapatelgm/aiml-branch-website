import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Eye, Target, Rocket, TrendingUp } from 'lucide-react';

const VisionMission = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl blob-animate"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl blob-animate" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4">
            Vision, Mission & Objectives
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Vision, Mission and Objectives Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 transition-all duration-1000 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Vision Card */}
          <div className={`transition-all duration-1000 delay-200 -ml-24 pl-24 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-[60px_20px_60px_20px] transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-[60px_20px_60px_20px] p-4 md:p-6 h-full shadow-2xl hover-3d">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-accent/10 p-2 sm:p-3 md:p-4 rounded-full mr-3 sm:mr-4">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark">Department Vision</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify">
                  Department of Artificial Intelligence and Machine Learning will have a transformative impact on society through continual innovation in Artificial Intelligence and Machine Learning education, research, skill development, creativity, and entrepreneurship.
                </p>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-[20px_60px_20px_60px] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-[20px_60px_20px_60px] p-4 md:p-6 h-full shadow-2xl hover-3d">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-full mr-3 sm:mr-4">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark">Department Mission</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify">To disseminate knowledge and conduct research in Artificial Intelligence and Machine Learning with learner centric approach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify">To teach skills such as critical thinking, creativity and innovation, collaboration, communication, technical and digital, flexibility and adaptability, cultural values, and leadership and responsibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify">To develop global citizens by educating students on emotional, physical, social, economic, environmental, spiritual dimensions of human growth in addition to intellectual pursuits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify">To address real-world challenges and to establish the groundwork for entrepreneurship and lifelong learning</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Objectives Card */}
          <div className={`transition-all duration-1000 delay-600 -mr-24 pr-24 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-accent rounded-[40px_10px_40px_10px] transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-[40px_10px_40px_10px] p-4 md:p-6 h-full shadow-2xl hover-3d">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-primary-dark/10 p-2 sm:p-3 md:p-4 rounded-full mr-3 sm:mr-4">
                    <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-dark" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark">Department Objectives</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-accent w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify"><strong>Deliver high-quality education</strong> in core and emerging areas of Artificial Intelligence and Machine Learning to produce competent, industry-ready graduates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-accent w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify"><strong>Promote cutting-edge research and innovation</strong> to address societal, industrial, and environmental challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-accent w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify"><strong>Foster interdisciplinary learning and collaboration</strong> to develop advanced products, sustainable systems, and start-up ventures.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-accent w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify"><strong>Develop professional, ethical, and leadership skills</strong> among students to excel in diverse global work environments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 group">
                    <div className="bg-accent w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed text-justify"><strong>Engage with industry and community</strong> through consultancy, skill development, and technology transfer for regional and national development.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary-dark to-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Objectives List */}
        {/* <div className={`mt-16 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-light/50 to-accent/20 rounded-3xl p-8 md:p-12 neural-card">
            <h4 className="text-2xl font-bold text-primary-dark mb-6 text-center">
              Additional Strategic Objectives
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Promote interdisciplinary research and collaboration across departments',
                'Develop industry-ready professionals through hands-on projects and internships',
                'Establish centers of excellence in emerging AI technologies',
                'Create a vibrant ecosystem for startups and entrepreneurship',
                'Contribute to society through AI-driven solutions for social good',
                'Maintain global standards in curriculum and teaching methodologies',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="bg-accent w-2 h-2 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-body leading-relaxed group-hover:text-primary-dark transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VisionMission;
