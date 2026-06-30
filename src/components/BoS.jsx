import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Award, CheckCircle, FileText } from 'lucide-react';

const BoS = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [pdfInstance, setPdfInstance] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pdfCanvasRef = useRef(null);

  // Load a default PDF when component mounts
  useEffect(() => {
    // Replace 'document1.pdf' with your actual default PDF filename
    openDocument('document1.pdf');
  }, []);

  const openDocument = async (documentName) => {
    setSelectedDocument(documentName);
    setCurrentPage(1);

    try {
      // Load PDF.js library
      const pdfjsLib = window.pdfjsLib;
      if (!pdfjsLib) {
        // Load PDF.js if not already loaded
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
        document.head.appendChild(script);

        script.onload = async () => {
          await loadPDF(documentName);
        };
      } else {
        await loadPDF(documentName);
      }
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  };

  const loadPDF = async (documentName) => {
    try {
      const pdfjsLib = window.pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

      const pdf = await pdfjsLib.getDocument(`/assets/BoS/${documentName}`).promise;
      setPdfInstance(pdf);
      setTotalPages(pdf.numPages);
      await renderPage(1, pdf);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  };

  const renderPage = async (pageNum, pdf) => {
    try {
      const page = await pdf.getPage(pageNum);
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = pdfCanvasRef.current;
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  };

  const changePage = async (delta) => {
    const newPage = currentPage + delta;
    if (newPage >= 1 && newPage <= totalPages && pdfInstance) {
      setCurrentPage(newPage);
      await renderPage(newPage, pdfInstance);
    }
  };

  const closeDocument = () => {
    setSelectedDocument(null);
    setPdfInstance(null);
    setCurrentPage(1);
    setTotalPages(0);
  };

  const bosMembers = [
    // {
    //   name: 'Dr. Sanjay Pande M B',
    //   position: "Director, \n School of Computer Science & Technology , GM University, Davangere",
    // },
    {
      name: 'Dr. Asha K',
      position: 'Associate Professor and Head , Department of AIML, GM University, Davangere',
    },
    // {
    //   name: 'Dr. Shivanagowda G M',
    //   position: 'Professor and Head , Department of CSE, GM University, Davangere',
    // },
    // {
    //   name: 'Dr. Neelambike S',
    //   position: 'Associate Professor and Head , Department of ISE, GM University, Davangere',
    // },
    // {
    //   name: 'Dr. Arun Kumar B T',
    //   position: 'Associate Professor and Head , Department of CY/IY, GM University, Davangere',
    // },
    // {
    //   name: 'Dr. Shankrayya Shastri',
    //   position: 'Associate Professor and Head , Department of CC/BS, GM University, Davangere',
    // },
    // {
    //   name: 'Prof. Firoz Khan',
    //   position: 'Professor and Head , Department of DS/IoT with AI, GM University, Davangere',
    // },
    {
      name: 'Mr. Keerthi Prasad G',
      position: 'Assistant Professor , Department of AIML, GM University, Davangere',
    },
    {
      name: 'Ms. Jayalakshmi M',
      position: 'Assistant Professor,  Department of AIML, GM University, Davangere',
    },
    {
      name: 'Ms. Mukta Pujar',
      position: 'Assistant Professor,  Department of AIML, GM University, Davangere',
    },
    {
      name: 'Mrs. Chaithra A',
      position: 'Assistant Professor,  Department of AIML, GM University, Davangere',
    },
    {
      name: 'Mr. Mohammed Zeeshan Mukram',
      position: 'Assistant Professor,  Department of AIML, GM University, Davangere',
    },
  ];

  const bosResponsibilities = [
    'Curriculum design and development for AI & ML programs',
    'Review and update course syllabi regularly',
    'Recommend new courses and electives',
    'Ensure industry relevance of the curriculum',
    'Evaluate academic programs and suggest improvements',
    'Approve academic policies and regulations',
    'Facilitate industry-academia collaboration',
    'Monitor teaching-learning processes',
  ];

  return (
    <section id="bos" className="py-12 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}



        {/* Content Container - Responsive Width Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Left Side - BoS Members (Responsive width) */}
          <div className="md:col-span-3 lg:col-span-6 space-y-6 -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-32">
            <div className={`text-center mb-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
                Board of Studies
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
              {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Governing academic excellence and curriculum development for AI & ML programs
          </p> */}
            </div>
            <h3 className="text-2xl font-bold text-primary-dark text-center">
              BoS Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {bosMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-6 border border-gray-200 hover:border-accent/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    {/* Name first */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                      {member.name}
                    </h4>

                    {/* Position below name */}
                    <div className="mb-4">
                      <span className="inline-block  text-accent text-xs font-semibold px-4 py-2 rounded-2xl  group-hover:border-accent/40 transition-all duration-300">
                        {member.position}
                      </span>
                    </div>

                    <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
                  </div>

                  {/* Animated decorative elements */}
                  <div className="absolute top-3 right-3 w-4 h-4 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Documents (Responsive width) */}
          <div className="md:col-span-2 lg:col-span-4 space-y-3">
            <h3 className="text-2xl font-bold text-primary-dark text-center">
              BoS Documents
            </h3>

            {/* Document Buttons - Responsive Layout */}
            <div className="flex flex-col sm:flex-col md:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => openDocument('BoS_Minutes_of_Meeting.pdf')}
                className="group bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-accent/30 text-sm md:text-base"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent group-hover:text-accent-dark transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Minutes of Meetings</span>
                </div>
              </button>

              <button
                onClick={() => openDocument('BOS-Suggestions.pdf')}
                className="group bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-accent/30 text-sm md:text-base"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent group-hover:text-accent-dark transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>BoS Suggestions</span>
                </div>
              </button>
            </div>

            {/* PDF Viewer Section */}
            {selectedDocument && (
              <div className=" bg-white rounded-lg border border-gray-200 p-3 md:p-4">
                <div className=" flex justify-between items-center mb-3">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">
                    {selectedDocument === 'BoS_Minutes_of_Meeting.pdf' ? 'BoS Minutes of Meeting' : 'BoS Suggestions'}
                  </h4>
                  <button
                    onClick={closeDocument}
                    className="text-gray-500 hover:text-gray-700 px-2 md:px-3 py-1 text-xs md:text-sm"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* PDF Container */}
                <div className="pdf-viewer-container overflow-x-auto">
                  <canvas ref={pdfCanvasRef} className="max-w-full h-auto border rounded"></canvas>
                </div>

                {/* PDF Navigation (if multi-page) */}
                <div className=" flex justify-center space-x-2 md:space-x-4 mt-3">
                  <button
                    onClick={() => changePage(-1)}
                    disabled={currentPage <= 1}
                    className="px-2 md:px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded text-xs md:text-sm"
                  >
                    Previous
                  </button>
                  <span className="px-2 md:px-3 py-1 text-xs md:text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => changePage(1)}
                    disabled={currentPage >= totalPages}
                    className="px-2 md:px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded text-xs md:text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BoS;
