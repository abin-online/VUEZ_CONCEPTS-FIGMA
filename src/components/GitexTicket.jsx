import React, { useState } from 'react';
import header from '../assets/header.png';
import ProgressStepper from './ProgressStepper';
import background from '../assets/background.png';

const GitexTicket = () => {


    const [promoCode, setPromoCode] = useState('GITEX15');
    const [appliedPromo, setAppliedPromo] = useState({
            code: promoCode,
            discount: '15% (EUR 0.06 incl. VAT)',
            appliedTo: '2 lowest-priced tickets',
        });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [dataConsentAccepted, setDataConsentAccepted] = useState(false);



    const handleApplyPromo = () => {
        if (promoCode.trim() === '') return;

        // Simulate promo application
        setAppliedPromo({
            code: promoCode,
            discount: '15% (EUR 0.06 incl. VAT)',
            appliedTo: '2 lowest-priced tickets',
        });
        setPromoCode('');
    };

    const handleRemovePromo = () => {
        setAppliedPromo(null);
    };

    const handleNext = () => {
        if (!termsAccepted || !dataConsentAccepted) {
            alert('Please accept terms and conditions and data consent to proceed.');
            return;
        }
        console.log('Form Data:', formData);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* Top header */}
            <div
                className="relative h-26 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${header})` }}
            >
  
            </div>

            {/* Progress steps */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
                <ProgressStepper currentStep={2} />

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                        <h2 className="text-2xl font-bold text-white">Registration Summary</h2>
                    </div>

                    <div className="p-8">
                        {/* Ticket Information */}
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-semibold text-gray-900">PREMIUM TICKET X 2</p>
                            <p className="font-semibold text-gray-900">FREE 0.16</p>
                        </div>

                        {/* Promo Code Section */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                            <h3 className="text-green-700 font-semibold mb-4">Have a promo code?</h3>

                            {!appliedPromo ? (
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder="Enter Promo code"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button
                                        onClick={handleApplyPromo}
                                        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                                    >
                                        APPLY
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <div className="text-green-800 text-sm font-semibold bg-green-100 border border-green-200 rounded p-3">
                                        Promo code <strong>"{appliedPromo.code}"</strong> applied successfully! Applied to {appliedPromo.appliedTo}.
                                    </div>
                                    <div className="bg-white border border-green-200 rounded p-3 text-sm text-gray-700 space-y-1">
                                        <p><strong>Promo code applied:</strong> {appliedPromo.code}</p>
                                        <p><strong>Promo code applied:</strong> {appliedPromo.discount}</p>
                                        <p><strong>Applied to:</strong> {appliedPromo.appliedTo}</p>
                                        <button
                                            onClick={handleRemovePromo}
                                            className="mt-2 px-4 py-1 bg-red-50 border border-red-400 text-red-700 font-medium text-xs rounded hover:bg-red-100"
                                        >
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Student Ticket Info */}
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-gray-700">Student Ticket Access On Day 3 Only</p>
                            <p className="text-gray-700">EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</p>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-200">
                            <p className="text-xl font-bold text-gray-900">
                                Total:{' '}
                                <span className="line-through text-gray-400 mr-2">EUR 300</span>
                                EUR 150
                            </p>
                            <p className="text-sm text-gray-600">Incl. 19% VAT</p>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="space-y-4 mb-8">
                            <label className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                                />
                                <span className="text-sm text-gray-700">
                                    I have read and accept the{' '}
                                    <a href="#" className="text-red-600 underline">terms and conditions</a>,{' '}
                                    <a href="#" className="text-red-600 underline">Privacy Policy</a>, and consent that attendees under the age of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only, and students above 16 and below 18 can attend only if accompanied by a school or faculty member *
                                </span>
                            </label>

                            <label className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    checked={dataConsentAccepted}
                                    onChange={(e) => setDataConsentAccepted(e.target.checked)}
                                    className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                                />
                                <span className="text-sm text-gray-700">
                                    I hereby consent the use of my data by the organiser, exhibitors and sponsors of DWTC & KAOUN International for delivering services and marketing purposes. I am aware that I can object to the sending of newsletters at any time *
                                </span>
                            </label>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center space-x-4 mt-8">
                            <button
                                className="w-32 h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-800 to-purple-600 hover:opacity-90 transition"
                                onClick={() => console.log('Go to previous step')}
                            >
                                PREVIOUS
                            </button>
                            <button
                                className="w-32 h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-green-700 to-green-600 hover:opacity-90 transition"
                                onClick={handleNext}
                            >
                                NEXT
                            </button>
                        </div>
                    </div>
                </div>

            </div>
                {/* Bottom header */}
                <div
                    className="relative h-26 bg-cover bg-center bg-no-repeat mt-8"
                    style={{ backgroundImage: `url(${header})` }}
                />
        </div>
    );
};

export default GitexTicket;
