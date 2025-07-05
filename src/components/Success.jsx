import React from 'react';
import header from '../assets/header.png';
import background from '../assets/background.png';

const SuccessPage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-between"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* Top Header */}
            <div
                className="h-24 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${header})` }}
            />

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full border border-gray-200 overflow-hidden">
                    
                    {/* Green Top Border / Shade */}
                    <div className="h-2 bg-gradient-to-r from-green-500 to-green-700" />

                    {/* Content */}
                    <div className="p-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">THANK YOU!</h1>
                        <p className="text-gray-700 text-lg mb-4">
                            Your Registration Has Been Submitted Successfully
                        </p>
                        <p className="text-gray-600 text-sm mb-6">
                            A Confirmation Email With Your Event Details Will Be Sent To You Shortly.
                            Please Check Your Inbox (And Spam Folder).
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Return To Homepage
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Header */}
            <div
                className="h-24 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${header})` }}
            />
        </div>
    );
};

export default SuccessPage;
