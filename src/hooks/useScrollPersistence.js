import { useEffect, useRef } from 'react';

const useScrollPersistence = () => {
  const scrollTimeoutRef = useRef(null);
  const isRestoringRef = useRef(false);

  // Save scroll position to sessionStorage
  const saveScrollPosition = () => {
    if (isRestoringRef.current) return;
    
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const scrollY = window.scrollY;
      const currentSection = getCurrentSection();
      
      sessionStorage.setItem('scrollPosition', scrollY.toString());
      sessionStorage.setItem('currentSection', currentSection);
    }, 100);
  };

  // Get current visible section based on scroll position
  const getCurrentSection = () => {
    const sections = [
      'hero',
      'about', 
      'programs',
      'learning-resources',
      'faculty',
      'bos',
      'research',
      'projects',
      'iqac',
      'faculty-achievements',
      'placements',
      'achievements',
      'alumni',
      'admissions'
    ];

    const scrollY = window.scrollY + 100; // Offset for better detection
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        
        if (absoluteTop <= scrollY && absoluteTop + element.offsetHeight > scrollY) {
          return sectionId;
        }
      }
    }
    
    return 'hero';
  };

  // Restore scroll position from sessionStorage
  const restoreScrollPosition = () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const savedSection = sessionStorage.getItem('currentSection');
    
    if (savedPosition && savedSection) {
      isRestoringRef.current = true;
      
      // Try to scroll to saved position first
      window.scrollTo(0, parseInt(savedPosition, 10));
      
      // Fallback to section if position doesn't work
      setTimeout(() => {
        const element = document.getElementById(savedSection);
        if (element) {
          const rect = element.getBoundingClientRect();
          const currentScrollY = window.scrollY;
          const elementTop = rect.top + currentScrollY;
          
          // If we're not close enough to the saved section, scroll to it
          if (Math.abs(currentScrollY - elementTop) > 200) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        isRestoringRef.current = false;
      }, 100);
    }
  };

  // Save current section when navigating
  const saveCurrentSection = (sectionId) => {
    sessionStorage.setItem('currentSection', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollY = rect.top + window.scrollY;
      sessionStorage.setItem('scrollPosition', scrollY.toString());
    }
  };

  useEffect(() => {
    // Restore scroll position on component mount
    const timer = setTimeout(() => {
      restoreScrollPosition();
    }, 100);

    // Add scroll listener to save position
    window.addEventListener('scroll', saveScrollPosition, { passive: true });
    
    // Save position before page unload
    const handleBeforeUnload = () => {
      saveScrollPosition();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    saveCurrentSection,
    getCurrentSection,
    restoreScrollPosition
  };
};

export default useScrollPersistence;
