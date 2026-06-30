import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import hodImage from '/assets/faculty/asha_k_hod.jpg';

const HodMessage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Head of Department's Message
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            {/* Image side with unique shape */}
            <div className="relative">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-[60px_40px_60px_40px] h-25 cursor-pointer shadow-2xl transform hover:scale-105 transition-all duration-700">
                  <img
                    src={hodImage}
                    alt="Dr. Asha - Head of Department"
                    className="w-full h-fit object-fit "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Decorative frame */}
                <div className="absolute -inset-4 border-4 border-accent/30 rounded-[70px_50px_70px_50px] -z-10 group-hover:border-accent/60 transition-colors duration-300"></div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <p className="font-bold text-lg">Head of Department</p>
                  <p className="text-sm">AI & ML</p>
                </div>
              </div>
            </div>

            {/* Message side */}
            <div className="space-y-6">
              {/* Quote icon */}
              <div className="flex items-start space-x-4">
                <Quote className="w-12 h-12 text-accent flex-shrink-0 animate-pulse" />
                <div>
                  <h3 className="text-3xl font-bold text-primary-dark mb-2">Dr. Asha K</h3>
                  <p className="text-xl text-primary font-heading">Professor & Head</p>
                  <p className="text-lg text-body">Department of AI & ML</p>
                </div>
              </div>

              {/* Message content with unique styling */}
              <div className="space-y-4">
                <div className="bg-primary-light/30 p-6 rounded-3xl border-l-4 border-accent hover-neon transition-all duration-300">
                  <p className="text-lg text-body leading-relaxed italic">
                    "Welcome to the Department of Artificial Intelligence and Machine Learning at GM University.
                    As we stand at the threshold of the AI revolution, our department is committed to preparing
                    the next generation of innovators, researchers, and leaders who will shape the future of technology."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg hover-3d transition-all duration-300">
                  <p className="text-lg text-body leading-relaxed">
                    Our vision extends beyond traditional education. We strive to create an environment where
                    curiosity meets opportunity, where theoretical knowledge transforms into practical solutions,
                    and where every student discovers their potential to make a meaningful impact on society.
                  </p>
                </div>

                {/* <div className="bg-gradient-to-r from-primary-light/30 to-accent/10 p-6 rounded-3xl hover-morph transition-all duration-300">
                  <p className="text-lg text-body leading-relaxed">
                    With state-of-the-art facilities, industry collaborations, and a dedicated faculty team, 
                    we ensure that our students receive world-class education that prepares them for the 
                    challenges and opportunities of tomorrow. Join us in this exciting journey of discovery 
                    and innovation.
                  </p>
                </div> */}
              </div>

              {/* Signature */}
              <div className="pt-4">
                <div className="inline-block">
                  <p className="text-2xl font-bold text-primary-dark mb-1" style={{ fontFamily: 'cursive' }}>
                    Dr. Asha K
                  </p>
                  <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative quote marks */}
        <div className="absolute top-20 right-20 text-9xl text-primary-light/10 font-serif pointer-events-none hidden lg:block">
          "
        </div>
        <div className="absolute bottom-20 left-20 text-9xl text-accent/10 font-serif pointer-events-none hidden lg:block transform rotate-180">
          "
        </div>
      </div>
    </section>
  );
};

export default HodMessage;
