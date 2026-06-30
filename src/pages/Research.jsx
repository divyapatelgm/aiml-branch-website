// src/pages/Research.jsx
import React from 'react';
import Research from '../components/Research';
import NavigationCards from '../components/NavigationCards';

const ResearchPage = () => {
  return (
    <div className="relative">
      <Research />
      <NavigationCards currentPage="/research" />
    </div>
  );
};

export default ResearchPage;
