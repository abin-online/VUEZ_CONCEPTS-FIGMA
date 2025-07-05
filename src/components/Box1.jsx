import React from 'react';
import box1 from '../assets/box1.png';
import box1logo from '../assets/box1logo.png';

const TicketCard1 = () => {
  return (
    <div className="relative w-96 h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black">
      
      {/* Background Image */}
<img
  src={box1}
  alt="Background"
  className="absolute w-full h-full object-cover opacity-40 blur-sm"
/>


      {/* Semi-transparent Overlay */}

      {/* Top Section: Title */}
      <div className="absolute top-0 left-0 w-full bg-purple-800 py-3 px-4">
        <h3 className="text-white font-bold text-lg tracking-wide">
          VISITOR 3 DAY ACCESS TICKET
        </h3>
        <a href="#" className="text-yellow-400 text-sm font-semibold">VIEW DETAILS →</a>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4 text-white">

        {/* Ticket Info */}
        <p className="text-sm mb-4 leading-relaxed">
          Visitor Passes provide <span className="text-green-400 font-semibold">3 DAYS ACCESS</span> to GITEX NIGERIA exhibition and all free conference.
        </p>

        {/* Logo */}
        <div className="flex items-center space-x-3 mb-6">
          <img src={box1logo} alt="Gitex Logo" className="h-9" />
        </div>

        <hr className="border-gray-600 mb-3" />

        {/* Price & VAT */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-300 line-through mr-2">USD 43</span>
            <span className="text-2xl font-extrabold text-white">32.5</span>
          </div>
          <span className="text-xs text-gray-300">Incl. 20% VAT</span>
        </div>

        {/* Quantity Control */}
        <div className="flex items-center space-x-3">
          <button className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600 transition">-</button>
          <span className="text-white font-semibold">25</span>
          <button className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600 transition">+</button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard1;
