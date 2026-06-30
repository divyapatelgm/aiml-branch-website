import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, FileText, Award, Users, ExternalLink, Calendar, Star, Zap, Target, X } from 'lucide-react';

const Research = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [selectedPublication, setSelectedPublication] = useState(null);

  // Publications data from Asha K's research
  const publications = [
    {
      title: "Handwriting Recognition using Deep Learning based Convolutional Neural Network",
      authors: "Dr. Asha K",
      year: "2019",
      journal: "International Journal of Recent Technology and Engineering (IJRTE)",
      volume: "8",
      pages: "4826-4828",
      doi: "10.35940/ijrte.D7811.118419",
      citations: 1,
    },
    {
      title: "Kannada Handwritten Document Recognition using Convolutional Neural Network",
      authors: "Dr. Asha K",
      year: "2018",
      journal: "Proceedings 2018 3rd International Conference on Computational Systems and Information Technology for Sustainable Solutions CSITSS 2018",
      pages: "299-301",
      doi: "10.1109/CSITSS.2018.8768745",
      citations: 0,
    },
    {
      title: "Deep learning based convolutional neural network for handwriting recognition",
      authors: "Mr. Keerthi Prasad G, Dr. Asha K",
      year: "2021",
      journal: "Turkish Online Journal of Qualitative Inquiry",
      volume: "12",
      pages: "1493-1503",
      citations: 0,
    },
    {
      title: "User Defined Data Types in Python Programming Language",
      authors: "Mr. Keerthi Prasad G, Dr. Asha K",
      year: "2021",
      journal: "Recent Trends in Engineering & Technology",
      pages: "154",
      citations: 0,
    },
    {
      title: "Women Healthcare Mobile App-An Approach to Predict Early Stage of Cervical Cancer",
      authors: "Mr. Keerthi Prasad G, Dr. Asha K",
      year: "2021",
      journal: "ATLANTIS PRESS",
      volume: "4",
      doi: "10.2991/ahis.k.210913.022",
      citations: 1,
    },
    {
      title: "Recognition of Online Handwritten Isolated Kannada Characters using PCA and DTW",
      authors: "Mr. Keerthi Prasad G",
      year: "2019",
      journal: "International Journal of Recent Technology and Engineering (IJRTE)",
      volume: "8",
      pages: "11107-11111",
      doi: "10.35940/ijrte.D7810.118419",
      citations: 0,
    },
    {
      title: "Handwriting Recognition System for South Indian Languages - A Technical Review",
      authors: "Mr. Keerthi Prasad G, Dr. Asha K",
      year: "2018",
      journal: "2nd International Conference on Computational Systems and Information Technology for Sustainable Solutions CSITSS 2017",
      doi: "10.1109/CSITSS.2017.8447710",
      citations: 1,
    },
    {
      title: "On-line handwritten character recognition system for Kannada using Principal Component Analysis Approach: For handheld devices",
      authors: "Mr. Keerthi Prasad G",
      year: "2012",
      journal: "Proceedings of the 2012 World Congress on Information and Communication Technologies WICT 2012",
      pages: "675-678",
      doi: "10.1109/WICT.2012.6409161",
      citations: 1,
    },
  ];

  const patents = [
    {
      title: "Self Power Generating Intelligent Electric Vehicle",
      authors: "Mr. Keerthi Prasad G, Dr. Asha k",
      filedDate: "2020-11-26",
      publishedDate: "2020-12-04",
      status: "Published",
    },
  ];

  const researchProjects = [
    {
      title: "Region of Interest Extraction using OCR Templates",
      funding: "VTU Funded",
      guide: "Dr. Asha K",
      amount: "₹5000",
      duration: "2020–2021",
      status: "Completed",
    },
    {
      title: "Consistency Maintenance in Real Group Editors",
      funding: "KSCST Funded",
      guide: "Dr. Asha K",
      amount: "₹5000",
      duration: "2009–2010",
      status: "Completed",
    },
  ];

  const ongoingResearchAreas = [
    {
      title: "AI for Handwriting Recognition",
      description: "Advanced OCR systems for multiple languages and scripts",
      icon: "✍️",
      status: "Active",
    },
    {
      title: "OCR & Document Image Analysis",
      description: "Intelligent document processing and text extraction",
      icon: "📄",
      status: "Active",
    },
    {
      title: "Predictive Modelling for Healthcare",
      description: "AI-driven diagnostic and treatment optimization",
      icon: "🏥",
      status: "Active",
    },
    {
      title: "AI-based Automation in Agriculture",
      description: "Smart farming solutions using computer vision",
      icon: "🌾",
      status: "Active",
    },
    {
      title: "NLP for Regional Language Processing",
      description: "Natural language understanding for Kannada and other regional languages",
      icon: "💬",
      status: "Active",
    },
  ];

  const awards = [
    {
      title: "NPTEL Elite in Joy of Computing using Python",
      year: "2021",
      organization: "NPTEL",
      icon: "🏆",
    },
    {
      title: "Resource Person – AICTE Sponsored FDP",
      year: "2021",
      organization: "AICTE",
      icon: "🎓",
    },
  ];

  const collaborations = [
    {
      title: "RVCE Bangalore",
      type: "Academic Collaboration",
      icon: "🏛️",
    },
    {
      title: "Visvesvaraya Technological University (VTU)",
      type: "Research Partnership",
      icon: "🎓",
    },
    {
      title: "Karnataka State Council for Science and Technology (KSCST)",
      type: "Funding Partner",
      icon: "💡",
    },
    {
      title: "16+ Faculty Co-authors Network",
      type: "Research Network",
      icon: "👥",
    },
  ];

  const memberships = [
    {
      title: "ISTE Life Membership",
      year: "2015",
      icon: "🏛️",
    },
    {
      title: "Department Magazine & Newsletter Coordinator",
      year: "2022",
      icon: "📝",
    },
    {
      title: "Industry-Institute Interaction Coordinator",
      year: "2022",
      icon: "🤝",
    },
  ];

  const stats = [
    { icon: BookOpen, number: 50, suffix: '+', label: 'Research Publications' },
    { icon: FileText, number: 5, suffix: '+', label: 'Patents Filed' },
    { icon: Award, number: 25, suffix: '+', label: 'Research Projects' },
    { icon: Users, number: 20, suffix: '+', label: 'Collaborations' },
  ];

  return (
    <section id="research" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-3">
            Research & Publications
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-0"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Advancing the frontiers of AI & ML through cutting-edge research
          </p> */}
        </div>

        <div className="relative z-10 mb-4">

          {/* Main Content Layout */}
          <div className="max-w-2xl mx-auto mb-6">
            {/* Research Coordinator */}
            <div className="relative group">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-light/10 rounded-[20px_5px_20px_5px] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Card Content with Overlapping Image */}
              <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-8 pl-28 text-left border border-accent/20">
                {/* Faculty Image - Overlapping card content */}
                <div className="absolute -top-12 -left-10">
                  <img
                    src="/assets/faculty/nasreen_taj.jpg"
                    alt="Dr. Nasreen Taj M B"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                  />
                </div>

                <h4 className="text-2xl font-bold text-black mb-2">Dr. Nasreen Taj M B</h4>
                {/* <p className="text-white/70 text-sm">Assistant Professor</p> */}
                <p className="text-accent text-sm">Research Coordinator</p>
                <div className="mt-4 space-y-2">
                  <p className="text-accent text-sm">📞 +91-98442 50330</p>
                  <a href="mailto:asstreg@gmu.ac.in" className="text-accent hover:text-accent-light text-sm block">
                    ✉️ asstreg@gmu.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Publications
          </h2>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 6) * 100}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary-dark mb-2">{pub.title}</h3>
                      <p className="text-accent font-semibold mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-body">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {pub.year}
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {pub.journal}
                          {pub.volume && `, Vol. ${pub.volume}`}
                          {pub.pages && `, pp. ${pub.pages}`}
                        </span>
                        {pub.doi && (
                          <span className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            DOI: {pub.doi}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {pub.citations} {pub.citations === 1 ? 'Citation' : 'Citations'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button
                        onClick={() => setSelectedPublication(pub)}
                        className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-8">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:from-primary-dark hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Publications 
            </button>
          </div> */}
        </div>

        {/* Patents Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Patents Filed
          </h2>
          <div className="grid gap-6">
            {patents.map((patent, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 7) * 100}ms` }}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-primary-dark mb-3">{patent.title}</h3>
                  <p className="text-accent font-semibold mb-3">{patent.authors}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-body">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Filed: {patent.filedDate}
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Published: {patent.publishedDate}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {patent.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Research Projects
          </h2>
          <div className="grid gap-6">
            {researchProjects.map((project, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 8) * 100}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary-dark mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-body">
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {project.funding}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Guide: {project.guide}
                        </span>
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {project.amount}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.duration}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Domains & Expertise */}
        {/* <div className={`mb-20 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Research Domains & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Artificial Intelligence', description: 'Core AI algorithms and intelligent systems', icon: '🤖' },
              { title: 'Machine Learning', description: 'Statistical learning and predictive models', icon: '📊' },
              { title: 'Deep Learning', description: 'Neural networks and deep architectures', icon: '🧠' },
              { title: 'Computer Vision', description: 'Image processing and visual recognition', icon: '👁️' },
              { title: 'Natural Language Processing', description: 'Text analysis and language understanding', icon: '💬' },
              { title: 'Data Analytics', description: 'Big data processing and insights', icon: '📈' },
            ].map((domain, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 5) * 100}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
                  <div className="text-4xl mb-4">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{domain.title}</h3>
                  <p className="text-body">{domain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        

        {/* Collaborations & Networks */}
        {/* <div className={`mb-20 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Collaborations & Networks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborations.map((collab, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 10) * 100}ms` }}>
                <div className="bg-gradient-to-br from-primary-light/30 to-primary-light/10 rounded-2xl p-6 border border-primary-light/40 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white text-xl">
                      {collab.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-1">{collab.title}</h3>
                      <p className="text-sm text-body">{collab.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Awards & Recognition */}
        {/* <div className={`mb-20 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-primary-dark mb-4 flex items-center justify-center">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 11) * 100}ms` }}>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100 hover:border-yellow-200 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                      {award.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-1">{award.title}</h3>
                      <p className="text-sm text-body">{award.organization} - {award.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Research Coordinator */}

      </div>

      {/* Publication Details Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary-dark via-primary to-accent p-6 rounded-t-3xl">
              <div className="flex items-center justify-between text-white">
                <h3 className="text-2xl font-bold">Publication Details</h3>
                <button
                  onClick={() => setSelectedPublication(null)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title */}
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-primary-dark mb-3 leading-tight">
                  {selectedPublication.title}
                </h4>
                <div className="flex items-center text-accent font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  {selectedPublication.authors}
                </div>
              </div>

              {/* Publication Details Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="bg-primary-light/20 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-accent mr-2" />
                      <span className="font-semibold text-primary-dark">Publication Year</span>
                    </div>
                    <p className="text-lg font-bold text-accent">{selectedPublication.year}</p>
                  </div>

                  <div className="bg-primary-light/20 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-5 h-5 text-accent mr-2" />
                      <span className="font-semibold text-primary-dark">Journal</span>
                    </div>
                    <p className="text-primary-dark">{selectedPublication.journal}</p>
                    {selectedPublication.volume && (
                      <p className="text-sm text-body mt-1">
                        Volume {selectedPublication.volume}
                        {selectedPublication.pages && `, Pages ${selectedPublication.pages}`}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {selectedPublication.doi && (
                    <div className="bg-accent/10 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-5 h-5 text-accent mr-2" />
                        <span className="font-semibold text-primary-dark">DOI</span>
                      </div>
                      <p className="text-sm text-primary-dark break-all font-mono">
                        {selectedPublication.doi}
                      </p>
                    </div>
                  )}

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-primary-dark">Citations</span>
                    </div>
                    <p className="text-lg font-bold text-green-600">
                      {selectedPublication.citations} {selectedPublication.citations === 1 ? 'Citation' : 'Citations'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                {selectedPublication.doi && (
                  <a
                    href={`https://doi.org/${selectedPublication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-primary to-accent text-white text-center py-3 px-6 rounded-xl hover:from-primary-dark hover:to-accent-dark transition-all duration-300 font-semibold shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 inline mr-2" />
                    View on DOI
                  </a>
                )}
                <button
                  onClick={() => setSelectedPublication(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-semibold"
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

export default Research;
