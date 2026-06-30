// src/pages/FacultyAchievements.jsx
import React from 'react';
import FacultyAchievements from '../components/FacultyAchievements';
import NavigationCards from '../components/NavigationCards';

const FacultyAchievementsPage = () => {
  return (
    <div className="relative">
      <FacultyAchievements />
      <NavigationCards currentPage="/faculty-achievements" />
    </div>
  );
};

export default FacultyAchievementsPage;
