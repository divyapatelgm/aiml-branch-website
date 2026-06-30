import React from 'react';
import { useInView } from 'react-intersection-observer';

const NewsLetter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const newsletters = [
    {
      id: 'newsletter-1',
      title: 'Department Newsletter',
      volume: 'Volume 1 - Issue I',
      date: 'Jan 2025 to Sept 2025',
      description: 'Showcasing the achievements, events, and success stories of the AIML Department.',
      coverImage: '/assets/Magzine/Cover-img.png',
      pdf: '/assets/Magzine/Volume 1 - Issue 1 - 2025.pdf'
    },
    {
      id: 'newsletter-2',
      title: 'Department Newsletter',
      volume: 'Volume 1 - Issue II',
      date: 'Oct 2025 to Dec 2025',
      description: 'Continuing the journey of innovation, learning, and excellence in AIML Department.',
      coverImage: '/assets/Magzine/Cover-img2.png',
      pdf: '/assets/Magzine/Volume 1 - Issue 2 - 2026.pdf'
    }
  ];


  return (
    <section id="newsletter" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl blob-animate"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl blob-animate" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Newsletter Header */}
        <section className={`mb-8 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Department Newsletters
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Showcasing the achievements, events, and success stories of the AIML Department
          </p>
        </section>

        {/* PDF Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsletters.map((newsletter, index) => (
            <div key={newsletter.id} className={`group cursor-pointer transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div 
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open(newsletter.pdf, '_blank', 'noopener,noreferrer')}
              >
                {/* PDF Cover */}
                <div className="relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-xl overflow-hidden group">
                  {/* Cover Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={newsletter.coverImage} 
                      alt={`${newsletter.title} Cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback in case the image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback content if image fails to load */}
                    <div className="hidden w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{newsletter.title}</h3>
                        <p className="text-gray-600">{newsletter.volume}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-medium text-white/80 mb-1">{newsletter.volume} • {newsletter.date}</div>
                      <h3 className="text-2xl font-bold mb-2">{newsletter.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2 mb-4">{newsletter.description}</p>
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          View Newsletter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* PDF Info */}
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {newsletter.title} - {newsletter.volume}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {newsletter.date}
                    </p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (newsletter?.pdf) {
                        window.open(newsletter.pdf, '_blank', 'noopener,noreferrer');
                      } else {
                        console.error('PDF path is not available');
                        // Optional: Show a user-friendly message
                        alert('The newsletter PDF is currently unavailable.');
                      }
                    }}
                    className="group/btn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                  >
                    View News Letter
                  </button>
                </div>
              </div>
            </div>
            ))}
        </div>

      </div>

    </section>
  );
};

export default NewsLetter;