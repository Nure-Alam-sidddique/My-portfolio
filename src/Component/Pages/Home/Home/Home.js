import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
      <div id="home" className="w-full">
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        {/* <Services></Services> */}
        <Skill></Skill>
        <Blogs></Blogs>
        <Contact></Contact>
      </div>
    );
};

export default Home;