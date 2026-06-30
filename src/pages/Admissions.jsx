// src/pages/Admissions.jsx
import React from 'react';
import Admissions from '../components/Admissions';
import NavigationCards from '../components/NavigationCards';

const AdmissionsPage = () => {
  return (
    <div className="relative">
      <Admissions />
      <NavigationCards currentPage="/admissions" />
    </div>
  );
};

export default AdmissionsPage;
