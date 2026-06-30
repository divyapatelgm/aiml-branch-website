// src/pages/LearningResources.jsx
import React from 'react';
import LearningResources from '../components/LearningResources';
import NavigationCards from '../components/NavigationCards';

const LearningResourcesPage = () => {
  return (
    <div className="relative">
      <LearningResources />
      <NavigationCards currentPage="/learning-resources" />
    </div>
  );
};

export default LearningResourcesPage;
