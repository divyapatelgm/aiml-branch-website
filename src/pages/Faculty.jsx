// src/pages/Faculty.jsx
import React from 'react';
import FacultySection from '../components/FacultySection';
import NavigationCards from '../components/NavigationCards';

const FacultyPage = () => {
  return (
    <div className="relative">
      <FacultySection />
      <NavigationCards currentPage="/faculty" />
    </div>
  );
};

export default FacultyPage;
