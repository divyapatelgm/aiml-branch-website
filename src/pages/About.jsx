// src/pages/About.jsx
import React from 'react';
import About from '../components/About';
import NavigationCards from '../components/NavigationCards';

const AboutPage = () => {
  return (
    <div className="relative">
      <About />
      <NavigationCards currentPage="/about" />
    </div>
  );
};

export default AboutPage;
