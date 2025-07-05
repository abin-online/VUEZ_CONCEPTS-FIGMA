import React from 'react';

const SingleTicketCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-gradient-to-b from-purple-700 to-purple-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
            <h3 className="text-white text-lg font-bold mb-2">VISITOR 3 DAY ACCESS TICKET</h3>
            <p className="text-yellow-300 text-sm font-semibold">VIEW DETAILS →</p>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-b from-gray-900 to-black p-6">
            {/* Description */}
            <p className="text-white text-sm mb-6 leading-relaxed">
              Visitor Passes provide <span className="text-green-400 font-bold">3 DAYS ACCESS</span> to GITEX NIGERIA exhibition and all free conference
            </p>

            {/* Logo Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-white">
                <div className="text-2xl font-bold">GITEX</div>
                <div className="text-sm italic opacity-80">Nigeria</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
                <div className="text-white text-sm font-bold">Ai</div>
                <div className="text-white text-xs opacity-90">EVERYTHING</div>
                <div className="text-white text-xs opacity-90">NIGERIA</div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 border-opacity-50 my-6"></div>

            {/* Price Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-white text-sm">USD</span>
                <span className="text-red-400 text-sm line-through">43</span>
                <span className="text-white text-2xl font-bold">32.5</span>
                <span className="text-gray-300 text-xs">incl. 20% VAT</span>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-md flex items-center justify-center text-sm font-bold transition-colors">
                  -
                </button>
                <span className="text-white text-lg font-semibold px-3">25</span>
                <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-md flex items-center justify-center text-sm font-bold transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicketCard;