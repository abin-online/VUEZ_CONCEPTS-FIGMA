import React from 'react';
import { CheckCircle } from 'lucide-react';
import box6 from '../assets/box2.jpg';

const TicketCardBox6 = () => {
  return (
    <div className="relative w-96 rounded-2xl overflow-hidden shadow-xl bg-black">

      {/* Background Image */}
      <img
        src={box6}
        alt="Background"
        className="absolute w-full h-full object-cover opacity-20 blur-sm"
      />

      {/* Decorative circles */}
      <div className="absolute -right-8 top-1/2 w-16 h-16 bg-white rounded-full opacity-10"></div>
      <div className="absolute -left-8 top-1/2 w-16 h-16 bg-white rounded-full opacity-10"></div>

      {/* Top Header with Blue Gradient */}
      <div className="relative z-10 bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4">
        <h3 className="text-white font-bold text-lg tracking-wide mb-1">
          VISITOR 3 DAY ACCESS TICKET
        </h3>
        <a href="#" className="text-yellow-300 text-sm font-semibold hover:text-yellow-200 transition-colors">
          VIEW DETAILS →
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white">

        <p className="text-sm leading-relaxed mb-6 text-gray-200">
          Visitor Passes provide <span className="text-green-400 font-semibold">3 DAYS ACCESS</span> to GITEX NIGERIA exhibition and all free conference
        </p>

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

        <div className="border-t border-gray-600 mb-6"></div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-2xl text-white">FREE</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">INCL. 19% VAT</p>
          </div>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            BUY NOW
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400"></div>
    </div>
  );
};

export default TicketCardBox6;
