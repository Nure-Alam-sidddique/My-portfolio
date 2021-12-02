import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
    return (
      <div>
        <nav className="bg-gray-800 h-12 text-white fixed top-0 z-10 w-full h-auto  ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-2xl p-1 text-yellow-300">
                Nure Alam Siddiqe
              </h1>
            </div>
            <div className="hidden  md:block">
              <ul className="flex justify-items-center ">
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Home
                </Link>
                {/* <Link
                  className="p-3"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Services
                </Link> */}
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  About
                </Link>
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Project
                </Link>
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Skill
                </Link>
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Blog
                </Link>
                <Link
                  className="p-3 text-xl cursor-pointer"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-48}
                  duration={1000}
                >
                  Contact
                </Link>
              </ul>
            </div>
            <div className="md:hidden sm:block mx-4 h-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleClick()}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className="md:hidden sm:block">
            <div
              className={`flex flex-col justify-content-center ${
                click ? "block" : "hidden"
              }`}
            >
              <Link
                className="p-1"
                to="home"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Home
              </Link>
              {/* <Link
                className="p-1"
                to="services"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Services
              </Link> */}
              <Link
                className="p-1"
                to="about"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                About
              </Link>
              <Link
                className="p-1"
                to="project"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Project
              </Link>
              <Link
                className="p-1"
                to="skill"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Skill
              </Link>
              <Link
                className="p-1"
                to="blog"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Blog
              </Link>

              <Link
                className="p-1"
                to="contact"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;
