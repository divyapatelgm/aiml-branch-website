import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  Users,
  BookOpen,
  Lightbulb,
  X,
  Award,
  Image as ImageIcon,
  File as FileIcon,
  FileText,
  MapPin,
  Laptop,
  Cpu
} from 'lucide-react';

const DepartmentEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery');
  const [showAll, setShowAll] = useState(false);

  const activities = [
    {
      id: 27,
      title: 'PGD Intel Unnati Training Program',
      subtitle: 'Certificate Course on Emerging Technologies Conducted for AIML Faculty Members',
      date: '16-18 April 2026',
      venue: 'IDEA Lab, GM University',
      type: 'Faculty Development Program',
      icon: Lightbulb,
      color: 'from-primary via-accent to-primary-dark',
      bgPattern: 'radial-gradient(circle at 30% 40%, rgba(226, 106, 44, 0.12) 0%, transparent 55%)',
      images: [
        '/assets/DepartmentActivities/Intel_Unnati_2026/img1.png',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img2.jpeg',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img3.jpeg',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img4.jpeg',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img5.jpeg',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img6.jpeg',
        '/assets/DepartmentActivities/Intel_Unnati_2026/img.jpeg',
        'assets/DepartmentActivities/Intel_Unnati_2026/img7.jpeg',
      ],
      highlights: [
        'Successfully conducted the PGD Intel Unnati Training Program Certificate Course for AIML faculty members',
        'Provided valuable insights into emerging technologies, industry trends, and practical applications',
        'Included hands-on training sessions to enhance technical and professional competencies',
        'Enabled participants to gain exposure to industry-relevant tools, methodologies, and best practices',
        'Faculty members successfully completed the certification program and strengthened their skill sets for academic and research excellence'
      ]
    },
    {
      id: 26,
      title: '2-Day Hands-On Drone Workshop',
      subtitle: 'Quadcopter Design, Assembly & Flight Training Conducted at GM University',
      date: '18-19 May 2026',
      venue: 'IDEA Lab, GM University',
      type: 'Technical Workshop',
      icon: Lightbulb,
      color: 'from-primary via-accent to-primary-dark',
      bgPattern: 'radial-gradient(circle at 30% 40%, rgba(226, 106, 44, 0.12) 0%, transparent 55%)',
      images: [
        '/assets/DepartmentActivities/Drone_Workshop-2026/img1.jpeg',
        '/assets/DepartmentActivities/Drone_Workshop-2026/img2.jpeg',
        '/assets/DepartmentActivities/Drone_Workshop-2026/img3.jpeg',
        '/assets/DepartmentActivities/Drone_Workshop-2026/img4.jpeg',
      ],
      highlights: [
        'Students participated in a 100% hands-on workshop on Quadcopters and UAV technologies',
        'Training covered drone assembly, embedded systems, sensors, calibration, and flight testing',
        'Participants gained real-time experience in drone fabrication and radio controller flying',
        'Industry experts from RLogic Technologies guided students through practical drone applications',
        'Workshop sessions included technical demonstrations, innovation activities, and live drone testing'
      ]
    },
    {
      id: 25,
      title: 'Open Day Campus Tour',
      subtitle: 'Campus Tour for PU College Students by the AIML Faculty',
      date: '23 Dec 2025',
      venue: 'GM University Campus',
      type: 'Outreach & Academic Event',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      images: [
        '/assets/DepartmentActivities/OpenDay-2025/img1.png',
        '/assets/DepartmentActivities/OpenDay-2025/img2.png',
        '/assets/DepartmentActivities/OpenDay-2025/img3.png',
        '/assets/DepartmentActivities/OpenDay-2025/img4.png',
        '/assets/DepartmentActivities/OpenDay-2025/img5.png',
      ],
      highlights: [
        'PU College students were guided through the GM University campus',
        'AIML faculty introduced academic programs, facilities & learning environment',
        'Campus tour helped students understand university culture and infrastructure',
        'Interactive sessions encouraged curiosity and awareness about AIML programs'
      ]
    },
    {
      id: 24,
      title: 'IoT Project Exhibition',
      subtitle: 'IoT Project Exhibition by 3rd semester students on GMU Open Day',
      date: '23 Dec 2025',
      venue: 'GM University – Open Day',
      type: 'Student Activity Event',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      images: [
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img1.png',
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img2.png',
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img3.png',
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img4.png',
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img5.png',
        '/assets/DepartmentActivities/IoTProjectExhibition2025/img6.png',
      ],
      highlights: [
        'Third semester students showcased innovative IoT-based projects',
        'Projects demonstrated real-world applications using sensors, controllers & connectivity',
        'Exhibition provided hands-on exposure and interaction with visitors during GMU Open Day',
        'Students enhanced practical skills, teamwork & presentation abilities'
      ]
    },
    {
      id: 23,
      title: 'Creative Prototype Challenge',
      subtitle: 'Cardboard City Challenge & Spoon/Straw Robot Model by Ist semester AIML, GMU students',
      date: '28 Nov 2025',
      venue: 'CR-055, Third Floor, SCST – GM University',
      type: 'Student Activity Event',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/CreativePrototype.pdf',
      images: [
        '/assets/DepartmentActivities/CreativePrototype/img1.png',
        '/assets/DepartmentActivities/CreativePrototype/img2.png',
        '/assets/DepartmentActivities/CreativePrototype/img3.png',
        '/assets/DepartmentActivities/CreativePrototype/img4.png',
      ],
      highlights: [
        'Hands-on prototype building using only waste and recyclable materials',
        'Cardboard City Challenge helped students learn planning, structural design & teamwork',
        'Spoon/Straw Robot Model encouraged creativity, balance analysis & mechanical thinking',
        'Evaluated on creativity, stability, sustainability, teamwork & presentation',
        'Students gained confidence, engineering thinking & collaborative design skills'
      ]
    },
    {
      id: 22,
      title: 'Placement Activity – Logical Reasoning (AI1B)',
      subtitle: 'Logical reasoning and aptitude enhancement session for AI1B',
      date: '14 Nov 2025',
      venue: 'AIML Classroom – AI1B, GM University',
      type: 'Placement Activity',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/LogicalReasoning-AI1B-2025.pdf',
      images: [
        '/assets/DepartmentActivities/LogicalReasoning-AI1B-2025/img1.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1B-2025/img2.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1B-2025/img3.png'
      ],
      highlights: [
        'Logical Reasoning activity for AI1B organized by V Semester AIML students. :contentReference[oaicite:0]{index=0}',
        'Included topics such as coding–decoding, blood relations, directions, and pattern-based puzzles.',
        'Improved analytical skills, accuracy, and teamwork among students.'
      ]
    },
    {
      id: 21,
      title: 'Placement Activity – Logical Reasoning (AI2A)',
      subtitle: 'Group-based logical reasoning session for AI2A',
      date: '14 Nov 2025',
      venue: 'AIML Classroom – AI2A, GM University',
      type: 'Placement Activity',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/LogicalReasoning-AI2A-2025.pdf',
      images: [
        '/assets/DepartmentActivities/LogicalReasoning-AI2A-2025/img1.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2A-2025/img2.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2A-2025/img3.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2A-2025/img4.png'
      ],
      highlights: [
        'AI2A team-based reasoning tasks including alphabet series, mixed series, coding and decoding. :contentReference[oaicite:1]{index=1}',
        'Strengthened teamwork, debate skills, and logical thinking.'
      ]
    },
    {
      id: 20,
      title: 'Placement Activity – Logical Reasoning (AI1C)',
      subtitle: 'Interactive reasoning and problem-solving workshop for AI1C',
      date: '13 Nov 2025',
      venue: 'AIML Classroom – AI1C, GM University',
      type: 'Placement Activity',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/LogicalReasoning-AI1C-2025.pdf',
      images: [
        '/assets/DepartmentActivities/LogicalReasoning-AI1C-2025/img1.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1C-2025/img2.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1C-2025/img3.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1C-2025/img4.png'
      ],
      highlights: [
        'Included quiz, treasure hunt, and video-based logical analysis. :contentReference[oaicite:2]{index=2}',
        'Students gained confidence and improved real-life logical thinking.'
      ]
    },
    {
      id: 19,
      title: 'Placement Activity – Logical Reasoning (AI1A)',
      subtitle: 'Logic puzzle and analytical reasoning session for AI1A',
      date: '11 Nov 2025',
      venue: 'AIML Classroom – AI1A, GM University',
      type: 'Placement Activity',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/LogicalReasoning-AI1A-2025.pdf',
      images: [
        '/assets/DepartmentActivities/LogicalReasoning-AI1A-2025/img1.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1A-2025/img2.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI1A-2025/img3.png'
      ],
      highlights: [
        'Session covered puzzles, logical grid, coding–decoding, mystery riddles, and seating arrangement. :contentReference[oaicite:3]{index=3}',
        'Google Forms quiz had 48 active participants with excellent engagement.'
      ]
    },
    {
      id: 18,
      title: 'Placement Activity – Logical Reasoning (AI2B)',
      subtitle: 'Reasoning skill development session for AI2B',
      date: '10 Nov 2025',
      venue: 'AIML Classroom – AI2B, GM University',
      type: 'Placement Activity',
      icon: Lightbulb,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/LogicalReasoning-AI2B-2025.pdf',
      images: [
        '/assets/DepartmentActivities/LogicalReasoning-AI2B-2025/img1.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2B-2025/img2.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2B-2025/img3.png',
        '/assets/DepartmentActivities/LogicalReasoning-AI2B-2025/img4.png'
      ],
      highlights: [
        'Covered patterns, number series, analogies, puzzles and blood relations. :contentReference[oaicite:4]{index=4}',
        'Online quiz + treasure hunt improved team coordination and reasoning.'
      ]
    },
    {
      id: 17,
      title: 'Industry Pathways in Artificial Intelligence – Technical Talk',
      subtitle: ' Department of AIML, GM University successfully conducted a session on Industry Pathways in Artificial Intelligence.',
      date: '21 Nov 2025',
      venue: 'Civil Seminar Hall, GM University',
      type: 'Technical Talk',
      icon: FileText,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdfs: [
        '/assets/DepartmentActivities/Activity_PDF/IndustryPathways-2025.pdf',
        '/assets/DepartmentActivities/Activity_PDF/IEEE-merged report(IndustryPathways-2025).pdf'
      ],
      images: [
        '/assets/DepartmentActivities/IndustryPathways-2025/img1.jpg',
        '/assets/DepartmentActivities/IndustryPathways-2025/img2.jpg',
        '/assets/DepartmentActivities/IndustryPathways-2025/img3.jpg',
        '/assets/DepartmentActivities/IndustryPathways-2025/img4.jpg',
      ],
      highlights: [
        'A Technical Talk on “Linear Algebra for Machine Learning and Industry Pathways in AI”, conducted under the IEEE Lecture Series.',
        'Session delivered by Mr. Pruthvi Sagar G. P, AIML Instructor at Corpncce Technologies and alumnus of AIML (Batch 2023–24).',
        'Explained the importance of vectors, matrices, transformations, and matrix operations in ML model behavior. :contentReference[oaicite:1]{index=1}',
        'Demonstrated how linear algebra powers AI applications used across industry domains such as vision, NLP, and recommendation systems.',
        'Provided clarity on diverse AI career pathways and required skill sets including Python, ML algorithms, deep learning, and problem-solving. :contentReference[oaicite:2]{index=2}',
        'Interactive Q&A session helping students connect theoretical concepts with real-world AI industry expectations.'
      ]
    },
    {
      id: 16,
      title: 'CONFLUENCE 2025 – Track 1 Session 5',
      subtitle: 'Conference paper presentation session on “Computing and Intelligence: Innovations Shaping the Digital Era”',
      date: '08 Nov 2025',
      venue: 'CSE Seminar Hall, GM University, Davanagere',
      type: 'Conference Session',
      icon: FileText,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/Confluence_Track1_session5_Report.pdf',
      images: [
        '/assets/DepartmentActivities/ConfluenceTrack1Session5/img1.jpg',
        '/assets/DepartmentActivities/ConfluenceTrack1Session5/img2.jpg',
        '/assets/DepartmentActivities/ConfluenceTrack1Session5/img3.jpg',
        '/assets/DepartmentActivities/ConfluenceTrack1Session5/img4.jpg',
      ],
      highlights: [
        'Session 5 of CONFLUENCE 2025 under Track 1 – “Computing and Intelligence: Innovations Shaping the Digital Era”, coordinated by the Department of AIML.',
        'Chaired by Dr. Narendra V. G, Professor, MIT Manipal, with co-session chair Dr. Nasreen Taj M. B from the Department of AIML, GM University.',
        'Eight research papers were presented covering AI-powered career guidance, telemedicine frameworks, food classification, road damage detection, plant disease detection, customer behaviour analysis, predictive maintenance, and explainable air pollution prediction.',
        'Presenters were evaluated on clarity, innovation, technical content and presentation skills with detailed external and internal evaluation sheets and feedback.',
        'Best Presenter Award was conferred to Ms. Akshata G. Kharad for the paper “Explainable AI for Air Pollution Prediction: A Deep Learning Approach with SHAP-Based Interpretability.”'
      ]
    },
    {
      id: 15,
      title: 'AI Awareness Program & Project Demonstration',
      subtitle: 'Outreach activity at  SS Government Urdu School, Azad Nagar, Davangere by GMU ACM Student Chapter',
      date: '20 Nov 2025',
      venue: 'SS Govt Urdu School, Azad Nagar, Davangere',
      type: 'Outreach Event',
      icon: Users,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/ActivityReport-SchoolVisit-2025.pdf',
      images: [
        '/assets/DepartmentActivities/ActivityReport-SchoolVisit-2025/img1.png',
        '/assets/DepartmentActivities/ActivityReport-SchoolVisit-2025/img2.png',
        '/assets/DepartmentActivities/ActivityReport-SchoolVisit-2025/img3.png',
        '/assets/DepartmentActivities/ActivityReport-SchoolVisit-2025/img4.png',
      ],
      highlights: [
        'Introduced AI concepts to school students using examples like face unlock, Maps & YouTube recommendations',
        'Interactive PPT, animated video session and live AI demos including chatbots & object identification',
        'Demonstrated student projects: Smart Irrigation System, Machine Picker & Dropper, GMU Tutor website, Object Identifier app',
        'Encouraged curiosity through Q&A, hands-on participation and real-world tech demonstrations',
        'Strengthened community outreach & social responsibility under GMU ACM Student Chapter'
      ]
    },
    {
      id: 14,
      title: 'Smart Environment Monitoring Workshop',
      subtitle: 'Hands-on IoT + ML workshop using ESP32, Firebase & Flutter',
      date: '10–11 Nov 2025',
      venue: 'AIML Department, GM University',
      type: 'Workshop Event',
      icon: Cpu,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/SmartEnvironmentWorkshop.pdf',
      images: [
        '/assets/DepartmentActivities/SmartEnvironmentWorkshop/img1.jpg',
        '/assets/DepartmentActivities/SmartEnvironmentWorkshop/img2.jpg',
        '/assets/DepartmentActivities/SmartEnvironmentWorkshop/img3.jpg',
        '/assets/DepartmentActivities/SmartEnvironmentWorkshop/img4.png',
      ],
      highlights: [
        'Hands-on workshop on ESP32-based environment monitoring',
        'Covered real-time data collection, ML model training and app integration',
        'Students learned Flask API, Firebase/ThingSpeak and TFLite deployment',
        'Strengthened AIoT skills and collaboration between GMU and GMIT students'
      ]
    },
    {
      id: 13,
      title: 'Google Gemini Student Ambassador Hackathon',
      subtitle: 'AI-based Hackathon using Google Gemini for GMU Students',
      date: '04 Nov 2025',
      venue: 'Department of AIML, GM University',
      type: 'Hackathon Event',
      icon: Laptop,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/GeminiHackathon.pdf',
      images: [
        '/assets/DepartmentActivities/GeminiHackathon/img1.jpg',
        '/assets/DepartmentActivities/GeminiHackathon/img2.jpg',
        '/assets/DepartmentActivities/GeminiHackathon/img3.jpg',
        '/assets/DepartmentActivities/GeminiHackathon/img4.png',
      ],
      highlights: [
        'Hands-on hackathon using Google Gemini for AI solution development',
        'Included themes like AI & Robotics, Sustainability and Social Good',
        'Students built prototypes and presented innovative AI-based ideas',
        'Improved creativity, problem-solving and teamwork among students'
      ]
    },
    {
      id: 12,
      title: 'Tech Quiz & Crossword',
      subtitle: 'Technology-based Quiz & Crossword for AI-1B Students',
      date: '07 Nov 2025',
      venue: 'Classroom – AI-1B',
      type: 'Quiz Event',
      icon: BookOpen,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 60%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/TechQuiz-Crossword.pdf',
      images: [
        '/assets/DepartmentActivities/TechQuizCrossword/img1.jpg',
        '/assets/DepartmentActivities/TechQuizCrossword/img2.jpg',
        '/assets/DepartmentActivities/TechQuizCrossword/img3.jpg',
        '/assets/DepartmentActivities/TechQuizCrossword/img4.jpg',
      ],
      highlights: [
        'Fun quiz and crossword based on tech concepts',
        'Improved team coordination and logical thinking',
        'Covered AI, Computer Basics and Tech Trends',
        'Students performed well in crossword challenge'
      ]
    },

    {
      id: 11,
      title: 'Debug the Code – Logic Debugging Challenge',
      subtitle: 'Code Debugging Activity for 1st Semester AI-1A Students',
      date: '07 Nov 2025',
      venue: 'Classroom – AI-1A',
      type: 'Coding Activity',
      icon: Lightbulb,
      color: 'from-primary-dark via-accent to-primary-light',
      bgPattern: 'radial-gradient(circle at 50% 80%, rgba(107, 66, 38, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/Debug-Code-Report.pdf',
      images: [
        '/assets/DepartmentActivities/DebugCode/img1.jpg',
        '/assets/DepartmentActivities/DebugCode/img2.jpg',
        '/assets/DepartmentActivities/DebugCode/img3.jpg',
        '/assets/DepartmentActivities/DebugCode/img4.jpg',
      ],
      highlights: [
        'Logic-based debugging tasks in C and HTML',
        'Improved problem-solving and logical thinking',
        'Team activity encouraging communication',
        'Focus on clean and error-free coding'
      ]
    },

    {
      id: 10,
      title: 'Poster Presentation – “AI in Daily Life”',
      subtitle: 'Creative Poster Presentation Activity for 3rd Semester Students',
      date: '07 Nov 2025',
      venue: '3rd Sem A-Sec Classroom',
      type: 'Poster Presentation',
      icon: Award,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 40% 40%, rgba(226, 106, 44, 0.15) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/Poster-AI-DailyLife.pdf',
      images: [
        '/assets/DepartmentActivities/PosterAIDailyLife/img1.jpg',
        '/assets/DepartmentActivities/PosterAIDailyLife/img2.jpg',
        '/assets/DepartmentActivities/PosterAIDailyLife/img3.jpg',
        '/assets/DepartmentActivities/PosterAIDailyLife/img4.jpg',
      ],
      highlights: [
        'Students created original posters on AI in daily life',
        'Improved communication, research and design skills',
        'Encouraged teamwork and visual creativity',
        'Posters judged on creativity, accuracy and presentation'
      ]
    },

    {
      id: 9,
      title: 'Tech Talk by Peers – Logic Building Challenge',
      subtitle: 'Peer Learning Session for 1st Semester AI-1C Students',
      date: '06 Nov 2025',
      venue: '1st Sem Classroom',
      type: 'Peer Learning Activity',
      icon: Users,
      color: 'from-primary-light via-primary to-accent',
      bgPattern: 'radial-gradient(circle at 80% 30%, rgba(180, 113, 73, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/TechTalk-Peers.pdf',
      images: [
        '/assets/DepartmentActivities/TechTalkPeers/img4.jpg',
        '/assets/DepartmentActivities/TechTalkPeers/img2.jpg',
        '/assets/DepartmentActivities/TechTalkPeers/img3.jpg',
        '/assets/DepartmentActivities/TechTalkPeers/img1.jpg',
      ],
      highlights: [
        'Student presentations on trending technologies',
        'Topics included AI, ML, IoT, Blockchain, Cloud & Cybersecurity',
        'Improved public speaking and presentation skills',
        'Encouraged curiosity-driven learning'
      ]
    },

    {
      id: 8,
      title: 'Code Challenge Quest – Logic Building Challenge',
      subtitle: 'Programming Logic Activity for 3rd Semester AI-2B Students',
      date: '05 Nov 2025',
      venue: ' 3rd Sem Classroom',
      type: 'Coding Challenge',
      icon: Lightbulb,
      color: 'from-primary-dark via-accent to-primary-light',
      bgPattern: 'radial-gradient(circle at 40% 70%, rgba(107, 66, 38, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/CodeQuest-Report.pdf',
      images: [
        '/assets/DepartmentActivities/CodeQuest/img1.jpg',
        '/assets/DepartmentActivities/CodeQuest/img2.jpg',
        '/assets/DepartmentActivities/CodeQuest/img3.jpg',
        '/assets/DepartmentActivities/CodeQuest/img4.jpg',
      ],
      highlights: [
        'Logic-based problem-solving tasks',
        'Focus on loops, recursion, and algorithms',
        'Improved programming efficiency and clarity',
        'Encouraged clean and creative coding'
      ]
    },

    {
      id: 5,
      title: 'AI Tool Chain Challenge',
      subtitle: 'Creative AI Workflow Storyboard & Innovation Challenge',
      date: '18 Sept 2025',
      venue: 'CSE Seminar Hall',
      type: 'ACM Student Activity',
      icon: Award,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 60% 40%, rgba(226, 106, 44, 0.15) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/AI-Tool-Chain-Challenge.pdf',
      images: [
        '/assets/DepartmentActivities/ACM/img1.png',
        '/assets/DepartmentActivities/ACM/img2.png',
        '/assets/DepartmentActivities/ACM/img3.png',
        '/assets/DepartmentActivities/ACM/img4.png'
      ],
      coverImage: '/assets/DepartmentActivities/ACM/img1.png',
      highlights: [
        'Students used 4–5 AI tools in chain workflow',
        'Themes included AI Superhero, Smart Eco Campus & Research Assistant',
        'Final deliverables included Posters, Trailers, and Presentations',
        'Enhanced creativity, collaboration, and AI application skills'
      ]
    },

    {
      id: 4,
      title: 'Machine Learning Technical Talk',
      subtitle: 'Demystifying Machine Learning: A Journey into the Future of Technology',
      date: 'February 2025',
      venue: 'Auditorium Hall',
      type: 'Technical Seminar',
      icon: BookOpen,
      color: 'from-primary via-primary-light to-accent',
      bgPattern: 'radial-gradient(circle at 30% 70%, rgba(233, 203, 167, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/TT-ML-Report.pdf',
      images: [
        '/assets/DepartmentActivities/TechnicalTalk/img1.png',
        '/assets/DepartmentActivities/TechnicalTalk/img2.png',
        '/assets/DepartmentActivities/TechnicalTalk/img3.png',
        '/assets/DepartmentActivities/TechnicalTalk/img4.png'
      ],
      coverImage: '/assets/DepartmentActivities/TechnicalTalk/img1.png',
      highlights: [
        'Latest ML trends discussion',
        'Industry applications showcase',
        'Future technology insights',
        'Networking opportunities'
      ]
    },

    {
      id: 1,
      title: 'Two-day workshop on "Application of NextGen AI for IoT Devices"',
      subtitle: 'In association with Xtrans Solutions & G M University',
      date: '25-26 Nov 2024',
      venue: 'GM University Campus',
      type: 'Technical Workshop',
      icon: BookOpen,
      color: 'from-accent via-primary to-primary-dark',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(226, 106, 44, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/NxtGen-AI-Report.pdf',
      images: [
        '/assets/DepartmentActivities/NxtGen/img1.png',
        '/assets/DepartmentActivities/NxtGen/img2.png',
        '/assets/DepartmentActivities/NxtGen/img3.png',
        '/assets/DepartmentActivities/NxtGen/img4.png'
      ],
      coverImage: '/assets/DepartmentActivities/NxtGen/img1.png',
      highlights: [
        'Two-day intensive workshop',
        'Industry experts from Xtrans Solutions',
        'Hands-on IoT device programming',
        'Latest AI integration techniques'
      ]
    },

    {
      id: 2,
      title: 'Parents Meeting - I Semester',
      subtitle: 'Academic Progress Review & Future Planning',
      date: '15 Nov 2024',
      venue: 'GM University Campus',
      type: 'Academic Meeting',
      icon: Users,
      color: 'from-primary-light via-primary to-accent',
      bgPattern: 'radial-gradient(circle at 80% 30%, rgba(180, 113, 73, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/Parents-Meeting-Report.pdf',
      images: [
        '/assets/DepartmentActivities/ParentsMeet/img1.png',
        '/assets/DepartmentActivities/ParentsMeet/img2.png',
        '/assets/DepartmentActivities/ParentsMeet/img3.png',
        '/assets/DepartmentActivities/ParentsMeet/img4.png'
      ],
      coverImage: '/assets/DepartmentActivities/ParentsMeet/img1.png',
      highlights: [
        'Excellent response with 50+ parents',
        'Academic progress review',
        'Career guidance session',
        'Q&A with faculty'
      ]
    },

    {
      id: 3,
      title: 'Hands-on Session on Data Visualization using Tableau',
      subtitle: 'Practical Training Workshop',
      date: '01 Oct 2024',
      venue: 'Computer Lab 301',
      type: 'Technical Session',
      icon: Lightbulb,
      color: 'from-primary-dark via-accent to-primary-light',
      bgPattern: 'radial-gradient(circle at 50% 80%, rgba(107, 66, 38, 0.1) 0%, transparent 50%)',
      pdf: '/assets/DepartmentActivities/Activity_PDF/Hands-session-Data-Visualization-Report.pdf',
      images: [
        '/assets/DepartmentActivities/HandsOnSession/img1.png',
        '/assets/DepartmentActivities/HandsOnSession/img2.png',
        '/assets/DepartmentActivities/HandsOnSession/img3.png'
      ],
      coverImage: '/assets/DepartmentActivities/HandsOnSession/img1.png',
      highlights: [
        'Interactive dashboard creation',
        'Real-world data analysis',
        'Tableau certification preparation',
        'Industry best practices'
      ]
    }
  ];



  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  return (
    <section id="department-events" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl blob-animate"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl blob-animate" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Department Events & Activities
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Empowering minds through learning, collaboration, and innovation
          </p>
        </div>

        {/* Activities Showcase */}
        <div className={`grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-4 transition-all duration-1000 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {activities.slice(0, showAll ? activities.length : 8).map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                onClick={() => handleActivityClick(activity)}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer h-full flex flex-col bg-white/80 backdrop-blur-sm border border-white/20 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px)',
                  '--tw-shadow-color': 'rgba(226, 106, 44, 0.1)'
                }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/10 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Card Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${activity.images[0]})`,
                      transform: 'translateZ(30px)'
                    }}
                  ></div>

                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-primary-dark backdrop-blur-sm">
                        <IconComponent className="w-3.5 h-3.5 mr-1.5" />
                        {activity.type}
                      </span>
                      <span className="text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {activity.date}
                      </span>
                    </div>
                    <div className="text-white">
                      <MapPin className="w-4 h-4 inline-block mr-2 mb-1 text-accent-light" />
                      <span className="text-sm">{activity.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col transform group-hover:-translate-y-2 transition-transform duration-700">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-primary transition-colors duration-500">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5 line-clamp-2 group-hover:text-gray-700 transition-colors duration-500">
                    {activity.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.highlights.slice(0, 2).map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 bg-white text-primary-dark rounded-full border border-gray-200 shadow-sm group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <button
                      className="w-full py-2.5 px-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary rounded-xl transition-all duration-500 flex items-center justify-center group/btn shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-0.5"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActivityClick(activity);
                      }}
                    >
                      <span className="relative z-10">View Details</span>
                      <svg
                        className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>

                {/* 3D effect on hover */}
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at var(--x, 0) var(--y, 0), rgba(226, 106, 44, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        {activities.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'View All'}
              {showAll ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedActivity && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] min-h-[80vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Header */}
            <div className={`bg-gradient-to-br ${selectedActivity.color} p-6 text-white relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-2xl mr-4">
                    <selectedActivity.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <span className="text-xs opacity-90 uppercase tracking-wide font-semibold">
                        {selectedActivity.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold line-clamp-1">{selectedActivity.title}</h3>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-6 py-3 text-sm font-medium flex items-center ${activeTab === 'gallery'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Gallery
                </button>
                {(selectedActivity.pdf || selectedActivity.pdfs) && (
                  <button
                    onClick={() => setActiveTab('report')}
                    className={`px-6 py-3 text-sm font-medium flex items-center ${activeTab === 'report'
                        ? 'text-accent border-b-2 border-accent'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    <FileIcon className="w-4 h-4 mr-2" />
                    View Report
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto min-h-[60vh]">
              {activeTab === 'gallery' ? (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    {/* Left Column */}
                    <div>
                      <h4 className="text-xl font-bold text-primary-dark mb-4">Event Overview</h4>
                      <div className="prose">
                        <p className="mb-4 text-gray-700">{selectedActivity.subtitle}</p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                            <Calendar className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-primary-dark">Date</p>
                              <p className="text-sm text-gray-600">{selectedActivity.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                            <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-primary-dark">Venue</p>
                              <p className="text-sm text-gray-600">{selectedActivity.venue}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary-dark mb-2">Highlights</h5>
                          <ul className="space-y-2">
                            {selectedActivity.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Images */}
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedActivity.images.map((image, index) => (
                          <div key={index} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                            <img
                              src={image}
                              alt={`Event ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h3 className="font-medium text-gray-900">Event Report</h3>
                    <div className="flex gap-2">
                      {Array.isArray(selectedActivity.pdfs) ? (
                        selectedActivity.pdfs.map((pdf, index) => (
                          <a
                            key={index}
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:text-accent-dark flex items-center"
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            {index === 0 ? 'Main Report' : 'IEEE Report'}
                          </a>
                        ))
                      ) : (
                        <a
                          href={selectedActivity.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent hover:text-accent-dark flex items-center"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          View Report
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="h-full flex flex-col items-center justify-center p-4">
                      {Array.isArray(selectedActivity.pdfs) ? (
                        <div className="w-full">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Report to View:</label>
                            <select
                              className="w-full p-2 border border-gray-300 rounded-lg"
                              onChange={(e) => {
                                const iframe = document.querySelector('#pdf-viewer');
                                if (iframe) {
                                  iframe.src = `${e.target.value}#view=fitH`;
                                }
                              }}
                              defaultValue={selectedActivity.pdfs[0]}
                            >
                              {selectedActivity.pdfs.map((pdf, index) => (
                                <option key={index} value={pdf}>
                                  {index === 0 ? 'Main Report - IndustryPathways-2025' : 'IEEE Report - IndustryPathways-2025'}
                                </option>
                              ))}
                            </select>
                          </div>
                          <iframe
                            id="pdf-viewer"
                            src={`${selectedActivity.pdfs[0]}#view=fitH`}
                            className="w-full h-full min-h-[65vh] border rounded-lg"
                            frameBorder="0"
                            title="PDF Viewer"
                            onError={(e) => {
                              console.error('Error loading PDF:', e);
                              const iframe = e.target;
                              iframe.style.display = 'none';
                              const errorDiv = document.createElement('div');
                              errorDiv.className = 'text-center p-4';
                              errorDiv.innerHTML = `
                                <p className="text-red-500 mb-4">Unable to load PDF preview.</p>
                                <div class="space-y-2">
                                  ${selectedActivity.pdfs.map((pdf, index) => `
                                    <a 
                                      href="${pdf}" 
                                      download 
                                      className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors inline-block mr-2"
                                    >
                                      Download ${index === 0 ? 'Main Report' : 'IEEE Report'}
                                    </a>
                                  `).join('')}
                                </div>
                              `;
                              iframe.parentNode.appendChild(errorDiv);
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          <iframe
                            src={`${selectedActivity.pdf}#view=fitH`}
                            className="w-full h-full min-h-[65vh] border rounded-lg"
                            frameBorder="0"
                            title="PDF Viewer"
                            onError={(e) => {
                              console.error('Error loading PDF:', e);
                              const iframe = e.target;
                              iframe.style.display = 'none';
                              const errorDiv = document.createElement('div');
                              errorDiv.className = 'text-center p-4';
                              errorDiv.innerHTML = `
                                <p className="text-red-500 mb-4">Unable to load PDF preview.</p>
                                <a 
                                  href="${selectedActivity.pdf}" 
                                  download 
                                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                                >
                                  Download PDF
                                </a>
                              `;
                              iframe.parentNode.appendChild(errorDiv);
                            }}
                          />
                          <div className="mt-2 text-sm text-gray-500">
                            If the PDF doesn't load, you can also
                            <a
                              href={selectedActivity.pdf}
                              download
                              className="text-accent hover:underline ml-1"
                            >
                              download it here
                            </a>.
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DepartmentEvents;
