import emailjs from 'emailjs-com';
import React, { useState } from 'react';
const Contact = () => {
  const [result, setShowResult] = useState(false);

  const showResult = () => {
    return (<p className="text-xl text-green-50 text-center border p-3 mb-3 w-1/2 mx-auto">Your message successfully send!!!</p>);
  }
  // hide result
  setTimeout(() => { setShowResult(false) }, 5000);
  
  //  Email Send function
    const sendEmail = e => {
        emailjs.sendForm(
            "service_i7ceuoc",
            "template_84j0i1j",
            e.target,
            "user_zdoPizlRZAwhMcwZtcXI5"
      ).then(res => { console.log(res) }).catch(error => console.log(error));
      e.target.reset();
      e.preventDefault();
      setShowResult(true);
    }
    return (
      <div id="contact" className="h-auto bg-gray-800">
        <div className="container mx-auto w-10/12">
          <h1 className="text-xl text-white">Contact Me !!!</h1>
          <h1 className="text-2xl text-white mb-10">
            Let's Create <br /> Something Big
          </h1>
          {result ? showResult() : null}
          <div>
            <form className="flex flex-col mx-auto " onSubmit={sendEmail}>
              <input
                className="outline-none p-2 mb-1 rounded-sm"
                type="text"
                name="fullName"
                placeholder="Full Name"
              />
              <input
                className="outline-none p-2 mb-1 rounded-sm"
                type="email"
                name="email"
                placeholder="Email Adress"
              />
              <input
                className="outline-none p-2 mb-1 rounded-sm"
                type="text"
                name="mobile"
                placeholder="Phone Number"
              />
              <textarea
                className="outline-none p-2  mb-2 rounded-sm"
                rows="10"
                cols="20"
                placeholder="Message"
                name="message"
              />
              <button
                type="submit"
                className="bg-red-50 text-blue-500 md:w-1/6 w-auto mb-7 py-2 px-3 rounded-sm text-blod"
              >
                <span>Send A Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;