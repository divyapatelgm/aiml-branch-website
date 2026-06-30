import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, ExternalLink } from 'lucide-react';

const UPDATES_DATA = [
  {
    id: 7,
    title: "Founder's Day 2026",
    category: "Competition",
    date: "June 22 - 23, 2026",
    image: "/assets/GMU_UPDATES/gmu_foundation.png",
    badgeColor: "from-pink-500 to-rose-600"
  },
  {
    id: 6,
    title: "Founder's Day 2026",
    category: "Competition",
    date: "June 22 - 23, 2026",
    image: "/assets/GMU_UPDATES/gmu_foundation1.png",
    badgeColor: "from-pink-500 to-rose-600"
  },
  {
    id: 5,
    title: "Founder's Day 2026",
    category: "Competition",
    date: "June 22 - 23, 2026",
    image: "/assets/GMU_UPDATES/gmu_foundation3.png",
    badgeColor: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    title: "Pitch Your Idea Competition",
    category: "Competition",
    date: "June 22 - 23, 2026",
    image: "/assets/GMU_UPDATES/pitch_ur_idea.png",
    badgeColor: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "Intel Unnati AI Lab Inauguration",
    category: "Inauguration",
    date: "June 5, 2026",
    image: "/assets/GMU_UPDATES/intel_unnati_inaguration.png",
    badgeColor: "from-teal-500 to-emerald-600"
  },
  {
    id: 2,
    title: "IDEA Lab Inauguration Ceremony",
    category: "Inauguration",
    date: "June 25, 2026",
    image: "/assets/GMU_UPDATES/idea_lab_inaguration.png",
    badgeColor: "from-orange-500 to-amber-600"
  },
  {
    id: 1,
    title: "Drone Development & Piloting Workshop",
    category: "Workshop",
    date: "May 18 - May 19, 2026",
    image: "/assets/GMU_UPDATES/drone_workshop.png",
    badgeColor: "from-blue-500 to-indigo-600"
  },
];

const GmuUpdates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef(null);

  const length = UPDATES_DATA.length;

  const startAutoplay = () => {
    stopAutoplay();
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % length);
      }, 2500);
    }
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex, isAutoplay]);

  const handlePrev = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  const handleNext = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev + 1) % length);
  };

  return (
    <section id="gmu-updates" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">

      {/* Premium Backdrop Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto ">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>GMU Updates & Events</span>
          </div> */}
          <h2 className="text-xl md:text-4xl font-extrabold text-slate-800 font-heading tracking-tight ">
            GMU Updates & Events
          </h2>
        </div>

        {/* Highlighted Carousel Viewport */}
        <div
          className="relative px-2 md:px-12"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Centered Track Wrapper */}
          <div className="overflow-hidden py-10 relative flex justify-center items-center">
            {/* The Outer Slider Viewport */}
            <div className="relative w-full h-[200px] sm:h-[480px] md:h-[400px] flex items-center justify-center">

              {UPDATES_DATA.map((item, index) => {
                // Calculate relative position to active index
                // Since it's a loop, we find the shortest distance
                let diff = index - activeIndex;
                if (diff < -1 && length > 2) diff += length;
                if (diff > 1 && length > 2) diff -= length;

                const isActive = index === activeIndex;
                const isPrev = diff === -1 || (index === length - 1 && activeIndex === 0 && length === 2);
                const isNext = diff === 1 || (index === 0 && activeIndex === length - 1 && length === 2);

                // If it's not active, prev, or next, hide it
                const isVisible = isActive || isPrev || isNext;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (isActive) {
                        setSelectedImage(item);
                      } else {
                        stopAutoplay();
                        setActiveIndex(index);
                      }
                    }}
                    className={`absolute w-[88%] sm:w-[78%] md:w-[70%] lg:w-[65%] h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 ease-out shadow-lg border border-slate-200/50 ${isActive
                      ? 'z-30 scale-100 opacity-100 translate-x-0 shadow-2xl border-primary/20 ring-4 ring-primary/5'
                      : isPrev
                        ? 'z-20 -translate-x-[52%] sm:-translate-x-[44%] md:-translate-x-[46%] scale-85 opacity-20 blur-[2px] pointer-events-auto hover:opacity-40'
                        : isNext
                          ? 'z-20 translate-x-[52%] sm:translate-x-[44%] md:translate-x-[46%] scale-85 opacity-20 blur-[2px] pointer-events-auto hover:opacity-40'
                          : 'opacity-0 scale-75 z-10 pointer-events-none'
                      }`}
                  >
                    {/* Blurred Background to fill empty spaces elegantly */}
                    <div className="absolute inset-0 blur-xl scale-110 opacity-15 select-none pointer-events-none">
                      <img
                        src={item.image}
                        alt="background blur"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Centered Image Fitted to Card */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="relative z-10 w-full h-full object-contain select-none"
                    />
                  </div>
                );
              })}

            </div>
          </div>

          {/* Sleek Floating Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white hover:bg-primary hover:text-white text-slate-700 rounded-full shadow-xl border border-slate-200/80 transition-all duration-300 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white hover:bg-primary hover:text-white text-slate-700 rounded-full shadow-xl border border-slate-200/80 transition-all duration-300 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Indicators / Dots */}
          <div className="flex justify-center gap-2.5 mt-4">
            {UPDATES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopAutoplay();
                  setActiveIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Expanded View Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-slate-900/60 hover:bg-slate-950 text-white rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Pure Lightbox Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default GmuUpdates;
