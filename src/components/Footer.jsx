import React from 'react';

const Footer = () => (
  <footer className='bg-gray-950 text-slate-300 shadow-lg sticky text-center p-3 '>
    <p className='hover:underline'>© 2024 Ubaid ur Rahaman. All rights reserved.</p>

    <p className='hover:underline'>"Building the future, one line of code at a time."</p>
    <p className='hover:underline'>Built with React.js and ❤️</p>
    <button className='bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 shadow-lg mt-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      Back to Top
    </button>
  </footer>
);

export default Footer;
