import React from 'react';
import header from '../assets/header.png';
import background from '../assets/background.png';
import TicketCard1 from './Box1';
import TicketCardVisitor from './Box2';
import TicketCardExclusive from './TicketCardExclusive';
import TicketCardBestSeller from './TicketCardBestSeller';
import TicketCardBox5 from './TicketCardBox5';
import TicketCardBox6 from './TicketCardBox6';

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Top Header */}
      <div
        className="h-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${header})` }}
      />

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-8 py-10">
        {/* Top Row of Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          <TicketCard1 />
          <TicketCardVisitor />
          <TicketCardExclusive />
        </div>

        {/* Bottom Row of Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          <TicketCardBestSeller/>
          <TicketCardBox5 />
          <TicketCardBox6 />
        </div>
      </div>

      {/* Bottom Header */}
 <div
        className="h-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${header})` }}
      />

      {/* Bottom Green Bar */}
      <div className="flex items-center justify-end px-8 py-4 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white space-x-8">

        {/* Total and VAT */}
        <div className="text-right space-y-1">
          <p className="text-sm">
            Total: <span className="font-bold text-lg">EUR 0</span> Incl. 19% VAT
          </p>
          <a href="#" className="text-xs underline hover:text-green-300 transition">
            View Ticket summary
          </a>
        </div>

        {/* Buy Now button */}
        <button className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition shadow">
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default HomePage;
