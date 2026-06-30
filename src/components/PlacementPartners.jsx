import React from 'react';
import { useInView } from 'react-intersection-observer';

const PlacementPartners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Company logos - using logo URLs from public CDN
  const companies = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/VMware_logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Cognizant_logo_2022.svg' },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/HCL_Technologies_logo.svg' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tech_Mahindra_New_Logo.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Capgemini_201x_logo.svg' },
    { name: 'DXC Technology', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/DXC_Technology_logo.svg' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full relative z-10" ref={ref}>
        <div className={`text-center mb-16 px-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Our Placement Partners
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Collaborating with industry leaders to create career opportunities
          </p>
        </div>

        {/* First Marquee Row - Left to Right */}
        <div className={`marquee-container mb-12 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="marquee-content">
            {[...companies.slice(0, 12), ...companies.slice(0, 12)].map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-48 h-32 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-2xl font-bold text-primary-dark">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row - Right to Left */}
        <div className={`marquee-container mb-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="marquee-content animate-marquee-reverse">
            {[...companies.slice(12, 24), ...companies.slice(12, 24)].map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-48 h-32 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-2xl font-bold text-primary-dark">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`max-w-7xl mx-auto px-4 mt-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '150+', label: 'Partner Companies', icon: '🏢' },
              { number: '500+', label: 'Job Offers', icon: '💼' },
              { number: '95%', label: 'Placement Rate', icon: '📈' },
              { number: '18 LPA', label: 'Highest Package', icon: '💰' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-light/50 to-white rounded-[40px_10px_40px_10px] p-6 text-center shadow-lg hover-morph cursor-pointer"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-dark mb-2">{stat.number}</div>
                <div className="text-body font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`max-w-4xl mx-auto px-4 mt-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-dark text-center neural-card">
            <h3 className="text-3xl font-bold mb-4 text-primary-dark">
              Partner With Us
            </h3>
            <p className="text-lg mb-6">
              Join our network of leading companies and recruit top AI & ML talent from GM University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-primary-light transform hover:scale-110 transition-all duration-300 shadow-lg">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transform hover:scale-110 transition-all duration-300 shadow-lg">
                View All Partners
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
