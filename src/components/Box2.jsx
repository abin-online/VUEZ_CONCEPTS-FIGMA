import React from 'react';
import box2 from '../assets/box2.jpg';
import { CheckCircle } from 'lucide-react';

const TicketCardVisitor = () => {
  return (
    <div className="relative w-96 rounded-2xl overflow-hidden shadow-xl border border-gray-700 bg-black">
      
      {/* Background Image with opacity & blur */}
      <img
        src={box2}
        alt="Background"
        className="absolute w-full h-full object-cover opacity-20 blur-sm"
      />

      {/* Top Bar */}
      <div className="relative z-10 bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 flex flex-col space-y-1">
        <h3 className="text-white font-bold text-lg tracking-wide">
          VISITOR 3 DAY ACCESS TICKET
        </h3>
        <a href="#" className="text-yellow-300 text-sm font-semibold">VIEW DETAILS →</a>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 text-white flex flex-col space-y-4">

        {/* Description */}
        <p className="text-sm leading-relaxed">
          Visitor Passes provide <span className="text-green-400 font-semibold">3 DAYS ACCESS</span> to GITEX NIGERIA exhibition and all free conference
        </p>

        {/* Features List */}
{/* Features List */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-200">Access to ConneXions & Investor Lounge</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              'Network Events',
              'All Conference Tracks',
              'All Masterclasses',
              '3 Days Access to the Show'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-xs text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-200">Access to Dubai Internet City Lounge</span>
          </div>
        </div>
        {/* Price & Action */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-bold text-lg">FREE</p>
            <p className="text-xs text-gray-400">INCL. 19% VAT</p>
          </div>
          <button className="bg-white text-black font-bold py-2 px-5 rounded-full hover:bg-gray-200 transition">
            BUY NOW
          </button>
        </div>

      </div>
    </div>
  );
};

export default TicketCardVisitor;
