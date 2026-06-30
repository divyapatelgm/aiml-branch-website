// src/pages/Programs.jsx
import React from 'react';
import Programs from '../components/Programs';
import NavigationCards from '../components/NavigationCards';

const ProgramsPage = () => {
  return (
    <div className="relative">
      <Programs />
      <NavigationCards currentPage="/programs" />
    </div>
  );
};

export default ProgramsPage;
