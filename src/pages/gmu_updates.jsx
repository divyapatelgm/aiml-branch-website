// src/pages/gmu_updates.jsx
import React from 'react';
import GmuUpdates from '../components/gmu_updates';
import NavigationCards from '../components/NavigationCards';

const GmuUpdatesPage = () => {
  return (
    <div className="relative">
      <GmuUpdates />
      <NavigationCards currentPage="/gmu-updates" />
    </div>
  );
};

export default GmuUpdatesPage;
