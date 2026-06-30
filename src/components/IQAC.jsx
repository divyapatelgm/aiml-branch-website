import React from 'react';
import { useInView } from 'react-intersection-observer';

// Import faculty image
// import ashaImage from "/assets/faculty/aska_k_hod.png";

const IQAC = () => {
  // Custom intersection observer implementation for better error handling
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);
  const [showDocument, setShowDocument] = React.useState(false);

  React.useEffect(() => {
    if (!sectionRef.current || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visible = isVisible;

 
  //   {
  //     name: 'Dr. Asha K',
  //     position: 'Head of Department & Associate Professor',
  //     qualification: 'Ph.D. in Artificial Intelligence, IIT Bombay',
  //     image: "https://gmit.irins.org/profile_images/238110.jpg",
  //   },
  //   {
  //     name: 'Prof. Michael Chen',
  //     position: 'Coordinator',
  //     qualification: 'M.Tech in Machine Learning',
  //   },
  //   {
  //     name: 'Dr. Priya Sharma',
  //     position: 'Member (Senior Faculty)',
  //     qualification: 'Ph.D. in Computer Vision',
  //   },
  // ];
  //   /* Commented out for later use
  //   {
  //     name: 'Prof. Michael Chen',
  //     position: 'Coordinator',
  //     qualification: 'M.Tech in Machine Learning',
  //   },
  //   {
  //     name: 'Dr. Priya Sharma',
  //     position: 'Member (Senior Faculty)',
  //     qualification: 'Ph.D. in Computer Vision',
  //   },
  //   */
  // ];

  return (
    <section id="iqac" className="py-20 bg-gradient-to-b from-white to-primary-light/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Internal Quality Assurance Cell
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
          {/* <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Ensuring excellence in education through continuous quality improvement
          </p> */}
        </div>

        {/* IQAC Coordinators and PDF Viewer in Two Columns - 70/30 split */}
        <div className={`grid grid-cols-1 lg:grid-cols-9 gap-6 mb-16 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - 70% width - Coordinators and Team Images */}
          <div className="lg:col-span-5 space-y-12">
            {/* Shilpa as Main IQAC Coordinator - Centered */}
            <div className="grid grid-cols-1 gap-6 justify-center max-w-md mx-auto">
              <div className="relative group">
                <div className="relative bg-gradient-to-b from-white to-primary-light/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-4 sm:p-6 pt-8 sm:pt-10 pl-20 sm:pl-28 text-left border border-accent/20">
                  <div className="absolute -top-10 sm:-top-12 -left-8 sm:-left-10">
                    <img
                      src="/assets/faculty/akshatha_a_m_s.jpg"
                      alt="Mrs. Akshatha A M S"
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Mrs. Akshatha A M S</h4>
                  <p className="text-accent text-sm">IQAC Coordinator</p>
                  <div className="mt-3 sm:mt-4 space-y-2">
                    <p className="text-accent text-xs sm:text-sm">📞 +91-8296840319</p>
                    <a href="mailto:akshatha.ams@gmit.edu.i" className="text-accent hover:text-accent-light text-xs sm:text-sm block">
                      ✉️ akshatha.ams@gmit.edu.i
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinator now centered */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-primary-dark/70 font-medium mb-4">
                IQAC Coordinator
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <img
                  src="/assets/IQAC/IQAC_Team_Visit.jpg"
                  alt="IQAC Team - Internal Quality Assurance Cell"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="/assets/IQAC/IQAC_Team_Visit2.jpg"
                  alt="IQAC Team Visit 2"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - 30% width - PDF Viewer and Contact Info */}
          <div className="lg:col-span-3">
            

            {/* PDF Viewer */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  IQAC Proceeding Document
                </h4>
                {/* <button
                  onClick={() => setShowDocument(false)}
                  className="text-gray-500 hover:text-gray-700 px-2 py-1 text-sm"
                >
                  ✕ Close
                </button> */}
              </div>

              <div className="w-full h-64 sm:h-80 md:h-96 border rounded-lg overflow-hidden">
                <iframe
                  src={`/assets/IQAC/IQAC-proceeding.pdf#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0"
                  title="IQAC Document"
                />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IQAC;
