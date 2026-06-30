import careerPathwayImg from "/assets/admission/careeroppo.png";

export default function CareerPathway() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            AI & ML Learning Pathway
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-dark">
            Technology Stack & Career Roadmap
          </h2>

          <div className="w-24 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>

          
        </div>

        {/* Infographic */}
        <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl bg-accent shadow-2xl border border-gray-200">
            <img    
                src="/assets/admission/careeroppo.png"
                alt="AI ML   Technology Stack"
                className="w-full h-auto"
            />
        </div>
      </div>
    </section>
  );
}