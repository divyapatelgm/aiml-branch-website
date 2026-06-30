import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Trophy, Award, Medal, Star, X, ChevronLeft, ChevronRight, Zap, Play, Pause } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Animation settings
  const slowDuration = 120;
  const fastDuration = 30;
  const [currentDuration, setCurrentDuration] = useState(slowDuration);

  // Animation controls
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  const moveQuicker = (row, direction) => {
    // Implement manual shift for "Move Quicker"
    // For now, we'll keep it simple as requested
  };

  // Modal handlers - simplified like Projects.jsx
  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const achievements = [
    {
      title: 'Physics Wallah Campus Ambassador - 2026',
      description: 'Selected as Physics Wallah Campus Ambassador',
      student: 'Mohammad Sultan Momin',
      icon: '🏅',
      color: 'from-primary to-accent',
      image: '/assets/achievements/Mohammed_Sultan_momin_PhysicsWallah.jpeg',
      teamMembers: [
        { name: 'Mohammad Sultan Momin', role: 'Campus Ambassador' }
      ]
    },
    {
      title: 'Team AQUA - 1st Place Winners - 2026',
      description: 'Congratulations to Team AQUA for securing 1st place with their outstanding performance and innovative ideas. The team represented AIML and ECE departments with excellence and teamwork.',
      student: 'AIML & ECE Department',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/ideadthon_AQUA_2026.jpeg',
      teamMembers: [
        { name: 'Ganesh Chaithanya U - AIML' },
        { name: 'Zainab R Quazi - ECE' },
        { name: 'Ashish Rout - AIML' },
        { name: 'Abhishek PJ - ECE' }
      ]
    },
    {
      title: 'GMU Idol 2026 – Winner & Runner-Up',
      description: 'Secured Winner and Runner-Up positions at the prestigious GMU Idol 2026 competition, showcasing outstanding talent and excellence.',
      student: 'Sathvikananda BM & Prerana V Kodag - 4th Semester',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/MemoryPics/GMU-IDOL-2026.png',
    },
    {
      title: 'SIH Hackathon - 2025 Winners',
      description: 'AIML 7th Semester students emerged as winners at the Smart India Hackathon 2025, demonstrating exceptional innovation and problem-solving skills.',
      detailedDescription: 'GMIT AIML Students Win at Smart India Hackathon (SIH) 2025 National Finals\n\nStudents of the Artificial Intelligence and Machine Learning Department at GMIT have proudly emerged as winners at the Smart India Hackathon (SIH) 2025 national finals, held at St. Joseph\'s College of Engineering, Chennai.\n\nThe team won the top position for their project "AI-Based Crop Recommendation System," designed to assist farmers by recommending suitable crops using soil, climate, and environmental data.\n\nThe winning team comprised Vruthvik R Vanjre, Sujay V, Shivakumar R Bhandari, Vinayak M Vibhutimath, Spandana A M, and Rakshitha S D.\n\nThe project was guided by Dr. Asha K., HoD, AIML, with mentorship from Dr. Nasreen Taj M. B. and Mr. Keerthi Prasad G. Support was also provided by Mr. Imran Khan, SPOC.',
      student: 'AIML Department - 7th Sem',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/SIH-2025-Winners.jpg',
      teamMembers: [
        { name: 'Sujay V' },
        { name: 'Vruthvik R Vanjre' },
        { name: 'Vinayak M Vhibhuthimath' },
        { name: 'Spandana A M' },
        { name: 'Rakshitha S' },
        { name: 'Shivakumar R Bhandari' }
      ],
      projectGuide: 'Dr Asha K',
      mentors: [
        { name: 'Mr. Keerthi Prasad G' },
        { name: 'Dr. Nasreen taj' }
      ],
    },
    {
      title: 'SIH Hackathon Finalist - 2025',
      description: 'Selected for SIH Hackathon 2025 Grand Finale. Proud achievement by 7th Semester AIML Team, representing G M Institute of Technology at National Level.',
      student: 'AIML Department - 7th Sem',
      icon: '🎯',
      color: 'from-accent to-primary',
      image: '/assets/achievements/SIH-2025.jpg',
      teamMembers: [],
      selectedStudents: [
        { name: 'Sujay V' },
        { name: 'Vruthvik R Vanjre' },
        { name: 'Vinayak M Vhibhuthimath' },
        { name: 'Spandana A M' },
        { name: 'Rakshitha S' },
        { name: 'Shivakumar R Bhandari' }
      ],
      layout: 'side-by-side'
    },
    {
      title: 'Chancellor Appreciation – Lakshya Portal (Kiran)',
      description:
        'Hon’ble Chancellor Sri G. M. Lingaraju appreciated Kiran’s contribution in developing the Lakshya Placement Portal.',
      student: 'Kiran Sindagi – 5th Sem AIML, GMU',
      icon: '📜',
      color: 'from-accent to-primary',
      image: '/assets/achievements/KiranSindagi.jpg'
    },
    {
      title: 'Chancellor Appreciation – Lakshya Portal (Aishwarya)',
      description:
        'Aishwarya was recognized by Hon’ble Chancellor for her contribution to the Lakshya Placement Portal.',
      student: 'Aishwarya – 5th Sem AIML, GMIT',
      icon: '📜',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Aishwarya.jpg'
    },
    {
      title: 'Chancellor Appreciation – Gems of Alumni (Sonal)',
      description: 'Sonal received appreciation from Hon’ble Chancellor under the Gems of Alumni category.',
      student: 'Sonal Ambekar – 5th Sem AIML, GMIT',
      icon: '💎',
      color: 'from-accent to-primary',
      image: '/assets/achievements/SonalAmbekar.jpg'
    },
    {
      title: 'Cultural Excellence Award',
      description: 'Recognized for excellence in classical and folk dance, winning multiple state and national-level competitions.',
      student: 'Praajna P',
      icon: '💃',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Praajna1.jpg',
      images: [
        '/assets/achievements/Praajna1.jpg',
        '/assets/achievements/Praajna2.jpg',
        '/assets/achievements/Praajna3.jpg',
        '/assets/achievements/Praajna4.jpg'
      ],
      teamMembers: [
        { name: 'Praajna P', role: 'Lead Performer & Classical Dancer' }
      ],
      highlights: [
        'Mallika – Bharatanatyam Performance',
        'Mallika – Group Dance (1st Prize)',
        'National Level Dance – 1st Prize Winner',
        'State Level Dance – 3rd Prize Winner',
        'State Level Folk Dance – Participant',
        'Kannada Kala Vaibhav – Group Dance (2nd Prize)'
      ]
    },
    {
      title: 'SIH Hackathon Winner - 2024',
      description: 'First place in the national Smart India Hackathon 2024',
      student: 'Team Alpha - Final Year',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/SIH.jpg',
      teamMembers: [
        { name: 'Nagaveni EB', role: 'Team Lead & Full Stack Developer' },
        { name: 'Amina Koanain', role: 'AI/ML Developer' },
        { name: 'Nooraien khan', role: 'Frontend Developer' },
        { name: 'Suhail Khan', role: 'UI/UX Designer' },
        { name: 'Shreyank Shivappa Jawai ', role: 'Backend Developer' },
        { name: 'Skanda A', role: 'Data Analyst' }
      ]
    },
    {
      title: 'State Level Exhibition Winner - 2025',
      description: 'Best Innovative Project Award',
      student: 'Team Excellence - Third Year',
      icon: '🥇',
      color: 'from-accent to-primary',
      image: '/assets/achievements/peset.jpg',
      teamMembers: [
        { name: 'Vruthvik R Vanjre', role: 'Project Lead' },
        { name: 'Sujay V', role: 'Hardware Engineer' },
        { name: 'Shivakumar R Bhandari', role: 'UI/ UX Designer' },
        { name: 'Srinivas', role: 'Research Analyst' }
      ]
    },
    {
      title: 'Winner of Hack for Hire - 2024',
      description: 'Winner in AI/ML category with smart city traffic management system',
      student: 'Team Excellence - Third Year',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/jain.jpg',
      teamMembers: [
        { name: 'Vruthvik R Vanjre', role: 'Project Lead' },
        { name: 'Sujay V', role: 'ML Engineer' },
        { name: 'Shivakumar R Bhandari', role: 'UI/ UX Designer' },
        { name: 'Vinayak M Vhibhuthimath', role: 'Mobile App Developer' }
      ]
    },
    {
      title: 'UI/UX Design Competition - 2025',
      description: 'Ist place in UI/UX Design event at JNN College of Engineering, Shivamogga',
      student: 'N. Mohammed Shoaib',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/JNNCE_2025.jpg',
      video: '/assets/achievements/JNNCE_2025.mp4',
      teamMembers: [
        { name: 'N. Mohammed Shoaib', role: 'UI/UX Designer' }
      ],
      highlights: [
        'Location: JNN College of Engineering (JNNCE), Shivamogga',
        'Dates: November 11–11, 2025',
        'Category: UI/UX Design',
        'Secured 1st place in the UI/UX Design event',
        'Received a cash prize of ₹7,000'
      ]
    },
    {
      title: 'Poster Presentation Award - 2024',
      description: '1st Runner-up in Poster Presentation',
      student: 'Divya Patel & Mahima Rao',
      icon: '🥈',
      color: 'from-accent to-primary',
      image: '/assets/achievements/div-mah.jpg',
      teamMembers: [
        { name: 'Divya Patel G M', role: 'Poster Designer' },
        { name: 'Mahima S Rao', role: 'Presenter' },
      ]
    },
    {
      title: 'Winner of Poster Presentation Competition - 2024',
      description: 'Bureau of Indian Standards Competition',
      student: 'Divya Patel & Eshwari B H - Second Year',
      icon: '🏆',
      color: 'from-accent to-primary',
      image: '/assets/achievements/bis.jpg',
      teamMembers: [
        { name: 'Divya Patel G M', role: '' },
        { name: 'Eshwari B H', role: '' },

      ]
    },
    {
      title: 'Silver Medal in NPTEL Exam - 2024',
      description: 'Achieved Silver Medal in the NPTEL online course on Cloud Computing',
      student: 'Vruthvik R Vanjre - Third Year',
      icon: '🥈',
      color: 'from-accent to-primary',
      image: '/assets/achievements/nptel_Vruthvik.jpg',
    },
    {
      title: 'Campus Mantri in Greeks for Geeks',
      description: 'Recognized as Campus Mantri for outstanding leadership and technical contributions',
      student: 'Yashwanth V S Devang- Third Year',
      icon: '👑',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Yashwanth.jpg',

    },
    {
      title: 'Google Student Ambassador',
      description: 'Selected as Google Student Ambassador for exceptional academic performance and community leadership',
      student: 'Chandrashekar H L - Third Year',
      icon: '🌟',
      color: 'from-accent to-primary',
      image: '/assets/achievements/chandrashekar.jpg',

    },
    {
      title: 'Google Student Ambassador',
      description: 'Selected as Google Student Ambassador for outstanding technical skills and leadership qualities',
      student: 'Rohan Bedare - Third Year',
      icon: '🌟',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Rohan.jpg',

    },
    {
      title: 'VTU 4th Rank Holder - 2024',
      description: 'Awarded 4th Rank by Visvesvaraya Technological University (VTU) for exceptional academic performance and consistent excellence in the B.E. program.',
      student: 'Sanjana K',
      icon: '🏅',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Sanjana_K.jpg',
      teamMembers: [
        { name: 'Sanjana K', role: '4th Rank Holder - VTU 2024' }
      ]
    },
    {
      title: 'Gold Medal Achievement',
      description: 'Honored with the prestigious Gold Medal for outstanding academic excellence and top performance in the university examinations.',
      student: 'Bhoomika G P',
      icon: '🥇',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Bhoomika_GP.jpg',
      teamMembers: [
        { name: 'Bhoomika G P', role: 'Gold Medalist - Department of Artificial Intelligence & Machine Learning' }
      ]
    },
    {
      title: 'Gold Medal - 2022 - 2023',
      description: 'Honored with the prestigious Gold Medal for outstanding academic excellence and securing top position in the university examinations.',
      student: 'Mitali Chandulal Rangani',
      icon: '🥇',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Mitali.jpg',
      teamMembers: [
        { name: 'Dhanushree B G', role: 'Gold Medalist - Department of Artificial Intelligence & Machine Learning' }
      ]
    },
    {
      title: 'Gold Medal - 2024',
      description: 'Honored with the prestigious Gold Medal for outstanding academic excellence and securing top position in the university examinations.',
      student: 'Dhanushree B G',
      icon: '🥇',
      color: 'from-accent to-primary',
      image: '/assets/achievements/Dhanushree_BG.jpg',
      teamMembers: [
        { name: 'Dhanushree B G', role: 'Gold Medalist - Department of Artificial Intelligence & Machine Learning' }
      ]
    },

  ];

  // Split achievements into 2 equal rows
  const midPoint = Math.ceil(achievements.length / 2);
  const firstRow = achievements.slice(0, midPoint);
  const secondRow = achievements.slice(midPoint);

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Student Achievements
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Celebrating excellence and innovation of our students
          </p>
        </div>

        {/* Achievements Marquee - 2 Rows */}
        <div className="space-y-12 mb-16 select-none relative group/marquee">
          {/* Row 1: Left Scroll */}
          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-dark opacity-0 group-hover/marquee:opacity-100 transition-all hover:bg-white hover:scale-110 active:scale-95"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="w-5 h-5 ml-1" /> : <Pause className="w-5 h-5" />}
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-dark opacity-0 group-hover/marquee:opacity-100 transition-all hover:bg-white hover:scale-110 active:scale-95"
              onClick={() => setCurrentDuration(currentDuration === slowDuration ? fastDuration : slowDuration)}
              title="Toggle Speed"
            >
              <ChevronRight className={`w-6 h-6 ${currentDuration === fastDuration ? 'text-accent' : ''}`} />
            </button>

            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
              className="flex gap-6 w-max items-stretch"
              initial={{ x: 0 }}
              animate={{
                x: isPaused ? undefined : "-50%"
              }}
              transition={{
                x: {
                  duration: currentDuration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              drag="x"
              dragElastic={0.05}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={() => {
                setTimeout(() => setIsPaused(false), 2000);
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((achievement, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="relative group h-full">
                    <div className={`bg-gradient-to-br ${achievement.color} rounded-[40px_10px_40px_10px] p-1 h-full`}>
                      <div className="bg-white rounded-[40px_10px_40px_10px] p-6 h-full hover-liquid cursor-pointer"
                        onClick={() => setSelectedAchievement(achievement)}>
                        <div className="text-6xl mb-4">{achievement.icon}</div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">{achievement.title}</h3>
                        <p className="text-body mb-4 leading-relaxed">{achievement.description}</p>
                        <div className="bg-primary-light/30 rounded-full px-4 py-2 inline-block">
                          <p className="text-sm font-semibold text-primary-dark">{achievement.student}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-[40px_10px_40px_10px]`}></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
              className="flex gap-6 w-max items-stretch"
              initial={{ x: "-50%" }}
              animate={{
                x: isPaused ? undefined : "0%"
              }}
              transition={{
                x: {
                  duration: currentDuration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              drag="x"
              dragElastic={0.05}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={() => {
                setTimeout(() => setIsPaused(false), 2000);
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((achievement, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="relative group h-full">
                    <div className={`bg-gradient-to-br ${achievement.color} rounded-[40px_10px_40px_10px] p-1 h-full`}>
                      <div className="bg-white rounded-[40px_10px_40px_10px] p-6 h-full hover-liquid cursor-pointer"
                        onClick={() => setSelectedAchievement(achievement)}>
                        <div className="text-6xl mb-4">{achievement.icon}</div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">{achievement.title}</h3>
                        <p className="text-body mb-4 leading-relaxed">{achievement.description}</p>
                        <div className="bg-primary-light/30 rounded-full px-4 py-2 inline-block">
                          <p className="text-sm font-semibold text-primary-dark">{achievement.student}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 rounded-[40px_10px_40px_10px]`}></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Recent Highlights */}
        {/* <div className={`transition-all duration-1000 delay-1200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-light to-accent/20 rounded-3xl p-8 md:p-12 neural-card">
            <h3 className="text-3xl font-bold text-primary-dark text-center mb-8">
              Recent Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '🎓 100% Placement',
                  description: 'Final year batch achieved 100% placement with average package of 8 LPA',
                },
                {
                  title: '🌟 Patent Filed',
                  description: '5 student projects resulted in patent applications this year',
                },
                {
                  title: '🏅 Sports Excellence',
                  description: 'Students won medals in state and national level sports competitions',
                },
                {
                  title: '🎭 Cultural Fest Winners',
                  description: 'Multiple awards in inter-college cultural and technical events',
                },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-3d cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-primary-dark mb-2">{highlight.title}</h4>
                  <p className="text-body">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className={`mt-16 text-center transition-all duration-1000 delay-1400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transform hover:scale-110 transition-all duration-300 shadow-lg">
            View All Achievements
          </button>
        </div> */}
      </div>

      {/* Achievement Image Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary-dark via-primary to-accent p-6 rounded-t-3xl flex-shrink-0">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h3>
                  <p className="text-white/80">{selectedAchievement.student}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>



            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8">
              {(() => {
                const totalAchievements = achievements.length;
                const currentIndex = achievements.findIndex(a => a.title === selectedAchievement.title);
                const isLastFourCards = currentIndex >= totalAchievements - 4;

                // In the modal rendering section, add this condition before the regular layout
                if (selectedAchievement.layout === 'side-by-side') {
                  return (
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Image on the left */}
                      <div className="md:w-1/3">
                        <div className="relative rounded-2xl overflow-hidden">
                          <img
                            src={selectedAchievement.image}
                            alt={selectedAchievement.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                            onError={(e) => {
                              e.target.src = '/assets/achievements/jain.jpg';
                            }}
                          />
                        </div>
                      </div>

                      {/* Content on the right */}
                      <div className="md:w-2/3 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-4xl">{selectedAchievement.icon}</div>
                          <div>
                            <h4 className="text-2xl font-bold text-primary-dark">{selectedAchievement.title}</h4>
                            <p className="text-primary font-medium">{selectedAchievement.student}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-body leading-relaxed text-lg mb-6 whitespace-pre-line">
                            {selectedAchievement.title === 'SIH Hackathon - 2025 Winners'
                              ? selectedAchievement.detailedDescription
                              : selectedAchievement.description}
                          </p>

                          {/* Selected Students Section */}
                          {selectedAchievement.selectedStudents && selectedAchievement.selectedStudents.length > 0 && (
                            <div className="mt-4">
                              <h5 className="text-lg font-bold text-primary-dark mb-3 flex items-center">
                                <Star className="w-5 h-5 mr-2 text-accent" />
                                Team Members
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {selectedAchievement.selectedStudents.map((student, index) => (
                                  <div
                                    key={index}
                                    className="bg-primary-light/20 rounded-xl p-3 border-l-4 border-accent flex items-center"
                                  >
                                    <div className="font-medium text-primary-dark">{student.name}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Special layout for Praajna's achievement
                if (selectedAchievement.title === 'Cultural Excellence Award') {
                  return (
                    <>
                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {selectedAchievement.images.map((img, idx) => (
                          <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={img}
                              alt={`${selectedAchievement.student} - Achievement ${idx + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = '/assets/achievements/jain.jpg';
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Achievement Info */}
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-primary-dark mb-2">
                          {selectedAchievement.title}
                        </h4>
                        <p className="text-lg text-primary font-semibold mb-6">
                          {selectedAchievement.student}
                        </p>
                        <p className="text-body leading-relaxed text-lg max-w-2xl mx-auto whitespace-pre-line">
                          {selectedAchievement.title === 'SIH Hackathon - 2025 Winners'
                            ? selectedAchievement.detailedDescription
                            : selectedAchievement.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      {selectedAchievement.highlights && selectedAchievement.highlights.length > 0 && (
                        <div className="mt-6">
                          <h5 className="text-lg font-semibold text-primary-dark mb-3 flex items-center justify-center">
                            <Award className="w-5 h-5 mr-2 text-accent" />
                            Key Achievements
                          </h5>
                          <ul className="grid gap-2">
                            {selectedAchievement.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span className="text-body">{highlight}</span>
                              </li>
                            ))}
                            <li className="mt-2 pl-5">
                              <span className="text-body font-semibold">Many More...</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  );
                }

                // Special layout for last 4 cards (gold medalists)
                if (isLastFourCards) {
                  return (
                    <>
                      {/* Circular Image */}
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-accent">
                        <img
                          src={selectedAchievement.image}
                          alt={selectedAchievement.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/assets/achievements/jain.jpg';
                          }}
                        />
                      </div>

                      {/* Achievement Info */}
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-primary-dark mb-2">
                          {selectedAchievement.title}
                        </h4>
                        <p className="text-lg text-primary font-semibold mb-6">
                          {selectedAchievement.student}
                        </p>
                        <p className="text-body leading-relaxed text-lg max-w-2xl mx-auto whitespace-pre-line">
                          {selectedAchievement.title === 'SIH Hackathon - 2025 Winners'
                            ? selectedAchievement.detailedDescription
                            : selectedAchievement.description}
                        </p>
                      </div>

                      {/* Team Members Section */}
                      {selectedAchievement.teamMembers && selectedAchievement.teamMembers.length > 0 && (
                        <div className="mt-6">
                          <h5 className="text-lg font-bold text-primary-dark mb-4 flex items-center justify-center">
                            <Star className="w-5 h-5 mr-2 text-accent" />
                            {selectedAchievement.teamMembers.length > 1 ? 'Team Members' : 'Achiever Details'}
                          </h5>
                          <div className="grid gap-3">
                            {selectedAchievement.teamMembers.map((member, index) => (
                              <div
                                key={index}
                                className="bg-primary-light/20 rounded-xl p-4 border-l-4 border-accent"
                              >
                                <h6 className="font-semibold text-primary-dark">{member.name}</h6>
                                <p className="text-sm text-primary/80">{member.role}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  );
                }

                // Regular layout for other achievements
                return (
                  <>
                    <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden mb-6">
                      <img
                        src={selectedAchievement.image}
                        alt={selectedAchievement.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/achievements/jain.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">{selectedAchievement.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-primary-dark">{selectedAchievement.title}</h4>
                          <p className="text-primary">{selectedAchievement.student}</p>
                        </div>
                      </div>

                      <p className="text-body leading-relaxed text-lg whitespace-pre-line">
                        {selectedAchievement.title === 'SIH Hackathon - 2025 Winners'
                          ? selectedAchievement.detailedDescription
                          : selectedAchievement.description}
                      </p>

                      {/* Team Members Section */}
                      {selectedAchievement.teamMembers && selectedAchievement.teamMembers.length > 0 && (
                        <div className="mt-6">
                          <h5 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
                            <Star className="w-5 h-5 mr-2 text-accent" />
                            {selectedAchievement.teamMembers.length > 1 ? 'Team Members' : 'Achiever Details'}
                          </h5>
                          <div className={`grid gap-3 ${selectedAchievement.teamMembers.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                            {selectedAchievement.teamMembers.map((member, index) => (
                              <div
                                key={index}
                                className="bg-primary-light/20 rounded-xl p-4 border-l-4 border-accent"
                              >
                                <h6 className="font-semibold text-primary-dark">{member.name}</h6>
                                {member.role && <p className="text-sm text-primary/80 mt-1">{member.role}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Project Guide Section */}
                      {selectedAchievement.projectGuide && (
                        <div className="mt-6">
                          <h5 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
                            <Trophy className="w-5 h-5 mr-2 text-accent" />
                            Project Academic Guide
                          </h5>
                          <div className="bg-accent/20 rounded-xl p-4 border-l-4 border-primary">
                            <h6 className="font-semibold text-primary-dark">{selectedAchievement.projectGuide}</h6>
                          </div>
                        </div>
                      )}

                      {/* Mentors Section */}
                      {selectedAchievement.mentors && selectedAchievement.mentors.length > 0 && (
                        <div className="mt-6">
                          <h5 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
                            <Trophy className="w-5 h-5 mr-2 text-accent" />
                            Mentors
                          </h5>
                          <div className={`grid gap-3 ${selectedAchievement.mentors.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                            {selectedAchievement.mentors.map((mentor, index) => (
                              <div
                                key={index}
                                className="bg-accent/20 rounded-xl p-4 border-l-4 border-primary"
                              >
                                <h6 className="font-semibold text-primary-dark">{mentor.name}</h6>
                                {mentor.role && <p className="text-sm text-primary/80 mt-1">{mentor.role}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}

              {/* Action Button */}
              <div className="flex justify-end mt-8 flex-shrink-0">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-200 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
