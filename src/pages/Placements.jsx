// src/pages/Placements.jsx
import React from 'react';
import Placements from '../components/Placements';
import NavigationCards from '../components/NavigationCards';

const PlacementsPage = () => {
  return (
    <div className="relative">
      <Placements />
      <NavigationCards currentPage="/placements" />
    </div>
  );
};

export default PlacementsPage;
