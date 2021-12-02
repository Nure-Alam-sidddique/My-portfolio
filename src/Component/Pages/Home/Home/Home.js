import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
      <div id="home">
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        {/* <Services></Services> */}
        <Skill></Skill>
        <Blogs></Blogs>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
};

export default Home;