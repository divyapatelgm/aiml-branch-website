import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Trophy, Users, Star, FileText, GraduationCap, Presentation, Lightbulb, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getFacultyImage = (facultyName) => {
  const imageMap = {
    "Dr. Asha K": "/assets/faculty/aska_k_hod.png",
    "Dr. Nasreen Taj M. B": "/assets/faculty/nasreen_taj.jpg",
    "Mr. Keerthi Prasad G": "/assets/faculty/keerthiPrasadG.jpg",
    "Mrs. Deepa A L": "/assets/faculty/Deepa_Ashok.jpg",
    "Mr. Mohammed Zeeshan Mukram": "/assets/faculty/mohammed_zeeshan_mukram.jpg",
    "Mrs. Chaithra A": "/assets/faculty/Chaithra_Dhumwad_Assistant_Professor.png",
    "Mrs. Akshatha A M S": "/assets/faculty/akshatha_a_m_s.jpg",
    "Ms. Rakshitha J N": "/assets/faculty/rakshitha_j_n.jpg",
    "Ms. Anusha A Nadiger": "/assets/faculty/anusha_a_nadiger.jpg",
    "Mrs. Preethi N M": "/assets/faculty/preethi_n_m.jpg",
    "Ms. Jayalakshmi M": "/assets/faculty/Jayalakshmi_M.jpg",
    "Ms. Nayana C M": "/assets/faculty/Nayana.jpg",
    "Ms. Bhoomika B R": "/assets/faculty/bhoomika_b_r.jpg",
    "Ms. Anusha N L": "/assets/faculty/anusha_n_l.jpg",
    "Mr. Chethan G S": "/assets/faculty/Chethan_G_S.jpg",
    "Mr. Praveen R": "/assets/faculty/praveen_r.jpg",
    "Mr. Darshan A": "/assets/faculty/Darshan_A.jpg",
    "Ms. Mukta Pujar": "/assets/faculty/mukta_pujar.jpg",
    "Mrs. Shilpa R. N": "/assets/faculty/shilpa.png",
    "Ms. Divya M": "assets/faculty/Divya_M.jpg",
    "Ms. Meghana A B": "/assets/faculty/Meghana_A_B.jpeg",
    "Mrs. Shwetha SP": "/assets/faculty/Shwetha_SP.jpeg"
  };

  return imageMap[facultyName] || `/assets/faculty/${facultyName.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg`;
};

const getFacultyDesignation = (facultyName) => {
  const designationMap = {
    "Dr. Asha K": "Associate Professor & HOD",
    "Dr. Nasreen Taj M. B": "Assistant Professor & Deputy Registrar",
    "Mr. Keerthi Prasad G": "Assistant Professor",
    "Mrs. Akshatha A M S": "Assistant Professor",
    "Mrs. Chaithra A": "Assistant Professor",
    "Mr. Chethan G S": "Assistant Professor",
    "Ms. Rakshitha J N": "Assistant Professor",
    "Mr. Darshan A": "Assistant Professor",
    "Ms. Jayalakshmi M": "Assistant Professor",
    "Ms. Nayana C M": "Assistant Professor",
    "Mr. Praveen R": "Assistant Professor",
    "Mrs. Shilpa R. N": "Assistant Professor"
  };
  return designationMap[facultyName] || "Assistant Professor";
};

const getCertificateMetadata = (certPath, facultyName) => {
  const parts = certPath.split('/');
  const fileName = parts[parts.length - 1];

  const customMap = {
    "akshatha_a_m_s/img3.png": { title: "Supercomputing, AI & Quantum Computing", date: "Nov 11, 2024 – Nov 16, 2024" },
    "akshatha_a_m_s/img2.png": { title: "Cyber Security Culture (ATAL FDP)", date: "Dec 09, 2024 – Dec 14, 2024" },
    "akshatha_a_m_s/img.png": { title: "FDP (LEAP)", date: "August 29, 2025", grade: "A" },

    "Chaithra_Dhumwad_Assistant_Professor/img1.jpg": { title: "DO-254 level-A Design", date: "" },
    "Chaithra_Dhumwad_Assistant_Professor/img2.png": { title: "Scaler SQL Certification", date: "" },
    "Chaithra_Dhumwad_Assistant_Professor/img3.png": { title: "Python Libraries Mastery", date: "" },
    "Chaithra_Dhumwad_Assistant_Professor/img4.png": { title: "Deep Learning (NPTEL)", date: "Jan – Apr 2025" },
    "Chaithra_Dhumwad_Assistant_Professor/img5.png": { title: "EDA Fundamentals Mastery", date: "" },
    "Chaithra_Dhumwad_Assistant_Professor/img6.png": { title: "FacultyOS FDP", date: "Feb 14, 2026" },

    "Chethan_G_S/img.png": { title: "FDP (LEAP)", date: "August 28, 2025" },
    "Chethan_G_S/img1.jpg": { title: "Data Analytics (Great Learning)", date: "May 10, 2024" },
    "Chethan_G_S/img2.png": { title: "Data Analytics & Visualization (Forage)", date: "April 20, 2024" },
    "Chethan_G_S/img3.png": { title: "FacultyOS FDP", date: "Feb 04, 2026 – Feb 14, 2026" },

    "rakshitha_j_n/img1.png": { title: "Microsoft Certified: Azure Fundamentals", date: "March 27, 2023" },
    "rakshitha_j_n/img2.png": { title: "Introduction to Programming using HTML and CSS (MTA)", date: "May 28, 2022" },
    "rakshitha_j_n/img3.png": { title: "IOT (Ethical Byte)", date: "October 16, 2022" },
    "rakshitha_j_n/img4.jpg": { title: "Webinar on Big Data Analytics", date: "May 18, 2020" },
    "rakshitha_j_n/img5.jpg": { title: "Java Programming", date: "August 2024" },
    "rakshitha_j_n/img6.png": { title: "FacultyOS FDP (GM University)", date: "February 04, 2026 – February 14, 2026" },

    "Darshan_A/img1.png": { title: "FDP (LEAP)", date: "August 28, 2025" },
    "Darshan_A/img2.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },

    "Jayalakshmi_M/img1.png": { title: "Advancing Frontiers in Computing (ATAL FDP)", date: "December 09, 2024 – December 14, 2024" },
    "Jayalakshmi_M/img2.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },

    "Nayana/img1.png": { title: "Java Full Stack Certified", date: "May 01, 2024" },
    "Nayana/img2.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },

    "praveen_r/img1.png": { title: "Empowering Industry 5.0 through Secure and Innovative Practices (FDP)", date: "Dec 2018" },
    "Deepa_Ashok/img.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },
    "Divya_M/img.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },
    "anusha_a_nadiger/img.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },

    "anusha_n_l/img1.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },
    "anusha_n_l/img2.jpeg": { title: "Intel Unnati Workshop", date: "April 04, 2026 – April 18, 2026" },

    "bhoomika_br/img.png": { title: "Industry 4.0 & Smart Manufacturing FDP", date: "February 19, 2026 – February 21, 2026" },
    "bhoomika_br/img1.jpeg": { title: "Smart Research with AI: From Draft to Publication FDP", date: "January 06, 2026 – January 08, 2026" },
    "bhoomika_br/img2.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },
    "bhoomika_br/img3.jpeg": { title: "Hands-on Workshop on Natural Language Processing", date: "February 21, 2026 – February 22, 2026" },

    "mohammed_zeeshan_mukram/img1.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" },
    "mohammed_zeeshan_mukram/img2.png": { title: "Intel Unnati Workshop", date: "April 04, 2026 – April 18, 2026" },

    "preethi_n_m/img1.png": { title: "FacultyOS FDP", date: "February 04, 2026 – February 14, 2026" }
  };

  for (const key in customMap) {
    if (certPath.toLowerCase().includes(key.toLowerCase())) {
      return customMap[key];
    }
  }

  let title = "Professional Certificate";
  if (fileName.toLowerCase().includes("img")) {
    const num = fileName.replace(/[^0-9]/g, "");
    title = `Faculty Certificate ${num || "I"}`;
  }

  return {
    title: title,
    date: "Academic Year"
  };
};

const getFDPCount = (facultyName) => {
  const fdpCountMap = {
    "Mrs. Akshatha A M S": 3,
    "Mrs. Chaithra A": 1,
    "Mr. Chethan G S": 2,
    "Ms Rakshitha J N": 1,
    "Ms. Bhoomika B R": 3,
    "Mr. Darshan A": 2,
    "Ms. Jayalakshmi M": 2,
    "Mrs. Deepa A L": 1,
    "Ms. Divya M": 1,
    "Ms. Nayana C M": 1,
    "Mr. Praveen R": 0,
    "Ms. Anusha A Nadiger": 1,
    "Ms. Anusha N L": 1,
    "Mr. Mohammed Zeeshan Mukram": 1,
    "Mrs. Preethi N M": 1,
    "Rakshitha JN": 1
  };

  return fdpCountMap[facultyName] || 0;
};

const FacultyAchievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [activeLightboxCert, setActiveLightboxCert] = useState(null);
  const researchGrants = [
    {
      name: 'Dr. Asha K',
      grant: 'Submitted ISRO proposal for AI health monitoring for astronauts.'
    },
    {
      name: 'Mr. Keerthi Prasad G',
      grant: 'Elevate – Rs. 1800000'
    },

    {
      name: 'Mrs Chaitra A',
      grant: 'Seed money for AI time table & Submitted ISRO proposal for AI health monitoring for astronauts.'
    },
    {
      name: 'Mrs. Shilpa R Narayanapur',
      grant: 'Faculty Tracking System'
    }
  ];



  const invitedTalks = [
    {
      name: 'Dr. Asha K',
      talks: [
        'Resource person for one week online AICTE-ISTE Induction Programme on "Recent trends in machine learning and Pattern Recognition" from 06/12/2021 to 11/12/2021, Dept. of ECE, GMIT',

      ]
    },
    // {
    //   name: 'Mr. Keerthi Prasad G',
    //   talks: [
    //     'Technical talk on C',
    //     'Technical talk on Computer Literacy'
    //   ]
    // },
    {
      name: 'Mrs. Chaitra A',
      talks: [
        'Project Evaluation in department for Electrical & Electronics in "Jain Institute of Technology" Davanagere.'
      ]
    }
  ];

  const trainingCourses = [
    {
      name: 'Dr. Asha K',
      courses: [
        'FDP on Object Oriented Programming with Java Laboratory-21CSL35.',
        'FDP on Machine Learning.',
        'FDP on Computer Networks Simulation using NCTUNS.',
        'Java in a Week.',
        'Object oriented programming with C++.',
        'Let us C.'
      ]
    },
    {
      name: 'Mr. Keerthi Prasad G',
      courses: [
        'FDP on Object Oriented Programming with Java Laboratory- 21CSL35.',
        'FDP on Machine Learning.',
        'FDP on Computer Networks Simulation using NCTUNS.',
        'FDP on FDP on Mobile Application Development using Android.',
        'Oracle database 10g – Introduction to SQL.',
        'Oracle database 10g – Administration.',
        'Java in a Week.',
        'PHP with Mysql.',
        'Think parallel – Parallel programming using openMP.',
        'Object oriented programming with C++.',
        'Let us C.'
      ]
    },
    {
      name: 'Mrs. Chaitra A',
      courses: [
        'One day FDP on Tableau',
        'One day workshop on Tableau'
      ]
    }
  ];

  const certificates = [
    {
      name: 'Mrs. Akshatha A M S',
      certificates: [
        '/assets/FacultyAchievements/akshatha_a_m_s/img3.png',
        '/assets/FacultyAchievements/akshatha_a_m_s/img2.png',
        '/assets/FacultyAchievements/akshatha_a_m_s/img.png'
      ]
    },
    {
      name: 'Mrs. Chaithra A',
      certificates: [
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img1.jpg',
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img2.png',
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img3.png',
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img4.png',
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img5.png',
        '/assets/FacultyAchievements/Chaithra_Dhumwad_Assistant_Professor/img6.png'
      ]
    },
    {
      name: "Mr. Chethan G S",
      certificates: [
        '/assets/FacultyAchievements/Chethan_G_S/img.png',
        '/assets/FacultyAchievements/Chethan_G_S/img1.jpg',
        '/assets/FacultyAchievements/Chethan_G_S/img2.png',
        '/assets/FacultyAchievements/Chethan_G_S/img3.png'
      ]
    },
    {
      name: 'Ms. Rakshitha J N',
      certificates: [
        '/assets/FacultyAchievements/rakshitha_j_n/img1.png',
        '/assets/FacultyAchievements/rakshitha_j_n/img2.png',
        '/assets/FacultyAchievements/rakshitha_j_n/img3.png',
        '/assets/FacultyAchievements/rakshitha_j_n/img4.jpg',
        '/assets/FacultyAchievements/rakshitha_j_n/img5.jpg',
        '/assets/FacultyAchievements/rakshitha_j_n/img6.png'
      ]
    },
    {
      name: 'Mr. Darshan A',
      certificates: [
        '/assets/FacultyAchievements/Darshan_A/img1.png',
        '/assets/FacultyAchievements/Darshan_A/img2.png'
      ]
    },
    {
      name: 'Ms. Jayalakshmi M',
      certificates: [
        '/assets/FacultyAchievements/Jayalakshmi_M/img1.png',
        '/assets/FacultyAchievements/Jayalakshmi_M/img2.png'
      ]
    },
    {
      name: 'Ms. Nayana C M',
      certificates: [
        '/assets/FacultyAchievements/Nayana/img1.png',
        '/assets/FacultyAchievements/Nayana/img2.png'
      ]
    },
    {
      name: 'Mr. Praveen R',
      certificates: [
        '/assets/FacultyAchievements/praveen_r/img1.png'
      ]
    },
    {
      name: 'Mrs. Deepa A L',
      certificates: [
        '/assets/FacultyAchievements/Deepa_Ashok/img.png'
      ]
    },
    {
      name: 'Ms. Divya M',
      certificates: [
        '/assets/FacultyAchievements/Divya_M/img.png'
      ]
    },
    {
      name: 'Ms. Anusha A Nadiger',
      certificates: [
        '/assets/FacultyAchievements/anusha_a_nadiger/img.png'
      ]
    },
    {
      name: 'Ms. Anusha N L',
      certificates: [
        '/assets/FacultyAchievements/anusha_n_l/img1.png',
        '/assets/FacultyAchievements/anusha_n_l/img2.jpeg'
      ]
    },
    {
      name: 'Ms. Bhoomika B R',
      certificates: [
        '/assets/FacultyAchievements/bhoomika_br/img.png',
        '/assets/FacultyAchievements/bhoomika_br/img1.jpeg',
        '/assets/FacultyAchievements/bhoomika_br/img2.png',
        '/assets/FacultyAchievements/bhoomika_br/img3.jpeg'
      ]
    },
    {
      name: 'Mr. Mohammed Zeeshan Mukram',
      certificates: [
        '/assets/FacultyAchievements/mohammed_zeeshan_mukram/img1.png',
        '/assets/FacultyAchievements/mohammed_zeeshan_mukram/img2.png'
      ]
    },
    {
      name: 'Mrs. Preethi N M',
      certificates: [
        '/assets/FacultyAchievements/preethi_n_m/img1.png'
      ]
    }
  ];

  return (
    <section id="faculty-achievements" className="py-20 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Faculties Achievements
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        {/* Research Grants Section */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary-dark mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              Research Grants Awarded
            </h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchGrants.map((grant, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 7) * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary-dark h-full">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-dark">{grant.name}</h4>
                      <p className="text-accent font-semibold">Research Grant: {grant.grant}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Achievements Section */}
        <div className={`transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary-dark mb-4">Professional Achievements</h3>
          </div>

          {/* Invited Talks */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Invited Talks
            </h4>
            {/* <p className="text-primary mb-6 max-w-3xl">
              Invited talks reflect recognition of faculty expertise by academic and professional communities.
              These engagements, delivered at conferences, workshops, or seminars, provide a platform to share knowledge, insights, and innovative ideas with peers and students.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {invitedTalks.map((faculty, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 11) * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary h-full">
                    <h5 className="text-lg font-bold text-primary-dark mb-3">{faculty.name}</h5>
                    <div className="space-y-2">
                      {faculty.talks.map((talk, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-body leading-relaxed">{talk}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Courses */}
          <div>
            <h4 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Training Courses Delivered
            </h4>
            {/* <p className="text-primary mb-6 max-w-3xl">
              Training courses delivered highlight faculty members' contributions to skill development and knowledge sharing.
              These courses, workshops, and professional programs reflect their commitment to mentoring, capacity building, and enhancing learning outcomes for students and professionals.
            </p> */}

            <div className="grid gap-6">
              {trainingCourses.map((faculty, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 13) * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary-dark">
                    <h5 className="text-lg font-bold text-primary-dark mb-3">{faculty.name}</h5>
                    <div className="grid md:grid-cols-2 gap-2">
                      {faculty.courses.map((course, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-body leading-relaxed">{course}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-primary-dark mb-8 flex items-center gap-3 justify-center md:justify-start">
              <Award className="w-6 h-6 text-accent" />
              Certificates & Achievements
            </h4>

            {/* Horizontal Responsive Row of Circular Profile Avatars */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-4 py-4">
              {certificates.map((faculty, index) => {
                const imgPath = getFacultyImage(faculty.name);
                const count = faculty.certificates.length;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => setSelectedFaculty(faculty)}
                  >
                    {/* Circular profile image container */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-primary-light/60 shadow-md group-hover:shadow-[0_0_20px_rgba(226,106,44,0.4)] group-hover:border-accent transition-all duration-300 transform group-hover:scale-105">
                      <img
                        src={imgPath}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/faculty/default.jpg';
                        }}
                      />
                      {/* Badge overlay with count */}
                      <div className="absolute bottom-1 right-1 bg-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md border border-white">
                        {count}
                      </div>
                    </div>
                    {/* Faculty Name */}
                    <h5 className="mt-3 text-sm md:text-base font-semibold text-primary-dark/85 group-hover:text-accent transition-colors duration-200 text-center max-w-[120px] md:max-w-[140px] leading-tight">
                      {faculty.name}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Detail Modal with Framer Motion Animations */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl w-[95vw] max-w-6xl max-h-[92vh] overflow-hidden shadow-2xl border border-primary-light/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-primary-light/20 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-primary-light/10 via-primary-light/5 to-accent/5">
                <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6">
                  {/* Circular Avatar with Gold Badge Count Overlay */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-visible border-4 border-amber-400 shadow-lg flex-shrink-0 bg-white">
                    <img
                      src={getFacultyImage(selectedFaculty.name)}
                      alt={selectedFaculty.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = '/assets/faculty/default.jpg';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 text-white font-black text-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md border-2 border-white animate-float">
                      {selectedFaculty.certificates.length}
                    </div>
                  </div>

                  {/* Name and Title info */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-primary-dark tracking-tight">{selectedFaculty.name}</h3>
                    <p className="text-base md:text-lg font-bold text-accent mt-0.5">{getFacultyDesignation(selectedFaculty.name)}</p>
                    <p className="text-xs md:text-sm text-slate-500 font-semibold mt-1">Department of Artificial Intelligence & Machine Learning</p>
                  </div>
                </div>

                {/* Stat Box Row */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                  {/* Certificates Stat */}
                  <div className="flex items-center space-x-3 bg-white border border-slate-100 rounded-2xl p-3 shadow-sm flex-1 min-w-[120px]">
                    <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-800">{selectedFaculty.certificates.length}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Certificates</div>
                    </div>
                  </div>

                  {/* Workshops Stat */}
                  { /*<div className="flex items-center space-x-3 bg-white border border-slate-100 rounded-2xl p-3 shadow-sm flex-1 min-w-[120px]">
                    <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-800">
                        {selectedFaculty.name === 'Mrs. Chaithra A' ? 6 : selectedFaculty.name === 'Mrs. Akshatha A M S' ? 5 : 3}
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Workshops</div>
                    </div>
                  </div>*/}~

                  {/* FDPs Stat */}
                  <div className="flex items-center space-x-3 bg-white border border-slate-100 rounded-2xl p-3 shadow-sm flex-1 min-w-[120px]">
                    <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-800">
                        {getFDPCount(selectedFaculty.name)}
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">FDPs</div>
                    </div>
                  </div>

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute md:relative top-4 right-4 md:top-0 md:right-0 text-slate-400 hover:text-slate-600 p-2.5 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-7 h-7" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-primary-light/5">
                <div className="mb-6 flex items-center justify-between border-b border-primary-light/10 pb-4">
                  <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Certificates ({selectedFaculty.certificates.length})
                  </h4>
                </div>

                {/* Responsive 5-Column Grid of Certificate Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {selectedFaculty.certificates.map((cert, idx) => {
                    const meta = getCertificateMetadata(cert, selectedFaculty.name);
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary-light/30 shadow-md cursor-pointer hover:border-accent hover:shadow-lg transition-all duration-300 bg-white"
                          onClick={() => setActiveLightboxCert(cert)}
                        >
                          <img
                            src={cert}
                            alt={`${selectedFaculty.name} Certificate ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = '/assets/FacultyAchievements/Darshan_A/img1.png';
                            }}
                          />
                          {/* Hover zoom overlay */}
                          <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <span className="bg-white text-primary-dark text-xs font-black px-3 py-1.5 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              View Fullscreen
                            </span>
                          </div>
                        </motion.div>
                        {/* Certificate Title and Date underneath the thumbnail */}
                        <div className="mt-3 text-center px-1">
                          <h6 className="text-xs md:text-sm font-bold text-primary-dark line-clamp-1 leading-snug tracking-tight">
                            {meta.title}
                          </h6>
                          <p className="text-[10px] md:text-xs text-slate-500 font-semibold mt-0.5">
                            {meta.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Viewer with Framer Motion Animations */}
      <AnimatePresence>
        {activeLightboxCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveLightboxCert(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightboxCert(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 shadow-lg transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              src={activeLightboxCert}
              alt="Certificate Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = '/assets/FacultyAchievements/Darshan_A/img1.png';
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FacultyAchievements;
