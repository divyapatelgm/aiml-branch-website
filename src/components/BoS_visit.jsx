import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Award, ShieldAlert, BookOpen } from 'lucide-react';

const BoSVisit = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Small timeout to allow the initial page to load smoothly before showing popup
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-gray-100 animate-slide-up">
        
        {/* Header Ribbon / Decorative top bar */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary-dark via-primary to-accent text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div>
            <span className="bg-white/20 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Special Event
            </span>
            <h2 className="text-xl md:text-2xl font-bold mt-1 font-heading">
              Board of Studies (BoS) Meeting 2026–27
            </h2>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close popup"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Introduction & Highlights */}
          <div className="bg-gradient-to-r from-primary-light/10 to-accent/5 p-5 rounded-xl border border-primary/10">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The Board of Studies (BoS) meeting for the <strong>Department of Artificial Intelligence and Machine Learning</strong>, School of Computer Science & Technology, GM University, was successfully conducted for the academic year 2026–27 on <strong>20-06-2026</strong> in the esteemed presence of distinguished academic and industry experts.
            </p>
          </div>

          {/* Core Visit - 3 Members Section */}
          <div>
            <h3 className="text-lg font-bold text-primary-dark border-b-2 border-primary/20 pb-2 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Distinguished BoS Members
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Expert 1 */}
              <div className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/30 group-hover:border-accent transition-all duration-300">
                  <img 
                    src="/assets/BoS/anandkumar.png" 
                    alt="Dr. Anand Kumar M" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/assets/placeholder-avatar.png'; }}
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900">Dr. Anand Kumar M</h4>
                <p className="text-xs font-semibold text-accent mt-1">External Academic Expert</p>
                <p className="text-xs text-gray-600 mt-2">Associate Professor & Head,<br />Department of IT,<br />NITK Surathkal</p>
              </div>

              {/* Expert 2 */}
              <div className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/30 group-hover:border-accent transition-all duration-300">
                  <img 
                    src="/assets/BoS/Suni_Saumya.webp" 
                    alt="Dr. Sunil Saumya" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/assets/placeholder-avatar.png'; }}
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900">Dr. Sunil Saumya</h4>
                <p className="text-xs font-semibold text-accent mt-1">External Academic Expert</p>
                <p className="text-xs text-gray-600 mt-2">Assistant Professor,<br />Department of Data Science & AI,<br />IIIT Dharwad</p>
              </div>

              {/* Expert 3 */}
              <div className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/30 group-hover:border-accent transition-all duration-300">
                  <img 
                    src="/assets/BoS/arun_kumar_dave.jpg" 
                    alt="Mr. Arun Kumar Dave" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/assets/placeholder-avatar.png'; }}
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900">Mr. Arun Kumar Dave</h4>
                <p className="text-xs font-semibold text-accent mt-1">Industry Expert</p>
                <p className="text-xs text-gray-600 mt-2">Product Engineering Leader,<br />Zoho Corporation Pvt Ltd</p>
              </div>
            </div>
          </div>

          {/* Images of Meeting Section */}
          <div>
            <h3 className="text-lg font-bold text-primary-dark border-b-2 border-primary/20 pb-2 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Meeting Highlights & Interactions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/assets/BoS/bos_group_image.jpeg" 
                  alt="Board of Studies Committee Group Photo" 
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-600 font-semibold text-center">BoS committee members with university leadership</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/assets/BoS/bos_img.jpeg" 
                  alt="BoS Meeting discussion" 
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-600 font-semibold text-center">Insightful discussions on the curriculum design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Proceedings & Leadership Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/60">
              <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" /> University Leadership & Chairmanship
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed space-y-2">
                Prior to the meeting, external experts had an insightful interaction with the Honourable Chancellor, <strong>Shri G. M. Lingaraju</strong>, and the Vice Chancellor, <strong>Dr. S. R. Shankapal</strong>, discussing emerging AI trends, industry-academia collaborations, and the future direction of AI education.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600">
                <p><strong>Chaired by:</strong> Dr. Asha K, Associate Professor & Head, Department of AIML, GMU</p>
                <p className="mt-1"><strong>Guided by:</strong> Dr. M. Venu Gopala Rao, Pro-Vice Chancellor, GMU</p>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200/60">
              <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" /> Key Focus & Curriculum Approvals
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Discussions focused on curriculum enhancement, AI/ML technology integration, outcome-based education (OBE) practices, and industry internships.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                The BoS approved the proposed curriculum structure for 2026–27, praising its focus on emerging domains like <strong>Generative AI, Agentic AI, Explainable AI, MLOps</strong>, and <strong>Industry 5.0 readiness</strong>.
              </p>
            </div>
          </div>

          {/* Gratitude Footer inside Modal */}
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-center">
            <p className="text-xs md:text-sm text-gray-600 italic">
              "The Department of Artificial Intelligence and Machine Learning extends its heartfelt gratitude to all BoS members, academic experts, industry professionals, university leadership, and stakeholders for their valuable guidance in shaping a future-ready curriculum."
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Acknowledge & Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoSVisit;
