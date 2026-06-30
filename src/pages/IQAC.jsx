// src/pages/IQAC.jsx
import React from 'react';
import IQAC from '../components/IQAC';
import NavigationCards from '../components/NavigationCards';

const IQACPage = () => {
  return (
    <div className="relative">
      <IQAC />
      <NavigationCards currentPage="/iqac" />
    </div>
  );
};

export default IQACPage;
