import React, { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skill from './components/Skill';

function App() {
  // const [theme, setTheme] = useState(false);
  // const handleClick = () => {
  //   return setTheme(!theme);
  // };
  return (
    <div className="darktheme">
      <Hero />
      <Skill />
      <Expertise />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
