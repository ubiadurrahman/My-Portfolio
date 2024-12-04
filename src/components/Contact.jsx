import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button and show loader

    emailjs
      .sendForm(
        "service_croj96z",
        "template_ow3d4yj",
        form.current,
        "KEu_HJk8jZnHG8DLG"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button
      });
  };

  return (
    <div className="w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details Section */}
          <div className="p-6 bg-gray-700 rounded-lg">
            <h1 className="text-2xl sm:text-3xl text-purple-400 font-bold tracking-tight">
              Get in touch:
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-2">
              I'm currently available for new projects, so feel free to send me
              a message about anything you want to collaborate on.
            </p>

            {/* Contact Details */}
            <div className="flex items-center mt-6 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="ml-4 text-sm sm:text-base">
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
                className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="ml-4 text-sm sm:text-base">+92 3489511035</div>
            </div>
            <div className="flex items-center mt-4 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="ml-4 text-sm sm:text-base">ur83420@gmail.com</div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 bg-gray-700 rounded-lg flex flex-col space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl text-purple-400 font-bold text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 focus:border-blue-500 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className={`py-3 px-6 font-bold rounded-lg transition-all ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-400 text-white"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
