import React from 'react';
import { FaBeer } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
      <div id="footer" className="h-auto w-screen bg-gray-900 relative text-center ">
        <div className="mx-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="h-36 w-full bg-gray-800">
              <h1 className="text-yellow-400 text-2xl">Nure-Alam Siddique</h1>
              <p className="text-white">I'm Full Stack Web Developer</p>
              <p className="text-white">Self Learner</p>
              
              <div>
                  <span><FaBeer/></span>
              </div>
            </div>
            <div className="h-36 w-full bg-gray-800">
              <h1 className="text-2xl text-yellow-400">Portfolio</h1>
               <div>
              <ul className="flex justify-center  ">
                  <span className="flex flex-col">
                <Link
                  className="px-3 text-white mt-1 cursor-pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Home
                </Link>
                <Link
                  className="px-3 text-white mt-1cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  About
                </Link>
                <Link
                  className="px-3 text-white mt-1 cursor-pointer"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Project
                </Link>
                </span>
                <span className="flex flex-col">
                <Link
                  className="px-3 text-white mt-1 cursor-pointer"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Skill
                </Link>
                <Link
                  className="px-3 text-white mt-1  cursor-pointer"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Blog
                </Link>
                <Link
                  className="px-3 text-white mt-1cursor-pointer"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Contact
                </Link>
                </span>
              </ul>
              </div>
            </div>
            <div className="h-36 w-full bg-gray-800"></div>
          </div>
          <p className=" text-white text-center">
            Developed By @ Nure Alam Siddique
          </p>
        </div>
      </div>
    );
};

export default Footer;