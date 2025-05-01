/* App.js */
import React, { Suspense, lazy } from "react"
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

// Немедленная загрузка критических компонентов для Home
import End from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Header from './components/Navbar/Navbar'
import AboutMe from './Main/AboutMe'
import AboutUs from './Main/Header'
import Projects from './Main/Projects'
import Skills from './Main/Skills'

// Отложенная загрузка некритических компонентов
const Contacts = lazy(() => import('./page/Contacts/Contacts'));
const Portfolio = lazy(() => import('./page/Portfolio/Portfolio'));
const Register = lazy(() => import('./auth/auth'));

function Home() {
  return (
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
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Register />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;