// src/pages/Projects.jsx
import React from 'react';
import Projects from '../components/Projects';
import NavigationCards from '../components/NavigationCards';

const ProjectsPage = () => {
  return (
    <div className="relative">
      <Projects />
      <NavigationCards currentPage="/projects" />
    </div>
  );
};

export default ProjectsPage;
