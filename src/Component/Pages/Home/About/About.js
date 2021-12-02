import React from 'react';

const About = () => {
    return (
      <div id="about" className="h-auto bg-gray-800 pb-5">
        <h1 className="text-4xl text-yellow-50 text-center py-5">About Me</h1>
        <div className=" mx-auto md:mx-80">
          <p className=" mx-5 mb-4 md:mb-4 text-justify text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis
            magni vel expedita tenetur incidunt consequuntur repellat veniam,
            quibusdam numquam.
          </p>
          <hr className="w-2/12 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 mx-20">
          <div>
            <img
              className="transform hover:skew-y-6 duration-500"
              src="https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
              alt="personal Photo"
            />
          </div>
          <div className="mx-auto md:mx-20 mt-5">
            <div>
              <h1 className="text-white">Hi There</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, enim. Maxime aliquam amet inventore nostrum aliquid
                quaerat nesciunt ducimus at!
              </p>
            </div>
            <div>
              <div className="my-2">
                <p className="text-yellow-300">Name :</p>
                <p className="text-white">Nure-Alam Siddiqe</p>
              </div>
              <div className="my-1">
                <p className="text-yellow-300">Email :</p>
                <p className="text-white">nure.alam91@gmail.com</p>
              </div>
              <div>
                <p className="text-yellow-300">Phone :</p>
                <p className="text-white">+8801738557347</p>
              </div>
              <div className="my-2">
                <p className="text-yellow-300">LinkedIn :</p>
                <p>
                  <a
                    className="text-white"
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