import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Users, FileText, Award, Briefcase, Trophy, Building, CheckCircle, X, Menu, Video, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useScrollPersistence from '../hooks/useScrollPersistence';

const NavigationCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const { saveCurrentSection } = useScrollPersistence();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsInHeroSection(window.scrollY < heroBottom - 100);
      } else {
        setIsInHeroSection(window.scrollY < 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    saveCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  const navigationItems = [
    { name: 'About', id: 'about', icon: BookOpen, description: 'Department Overview' },
    { name: 'Programs', id: 'programs', icon: GraduationCap, description: 'Academic Programs' },
    { name: 'Learning Resources', id: 'learning-resources', icon: BookOpen, description: 'Study Materials' },
    { name: 'Faculty', id: 'faculty', icon: Users, description: 'Faculty Profiles' },
    { name: 'BoS', id: 'bos', icon: FileText, description: 'Board of Studies' },
    { name: 'Research and Publications', id: 'research', icon: Award, description: 'Research Work' },
    { name: 'Student Projects', id: 'projects', icon: Briefcase, description: 'Project Showcase' },
    { name: 'IQAC', id: 'iqac', icon: CheckCircle, description: 'Quality Assurance' },
    { name: 'Faculty Achievements', id: 'faculty-achievements', icon: Trophy, description: 'Faculty Awards' },
    { name: 'Student Placements', id: 'placements', icon: Building, description: 'Career Opportunities' },
    { name: 'Student Achievements', id: 'achievements', icon: Trophy, description: 'Student Awards' },
    { name: 'Alumni', id: 'alumni', icon: Users, description: 'Alumni Network' },
    { name: 'Admissions', id: 'admissions', icon: GraduationCap, description: 'Admission Process' },
    { name: 'GMU Updates', id: 'gmu-updates', icon: Bell, description: 'Latest Activities' },
    { name: 'Video Gallery', id: 'videos', icon: Video, description: 'Video Gallery', isRoute: true },
  ];

  return (
    <>
      {/* Hamburger Menu Button - Hidden in hero section */}
      <div 
        className={`fixed top-4 right-4 z-50 transition-all duration-500 ${
          isInHeroSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-accent rounded-full p-2 sm:p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>

      {/* Right Sidebar */}
      <aside className={`fixed right-0 top-0 h-full bg-white transition-all duration-300 z-40 flex flex-col shadow-2xl ${
        isVisible ? 'w-72 sm:w-80 translate-x-0' : 'w-0 translate-x-full overflow-hidden'
      }`}>

        {/* Navigation Items */}
        <div className={`flex-1 overflow-y-auto py-4 pl-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          {navigationItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.id}
                to={`/${item.id}`}
                className={`group flex items-center space-x-3 p-2 mb-1 rounded-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-primary/20 w-full text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                style={{ transitionDelay: isVisible ? `${navigationItems.indexOf(item) * 50}ms` : '0ms' }}
              >
                <div className="p-1.5 rounded-lg transition-all duration-300 shadow-sm bg-slate-100 text-slate-600 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-md transition-colors duration-300 mb-0.5 text-slate-700 group-hover:text-primary">
                    {item.name}
                  </h4>
                </div>
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-3 p-2 mb-1 rounded-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-primary/20 w-full text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                style={{ transitionDelay: isVisible ? `${navigationItems.indexOf(item) * 50}ms` : '0ms' }}
              >
                <div className="p-1.5 rounded-lg transition-all duration-300 shadow-sm bg-slate-100 text-slate-600 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-md transition-colors duration-300 mb-0.5 text-slate-700 group-hover:text-primary">
                    {item.name}
                  </h4>
                </div>
              </button>
            )
          ))}
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default NavigationCards;
