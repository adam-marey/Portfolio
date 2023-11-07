import React from 'react';
import IntroImage from '../components/IntroImage';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectsContainer from './ProjectsContainer';
import Experience from './Experience';
import Skills from './Skills';
const Home = () => {
  return (
    <div>
      <IntroImage />
      <About />
      <br />
      <br />
      <Skills />
      <br />
      <ProjectsContainer />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
