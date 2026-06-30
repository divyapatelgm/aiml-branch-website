import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Download, Share2, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MemoryPics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Memory pics sections data - easily add new sections here
  const memorySections = [
    {
      title: 'VTU Rank Holders Honored at Mallika Awards',
      images: [
        {
          src: '/assets/gallary/mallika-award.jpg',
          title: "Mallika Awards - 2025",
          category: 'MALLIKA',
        },
        {
          src: '/assets/achievements/Sanjana_K_vtu_rank.jpeg',
          title: "Mallika Awards - 2026",
          category: 'MALLIKA',
        },
      ]
    },
    {
      title: 'Btach 2026 farewell',
      images: [
        {
          src: '/assets/MemoryPics/batch2026.png',
          title: "Farewell - Batch 2026",
          category: 'Farewell',
        },
        {
          src: '/assets/MemoryPics/batch2026_1.png',
          title: "Farewell - Batch 2026",
          category: 'Farewell',
        },
        {
          src: '/assets/MemoryPics/batch2026_2.png',
          title: "Farewell - Batch 2026",
          category: 'Farewell',
        },
        {
          src: '/assets/MemoryPics/batch2026_3.png',
          title: "Farewell - Batch 2026",
          category: 'Farewell',
        },
      ]
    },
    {
      title: 'GMU Idol - 2026',
      images: [
        {
          src: '/assets/MemoryPics/GMU-IDOL-2026.png',
          title: "GMU Idol 2026 – Winner & Runner-Up",
          category: 'GMU',
          date: '2026'
        },
        {
          src: '/assets/MemoryPics/gm-idol1-2026.png',
          title: "GMU Idol 2026 – Winner & Runner-Up",
          category: 'GMU',
          date: '2026'
        },
        {
          src: '/assets/MemoryPics/gm-idol2-2026.png',
          title: "GMU Idol 2026 – Winner",
          category: 'GMU',
          date: '2026'
        },
        {
          src: '/assets/MemoryPics/gm-idol3-2026.png',
          title: "GMU Idol 2026 – Winner",
          category: 'GMU',
          date: '2026'
        },
      ]
    },
    {
      title: 'SIH Winners - 2025',
      images: [
        {
          src: '/assets/MemoryPics/1SIH-2025.jpg',
          title: 'SIH 2025 – Winners at Grand Finale Stage',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/2SIH-2025.jpg',
          title: 'SIH 2025 – Winners',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/3SIH-2025.jpg',
          title: 'SIH 2025 – Winners',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/4SIH-2025.jpg',
          title: 'SIH 2025 – Winners with Faculty and Management',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/5SIH-2025.jpg',
          title: 'SIH 2025 – Winners with Faculty and Management',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/6SIH-2025.jpg',
          title: 'SIH 2025 – Winners with Faculty and Management',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/7SIH-2025.jpg',
          title: 'SIH 2025 – Awarded Winning Team',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/8SIH-2025.jpg',
          title: 'SIH 2025 – Winners Returning After Victory',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/9SIH-2025.jpg',
          title: 'SIH Winners 2025 – Returning Moment',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/10SIH-2025.jpg',
          title: 'Media Recognition of SIH 2025 Winning Team',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/11SIH-2025.jpg',
          title: 'Newspaper Coverage Highlighting SIH 2025 Winners',
          category: 'SIH',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/12SIH-2025.jpg',
          title: 'Public Acknowledgement of SIH 2025 Winners Through Media',
          category: 'SIH',
          date: '2025'
        }
      ]
    },
    {
      title: 'Kannada Kala Vaibhava',
      images: [
        {
          src: '/assets/MemoryPics/KannadaIMG-2025.jpg',
          title: 'A vibrant celebration of Kannada culture and tradition',
          category: 'Cultural',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/KannadaIMG2-2025.jpg',
          title: 'Recognition of excellence in cultural activities',
          category: 'Cultural',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/KannadaIMG3-2025.jpg',
          title: 'Kannada Kala Vaibhava - 2025',
          category: 'Cultural',
          date: '2025'
        },
        {
          src: '/assets/MemoryPics/KannadaIMG4-2025.jpg',
          title: 'Traditional performances showcasing our rich heritage',
          category: 'Cultural',
          date: '2025'
        }
      ]
    }
    // Add new sections here - just add a new object with title and images array
  ];

  const toggleLike = (imageIndex) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageIndex)) {
        newSet.delete(imageIndex);
      } else {
        newSet.add(imageIndex);
      }
      return newSet;
    });
  };

  const shareImage = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.origin + image.src
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.origin + image.src);
      alert('Image link copied to clipboard!');
    }
  };

  const downloadImage = (image) => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-br from-primary-light/10 to-accent/10 py-20">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-primary-dark hover:text-primary transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back</span>
        </button>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Dive Into Memories
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Relive the precious moments that define our journey
          </p>
        </div>

        {/* Dynamic Sections */}
        {memorySections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4">
                {section.title}
              </h2>
            </div>

            {/* Section Gallery */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${sectionIndex < memorySections.length - 1 ? 'mb-12' : ''}`}>
              {section.images.map((image, imageIndex) => (
                <div
                  key={`${sectionIndex}-${imageIndex}`}
                  className="relative group rounded-2xl overflow-hidden shadow-xl bg-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Media */}
                  <div className="h-64 w-full overflow-hidden aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight pb-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                ×
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoryPics;