// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import DepartmentOverview from '../components/DepartmentOverview';
import VisionMission from '../components/VisionMission';
import PhotoGallery from '../components/PhotoGallery';
import NavigationCards from '../components/NavigationCards';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <DepartmentOverview />
      <VisionMission />
      <PhotoGallery />
      <NavigationCards currentPage="/" />
    </div>
  );
};

export default Home;
