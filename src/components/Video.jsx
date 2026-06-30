import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Video() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Close video when clicking outside the video
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  // Video data
  const videoItems = [
    {
      src: "./assets/Video/drone_workshop-2026.mp4",
      title: "2-Day Hands-On Drone Workshop – Highlights",
      description: "Experience the key moments from the 2-Day Hands-On Drone Workshop at GM University, where students explored quadcopter design, drone assembly, flight training, and real-time UAV applications through immersive practical sessions."
    },
    {
      src: "./assets/Video/gmu-idol-2026.mp4",
      title: "GM University IDOL 2026 – Winning Highlights",
      description: "A memorable glimpse of the GM University IDOL 2026 celebration showcasing stage presentations, recognition moments, and the vibrant spirit of the university community."
    },
    { 
      src: "./assets/Video/OpenDayVideo.mp4",
      title: "Open Day 2026 – AIML Innovation Showcase",
      description: "An insight into the innovative IoT projects presented by 3rd Semester AIML students during the Open Day at GM University"
    },
    { 
      src: "./assets/Video/SIH-2025-Winners.mp4", 
      title: "SIH Hackathon - Winning Journey",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
    },
    { 
      src: "./assets/Video/SIH-2025.mp4", 
      title: "SIH Hackathon - Winning Speech",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
    },
    { 
      src: "./assets/Video/SIH-2025-Winners1.mp4", 
      title: "SIH Hackathon - Presentation ",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
    },
    { 
      src: "./assets/Video/SIH-2025-Winners2.mp4", 
      title: "SIH Hackathon - Presentation",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
    },
    { 
      src: "./assets/Video/SIH-2025-Winners3.mp4", 
      title: "SIH Hackathon - Presentation",
      description: "A glimpse into our team's inspiring journey to victory at the SIH Hackathon 2025 Grand Finale.",
    },
    { 
      src: "./assets/Video/National-Conference-2025.mp4", 
      title: "National Conference 2025",
      description: "Highlights from our annual national conference featuring industry experts and student presentations."
    },
    {
        src: "./assets/Video/Portal-launch.mp4",
        title: "Lakshya Portal Launch",
        description: "Highlights from the official launch of the Lakshya Placement Portal developed by AIML students of GM University."
    },
    {
        src: "./assets/Video/CreativePrototype.mp4",
        title: "Creative Prototype Challenge by Ist sem AIML GMU Students",
        description: "Innovative prototypes built by 1st Semester AIML students using waste and recyclable materials."
    },
    { 
      src: "./assets/Video/JNNCE_2025.mp4", 
      title: "UI/UX Design Competition – Winning Moment (2025)",
      description: "A proud moment as our 5th Semester GM University student secures 1st place in the UI/UX Design event at JNNCE, Shivamogga."
    },
    { 
      src: "./assets/Video/KKV1-2025.mp4", 
      title: "Kannada Kala Vaibhava - 2025",
      description: "Celebration of Kannada culture through various art forms and performances."
    },
    { 
      src: "./assets/Video/KKV2-2025.mp4", 
      title: "Kannada Kala Vaibhava - Part 2",
      description: "More highlights from our Kannada cultural festival showcasing traditional performances."
    },
    { 
      src: "./assets/Video/KKV4-Winning-2025.mp4", 
      title: "AIML Department Victory Announcement – 2025",
      description: "A proud moment as AIML is announced as the winning department at Kannada Kala Vaibhava 2025."
    },
    { 
      src: "./assets/Video/KKV3-2025.mp4", 
      title: "Kannada Kala Vaibhava – Victory Celebration (2025)",
      description: "A heartwarming celebration led by AIML students and faculties after being announced winners at Kannada Kala Vaibhava."
    },
    { 
      src: "./assets/Video/Dandiya-activity.mp4", 
      title: "Dandiya Nights",
      description: "Vibrant celebration of Navratri with traditional Garba and Dandiya performances."
    },
    { 
      src: "./assets/Video/mallika-activity.mp4", 
      title: "Mallika - 2025",
      description: "Cultural fest highlights showcasing student talent in music, dance, and drama."
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative">
      {/* Video Player Overlay */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={selectedVideo}
              className="w-full rounded-lg shadow-2xl aspect-video"
              controls
              autoPlay
              controlsList="nodownload"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-primary-dark hover:text-primary transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back</span>
        </button>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Video Gallery
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Experience our department's vibrant moments and achievements
          </p>
        </div>

        <div className="[perspective:1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {videoItems.map((video, index) => (
                <div
                key={index}
                onClick={() => openVideo(video.src)}
                className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group
                            transform-gpu [transform-style:preserve-3d]
                            transition-transform duration-500 hover:-translate-y-2 hover:-rotate-[1.5deg] hover:shadow-2xl"
                >
                {/* Left gradient accent bar */}
                <span className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></span>

                {/* Video */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                    <video
                    src={video.src}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    style={{ minHeight: '180px' }}
                    />
                </div>

                {/* Text content */}
                <div className="p-6 pl-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-dark transition-colors">
                    {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                    {video.description}
                    </p>
                </div>
                </div>
            ))}
        </div>



      </div>
    </section>
  );
}