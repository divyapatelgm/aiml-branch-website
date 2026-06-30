// src/pages/BoS.jsx
import React from 'react';
import BoS from '../components/BoS';
import NavigationCards from '../components/NavigationCards';

const BoSPage = () => {
  return (
    <div className="relative">
      <BoS />
      <NavigationCards currentPage="/bos" />
    </div>
  );
};

export default BoSPage;
