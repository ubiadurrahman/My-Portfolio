// import React from "react";

// export default function Contact() {
//   return (
//     <div className="top-0 z-[-2]  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white p-6">
//       <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//         <div className="mt-8 overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Section: Contact Details */}
//             <div className="p-6 bg-gray-700 sm:rounded-lg">
//               <h1 className="text-3xl sm:text-4xl text-purple-400 font-extrabold tracking-tight">
//                 Get in touch:
//               </h1>
//               <p className="text-lg sm:text-xl font-medium text-gray-300 mt-2">
//                 I'm currently available for new projects, so feel free to send
//                 me a message about anything you want to collaborate on.
//               </p>

//               <div className="flex items-center mt-8 text-gray-300">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   className="w-8 h-8 text-blue-400"
//                 >
//                   <path
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                   Pakistan, KPK, Buner, Pir Baba
//                 </div>
//               </div>

//               <div className="flex items-center mt-4 text-gray-300">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   className="w-8 h-8 text-blue-400"
//                 >
//                   <path
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                   +92 3489511035
//                 </div>
//               </div>

//               <div className="flex items-center mt-2 text-gray-300">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   className="w-8 h-8 text-blue-400"
//                 >
//                   <path
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                   ur83420@gmail.com
//                 </div>
//               </div>
//             </div>

//             {/* Right Section: Contact Form */}
//             <form className="p-6 bg-gray-700 sm:rounded-lg flex flex-col justify-center space-y-4">
//               <h2 className="text-3xl text-purple-400 font-extrabold tracking-tight text-center">
//                 Send a Message
//               </h2>

//               <div className="flex flex-col">
//                 <label htmlFor="name" className="hidden">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Full Name"
//                   className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="email" className="hidden">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="tel" className="hidden">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="tel"
//                   id="tel"
//                   placeholder="Mobile Number"
//                   className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="message" className="hidden">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Your Message"
//                   className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
//                   rows="5"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full md:w-32 bg-purple-600 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_croj96z",
        "template_ow3d4yj",
        form.current,
        "KEu_HJk8jZnHG8DLG"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="top-0 z-[-2] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white p-6">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Contact Details */}
            <div className="p-6 bg-gray-700 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-purple-400 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-300 mt-2">
                I'm currently available for new projects, so feel free to send
                me a message about anything you want to collaborate on.
              </p>

              <div className="flex items-center mt-8 text-gray-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-blue-400"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Pakistan, KPK, Buner, Pir Baba
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-blue-400"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +92 3489511035
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-blue-400"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  ur83420@gmail.com
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 bg-gray-700 sm:rounded-lg flex flex-col justify-center space-y-4"
            >
              <h2 className="text-3xl text-purple-400 font-extrabold tracking-tight text-center">
                Send a Message
              </h2>

              <div className="flex flex-col">
                <label htmlFor="user_name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Full Name"
                  className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="user_email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Email"
                  className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full py-3 px-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-32 bg-purple-600 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
