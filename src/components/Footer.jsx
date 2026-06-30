import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ChevronUp, Home, Users, BookOpen, GraduationCap, Search, UserCheck, Github, Newspaper } from 'lucide-react';

const Footer = () => {
  const [isInHeroSection, setIsInHeroSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        // Show button when scrolled past hero section (with 100px buffer)
        setIsInHeroSection(window.scrollY < heroBottom - 100);
      } else {
        // If no hero section found, show button after scrolling 300px
        setIsInHeroSection(window.scrollY < 300);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'About Us', id: 'about', icon: Users },
    { name: 'Programs', id: 'programs', icon: BookOpen },
    { name: 'Faculty', id: 'faculty', icon: GraduationCap },
    { name: 'Research', id: 'research', icon: Search },
    { name: 'Admissions', id: 'admissions', icon: UserCheck },
  ];

  const resources = [
    { name: 'Learning Resources', id: 'learning-resources' },
    { name: 'Student Projects', id: 'projects' },
    { name: 'Faculty Achievements', id: 'faculty-achievements' },
    { name: 'Student Achievements', id: 'achievements' },
    { name: 'Alumni Network', id: 'alumni' },
    { name: 'Board of Studies', id: 'bos' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/GM-University/61557598646220/', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://x.com/GM_University_S', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/gmu.ac.in/', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: 'https://www.instagram.com/gmuniversity_official_set_dvg', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCfXBtvEXFI55qoBEH1WBH8A', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Web Developer Section */}
        <div className="py-12 border-b border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent mb-2">Developed By</h3>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-[20px_5px_20px_5px] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Card Content with Overlapping Image */}
              <div className="relative bg-gradient-to-b from-white/10 to-primary-dark/20 backdrop-blur-md rounded-[20px_5px_20px_5px] p-6 pt-8 pl-28 text-left border border-accent/20">
                {/* Developer Image - Overlapping card content */}
                <div className="absolute -top-12 -left-10">
                  <img
                    src="/assets/Footer/div.jpg"
                    alt="Divya Patel G M"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-accent/40 shadow-xl"
                    onError={(e) => {
                      console.error('Failed to load developer image');
                      e.target.style.display = 'none';
                    }}
                  />
                  
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">Divya Patel G M</h4>
                <p className="text-accent text-sm mb-4">Artificial Intelligence & Machine Learning</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <p className="text-white/90 text-sm">GM Institute of Technology</p>
                  </div>

                  <div className="flex space-x-3">
                    <a href="https://linkedin.com/in/divyapatelgm" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/divyapatelgm" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:divyapatelgm2004@gmail.com" className="bg-white/10 p-3 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/logo/image.png" alt="GM University" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold">AI & ML Department</h3>
                <p className="text-sm text-primary-light">GM University</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading the way in Artificial Intelligence and Machine Learning education,
              research, and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-white/10 p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-light">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center group w-full text-left"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-light">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(resource.id)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center group w-full text-left"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-light">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">GM University </p>
                  <p className="text-white/80">Davangere, Karnataka</p>
                  <p className="text-white/80">India - 577006</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/80">08192-243396, 9886997564</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/80"><a href="mailto:ashak@gmit.ac.in">ashak@gmit.ac.in</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              {new Date().getFullYear()} GM University - Department of AI & ML. All rights reserved.
            </div>
          </div>
        </div>

        {/* Scroll to Top and Magazine Buttons */}
        {!isInHeroSection && (
          <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
            <button
              onClick={() => {
                const newsletterSection = document.getElementById('newsletter');
                if (newsletterSection) {
                  newsletterSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transform hover:scale-110 transition-all duration-300 group"
              title="View News Letter"
              aria-label="View News Letter"
            >
              <Newspaper className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-dark transform hover:scale-110 transition-all duration-300 group"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent animate-pulse"></div>
    </footer>
  );
};

export default Footer;
