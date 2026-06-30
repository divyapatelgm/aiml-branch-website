import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../Faculty.css';

// Function to get faculty image path
const getFacultyImage = (facultyName) => {
  const imageMap = {
    "Dr. Asha K": "/assets/faculty/aska_k_hod.png",
    "Dr. Nasreen Taj M. B": "/assets/faculty/nasreen_taj.jpg",
    "Mr. Keerthi Prasad G": "/assets/faculty/keerthiPrasadG.jpg",
    "Mrs. Deepa A L": "/assets/faculty/Deepa_Ashok.jpg",
    "Mr. Mohammed Zeeshan Mukram": "/assets/faculty/mohammed_zeeshan_mukram.jpg",
    "Mrs. Chaithra A": "/assets/faculty/Chaithra_Dhumwad_Assistant_Professor.png",
    // "Ms. Veena C S": "/assets/faculty/veena_c_s.jpg",
    "Mrs. Akshatha A M S": "/assets/faculty/akshatha_a_m_s.jpg",
    "Ms. Rakshitha J N": "/assets/faculty/rakshitha_j_n.jpg",
    "Ms. Anusha A Nadiger": "/assets/faculty/anusha_a_nadiger.jpg",
    "Mrs. Preethi N M": "/assets/faculty/preethi_n_m.jpg",
    "Ms. Jayalakshmi M": "/assets/faculty/Jayalakshmi_M.jpg",
    "Ms. Nayana C M": "/assets/faculty/Nayana.jpg",
    "Ms. Bhoomika B R": "/assets/faculty/bhoomika_b_r.jpg",
    "Ms. Anusha N L": "/assets/faculty/anusha_n_l.jpg",
    // "Mrs. Kavya K N": "/assets/faculty/kavya_kn.jpg",
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
const getFacultyCV = (facultyName) => {
  const cvMap = {
    "Dr. Asha K": "Dr.ASHA_K.pdf",
    "Dr. Nasreen Taj M. B": "Dr._Nasreen_Taj_M_B",
    "Mrs. Deepa A L": "Deepa_Ashok.pdf",
    "Mr. Mohammed Zeeshan Mukram": "Mohammed_Zeeshan_Mukram.pdf",
    "Mr. Keerthi Prasad G": "Keerthi_Prasad.pdf",
    "Mrs. Chaithra A": "Chaithra.pdf",
    "Mrs. Akshatha A M S": "AKSHATHA_AMS.pdf",
    "Ms. Rakshitha J N": "Rakshitha_JN.pdf",
    "Ms. Anusha A Nadiger": "ANUSHA_A_NADIGER.pdf",
    "Mrs. Preethi N M": "PREETHI_N_M.pdf",
    "Ms. Jayalakshmi M": "Jayalakshmi_M.pdf",
    "Ms. Nayana C M": "Nayana_Cm.pdf",
    "Ms. Bhoomika B R": "Bhoomika_B_R.pdf",
    "Ms. Anusha N L": "Anusha_N_L.pdf",
    "Mr. Chethan G S": "Chethan_G_S.pdf",
    "Mr. Praveen R": "PRAVEEN_R.pdf",
    "Mr. Darshan A": "DARSHAN.pdf",
    "Ms. Mukta Pujar": "MUKTA_PUJAR.pdf",
    "Mrs. Shilpa R. N": "Chaithra.pdf",
    "Ms. Divya M": "Divya.M.pdf",
    "Ms. Meghana A B": "Meghana_A_B.pdf",
    "Mrs. Shwetha SP": "Shwetha_SP.pdf"
  };

  return cvMap[facultyName] || null;
};

// Faculty data from user
const facultyData = {
  "Dr. Asha K": {
    "tagline": "Passionate Educator, Lifelong Learner",
    "contact": "9886391252",
    "linkedin": "https://www.linkedin.com/in/asha-k-b91221212/",
    "vidwan": "https://vidwan.inflibnet.ac.in/profile/238110",
    "email": "asha.k@gmit.edu.in",
    "about": "Dedicated and innovative academician with over 15 years of experience in teaching, research, and academic coordination. Actively involved in advancing Artificial Intelligence, Machine Learning, and Computer Science education through project-based learning, mentorship, and Scopus-indexed publications. A strong believer in lifelong learning, she combines theory with real-world applications to foster creativity, critical thinking, and innovation among students.",
    "objective": "To work in a dynamic academic and research environment that promotes innovation and continuous learning, while contributing to institutional growth through effective teaching, impactful research, and meaningful industry collaborations in the field of Artificial Intelligence and Computer Science.",
    "skills": [
      "Programming Languages: Python, C/C++, Java, MATLAB scripting",
      "Learning Management Systems (LMS): Moodle, Blackboard, Canvas",
      "Presentation & Collaboration: Microsoft PowerPoint, Google Workspace, Zoom, Microsoft Teams",
      "Version Control & Collaboration: Git, GitHub"
    ],
    "education": [
      "Ph.D – Computer Science and Engineering, CSE Research Center, RVCE, Bangalore (2023)",
      "M.Tech – Computer Science and Engineering, UBDT, Davangere (2007)",
      "B.E. – Electrical and Electronics Engineering, VTU Belgaum"
    ],
    "summary": "Associate Professor at GM Institute of Technology with over 15 years of teaching and research experience in Artificial Intelligence, Machine Learning, and Computer Vision. She has published several Scopus-indexed papers on handwriting recognition, deep learning, and OCR technologies, and is recognized for her contributions to academic leadership, research guidance, and professional development programs.",
    "research": [
      "Segmentation of Characters in a Handwritten Kannada Document – International Journal of Systems Assurance Engineering and Management, 2021",
      "Region of Interest Extraction Using Optical Character Recognition Template – International Journal of Sensors, Wireless Communications and Control, 2021",
      "Automation in Agriculture using AGROBOT – ICACT Conference Proceedings, 2021",
      "Deep Learning Based CNN for Handwriting Recognition – Turkish Online Journal of Qualitative Inquiry, 2021",
      "Handwriting Recognition using Deep Learning based CNN – IJRTE, 2019"
    ],
    "training": [
      "FDP on Microsoft Power BI Data Analyst Associate - ICT Academy, Bapuji Institute Of Engineering And Technology",
      "FDP on JAVA - Dept. of AIML, GMIT",
      "FDP on Celonis process mining using execution management system - ICT Academy, GMIT",
      "FDP on Advancing Frontiers in Supercomputing, AI, and Quantum Computing - ATAL"
    ],
    "achievements": [
      "Elite in Joy of Computing using Python – NPTEL, 2021",
      "Resource Person for AICTE Sponsored FDP – Dept. of E&C, GMIT, 2021"
    ]
  },
  "Dr. Nasreen Taj M. B": {
    "tagline": "Transforming Education through Excellence in Teaching, Research, and Evaluation",
    "contact": "+91 98442 50330",
    "linkedin": "https://www.linkedin.com/in/nasreen-taj-m-b-0509081b3/",
    "vidwan": "https://vidwan.inflibnet.ac.in/profile/237759",
    "email": "asstreg@gmu.ac.in",
    "about": "I am a passionate academician and administrator with two decades of experience in higher education. Currently serving as an Assistant Professor in Department of AIML and also as Deputy Registrar (Evaluation) at GM University, I strive to balance academic rigor with effective administration. My focus is on creating impactful learning experiences, fostering innovation, and ensuring transparency in evaluation processes.",
    "objective": "To contribute as a committed academic leader by advancing teaching, research and examination systems, while guiding students to become competent professionals and responsible citizens. I aspire to serve as Registrar (Evaluation) in the near future and design emerging programs in Data Science and related fields.",
    "skills": [
      "Academic Leadership & Administration (Evaluation, Accreditation, Policy Implementation)",
      "Teaching & Curriculum Development (AI, ML, Data Science, Programming, Databases)",
      "Research in Sentiment Analysis, Health Informatics, and Data Privacy",
      "Organizing Hackathons, Technical Fests, and Industry Collaborations",
      "Strong Communication, Mentorship, and Student Development Initiatives"
    ],
    "education": [
      "Ph.D. in Computer Science, Dayananda Sagar University, 2024",
      "M.Tech in Computer Science, BIET Davangere / VTU Belgaum, 2009 (First Class with Distinction)",
      "B.E. in Information Science & Engineering, GMIT Davangere / VTU Belgaum, 2005 (First Class)"
    ],
    "summary": "19+ years of teaching and administrative experience in higher education. Assistant Registrar (Evaluation), overseeing university-wide examinations with integrity and efficiency. Assistant Professor, Department of AI & ML, GM University. Coordinated NBA Accreditation (successfully achieved) and contributed to NAAC preparations. Organized international hackathons, FDPs, workshops, and technical fests. Actively engaged in designing new programs in Data Science for postgraduate studies.",
    "research": [
      "Published over 15 papers in reputed international journals and conferences.",
      "Key research areas: Aspect-Based Sentiment Analysis, Machine Learning, Healthcare Data Analytics, and Data Privacy.",
      "Ph.D. Thesis: Aspect Based Sentiment Analysis Model for Health Care Data (2024)."
    ],
    "training": [],
    "achievements": [
      "Best Paper Presentation Award, ICNSMDAIME-20 (2020).",
      "NPTEL Certification in 'Programming in Java' (2019).",
      "Guided student project Raitha Mithra (Smart Drip Irrigation System) – Sponsored by KSCST (2016).",
      "Bronze Level Certificates from Infosys (2014–2016) for Faculty Partnership initiatives.",
      "Successfully organized a 72-hour International Hackathon in collaboration with BPA Labs, Prague (2021).",
      "Spearheaded technical fest SUKALPA at the state level (2022)."
    ]
  },
  "Mr. Keerthi Prasad G": {
    "tagline": "Innovative Academic Leader & Research Enthusiast",
    "contact": "9620945991",
    "email": "keerthiprasad@gmit.ac.in",
    "linkedin": "https://www.linkedin.com/in/keerthi-prasad-g-4916b714b/",
    "vidwan": "https://vidwan.inflibnet.ac.in/profile/238022",
    "about": "Assistant Professor and Head of the Department of Artificial Intelligence & Machine Learning at GM Institute of Technology, Davangere. A passionate educator and researcher specializing in Handwriting Recognition, Machine Learning, and Artificial Intelligence. Actively involved in academic leadership, ERP development, and research collaborations with a focus on real-time applications and student innovation.",
    "objective": "To contribute towards institutional excellence through effective teaching, research, and innovation while fostering a culture of technology-driven learning and development.",
    "skills": [
      "Programming: Python, Java, C, C++",
      "AI & ML Applications: Handwriting Recognition, Neural Networks, PCA, DTW",
      "ERP Development and Module Management",
      "Research Tools: MATLAB, Scilab, TensorFlow",
      "Soft Skills: Leadership, Mentoring, Innovation, Team Management"
    ],
    "education": [
      "Ph.D. (Pursuing) – Computer Science & Engineering, VTU, RVCE Bengaluru",
      "M.Tech – Computer Science & Engineering, JNNCE, Shivamogga (2011)",
      "B.E. – Information Science & Engineering, GMIT, Davangere (2006)"
    ],
    "summary": "Dr. Keerthi Prasad G is an accomplished academician with over 13 years of teaching and administrative experience. He has published multiple research papers in reputed international journals and conferences, focusing on AI-based handwriting recognition and image processing. As HOD of AIML, he has guided innovative student projects, organized FDPs, and contributed to ERP development for institutional automation.",
    "research": [
      "Handwritten Character Recognition Using Morlet Stacked Sparse Auto Encoder – IJIES, 2023",
      "Recognition of Online Handwritten Kannada Characters using PCA and DTW – IJRTE, 2019",
      "Online Hindi Handwritten Character Recognition for Mobile Devices – IJACS, 2014"
    ],
    "training": [
      "FDP on Object Oriented Programming with Java Laboratory – Dept. of AIML, GMIT, 2022",
      "FDP on Machine Learning – Dept. of ISE, GMIT, 2018",
      "FDP on Computer Networks Simulation using NCTUNS – GMIT, 2018",
      "FDP on Mobile Application Development using Android – GMIT, 2015"
    ],
    "achievements": [
      "Director, ERP & SDTCD – GM University (Since 2023)",
      "Asset of the Institution Award – GMIT Management, 2022",
      "Elite Certification – NPTEL, 2019",
      "Reviewer – IEEE Transactions on Systems, Man and Cybernetics, 2014"
    ]
  },
  "Mr. Praveen R": {
  "tagline": "Empowering Learners through Data Science and Applied Computing",
  "contact": "8951894554",
  "linkedin": "",
  "email": "praveenr@gmit.ac.in",
  "about": "Dedicated educator with over 8 years of teaching experience in Computer Science and Engineering. Specialized in Data Science, Database Management Systems, and Programming, with a strong passion for delivering practical and conceptual understanding to students. Strives to bridge academic knowledge with real-world applications through effective mentoring and project-based learning.",
  "objective": "To be an integral part of a result-oriented organization that provides a competitive work environment and fosters professional and personal growth while contributing meaningfully to the success of the institution.",
  "skills": [
  "Programming Languages: C, C++, C# .NET, Python, R",
  "Data Analytics & Visualization: Tableau, Microsoft Excel",
  "Database Management: MySQL",
  "Data Science & Machine Learning using Python and R",
  "Data Mining and Data Warehousing",
  "Unix System and Shell Programming",
  "Software Architecture and Business Intelligence",
  "Soft Skills: Communication, Mentoring, Teamwork, Problem Solving"
  ],
  "education": [
  "M.Tech – Computer Science and Engineering, UBDT College of Engineering, Davangere (2011)",
  "B.E. – Computer Science and Engineering, Siddaganga Institute of Technology, Tumkuru (2008)",
  "Diploma – Computer Science and Engineering, SJM Polytechnic, Chitradurga (2004)",
  "Matriculation – D.R.R. High School, Davangere (2000)"
  ],
  "summary": "Assistant Professor in the Department of Artificial Intelligence and Machine Learning at GM Institute of Technology, Davangere, with over 8 years of experience in teaching and industry training. Previously worked as a Training Consultant at NI Analytics India, Bengaluru, where he trained students in Data Science, Python, R, and Data Visualization using Tableau. Actively contributes to institutional development through student mentorship, NBA accreditation work, and research guidance.",
  "research": [],
  "training": [
  "Training Consultant – NI Analytics India, Bengaluru (2018–2019): Conducted Data Science and Data Analytics training using Python, R, Excel, and Tableau",
  "Faculty Development Programmes (FDPs) attended on Data Science, AI, and Academic Excellence",
  "National Level Paper Presentation and Project Guidance Activities"
  ],
  "achievements": [
  "Actively involved in NBA Accreditation and NAAC Preparation Work",
  "Presented Papers at National Level Conferences",
  "Guided multiple student projects in Data Science and Software Development",
  "Served as a University (VTU) Valuation Examiner for multiple subjects"
  ]
  },
  "Ms. Mukta Pujar": {
  "tagline": "Inspiring Minds Through Innovation and Learning",
  "contact": "9886391252",
  "linkedin": "https://www.linkedin.com/in/mukta-pujar-gmit",
  "vidwan": "https://vidwan.inflibnet.ac.in/profile/305188",
  "email": "muktapujar@gmit.ac.in",
  "about": "Ms. Mukta Pujar is a passionate engineering educator dedicated to inspiring students through practical learning and research. Committed to fostering innovation and preparing the next generation of engineers for real-world challenges.",
  "objective": "To engage in an intellectually stimulating environment where I can apply my expertise in AI and Data Science to empower learners, drive innovation in teaching methodologies, and contribute to the academic and research excellence of the institution.",
  "skills": [
    "Programming Languages: Python, C/C++, Java, MATLAB scripting",
    "Learning Management Systems (LMS): Moodle, Blackboard, Canvas",
    "Presentation & Collaboration: Microsoft PowerPoint, Google Workspace, Zoom, Microsoft Teams",
    "Version Control & Collaboration: Git, GitHub"
  ],
  "education": [
    "M.Tech  - UBDTCE, Davanagere, 2021",
    "B.E  - STJIT, Ranebennur, 2019"
  ],
  "experience": [
    "Teaching - 3 years at GM University, Davanagere",
    "Industry - None",
    "Research - None"
  ],
  "training": [
    "FDP on Microsoft Power BI Data Analyst Associate - ICT Academy, BIET, 10–14 Oct 2022",
    "FDP on JAVA - Dept. of AIML, GMIT, 23–24 Nov 2022",
    "FDP on Celonis process mining using execution management system - ICT Academy, GMIT, 3–5 Apr 2024",
    "FDP on Advancing Frontiers in Supercomputing, AI, and Quantum Computing - ATAL",
    "Internship on IoT and Image Processing"
  ],
  "research_interest": [
    "Machine learning applications in healthcare and education",
    "Deep learning architectures and optimization techniques"
  ],
  "research": [
    "Publish survey paper on 'Chaotic Based Image Encryption' in IJSREM, Feb 2021",
    "Publish survey paper on 'Paper on Hive Bigdata' in IJSREM, Feb 2021"
  ],
  "patent": [
    "Patent entitled 'Infinite Storage Glitche' filed on June 16, 2025"
  ],
  "projects_guided": [
    "Information Retrieval System using Gen AI",
    "Infinite Storage Glitche"
  ],
  "funded_projects": [
    "AI-based Learning Module for Industrial Automation"
  ],
  "course_documents": [
    "Artificial Intelligence for Business",
    "Medical Image Analysis",
    "Machine Learning"
  ],
  "administrative_responsibilities": [
    "Department Level - 5S, Placement, IIC, NPTEL",
    "University Level - None"
  ],
  "achievements": [
    "-"
  ]
},
  "Mrs. Akshatha A M S": {
    tagline: "Learning Made Truly Meaningful",
    contact: "8296840319",
    linkedin: "https://www.linkedin.com/in/akshatha-ams-gmit",
    email: "akshatha.ams@gmit.edu.in",
    about: "Passionate educator with expertise in Artificial Intelligence, Machine Learning, Data Structures, and core computer science subjects. Dedicated to guiding students towards innovation, research, and industry-ready skills in the field of engineering.",
    objective: "To work in an organization where my knowledge and skills are enriched and I get opportunities to contribute towards organizational goals.",
    skills: [
      "Programming Languages: C, C++, Java, Python",
      "Data Structures & Algorithms",
      "Database Management: MySQL",
      "Software & Tools: Eclipse IDE, Anaconda",
      "Design Patterns: Singleton, MVC",
      "Core Subjects Expertise: Artificial Intelligence, Machine Learning, Data Structures, Java Programming",
      "Soft Skills: Communication, Teamwork, Adaptability, Problem-Solving, Dedication"
    ],
    education: [
      "B.E. – Computer Science Engineering",
      "M.Tech – Computer Science Engineering"
    ],
    summary: "Experienced teaching professional with expertise in Artificial Intelligence, Machine Learning, Data Structures, and core computer science subjects. Adept at creating an engaging learning environment, mentoring students in both theory and practical applications. Passionate about fostering innovation, critical thinking, and research-oriented skills to prepare students for future challenges in the field of engineering.",
    research: [],
    training: [
      "AICTE ATAL FDP on Building a Culture of Cyber Security - GMIT, 11/11/2024 to 16/11/2024",
      "AICTE ATAL FDP on Advancing Frontiers in Supercomputing, AI, and Quantum Computing - GMIT, 09/12/2024 to 14/12/2024",
      "Faculty Development Programme through LEAP"
    ],
    achievements: []
  },
  "Mrs. Shilpa R. N": {
    tagline: "Teaching is the seed that grows into innovation and discovery.",
    contact: "+91-7411740162",
    linkedin: "https://www.linkedin.com/in/shilpa-rn-gmit",
    email: "shilparn.fet.aiml@gmail.com",
    about: "M.Tech in Computer Science with nearly 9 years of teaching experience in reputed engineering colleges. Passionate about delivering quality education, mentoring students, and engaging in academic development activities.",
    objective: "To leverage my academic expertise and teaching experience to contribute as an Assistant Professor in a reputed engineering institution, fostering student learning and advancing research in Computer Science.",
    skills: [
      "Languages: C, C++, SQL, MATLAB",
      "Platforms: Windows (XP/2000/Vista/Win7), Linux",
      "Core Competencies: Data Structures, Algorithm Design & Analysis, Compiler Design, Software Architecture, DBMS, Artificial Intelligence, Machine Learning",
      "Strong communication, mentoring, and academic coordination skills"
    ],
    education: [
      "M.Tech in Computer Science & Engineering – Bapuji Institute of Technology (VTU)",
      "B.E. in Computer Science & Engineering – Tontadarya College of Engineering (VTU)"
    ],
    summary: "Experienced Computer Science Assistant Professor with expertise in algorithms, database systems, and Artificial Intelligence. Skilled in delivering clear, application-oriented lectures that bridge theory with practical use cases. Dedicated to mentoring students, guiding projects, and fostering research culture. Passionate about leveraging emerging technologies to enhance teaching and contribute to academic excellence.",
    research: [
      "International Journal on Application of Text Mining using Convolutional Neural Network for English Grammar Correction"
    ],
    training: [
      "The Faculty Development Programme through LEAP, demonstrating dedication to learning and commitment to professional growth.",
      "The Faculty Development Programme on English Language Learning.",
      "The Faculty Development Programme on AWS."
    ],
    achievements: [
      "Certification on Salesforce Admin."
    ]
  },
  "Ms. Jayalakshmi M": {
    tagline: "From learning to leading—let’s build the future with AIML together.",
    contact: "9036498436",
    linkedin: "https://www.linkedin.com/in/jayalakshmi-m-52791434b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app=share_via&utm_content=profile&utm_medium=android_app",
    email: "jayalakshmim.fet.scst.aiml@gmu.ac.in",
    about: "I am passionate professional with a strong background in electronics and communication. I have worked on innovative projects involving data transmission and fault detection in machines. My skills include Verilog, VHDL, and applying technology to solve real-world problems. I am optimistic, dedicated, and committed to continuous learning and growth.",
    objective: "To pursue a challenging role where I can apply my technical knowledge and problem-solving skills, while contributing to organizational growth and enhancing my professional development.",
    skills: [
      "VHDL",
      "Verilog",
      "DevOps",
      "Tableau",
      "Power BI"
    ],
    education: [
      "M.Tech (VLSI Design and Embedded System) – Siddaganga Institute of Technology, Tumakur, VTU, 9.23 CGPA, 2021",
      "B.E (Electronics and Communication) – UBDT College of Engineering, Davangere, VTU, 70.95%, 2018",
      "2nd PUC – Sri Siddaganga PU College for Women, Tumakur, KEA, 74.5%, 2014",
      "SSLC – Govt High School, N. Devarahalli, KSEEB, 84.32%, 2012"
    ],
    summary: "Enthusiastic and dedicated professional with a strong foundation in electronics and communication engineering. Skilled in Verilog, VHDL, and problem-solving in embedded and digital systems. Experienced in innovative projects such as Li-Fi data transmission and vibration analysis for fault prediction in electric machines, with research work published at an international conference. Recognized for being optimistic, punctual, and committed, with a passion for continuous learning, teaching, and contributing to technological advancements.",
    research: [
      "Published a paper entitled 'Vibration detection and analysis for fault prediction of electric rotating machines' at the international conference on electrical, electronics and computer science (ICEECS), Davangere.",
      "Received seed money from the college for the generation of an AI-based timetable system."
    ],
    training: [
      "AICTE ATAL FDP on 'Advanced Frontiers in Supercomputing, AI, and Quantum Computing: Innovation, Applications, and Integration'"
    ],
    achievements: [
      "Won first prize in essay writing at hobli level during school days",
      "Won first prize in essay kabaddi at hobli level during school days"
    ]
  },
  "Mrs. Chaithra A": {
    tagline: "Deep learning Expert",
    contact: "9482252298",
    linkedin: "http://www.linkedin.com/in/chaitra-dhumwad-b57393285",
    email: "chaithradhumwad.fet.scst.aiml@gmu.ac.in",
    about: "I am a dedicated professional with a passion for problem-solving and continuous learning. I thrive in collaborative environments and enjoy contributing to meaningful projects that create positive impact.",
    objective: "Analytical and strong and detail oriented in data analysis, data visualization with machine learning. Good research healthcare project and visualization project. Strong proficiency in software and knack for identifying data in different sectors opportunities.",
    skills: [
      "Python",
      "SQL",
      "Machine learning",
      "Deep learning",
      "Product Analytics",
      "MLops",
      "VLSI",
      "MATLAB"
    ],
    education: [
      "M.S – Scaler Academy (WOOLF University), Data Science and Machine Learning, 2025",
      "M.Tech – Manipal University, Control System Engineering, 2018, First Class with Distinction",
      "B.E – VTU Belgaum (KLS VDIT Haliyal), Electrical and Electronics Engineering, 2015, Second Class",
      "PUC – SMPU College Dharwad, PCMB, 2011, Second Class",
      "SSLC – St. Joseph High School Somwarpet, 2009, First Class with Distinction"
    ],
    summary: "Research-driven with expertise in developing innovative algorithms and conducting advanced studies in AI/ML applications. Proven track record of publishing in reputed journals, securing research grants, and mentoring graduate students. Committed to advancing the field through cutting-edge research and collaborative projects.",
    research: [
      "Chaithra A, \"Generating Safety Critical Test Bench for Level-A Design as per DO-254,\" International Journal of Pure and Applied Mathematics, Volume 119, No. 16, 2018, pp. 293-296. ISSN: 1314-3395",
      "Submitted a proposal to ISRO for the development of a health monitoring system for astronauts",
      "Received seed money from the college for the generation of an AI-based timetable system"
    ],
    training: [
      "5-day FDP on Advanced AI Tools, Techniques and Applications – 02/09/2024 to 06/09/2024 – Gopalan College of Engineering and Management",
      "One-week FDP on Advancing Frontiers in Supercomputing, AI, and Quantum Computing – 09/12/2024 to 14/12/2024 – GMIT, Davangere",
      "Project Evaluator – Electrical Department, Jain Institute of Technology, 20/11/2024",
      "Hands-on Data Visualization session using Tableau – GM University, Davangere",
      "FDP at SDM Engineering College, Dharwad on Smart Cities and Mobility",
      "Technical talk on Machine Learning for Smart Cities – Institute of Engineers, Dharwad"
    ],
    achievements: [
      "Elite NPTEL Online Certification in Deep Learning by IIT Ropar",
      "Skill Mastery Certification by Scaler Academy in SQL",
      "Skill Mastery Certification by Scaler Academy in Python Libraries",
      "Skill Mastery Certification by Scaler Academy in EDA Fundamentals"
    ]
  },
  "Ms. Nayana C M": {
    tagline: "Java Expert",
    contact: "6363971512",
    email: "nayanacm.fet.scst.aiml@gmu.ac.in",
    linkedin: "https://www.linkedin.com/in/nayana-c-m-678b18252/",
    about: "Research-driven with expertise in developing innovative algorithms and conducting advanced studies in AI/ML applications. Proven track record of publishing in reputed journals, securing research grants, and mentoring graduate students. Committed to advancing the field through cutting-edge research and collaborative projects.",
    objective: "Analytical and strong and detail oriented in data analysis, data visualization with machine learning. Good research healthcare project and visualization project. Strong proficiency in software and knack for identifying data-driven opportunities across different sectors.",
    skills: [
      "JAVA",
      "C++",
      "SQL",
      "Python",
      "Computer Networking"
    ],
    education: [
      "MCA – VTU, Computer Application, 2022, First Class with distinction",
      "BCA – UBDT Engineering College Davangere, Computer Application, 2020, First Class",
      "PUC – BIMS College Davangere, PCMB, 2017, First Class",
      "SSLC – Sri Mallikarjuna High School Kaidale, 2015, First Class"
    ],
    summary: "Research-driven with expertise in developing innovative algorithms and conducting advanced studies in AI/ML applications. Proven track record of publishing in reputed journals, securing research grants, and mentoring graduate students. Committed to advancing the field through cutting-edge research and collaborative projects.",
    research: [],
    training: [],
    achievements: []
  },
  "Ms. Rakshitha J N": {
    tagline: "Creating Thinkers, Not Just Graduates",
    contact: "7899335384",
    linkedin: "https://www.linkedin.com/in/rakshitha-j-n-a2a1b725a",
    email: "raksithajn.fet.scst@gmu.ac.in",
    about: "Committed to inspiring students to explore innovative solutions, engage in meaningful research, and develop practical skills that meet industry demands. Focused on creating a supportive learning environment that encourages curiosity, critical thinking, and continuous growth in the engineering domain.",
    objective: "To work in a dynamic environment and result oriented atmosphere, which provides me a challenging career and opportunity for growth so that my skills and knowledge can be utilized to the best.",
    skills: [
      "C",
      "Core Java",
      "Python",
      "MySQL",
      "Web Development",
      "Communication",
      "Teamwork",
      "Dedication"
    ],
    education: [
      "BCA – Computer Science",
      "MCA – Computer Science"
    ],
    summary: "Passionate about mentoring future engineers to excel in research, development, and industry challenges by emphasizing hands-on experience and critical inquiry. Committed to continuous improvement of curriculum and teaching practices to prepare students for dynamic and competitive technological fields.",
    research: [],
    training: [
      "Microsoft Certification in Introduction to Programming using HTML and CSS - 2022",
      "Internet Of Things - Ethical Byte - 2022",
      "Microsoft Azure Fundamentals(AZ-900) – 2023",
      "Certificate in Java Full Stack Development - 2024"
    ],
    achievements: []
  },
  "Ms. Anusha A Nadiger": {
    tagline: "From knowledge to innovation, I'm here to guide your path in Artificial Intelligence.",
    contact: "9113892089",
    linkedin: "https://www.linkedin.com/in/anushanadiger",
    email: "anushaanadiger.fet.scst@gmu.ac.in",
    about: "I am passionate about creating a positive and engaging learning environment that encourages curiosity, innovation, and confidence in students. With expertise in Artificial Intelligence, Machine Learning, Web Development, C, Java, SQL and Database Management. I enjoy guiding learners to develop both technical skills and problem-solving abilities. I am committed to continuously improving my teaching methods while inspiring students to achieve academic success and personal growth.",
    objective: "To pursue a role that combines my passion for technology and teaching, fostering student learning and organizational growth while enhancing my professional skills.",
    skills: [
      "C",
      "Java",
      "SQL",
      "Web Development",
      "Database Management"
    ],
    education: [
      "M.Tech (Data Engineering) – G M University, Davangere – Pursuing",
      "BE (Computer Science & Engineering) – Sri Taralabalu Jagadguru Institute of Technology, Ranebennur – VTU, Belgaum – 8.1 CGPA, 2025",
      "2nd PUC – Sir M V PU College, Davangere – KEA – 96, 2021",
      "SSLC – Rotary English Medium High School, Ranebennur – KSEEB – 96.4, 2019"
    ],
    summary: "Dedicated and motivated professional committed to fostering growth, delivering results, and continuously improving skills. Known for creating a positive impact and driving meaningful outcomes in every endeavour.",
    research: [
      "Published a paper entitled \"HOSPITAL MANAGEMENT SYSTEM using MERN Stack\" in IJIRSET, December 2024."
    ],
    training: [
      "Received certificates on \"Full Stack Web Development\" Course.",
      "Received certificate of Python workshop."
    ],
    achievements: []
  },
  "Mrs. Deepa A L": {
    tagline: "Python Expert",
    contact: "9902307761",
    linkedin: "http://linkedin.com/in/deepa-a-l-11b7701ab",
    email: "deepaal.fet.scst.aiml@gmu.ac.in",
    about: "I am a graduate of BIET Engineering College(CSE), where I built a strong foundation in engineering and technology. With over 3 years of professional experience at Sonata Software, I have worked on diverse projects that strengthened my skills.",
    objective: "To pursue a challenging career where I can apply my technical knowledge and industry experience to create innovative solutions and evolve as a data-driven professional.",
    skills: [
      "Python",
      "C programming",
      "Java"
    ],
    education: [
      "M.Tech – GM University, Data Engineering (Pursuing)",
      "B.E – VTU Belgaum (BIET Engineering College), CSE, 2021, First Class",
      "PUC – Dr. Thimmareddy PU College, PCMB, 2017, First Class",
      "SSLC – Bapuji School, Davangere, 2015, First Class with Distinction"
    ],
    summary: "Enthusiastic and results-driven Engineering Graduate from BIET with over 3 years of professional experience at Sonata Software in software development and client-focused project delivery. Skilled in Python, SQL, and software engineering practices, with growing expertise in Artificial Intelligence and Machine Learning.",
    research: [],
    training: [
      "English Communicative class conducted by GM University"
    ],
    achievements: [
      "Microsoft Certificate on Fundamentals of Azure",
      "Microsoft Certificate on M365",
      "Microsoft Certificate on Purview"
    ]
  },
  "Mrs. Preethi N M": {
    tagline: "Empowering Minds, Inspiring Futures",
    contact: "8618436270",
    linkedin: "https://www.linkedin.com/in/preethi-nm-9a3642255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "preethinm.fet.scst@gmu.ac.in",
    about: "I am passionate about continuous learning and growth, and I strive to create an engaging environment that supports knowledge sharing and holistic development.",
    objective: "To inspire and guide students in Artificial Intelligence and Machine Learning, helping them develop both academic and practical skills.",
    skills: [
      "Java",
      "Web Development",
      "MySQL"
    ],
    education: [
      "M.Tech (Data Engineering) – GM University, Davangere – Pursuing",
      "BE (Information Science & Engineering) – BIET College, Davangere – VTU, Belgaum – 9.14 CGPA, 2025",
      "2nd PUC – Sri Siddaganga PU Science College, Davangere – KEA – 100, 2021",
      "SSLC – Smt Yamunabhai Shantharam Nallur High School, Davangere – KSEEB – 97.12, 2019"
    ],
    summary: "Graduate in Information Science and Engineering with a passion for teaching and mentoring in Artificial Intelligence and Machine Learning. Dedicated to creating an interactive learning environment that bridges theory with real-world applications.",
    research: [],
    training: [
      "Certificate in Java Full Stack Development",
      "Certificate in AIML"
    ],
    achievements: []
  },
  "Mr. Darshan A": {
    tagline: "Ignite your AI journey: I'm here to mentor your growth and build the future of intelligent systems with you",
    contact: "8431032270",
    linkedin: "https://www.linkedin.com/in/darshan-a-159a29230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "darshana.fet.scst.aiml@gmu.ac.in",
    about: "I am dedicated with a strong foundation in Artificial Intelligence, Machine Learning, and Web Development, backed by hands-on project experience. I am passionate about guiding students, fostering critical thinking, and encouraging innovation in the classroom. With excellent communication and teamwork skills, I strive to create an engaging and impactful learning environment.",
    objective: "To leverage my expertise in Artificial Intelligence, Machine Learning, and Web Development to deliver high-quality education and inspire students. Committed to fostering an engaging learning environment that promotes innovation and critical thinking. Seeking opportunities to contribute to academic growth and curriculum development while advancing my professional skills.",
    skills: [
      "JAVA",
      "PYTHON",
      "WEB DEVELOPMENT",
      "Data Analytics"
    ],
    education: [
      "M.Tech (Data Engineering) – G M UNIVERSITY, Davangere, Pursuing",
      "BE (Computer Science and Engineering) – S T J INSTITUTE OF TECHNOLOGY, Ranebennur, VTU Belgaum, 65.6%, 2024",
      "2nd PUC – St. Aloysius College Amaravathi, Harihar, KEA, 66.7%, 2020",
      "SSLC – M K ET L KE M School, Harihar, CBSE, 62%, 2018"
    ],
    summary: "Enthusiastic and dedicated professional with expertise in AI, ML, and Web Development, dedicated to delivering impactful learning experiences. Skilled in guiding students, managing projects, and fostering innovation in academic settings.",
    research: [],
    training: [],
    achievements: [
      "State Level Football Player",
      "Certificate in Android Studio Application Development"
    ]
  },
  "Mr. Chethan G S": {
    tagline: "Empowering Young Minds to engineer Intelligence",
    contact: "9353398740",
    linkedin: "https://www.linkedin.com/in/chethan-gs-3b9b0021b",
    email: "chethangs.fet.scst.aiml@gmu.ac.in",
    about: "I am a passionate professional with a strong background in Computer Science and Data Engineering. I have worked on innovative projects involving data analytics, predictive modelling, and real-world problem-solving. My skills include Python, SQL, Tableau, and applying data-driven approaches to create impactful solutions.",
    objective: "To pursue a challenging role in Computer Science, Data Engineering, and Analytics where I can apply my technical knowledge and problem-solving skills. I aim to contribute effectively to innovative, data-driven projects that foster organizational growth.",
    skills: ["Python", "SQL", "Tableau", "Web Development"],
    education: [
      "M.Tech (Data Engineering) – GM University, Davangere, Pursuing",
      "Data Analytics – Great Learning Institute of Management, Bengaluru, 2024, Certified",
      "BE (Computer Science & Engineering) – STJ Institute of Technology, Ranebennur, VTU Belgaum, 68%, 2023",
      "12th Std (PCMB) – DR. Thimmareddy Foundation PU College For Boys, Davangere, KEA, 65.6%, 2019",
      "10th Std – TPCK English Medium High School, Holalkere, Chitradurga, KSEEB, 64%, 2017"
    ],
    summary: "Enthusiastic and dedicated professional with a strong foundation in Computer Science, Data Engineering, and Analytics. Skilled in developing predictive models, performing data analysis, and delivering insights using Python, SQL, Tableau, and Excel. Experienced in executing impactful projects across domains such as real estate, banking, and social media analytics.",
    research: [],
    training: ["AWS training with hands-on experience in cloud services"],
    achievements: ["Data Analytics Certification by Great Learning"]
  },
  "Mr. Mohammed Zeeshan Mukram": {
    tagline: "Full Stack Developer, Data Analyst (Shaping curious minds into future AI Innovators)",
    contact: "9066852215",
    linkedin: "https://www.linkedin.com/in/mohammed-zeeshan-mukram-348489260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mohammedzeeshan.fet.scst@gmu.ac.in",
    about: "A passionate educator blending computer science fundamentals with AI innovation. Dedicated to empowering students to turn curiosity into impactful technology.",
    objective: "To utilize my expertise in Data Engineering and emerging technologies to mentor students and contribute to academic excellence. I aspire to bridge the gap between theory and practical industry applications.",
    skills: ["Java", "Python", "Web Development", "AI", "ML", "MySQL", "Frameworks & Libraries"],
    education: [
      "M.Tech (Data Engineering) – GM University, Davangere, Pursuing",
      "BE (Computer Science & Engineering) – Sri Taralabalu Jagadguru Institute of Technology, Ranebennur, VTU Belgaum, 65.50%, 2024",
      "2nd PUC – Sri Siddaganga PU Science College, Davangere, KEA, 66.16%, 2020",
      "SSLC – Sri Siddaganga Composite High School, Davangere, KSEEB, 74.40%, 2018"
    ],
    summary: "Computer Science graduate with an M.Tech in Data Engineering, now shaping young minds as a Lecturer. Passionate about guiding students to innovate, research, and lead in technology.",
    research: [],
    training: [],
    achievements: [
      "Certificate in Java Full Stack Development",
      "Certificate in Android Studio Application Development",
      "Represented institute as Football player at State level"
    ]
  },
  "Ms. Bhoomika B R": {
    tagline: "Guiding every learner to mastery",
    contact: "7899458283",
    linkedin: "https://www.linkedin.com/in/bhoomika-b-r-389a58227",
    email: "bhoomikabr.fet.scst@gmu.ac.in",
    about: "Passion for guiding students towards academic and career excellence. Skilled at breaking down complex concepts into practical applications. Committed to fostering innovation and critical thinking.",
    objective: "To utilize my knowledge in Artificial Intelligence and Machine Learning to inspire students, simplify complex concepts, and nurture innovation. I aim to contribute to academic excellence by guiding learners toward research, problem-solving, and future-ready skills.",
    skills: ["Python", "AI & ML", "SQL"],
    education: [
      "M.Tech (Data Engineering) – GM University, Davangere, Pursuing",
      "BE (Computer Science & Engineering) – GM Institute of Technology, Davangere, VTU Belgaum, 7.06, 2025",
      "2nd PUC – St John's PU College, Davangere, KEA, 80.33, 2021",
      "SSLC – NMK High School, Jagalur, KSEEB, 82.88, 2019"
    ],
    summary: "Dedicated and motivated professional committed to fostering growth, delivering impactful results, and continuously enhancing skills. Creating positive learning environment and driving meaningful outcomes through innovation and knowledge-sharing.",
    research: [],
    training: [],
    achievements: [
      "Certification on AI & ML",
      "Certification on Machine Learning",
      "Certification on Introduction to Prompt Engineering for Generative AI",
      "Certification on Full Stack Web Development"
    ]
  },
  "Ms. Anusha N L": {
    tagline: "Empowering Minds, Inspiring Futures",
    contact: "7676603460",
    linkedin: "https://www.linkedin.com/in/anusha-n-l-96313a38a",
    email: "anushanl.fet.scst@gmu.ac.in",
    about: "I am passionate about continuous learning and growth, and I strive to create an engaging environment that supports knowledge sharing and holistic development.",
    objective: "To inspire and guide students in Artificial Intelligence and Machine Learning, helping them develop both academic and practical skills.",
    skills: ["Java", "Web Development", "MySQL"],
    education: [
      "M.Tech (Data Engineering) – GM University, Davangere, Pursuing",
      "BE (Computer Science & Engineering) – University B D T College of Engineering, Davangere, VTU Belgaum, 9.02, 2025",
      "2nd PUC – Sri Siddaganga PU Science College, Davangere, KEA, 89.5, 2020",
      "SSLC – Saint John's English Medium School, Davangere, KSEEB, 93.6, 2018"
    ],
    summary: "Graduate in Computer Science and Engineering with a passion for teaching and mentoring in Artificial Intelligence and Machine Learning. Dedicated to creating an interactive learning environment that bridges theory with real-world applications.",
    research: [],
    training: [],
    achievements: [
      "Certificate in Java Full Stack Development",
      "Certificate in IOT"
    ]
  },
  "Ms. Divya M": {
  tagline: "Guiding AI learners from basics to brilliance",
  contact: "6361012474",
  linkedin: "https://www.linkedin.com/in/divya-m-05a909253",
  email: "divyam@gmu.ac.in",

  about:
    "I am Divya M, Lecturer in the Department of Artificial Intelligence and Machine Learning at GM University. My interests include C programming, Java, Apex, Python, and front-end technologies. I enjoy helping students strengthen their fundamentals and apply concepts through hands-on learning.",

  objective:
    "To build a strong academic career in Artificial Intelligence and Machine Learning by delivering concept-focused teaching and continuously upgrading my skills in deep learning and programming.",

  skills: [
    "C Programming",
    "Java",
    "Python",
    "Apex",
    "HTML & CSS"
  ],

  education: [
    "M.Tech (Deep Learning) – GM University, Davanagere – Pursuing",
    "B.E (Computer Science & Engineering) – BIET, Davanagere – 2025"
  ],

  summary:
    "Lecturer in the Department of AIML with a strong foundation in programming and an interest in deep learning. Passionate about mentoring students, simplifying concepts, and creating a practical, supportive learning environment.",

  research: [],
  training: [],
  achievements: []
},
  "Ms. Meghana A B": {
    "tagline": "Empowering Students Through Practical AI Learning",
    "contact": "9535744274",
    "linkedin": "https://www.linkedin.com/in/meghana-a-b-81961b249",
    "email": "meghanaab@gmu.ac.in",
    "about": "I am Meghana A B from the Department of Artificial Intelligence and Machine Learning at GM University. I hold a Bachelor's degree in Computer Applications and a Master's degree in Computer Applications. My areas of interest include C Programming, Java, Front-end Technologies, and Artificial Intelligence. I am passionate about teaching and guiding students to apply technical knowledge creatively through practical learning and innovation.",
    "objective": "To inspire students in the field of Artificial Intelligence and Machine Learning through innovative teaching methods and practical technical exposure.",
    "skills": [
      "C Programming",
      "Java",
      "Front-end Technologies",
      "Artificial Intelligence",
      "Machine Learning"
    ],
    "education": [
      "Master of Computer Applications (MCA) - Davangere University, Karnataka, 2025",
      "Bachelor of Computer Applications (BCA) - GMS Academy First Grade College, Davanagere, 2023"
    ],
    "summary": "Assistant Professor in AIML at GM University with interests in Artificial Intelligence, Machine Learning, programming, and practical student-oriented learning.",
    "research": [
      "Artificial Intelligence & Machine Learning"
    ],
    "training": [],
    "achievements": [
      "Guided UG Projects: Grama Yatri (Mobility)",
      "Guided UG Projects: Grama Suvidha"
    ]
  },
  "Mrs. Shwetha SP": {
    "tagline": "Inspiring Innovation Through AI and Practical Learning",
    "contact": "9738867206",
    "linkedin": "https://www.linkedin.com/in/shwetha-sp-2a78743b7/",
    "email": "shwethasp@gmu.ac.in",
    "about": "I am Shwetha SP from the Department of Artificial Intelligence and Machine Learning at GM University. I hold a Bachelor's degree and an M.Tech in Computer Science and Engineering. My areas of interest include C Programming, Python, Data Structure, and Artificial Intelligence. I am passionate about teaching and guiding students to apply technical knowledge creatively through practical learning and innovation.",
    "objective": "To empower students with strong technical and practical knowledge in Artificial Intelligence and emerging technologies through innovative teaching methodologies.",
    "skills": [
      "C Programming",
      "Python",
      "Data Structures",
      "Artificial Intelligence",
      "Machine Learning"
    ],
    "education": [
      "M.Tech (Computer Science and Engineering) - Atria Institute of Technology, Bangalore, Karnataka, 2026",
      "BE (CSE) - UBDT College of Engineering, Davanagere, 2013"
    ],
    "summary": "Tutor in AIML at GM University with expertise in programming, Artificial Intelligence, and practical student-focused technical education.",
    "research": [
      "Artificial Intelligence & Machine Learning"
    ],
    "training": [],
    "achievements": [
      "Guided UG Project: Scalable News Application",
      "Guided UG Project: Kavya-Kanaja",
      "Guided UG Project: Matru-Seva Healthcare Application"
    ]
  }
};

const FacultySection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isInView, setIsInView] = useState(false);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Pause/play autoplay based on section visibility
  useEffect(() => {
    if (!swiperRef.current) return;

    if (isInView) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
  }, [isInView]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedFaculty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFaculty]);

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    setActiveTab('about');
  };

  const closeModal = () => {
    setSelectedFaculty(null);
  };

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    if (!selectedFaculty) return null;

    const faculty = facultyData[selectedFaculty.name];
    if (!faculty) return null;

    switch (activeTab) {
      case 'about':
        return (
          <div id="about" className="tab-content active">
            <h2>About Me</h2>
            <p>{faculty.about}</p>
      
            <h2>Career Objective</h2>
            <p>{faculty.objective}</p>
      
            <h2>Skills</h2>
            <ul>
              {faculty.skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              )) || []}
            </ul>
      
            <h2>Professional Summary</h2>
            <p>{faculty.summary}</p>
          </div>
        );
      case 'resume':
        return (
          <div id="resume" className="tab-content active">
            <h2>Education</h2>
            <ul>
              {faculty.education?.map((edu, index) => (
                <li key={index}>{edu}</li>
              )) || []}
            </ul>
          </div>
        );
      case 'research':
        return (
          <div id="research" className="tab-content active">
            <h2>Research</h2>
            {faculty.research && faculty.research.length > 0 ? (
              <ul>
                {faculty.research.map((research, index) => (
                  <li key={index}>{research}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">None</p>
            )}
          </div>
        );
      case 'training':
        return (
          <div id="blog" className="tab-content active">
            <h2>Training</h2>
            {faculty.training && faculty.training.length > 0 ? (
              <ul>
                {faculty.training.map((training, index) => (
                  <li key={index}>{training}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">None</p>
            )}
          </div>
        );
      case 'achievements':
        return (
          <div id="achievements" className="tab-content active">
            <h2>Achievements</h2>
            {faculty.achievements && faculty.achievements.length > 0 ? (
              <ul>
                {faculty.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">None</p>
            )}
          </div>
        );
        return null;
    }
  };

  return (
    <section 
      id="faculty" 
      ref={sectionRef}
      className="faculty-section py-16 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Positioned at the very top */}
        <div className="section-header text-center mb-16 pt-8">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Our Faculty
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Learn from the best minds in AI & Machine Learning
          </p>
        </div>

        {/* Faculty Carousel */}
        <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-24 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 1800,  // Reduced from 2000ms to 1500ms (1.5 seconds per slide)
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }}
            speed={200}  // Reduced from 300ms to 200ms for faster transitions
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            className="faculty__swiper pb-12"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {/* Navigation Arrows - Inside Swiper Container */}
            <div className="swiper-button-prev  text-accent"></div>
            <div className="swiper-button-next text-accent"></div>

            {Object.keys(facultyData).map((name, index) => (
              <SwiperSlide key={index} style={{ width: "300px",paddingTop:"30px" }}>
                <article
                  className="testimonial__card bg-transparent transition-all duration-700 hover:scale-105"
                  onClick={() => openModal({ id: index + 1, name, ...facultyData[name] })}
                >
                  <img src={getFacultyImage(name)} alt={name} className="testimonial__img" />
                  <h3 className="testimonial__name">{name}</h3>
                  <div className="testimonial__expertise">
                    {facultyData[name]?.skills?.slice(0, 2).join(", ") || "AI & ML"}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* ================= 3D POPUP MODAL ================= */}
      {selectedFaculty && (
        <div className="popup-card active" id="popupCard">
          {/* Close Button */}
          <div className="close-btn" id="closePopup" onClick={closeModal}>&times;</div>

          

          {/* Sidebar */}
          <div className="sidebar bg-primary-dark text-white">
            <h3 className="text-accent">Menu</h3>
            <ul>
              <li className={activeTab === 'about' ? 'active bg-accent text-primary-dark' : 'hover:bg-primary/50'} onClick={() => showTab('about')}>
                <i className="ri-user-line"></i>About
              </li>
              <li className={activeTab === 'resume' ? 'active bg-accent text-primary-dark' : 'hover:bg-primary/50'} onClick={() => showTab('resume')}>
                <i className="ri-graduation-cap-line"></i>Education
              </li>
              <li className={activeTab === 'research' ? 'active bg-accent text-primary-dark' : 'hover:bg-primary/50'} onClick={() => showTab('research')}>
                <i className="ri-microscope-line"></i>Research
              </li>
              <li className={activeTab === 'training' ? 'active bg-accent text-primary-dark' : 'hover:bg-primary/50'} onClick={() => showTab('training')}>
                <i className="ri-book-open-line"></i>Training
              </li>
              <li className={activeTab === 'achievements' ? 'active bg-accent text-primary-dark' : 'hover:bg-primary/50'} onClick={() => showTab('achievements')}>
                <i className="ri-award-line"></i>Achievements
              </li>
            </ul>
            <a href={getFacultyCV(selectedFaculty.name) ? `/assets/faculty/resume/${getFacultyCV(selectedFaculty.name)}` : "#"} 
               download={getFacultyCV(selectedFaculty.name) || ""}
               className={`btn sidebar-cv-btn bg-accent text-primary-dark hover:bg-primary-light px-6 py-3 text-lg ${!getFacultyCV(selectedFaculty.name) ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {getFacultyCV(selectedFaculty.name) ? 'Download CV' : 'CV Not Available'}
            </a>
          </div>

          {/* Profile Section */}
          <div className="profile bg-gradient-to-br from-primary-light to-primary/30 border-4 border-accent/30">
            <img id="popupImg" src={getFacultyImage(selectedFaculty.name)} alt="Faculty Image" />
            <h2 id="popupName" className="text-primary-dark">{selectedFaculty.name}</h2>
            <p id="popupTagline" className="text-primary">{facultyData[selectedFaculty.name]?.tagline || 'Faculty'}</p>
            <div className="profile-contact">
              <span id="popupContact" className="text-primary">Contact: {facultyData[selectedFaculty.name]?.contact || 'N/A'}</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              {/* LinkedIn Icon */}
              <a
                href={facultyData[selectedFaculty.name]?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200 ${!facultyData[selectedFaculty.name]?.linkedin ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Vidwan Icon */}
              <a
                href={facultyData[selectedFaculty.name]?.vidwan || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white hover:bg-gray-200 text-white p-2 rounded-full transition-colors duration-200 ${!facultyData[selectedFaculty.name]?.vidwan ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Vidwan Profile"
              >
                <span className="text-xl font-extrabold text-blue-600">
                  V
                </span>
              </a>

              {/* Gmail Icon */}
              <a
                href={facultyData[selectedFaculty.name]?.email ? `mailto:${facultyData[selectedFaculty.name].email}` : "#"}
                className={`bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 ${!facultyData[selectedFaculty.name]?.email ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Send Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.885L12 10.58l9.479-6.758h.885c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Content Tabs */}
          <div className="content bg-white">
            {renderTabContent()}
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultySection;
