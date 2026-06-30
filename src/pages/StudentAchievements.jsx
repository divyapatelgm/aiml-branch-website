// src/pages/StudentAchievements.jsx
import React from 'react';
import Achievements from '../components/StudentAchievements';
import NavigationCards from '../components/NavigationCards';

const StudentAchievementsPage = () => {
  return (
    <div className="relative">
      <Achievements />
      <NavigationCards currentPage="/achievements" />
    </div>
  );
};

export default StudentAchievementsPage;
