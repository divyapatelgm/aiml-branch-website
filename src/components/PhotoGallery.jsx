import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotoGallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };

  // Gallery data
  const galleryItems = [

    {
      carouselItems: [
        {
          src: "/assets/gallary/lecture.jpg",
          type: "image",
          title: "Lecture - Professor Delivering a Lecture"
        },
        {
          src: "/assets/gallary/cad-software.jpg",
          type: "image",
          title: "Students Classroom Environment"
        }
      ],
      type: "carousel",
      title: "Students Classroom Environment"
    },

    { src: "/assets/gallary/laboratory.jpg", type: "image", title: "Laboratory - Student Performing a Test" },

    {
      carouselItems: [
        {
          src: "/assets/gallary/workshop.jpg",
          type: "image",
          title: "Workshop – Student Engaged in Hands-On Session"
        },
        {
          src: "/assets/gallary/workshop2.jpg",
          type: "image",
          title: "Workshop – Additional Session View"
        }
      ],
      type: "carousel",
      title: "Workshop – Student Engaged in Hands-On Session"
    },
    {
      carouselItems: [
        {
          src: "/assets/gallary/project-learning.jpg",
          type: "image",
          title: "Project Based Learning - Student Group"
        },
        {
          src: "/assets/gallary/project-learning2.png",
          type: "image",
          title: "Project Based Learning - Student Group"
        },
        {
          src: "/assets/gallary/project-learning3.png",
          type: "image",
          title: "Project Based Learning - Student Group"
        }
      ],
      type: "carousel",
      title: "Project Based Learning - Student Group"
    },
    { src: "/assets/gallary/batch2026.png", type: "image", title: "Alumini Batch" },
    { src: "/assets/gallary/final-project.jpg", type: "image", title: "Students Working on Final Year Project" },
    { src: "/assets/gallary/ignitron.jpg", type: "image", title: "Hackathon - Ignitron" },
    { src: "/assets/gallary/presentation.jpg", type: "image", title: "Students Making a Presentation" },
    { src: "/assets/gallary/parents-meet.jpg", type: "image", title: "Students-Parents Meet" },
    { src: "/assets/gallary/internship.jpg", type: "image", title: "Student Internship" },
    { src: "/assets/gallary/industry-visit.png", type: "image", title: "Industry Visits" },
    { src: "/assets/gallary/drone_workshop-2026.mp4", type: "video", title: "Drone Workshop - 2026" },

    { src: "/assets/gallary/immersion-program.jpg", type: "image", title: "Immersion Program and Study Abroad" },

    { src: "/assets/gallary/department-conference.jpg", type: "image", title: "Group Discussion" },
    { src: "/assets/gallary/innovation-design.jpg", type: "image", title: "Innovation, Design Thinking and Product Development" },
    { src: "/assets/gallary/life-skills.jpg", type: "image", title: "Life Skills Training" },
    { src: "/assets/gallary/placement-training.jpg", type: "image", title: "Placement Training" },
    {
      src: "/assets/gallary/National-Conference-2025.mp4",
      type: "video",
      title: "National Conference 2025"
    },
    { src: "/assets/gallary/yoga-gym.png", type: "image", title: "Yoga and Gymnasium with Students" },
    { src: "/assets/gallary/sports-activity.jpg", type: "image", title: "Sports Activity - GM League Matches" },
    {
      src: "/assets/gallary/mallika-activity.mp4",
      type: "video",
      title: "Mallika - 2025"
    },
    {
      carouselItems: [
        {
          src: "/assets/gallary/mallika-award.jpg",
          type: "image",
          title: "Mallika Awards - 2025"
        },
        {
          src: "/assets/achievements/Sanjana_K_vtu_rank.jpeg",
          type: "image",
          title: "Mallika Awards - 2026"
        }
      ],
      type: "carousel",
      title: "Mallika Awards",
    },
    { src: "/assets/gallary/kannada2.jpg", type: "image", title: "Kannada Kala Vaibhava - 2024" },
    {
      src: "/assets/gallary/Dandiya-activity.mp4",
      type: "video",
      title: "Dandiya Nights"
    },
    { src: "/assets/gallary/spark-event.jpg", type: "image", title: "Spark Event - 2025" },
    {
      src: "/assets/gallary/Kannada-2025.mp4",
      type: "video",
      title: "Kannada Kala Vaibhava - 2025"
    },
    {
      carouselItems: [
        {
          src: "/assets/gallary/idea_lab_inaguration.png",
          type: "image",
          title: "Idea Lab Inaguration"
        },
        {
          src: "/assets/gallary/inaguration3.png",
          type: "image",
          title: "Idea Lab Inaguration"
        },
        {
          src: "/assets/gallary/Forum-inaguration-2025.JPG",
          type: "image",
          title: "Forum Inaguration"
        }
      ],
      type: "carousel",
      title: "Inauguration Ceremony",
    },
    {
      carouselItems: [
        {
          src: "/assets/gallary/KannadaIMG-2025.jpg",
          type: "image",
          title: "Kannada Kala Vaibhava - 2025"
        },
        {
          src: "/assets/gallary/KannadaIMG2-2025.jpg",
          type: "image",
          title: "Kannada Kala Vaibhava - 2025"
        },
        {
          src: "/assets/gallary/KannadaIMG3-2025.jpg",
          type: "image",
          title: "Kannada Kala Vaibhava - 2025"
        },
        {
          src: "/assets/gallary/KannadaIMG4-2025.jpg",
          type: "image",
          title: "Kannada Kala Vaibhava - 2025"
        },
      ],
      type: "carousel",
      title: "Kannada Kala Vaibhava - 2025",
    },

  ].map((item) => (!item.carouselItems ? { ...item, carouselItems: [item] } : item));

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            The Creative Lens
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Every Frame Tells a Story of Innovation
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-xl bg-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Media */}
              <div className="h-64 w-full overflow-hidden aspect-square">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : item.type === "carousel" ? (
                  <Slider {...settings} className="w-full h-full">
                    {item.carouselItems.map((sub, idx) => (
                      <div key={idx} className="h-64 w-full">
                        <img
                          src={sub.src}
                          alt={sub.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight pb-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div
              onClick={() => navigate('/videos')}
              className="inline-block bg-gradient-to-r from-primary to-accent p-1 rounded-full cursor-pointer active:scale-95 transition-all duration-300"
            >
              <div className="bg-white rounded-full px-8 py-4 hover:bg-gray-50 transition-colors duration-300">
                <p className="text-primary-dark font-semibold text-lg">
                  Immerse yourself in GM University's AI & ML excellence through our visual journey
                </p>
              </div>
            </div>

            <div
              onClick={() => navigate('/memory-pics')}
              className="inline-block bg-gradient-to-r from-accent to-primary p-1 rounded-full cursor-pointer active:scale-95 transition-all duration-300"
            >
              <div className="bg-white rounded-full px-8 py-4 hover:bg-gray-50 transition-colors duration-300">
                <p className="text-primary-dark font-semibold text-lg">
                  Dive Into Memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}