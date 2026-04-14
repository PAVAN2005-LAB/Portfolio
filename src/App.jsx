import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Vision from './components/Vision';
import About from './components/About';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <Vision />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Achievements />
        <Volunteering />
        <Contact />
      </div>
    </>
  );
}

export default App;
