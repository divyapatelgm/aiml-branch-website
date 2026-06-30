import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DepartmentOverview = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState({});
  const swiperRef = useRef(null);

  // 👇 This triggers when section comes into view
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3, // Adjust how much needs to be visible
    triggerOnce: false,
  });

  // ▶️ Slider autoplay logic
  React.useEffect(() => {
    if (swiperRef.current) {
      if (inView) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [inView]);

  const sliderData = [
    {
      title: "Drone Workshop 2026",
      subtitle: "Hands-On Learning in UAV Design and Flight Systems",
      image: "/assets/dept_walkthrough/Drone_Workshop-2026.jpeg",
      fallbackGradient: "from-primary to-accent"
    },
    {
      title: "PGD Intel Unnati Training Program",
      subtitle: "Empowering Faculty with Emerging Technologies and Industry Skills",
      image: "/assets/dept_walkthrough/Intel_Unnati_2026.jpeg",
      fallbackGradient: "from-orange-500 to-red-500"
    },
    {
      title: "SIH Hackathon 2025 – Grand Finale Winners",
      subtitle: "A proud achievement for the AIML Department as our 7th Semester team wins the Smart India Hackathon 2025 Grand Finale with their innovation and dedication.",
      image: "/assets/dept_walkthrough/SIH-2025-Winners.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "SIH Hackathon Winners - 2025",
      subtitle: "Congratulations to our talented 7th Semester AIML Team for winning the SIH Hackathon 2025 Grand Finale!",
      image: "/assets/dept_walkthrough/SIH-Batch-2025.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "SIH Hackathon Winners - 2025",
      subtitle: "Congratulations to our talented 7th Semester AIML Team for winning the SIH Hackathon 2025 Grand Finale!",
      image: "/assets/dept_walkthrough/SIH-Batch-2025%282%29.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Ignitron - Hackathon Winners",
      subtitle: "Showcasing Innovation, Creativity, and Technical Excellence",
      description: "Our talented students emerged as winners in the Ignitron Hackathon, demonstrating exceptional problem-solving skills, teamwork, and innovation. Their project stood out for its practical application of emerging technologies and impactful solutions addressing real-world challenges.",
      image: "/assets/dept_walkthrough/ignitron.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Srishti 2025 - Hackathon Winners",
      subtitle: "Celebrating Innovation and Team Excellence",
      description: "Our students proudly received their award at Srishti 2025 for their outstanding performance in the hackathon. This achievement highlights their creativity, technical expertise, and teamwork in developing impactful solutions to real-world challenges.",
      image: "/assets/dept_walkthrough/srishti.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Smart India Hackathon - Winners",
      subtitle: "Innovating Solutions for a Better Tomorrow",
      image: "/assets/dept_walkthrough/SIH-2025.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "GMU Idol 2026 – Champions of Excellence",
      subtitle: "A proud moment for the AIML Department as Sathvikananda BM secured First Prize and Prerana V Kodag earned Second Prize, representing 4th Sem AIML at GMU Idol 2026.",
      image: "/assets/MemoryPics/GMU-IDOL-2026.png",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Kannada Kala Vaibhava - 2025",
      subtitle: "A festive blend of tradition, art, and student creativity.",
      description: "Annual cultural extravaganza featuring student designers and models in a dazzling display of creativity",
      image: "/assets/dept_walkthrough/KannadaIMG-2025.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Student Farewell",
      subtitle: "Bidding Adieu with Memories and Gratitude",
      image: "/assets/dept_walkthrough/std-farewell.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
     {
      title: "Forum Inauguration - 2025",
      subtitle: "A New Beginning for Collaboration and Growth",
      description: "The Department proudly inaugurated its Forum for 2025, marking the start of a new chapter focused on innovation, student leadership, and collaborative learning. The event brought together faculty and students to celebrate upcoming initiatives, technical activities, and opportunities designed to enhance academic and professional development.",
      image: '/assets/dept_walkthrough/Forum-inaguration-2025.JPG',
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Srishti 2025 - Hackathon Winners",
      subtitle: "Celebrating Innovation and Team Excellence",
      image: "/assets/dept_walkthrough/Srishti2.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Hackathon - Winners",
      subtitle: "Fueling Innovation Through Collaborative Challenges",
      image: "/assets/dept_walkthrough/slide7.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Workshop",
      subtitle: "Hands-on Learning Through Expert-Led Sessions",
      image: "/assets/dept_walkthrough/Workshop-2025.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Kannada Kala Vibhava - 2024",
      subtitle: "Celebrating the Essence of Kannada Culture and Heritage",
      image: "/assets/dept_walkthrough/kannada-kala-vhibava.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Focused Minds in Action",
      subtitle: "Students Immersed in Knowledge and Focused Learning",
      image: "/assets/dept_walkthrough/workshop.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Internship Journeys of Innovation",
      subtitle: "Gaining Real-World Experience",
      image: "/assets/dept_walkthrough/slide2.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Inauguration Function",
      subtitle: "Marking the Beginning of Innovation and Excellence",
      image: "/assets/dept_walkthrough/slide4.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "IoT Project Exhibition",
      subtitle: "Showcasing Innovation and Technical Excellence by Students",
      image: "/assets/dept_walkthrough/Project%20Exhibition.png",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Open Day 2025",
      subtitle: "Campus Tour and Academic Showcase for PU Students by AIML Faculty",
      image: "/assets/dept_walkthrough/OpenDay-2025.png",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Library",
      subtitle: "A Hub of Knowledge, Research, and Learning Resources",
      image: "/assets/images/gmu-library.png",
      fallbackGradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "AIML Lab",
      subtitle: "Where Innovation Meets Practical Learning",
      image: "/assets/images/lab.jpg",
      fallbackGradient: "from-primary-dark to-primary"
    },
    {
      title: "Hackathon - Winners",
      subtitle: "Innovate, Compete, and Collaborate",
      image: "/assets/images/jain.jpg",
      fallbackGradient: "from-primary to-accent"
    },
    {
      title: "Kannada Kala Vibhava - 2024",
      subtitle: "Celebrating Culture, Dance, and Tradition",
      image: "/assets/dept_walkthrough/kannada.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Spark Event - 2025",
      subtitle: "Igniting Creativity and Inspiring Young Innovators",
      image: "/assets/gallary/spark-event.jpg",
      fallbackGradient: "from-purple-600 to-pink-600"
    }
  ];

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setTimeout(() => {
      setImageErrors((prev) => ({ ...prev, [index]: true }));
    }, 200);
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <section
      id="department-overview"
      ref={sectionRef}
      className="bg-gradient-to-br from-white to-primary-light/20 relative overflow-hidden min-h-screen"
    >
      {/* SLIDER */}
      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          className="h-full"
        >
          <div className="custom-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"></div>

          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative h-full bg-gradient-to-r ${
                  imageErrors[index] ? slide.fallbackGradient : "from-gray-800/80"
                } text-white`}
              >
                {!imageErrors[index] && (
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                )}

                {imageErrors[index] && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.fallbackGradient}`} />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

                <div className="relative z-10 h-full flex items-end justify-center pb-16">
                  <div className="max-w-4xl mx-auto text-center px-4">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                      {slide.title}
                    </h3>
                    <p className="text-xl md:text-3xl lg:text-4xl font-light opacity-90 drop-shadow-md">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Section - Welcome and Video */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Left Column - Welcome Section */}
          <div className="lg:col-span-2 w-full">
            <div className="pt-4 lg:pt-6">
              <div className="welcome-container bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-primary/10 w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mb-4">
                  <div className="w-30 h-30 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0">
                    <img 
                      src="https://gmit.irins.org/profile_images/238110.jpg" 
                      alt="Dr. Asha K" 
                      className='h-28 w-30 sm:h-18 sm:w-20 rounded-full object-cover' 
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-2">
                      Welcome to the Department
                    </h3>
                    <p className="text-lg font-medium">Dr. Asha K</p>
                    <p className="text-gray-700">Head, Dept of AIML</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 my-4 w-full" />
                <div className="mt-4">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
                    Welcome to the Department of Artificial Intelligence and Machine Learning at GM University.<br />
                    It gives me great pleasure to welcome all students, parents, and visitors to our department.
                    We are committed to creating an inspiring environment that encourages innovation and learning.<br />
                    Our aim is to prepare students with strong technical knowledge and creative thinking skills.
                    Our faculty members guide and mentor students with care and dedication.
                    We believe in learning through practical experience, teamwork, and research.
                    Students are encouraged to take part in projects, hackathons, and technical activities.
                    We also focus on developing communication and leadership qualities.<br />
                    Every learner here is motivated to think independently and achieve their goals.
                    Our department values discipline, curiosity, and collaboration.
                    We take pride in our students' achievements and their contribution to society.
                    The future belongs to those who learn, adapt, and innovate.
                    I welcome you all to be a part of this exciting journey.<br />
                    Together, let us learn, grow, and create a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Department Walkthrough Video */}
          <div className="lg:col-span-2 h-full">
            <div className="relative group h-full pt-8"> {/* Added pt-8 for top padding */}
              <div 
                className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary-light rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: '100%', minHeight: '500px' }}
              >
                <video
                  className="w-full h-full object-cover"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  onError={(e) => console.error('Video error:', e)}
                  onClick={(e) => {
                    const video = e.target;
                    video.paused ? video.play() : video.pause();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <source src="/assets/dept_walkthrough/dept-Trim.mp4" type="video/mp4" />
                  <source src="/assets/images/ai-heart.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentOverview;