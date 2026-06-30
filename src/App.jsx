import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import useScrollPersistence from './hooks/useScrollPersistence';

// Import components that are immediately visible
import NavigationCards from './components/NavigationCards';
import Hero from './components/Hero';
import DepartmentOverview from './components/DepartmentOverview';
import VisionMission from './components/VisionMission';
import PhotoGallery from './components/PhotoGallery';
import Video from './components/Video';
import CampusVideos from './components/CampusVideos';
import Footer from './components/Footer';
import BoSVisit from './components/BoS_visit';
// Lazy load heavier page components for code splitting
const About = lazy(() => import('./pages/About'));
import GloryWall from './components/GloryWall';
const Programs = lazy(() => import('./pages/Programs'));
const CareerOpportunities = lazy(() => import('./components/CareerOpportunities'));
const LearningResources = lazy(() => import('./pages/LearningResources'));
const BoS = lazy(() => import('./pages/BoS'));
const Research = lazy(() => import('./pages/Research'));
const Projects = lazy(() => import('./pages/Projects'));
const IQAC = lazy(() => import('./pages/IQAC'));
const FacultyAchievements = lazy(() => import('./pages/FacultyAchievements'));
const Placements = lazy(() => import('./pages/Placements'));
const StudentAchievements = lazy(() => import('./pages/StudentAchievements'));
const Alumni = lazy(() => import('./pages/Alumni'));
const Admissions = lazy(() => import('./pages/Admissions'));
const NewsLetter = lazy(() => import('./components/NewsLetter'));
const FacultySection = lazy(() => import('./components/FacultySection'));
const DepartmentEvents = lazy(() => import('./components/DepartmentEvents'));
const VideoPage = lazy(() => import('./pages/VideoPage'));
const MemoryPics = lazy(() => import('./components/MemoryPics'));
const GmuUpdates = lazy(() => import('./pages/gmu_updates'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  useScrollPersistence();

  return (
    <div className="App">
      <BoSVisit />
      <NavigationCards />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <DepartmentOverview />
            <GmuUpdates />
            <CampusVideos />
            <GloryWall />
            <VisionMission />
            <PhotoGallery />
            <Suspense fallback={<LoadingSpinner />}>
              <About />
              <Programs />
              <CareerOpportunities />
              <LearningResources />
              <FacultySection />
              <BoS />
              <Research />
              <Projects />
              <IQAC />
              <FacultyAchievements />
              <Placements />
              <StudentAchievements />
              <Alumni />
              <Admissions />
              <NewsLetter />
              <DepartmentEvents />
            </Suspense>
          </>
        } />
        <Route path="/videos" element={
          <Suspense fallback={<LoadingSpinner />}>
            <VideoPage />
          </Suspense>
        } />
        <Route path="/videos/" element={
          <Suspense fallback={<LoadingSpinner />}>
            <VideoPage />
          </Suspense>
        } />
        <Route path="/memory-pics" element={
          <Suspense fallback={<LoadingSpinner />}>
            <MemoryPics />
          </Suspense>
        } />
        <Route path="/gmu-updates" element={
          <Suspense fallback={<LoadingSpinner />}>
            <GmuUpdates />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
