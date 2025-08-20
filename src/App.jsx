import React, { useEffect, useState } from 'react';
import Hero from './components/screens/Hero';
import AboutMe from './components/screens/AboutMe';
import SkillsTechnologies from './components/screens/SkillsTechnologies';
import FeaturedProjects from './components/screens/FeaturedProjects';
import ExperienceJourney from './components/screens/ExperienceJourney';
import EducationBackground from './components/screens/EducationBackground';
import Contact from './components/screens/Contact';
import Footer from './components/screens/Footer';
import Navbar from './components/screens/Navbar';
import CursorRipple from './animation/CursorRipple';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar scrolled={scrolled} />
      <CursorRipple />
      <Hero />
      <AboutMe />
      {/* <SkillsTechnologies />
      <FeaturedProjects />
      <ExperienceJourney />
      <EducationBackground />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
