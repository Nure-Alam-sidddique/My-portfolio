import React from 'react';
import { Link } from 'react-router-dom';
import personalPhoto from '../../../assets/images/myPhoto.png';

const Banner = () => {
    return (
      <div id="banner" className="bg-gray-800 h-auto">
        {/* <h1 className="pt-12 text-3xl text-center text-white">
          This is baner page
        </h1> */}
        <div className="container pt-20">
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-2">
            <div className="mx-auto mt-10 ">
              <h3 className="text-1xl text-yellow-400 font-semibold">
                MY NAME IS NURE-ALAM SIDDIQE
              </h3>
              <h1 className="text-2xl text-white p-2">
                I AM A JUINOR
                <br />
                <span className="text-yellow-500"> FULL STACK</span> <br />
                WEB DEVELOPER
              </h1>
              <p className="mb-20 text-white">I'm a junior full stack web developer</p>
              <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 transition duration-500 py-2 px-4 rounded-sm"
              >
                <Link
                  className="text-gray-50 text-xl"
                  to="/files/nurealam.pdf"
                  target="_blank"
                  download
                >
                  Resume Download
                </Link>
              </button>
            </div>
            <div className="h-96 mb-4">
              <img
                className="h-96 w-full transform hover:translate-y-6 duration-500 "
                src={personalPhoto}
                alt="Personal-Photo"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;