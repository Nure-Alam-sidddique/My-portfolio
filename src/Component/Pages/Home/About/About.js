import React from 'react';
import AboutPhoto from '../../../assets/images/myPhoto2.png';
const About = () => {
    return (
      <div id="about" className="h-auto bg-gray-800 pb-5">
        <h1 className="text-4xl text-yellow-50 text-center py-5">About Me</h1>
        <div className=" mx-auto md:mx-80">
          <p className=" mx-5 mb-4 md:mb-4 text-justify text-white">
            I'm Full Stack Web Developer. Recently I have completed Full-Stack
            Web Developer course from Programming Hero.
          </p>
          <hr className="w-2/12 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-20 mt-10">
          <div>
            <img
              className="transform hover:translate-y-6 duration-500 -mt-12"
              src={AboutPhoto}
              alt="personal Photo"
            />
          </div>
          <div className="mx-auto md:mx-20 mt-24">
            <div>
              <h1 className="text-white text-xl mb-2">
                <span className="text-2xl">H</span>i There
              </h1>
              <p className="text-white">
                I'm Full Stack Web Developer. Recently I have completed
                Full-Stack Web Developer course from Programming Hero.
              </p>
            </div>
            <div>
              <div className="my-2">
                <p className="text-yellow-300 text-xl">Name :</p>
                <p className="text-white font-medium">Nure-Alam Siddiqe</p>
              </div>
              <div className="my-1">
                <p className="text-yellow-300 text-xl">Email :</p>
                <p className="text-white font-medium">nure.alam91@gmail.com</p>
              </div>
              <div>
                <p className="text-yellow-300 text-xl">Phone :</p>
                <p className="text-white font-medium">+8801738557347</p>
              </div>
              <div className="my-2">
                <p className="text-yellow-300 text-xl">LinkedIn :</p>
                <p>
                  <a
                    className="text-white font-medium"
                    href="https://www.linkedin.com/in/md-nure-alam-siddiqe/"
                    target="_blank"
                  >
                    md-nure-alam-siddiqe
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;