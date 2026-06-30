// src/pages/Alumni.jsx
import React from 'react';
import Alumni from '../components/Alumni';
import NavigationCards from '../components/NavigationCards';

const AlumniPage = () => {
  return (
    <div className="relative">
      <Alumni />
      <NavigationCards currentPage="/alumni" />
    </div>
  );
};

export default AlumniPage;
