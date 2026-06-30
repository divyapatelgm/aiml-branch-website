import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Briefcase, MapPin, Linkedin, Mail } from 'lucide-react';

const Alumni = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredAlumni = [
    {
      name: 'Pavan Varahad',
      usn: '4GM21AI092',
      batch: '2021',
      position: 'Software Developer',
      company: ' Luxoft DXC',
      location: 'Bangalore',
      photo: '/assets/alumini/Pavan_Varahad.jpg',
      color: 'from-accent to-primary',
      email:'',
      linkedin:'https://www.linkedin.com/in/pavanvarahad'
    },
    {
      name: 'Shreya B',
      usn: '4GM21AI047',
      batch: '2021',
      position: 'Full Stack Developer',
      company: 'Besant Technologies',
      location: 'Bangalore',
      photo: '/assets/alumini/Shreya_B.jpeg',
      color: 'from-accent to-primary',
      email:'bshrey0406@gmail.com' ,
      linkedin: 'https://www.linkedin.com/in/shreya-b-b2aa82284/'
    },
    {
      name: 'N S Manikanta R',
      usn: '4GM21AI032',
      batch: '2021',
      position: 'Software Developer',
      company: 'Dhee Coding LAB',
      location: 'Bangalore',
      photo: '/assets/alumini/N_S_Manikanta_R.png',
      color: 'from-accent to-primary',
      email: '',
      linkedin: ''
    },
    {
      name: 'Kusuma Y A',
      usn: '4GM21AI026',
      batch: '2021',
      position: 'AI/ML Engineer',
      company: 'X-workZ',
      location: 'Bangalore',
      photo: '/assets/alumini/Kusuma_Y_A.png',
      color: 'from-accent to-primary',
      achievement: 'Developed machine learning solutions for real-world applications',
      email: 'kusumaya@gmail.com',
      linkedin: 'https://www.linkedin.com/in/kusuma-y-a-b71971227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Akash M K',
      usn: '4GM21AI002',
      batch: '2021',
      position: 'Mobile App Developer',
      company: 'Tap Academy',
      location: 'Bangalore',
      photo: '/assets/alumini/Akash_M_K.png',
      color: 'from-accent to-primary',
      email: '',
      linkedin: 'https://www.linkedin.com/in/akash-m-k-3aa835224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    
    {
      name: 'Bhoomika G P',
      usn: '4GM21AI012',
      batch: '2021',
      position: 'Financial Analyst',
      company: 'HP Inc',
      location: 'Bangalore',
      photo: '/assets/alumini/Bhoomika_GP.jpg',
      color: 'from-accent to-primary',
      achievement: 'Developed scalable software solutions for clients',
      email: 'bhoomikagp02@gmail.com',
      linkedin: 'https://www.linkedin.com/in/bhoomikagp'
    },
    {
      name: 'Meghana B U',
      usn: '4GM21AI028',
      batch: '2021',
      position: 'Software Developer',
      company: 'SLK',
      location: 'Bangalore',
      photo: '/assets/alumini/Meghana_Begulli_Umashankar.jpeg',
      color: 'from-accent to-primary',
      email: 'meghanaumashankar777@gmail.com',
      linkedin: 'https://www.linkedin.com/in/meghana-begulli-umashankar-34317b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Rishi G',
      usn: '4GM21AI041',
      batch: '2021',
      position: 'Software Engineer',
      company: 'SLK',
      location: 'Bangalore',
      photo: '/assets/alumini/Rishi.png',
      color: 'from-accent to-primary',
      email: '',
      linkedin: 'https://www.linkedin.com/in/rishiig/'
    },
    {
      name: 'Archana Digraj',
      usn: '4GM21AI006',
      batch: '2021',
      position: 'Software Engineer',
      company: 'X-workZ',
      location: 'Bangalore',
      photo: '/assets/alumini/Archana_Digraj.png',
      color: 'from-accent to-primary',
      email: 'archanadigraj@gmail.com',
      linkedin: 'https://www.linkedin.com/in/archana-digraj-69934533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Bhavana N',
      usn: '4GM21AI009',
      batch: '2021',
      position: 'AI/ML Developer',
      company: 'Palle Technologies',
      location: 'Bangalore',
      photo: '/assets/alumini/BhAVANA_N.png',
      color: 'from-accent to-primary',
      email: '',
      linkedin: ''
    },
    {
      name: 'Muktha C V',
      usn: '4GM21AI050',
      batch: '2021',
      position: 'NA',
      company: 'NA',
      location: 'Bangalore',
      photo: '/assets/alumini/MUKTHA_C_V.jpg',
      color: 'from-accent to-primary',
      email: 'muktha.cv.2020@gmail.com',
      linkedin: 'https://www.linkedin.com/in/muktha-c-v-901251255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Nagaveni E B',
      usn: '4GM21AI033',
      batch: '2021',
      position: 'Full Stack Developer',
      company: 'Tap Academy',
      location: 'Bangalore',
      photo: '/assets/alumini/Manupriya_G_B.jpg',
      color: 'from-accent to-primary',
      email: '',
      linkedin: 'https://www.linkedin.com/in/nagaveni-e-b-622206281/'
    },
    
    {
      name: 'Vijayalakshmi K V',
      usn: '4GM21AI059',
      batch: '2021',
      position: 'AI Specialist',
      company: 'SLK',
      location: 'Bangalore',
      photo: '/assets/alumini/vijaylakshmi.png',
      color: 'from-accent to-primary',
      email: '',
      linkedin: 'https://www.linkedin.com/in/vijayalakshmi-k-v-974119281/'
    },
    {
      name: 'H M MAHONNATH',
      usn: '4GM21AI017',
      batch: '2021',
      position: 'Software Engineer',
      company: 'GlowLogics',
      location: 'Bangalore',
      photo: '/assets/alumini/Prathik_M_Hadagali.jpg',
      color: 'from-accent to-primary',
      achievement: 'Contributed to cutting-edge technology projects',
      email: '',
      linkedin: ''
    },
     {
      name: 'Rumale Prajwal',
      usn: '4GM21AI055',
      batch: '2021',
      position: 'Masters Student',
      company: 'N/A',
      location: 'Bangalore',
      photo: '/assets/alumini/Rumale_Prajwal.jpg',
      color: 'from-accent to-primary',
      achievement: 'Contributed to cutting-edge technology projects',
      email: 'prajwalricky81@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rumaleprajwal/'
    },
    {
      name: 'Rohan T',
      usn: '4GM21AI062',
      batch: '2021',
      position: 'R&D Engineer',
      company: 'Tejas Networks',
      location: 'Bangalore',
      photo: '/assets/alumini/Rohan_T.jpeg',
      color: 'from-accent to-primary',

      email: 'rohantgupta3062@gmail.com',
      linkedin: 'https://linkedin.com/in/rohan-t-36051a21b'
    }
  ];

  return (
    <section id="alumni" className="py-20 bg-gradient-to-b from-primary-light/20 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-4">
            Our Proud Alumini
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-primary max-w-3xl mx-auto font-heading">
            Proud of our students securing excellent opportunities in leading tech companies
          </p>
          <p className="text-lg text-accent text-center mt-4 font-semibold">
            Batch of 2021
          </p>
        </div>

        {/* Featured Alumni - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {featuredAlumni.map((alumni, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="relative group h-full">
                {/* Enhanced card with unique hover effects */}
                <div className={`bg-gradient-to-br ${alumni.color} rounded-[50px_15px_50px_15px] p-1.5 h-full hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 ease-out`}>
                  <div className="bg-white rounded-[50px_15px_50px_15px] p-4 md:p-6 h-full cursor-pointer relative overflow-hidden">

                    {/* Mobile: Simplified Layout - Only Image, Name, Company */}
                    <div className="block md:hidden text-center">
                      {/* Photo */}
                      <div className="flex justify-center mb-3">
                        <div className={`relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 md:border-4 border-primary-light group-hover:border-accent transition-all duration-500 group-hover:scale-110`}>
                          <img
                            src={alumni.photo}
                            alt={alumni.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${alumni.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                      </div>

                      {/* Name and Company */}
                      <div className="space-y-1">
                        <h3 className="text-sm md:text-xl font-bold text-primary-dark group-hover:text-primary transition-colors duration-300 leading-tight">{alumni.name}</h3>
                        <p className="text-xs text-accent font-semibold">{alumni.company}</p>
                      </div>
                    </div>

                    {/* Desktop: Detailed Layout */}
                    <div className="hidden md:block">
                      {/* Photo with enhanced styling */}
                      <div className="flex justify-center mb-4">
                        <div className={`relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-light group-hover:border-accent transition-all duration-500 group-hover:scale-110`}>
                          <img
                            src={alumni.photo}
                            alt={alumni.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${alumni.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                      </div>

                      {/* Name and USN */}
                      <div className="text-center mb-3">
                        <h3 className="text-xl font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors duration-300">{alumni.name}</h3>
                        <p className="text-xs text-accent font-semibold bg-accent/10 px-2 py-1 rounded-full inline-block">USN: {alumni.usn}</p>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex items-start space-x-2 flex-1">
                            <Briefcase className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-body text-sm">{alumni.company}</p>
                              <p className="text-xs text-primary font-medium">{alumni.position}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                            <p className="text-sm text-body">{alumni.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Social Links */}
                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={() => window.open(alumni.linkedin, '_blank')}
                          className="bg-blue-600 text-white p-2.5 rounded-full hover:scale-110 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
                        >
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.location.href = `mailto:${alumni.email}`}
                          className="bg-accent text-white p-2.5 rounded-full hover:scale-110 hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-accent/30"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${alumni.color} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 -z-10 rounded-[50px_15px_50px_15px]`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
