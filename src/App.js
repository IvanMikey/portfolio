/* App.js */
import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Lazy loaded components
const AboutMe = lazy(() => import("./Main/AboutMe"));
const AboutUs = lazy(() => import("./Main/Header"));
const Projects = lazy(() => import("./Main/Projects"));
const Skills = lazy(() => import('./Main/Skills'));
const End = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import('./components/Navbar/Navbar'));
const Contacts = lazy(() => import('./page/Contacts/Contacts'));
const Portfolio = lazy(() => import('./page/Portfolio/Portfolio'));
const Register = lazy(() => import('./auth/auth'));
const LoadingScreen = lazy(() => import("./components/LoadingScreen/LoadingScreen"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="home-container">
        <Header />
        <main className="main-content">
          <AboutUs />
          <AboutMe />
          <Skills />
          <Projects />
        </main>
        <End />
      </div>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;