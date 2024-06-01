/* App.js */

import React from "react"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import AboutMe from "./Main/AboutMe"
import AboutUs from "./Main/Header"
import Projects from "./Main/Projects"
import Skills from './Main/Skills'
import End from "./components/Footer/Footer"
import Header from './components/Navbar/Navbar'

/* Navbar Import Router */
import Contacts from './page/Contacts/Contacts'
import Portfolio from './page/Portfolio/Portfolio'

/* Projects Import Router */

/* Auth Import Router */
import Register from './auth/auth'

// Loading Import
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"



function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <AboutMe />
      <Skills />
      <Projects />

      <End />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Здесь добавляем Route для LoadingScreen */}
        <Route path="/" element={<LoadingScreen />} />
        {/* Здесь заканчивается отображение LoadingScreen */}
        
        //Navbar
        <Route path="/home/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        //Navbar

        //Auth
        <Route path='/auth/' element={<Register />} />
        //Auth

        //Projects

        //Projects

      </Routes>
    </Router>
  );
}

export default App;