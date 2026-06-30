import React from 'react';
import { useInView } from 'react-intersection-observer';

const CampusVideos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videos = [
    {
      id: 1,
      title: 'Campus Tour',
      url: 'https://www.youtube.com/watch?v=HPiSuT-ubLI',
      thumbnail: 'https://img.youtube.com/vi/HPiSuT-ubLI/hqdefault.jpg'
    },
    {
      id: 2,
      title: 'Student Life',
      url: 'https://www.youtube.com/watch?v=ybTbIlKgWlY',
      thumbnail: 'https://img.youtube.com/vi/ybTbIlKgWlY/hqdefault.jpg'
    },
    {
      id: 3,
      title: 'Academic Excellence',
      url: 'https://www.youtube.com/watch?v=kwIRPM-UlQQ',
      thumbnail: 'https://img.youtube.com/vi/kwIRPM-UlQQ/hqdefault.jpg'
    },
    {
      id: 4,
      title: 'Campus Events',
      url: 'https://www.youtube.com/watch?v=leiMlvSX1V8&t=1s',
      thumbnail: 'https://img.youtube.com/vi/leiMlvSX1V8/hqdefault.jpg'
    },
    {
      id: 5,
      title: 'Admission Open',
      url: 'https://www.youtube.com/watch?v=weQ-llwcdBI',
      thumbnail: 'https://i3.ytimg.com/vi/weQ-llwcdBI/hqdefault.jpg'
    },
  ];

  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Experience Our Campus in Motion
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Step Into the Rhythm of Our Campus Life </p>
        </div>

        <div className={`marquee-container py-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-marquee whitespace-nowrap">
            {[...videos, ...videos].map((video, index) => (
              <div key={`${video.id}-${index}`} className="inline-block mx-4">
                <div className="relative group w-90">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[40px_10px_40px_10px] transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                  <div
                    className="relative bg-white rounded-[40px_10px_40px_10px] overflow-hidden shadow-xl h-full hover-3d cursor-pointer"
                    onClick={() => openVideo(video.url)}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div> */}
                    </div>
                    <div className="h-4 bg-gradient-to-t from-primary-light/50 to-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusVideos;
