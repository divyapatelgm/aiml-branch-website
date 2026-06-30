import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

// Import event videos
// const dandiyaVideo = '/assets/gallary/Dandiya-activity.mp4';
// const rampWalkVideo = '/assets/gallary/mallika-activity.mp4';

// Helper: detect if a URL is a video
const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

const CampusEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: 'Team AQUA Secures 1st Place at Ideathon 2026',
      description: 'Team AQUA achieved 1st place at Ideathon 2026 for their innovative ideas and exceptional teamwork. The team members from AIML and ECE departments showcased creativity, technical excellence, and problem-solving skills during the competition.',
      date: 'May 22, 2026',
      location: 'GM University',
      image: '/assets/achievements/ideadthon_AQUA_2026.jpeg',
      category: 'Innovation & Hackathon',
    },  
    {
      title: 'Celebrating Excellence at GMU Idol 2026',
      description: 'Sathvikananda BM secured First Prize with a cash award of ₹10,000, while Prerana V Kodag achieved Second Prize with ₹7,500 at the 4th GMIT GMU Idol 2026 competition.',
      date: 'April 4, 2026',
      location: 'GM University',
      image: '/assets/MemoryPics/GMU-IDOL-2026.png',
      category: 'Cultural',
    },
    {
      title: 'Proud Moment of Victory at the National Innovation Stage',
      description: 'Our AIML 7th Sem team showcased outstanding innovation and secured national recognition at the Smart India Hackathon 2025.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/1SIH-2025.jpg',
      category: 'Technical',
    },
    {
      title: 'SIH 2025 Victory Secured',
      description: 'AIML innovators delivered an exceptional solution, earning a proud win at the SIH 2025 Grand Finale.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/2SIH-2025.jpg',
      category: 'Technical',
    },
    {
      title: 'SIH Hackathon 2025 – Grand Finale Winners',
      description: 'A stellar performance by our AIML students as they emerge winners at the SIH 2025 Grand Finale.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/8SIH-2025.jpg',
      category: 'Technical',
    },
    {
      title: 'A Triumph of Creativity, Technology, and Teamwork',
      description:
        'A proud achievement for the AIML Department as our 7th Semester team wins the Smart India Hackathon 2025 Grand Finale with their innovation and dedication.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/7SIH-2025.jpg',
      category: 'Technical',
    },
     {
      title: 'SIH Hackathon 2025 – Grand Finale Winners',
      description: 'A stellar performance by our AIML students as they emerge winners at the SIH 2025 Grand Finale.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/5SIH-2025.jpg',
      category: 'Technical',
    },
    {
      title: 'SIH Hackathon 2025 – Grand Finale Winners',
      description: 'A stellar performance by our AIML students as they emerge winners at the SIH 2025 Grand Finale.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/3SIH-2025.jpg',
      category: 'Technical',
    },
    {
      title: 'A Triumph of Creativity, Technology, and Teamwork',
      description:
        'A proud achievement for the AIML Department as our 7th Semester team wins the Smart India Hackathon 2025 Grand Finale with their innovation and dedication.',
      date: 'December 09, 2025',
      location: 'Chennai',
      image: '/assets/MemoryPics/6SIH-2025.jpg',
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon - Presentation",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      video: "./assets/Video/SIH-2025-Winners1.mp4",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon - Presentation",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      video: "./assets/Video/SIH-2025-Winners2.mp4",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon - Presentation",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      video: "./assets/Video/SIH-2025-Winners3.mp4",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon - Winning Journey",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
      date: 'December 09, 2025',
      location: 'Chennai',
      video: "./assets/Video/SIH-2025-Winners.mp4",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon Winning Speech",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      video: "./assets/Video/SIH-2025.mp4",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon Winners",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      image: "/assets/MemoryPics/10SIH-2025.jpg",  
      category: 'Technical',
    },
    { 
      title: "SIH Hackathon Winners",
      description: "",
      date: 'December 09, 2025',
      location: 'Chennai',
      image: "/assets/MemoryPics/11SIH-2025.jpg",  
      category: 'Technical',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Department Glory Wall
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Exciting activities that bring our community together
          </p> */}
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Carousel Container */}
          <div className="relative h-[600px] rounded-[60px_20px_60px_20px] overflow-hidden shadow-2xl">
            {events.map((event, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Media Background */}
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : isVideo(event.video) ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={event.video} />
                  </video>
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No media available</span>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div className="max-w-3xl">
                    {/* Category Badge */}
                    <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                      {event.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 hover-glitch">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="bg-primary/80 p-2 rounded-full">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-accent/80 p-2 rounded-full">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">{event.location}</span>
                      </div>
                    </div>

                    {/* CTA Button (optional) */}
                    {/* <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-accent transform hover:scale-110 transition-all duration-300 shadow-lg hover-neon">
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide ? 'w-12 h-3 bg-accent' : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Decorative Frame */}
          <div className="absolute -inset-4 border-4 border-accent/30 rounded-[70px_30px_70px_30px] -z-10 pointer-events-none"></div>
        </div>

       
      </div>
    </section>
  );
};

export default CampusEvents;
