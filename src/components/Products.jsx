import React, { useState } from 'react';
import { X } from 'lucide-react';
import header from '../assets/header.png';

const WorkshopSelector = () => {
    const [selectedWorkshops, setSelectedWorkshops] = useState([]);
    const [productService, setProductService] = useState('');

    const workshops = [
        { id: 'global-leaders', name: 'Global Leaders Forum !NEW (3 Days)', duration: '3 Days' },
        { id: 'gitex-main', name: 'GITEX Main Stage', duration: null },
        { id: 'ai-robotics', name: 'Artificial Intelligence & Robotics (15)', duration: '15' },
        { id: 'ai-everything', name: 'AI Everything (4 Days)', duration: '4 Days' },
        { id: 'cybersecurity', name: 'Cybersecurity (4 Days)', duration: '4 Days' },
        { id: 'future-health', name: 'Future Health !NEW (2 Days)', duration: '2 Days' },
        { id: 'digital-cities', name: 'Digital Cities (1 Day)', duration: '1 Day' },
        { id: 'edtech', name: 'Edtech (1 Day)', duration: '1 Day' },
        { id: 'energy-transition', name: 'Energy Transition (1 Day)', duration: '1 Day' },
        { id: 'intelligent-connectivity', name: 'Intelligent Connectivity (1 Day)', duration: '1 Day' },
        { id: 'digital-finance', name: 'Digital Finance (1 Day)', duration: '1 Day' },
        { id: 'future-mobility', name: 'Future Mobility (1 Day)', duration: '1 Day' }
    ];

    const handleWorkshopToggle = (workshopId) => {
        setSelectedWorkshops(prev =>
            prev.includes(workshopId)
                ? prev.filter(id => id !== workshopId)
                : [...prev, workshopId]
        );
    };

    const handleApply = () => {
        console.log('Selected workshops:', selectedWorkshops);
        console.log('Product/Service:', productService);
        // Handle form submission here
    };

    const handleCancel = () => {
        setSelectedWorkshops([]);
        setProductService('');
        // Handle modal close here
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header with background image */}

            <div
                className="relative h-26 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${header})`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-between px-6">
                    <h1 className="text-white text-2xl font-bold">SELECT WORKSHOPS</h1>
                    <button
                        onClick={handleCancel}
                        className="text-white hover:text-gray-200 transition-colors bg-white bg-opacity-20 rounded-full p-2"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>

            {/* Content Container */}
            {/* Content */}
            <div className="p-8">
                {/* Product/Service Input */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Try Product/Service"
                        value={productService}
                        onChange={(e) => setProductService(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    />
                </div>

                {/* Instructions */}
                <div className="mb-8">
                    <p className="text-gray-800 text-base leading-relaxed">
                        I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5) * Please Ensure You Have Chosen At Least One Category In Each Section
                    </p>
                </div>

                {/* Workshop Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {workshops.map((workshop) => (
                        <div key={workshop.id} className="flex items-center space-x-4">
                            <input
                                type="checkbox"
                                id={workshop.id}
                                checked={selectedWorkshops.includes(workshop.id)}
                                onChange={() => handleWorkshopToggle(workshop.id)}
                                className="w-6 h-6 text-green-600 border-2 border-gray-400 rounded focus:ring-green-500 focus:ring-2"
                            />
                            <label
                                htmlFor={workshop.id}
                                className="text-gray-900 text-base cursor-pointer flex-1"
                            >
                                {workshop.name}
                            </label>

                        </div>
                    ))}
                </div>
<div className="border-t border-gray-400 my-6" />

                {/* Footer Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleCancel}
                        className="px-8 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={handleApply}
                        className="px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-green-500 to-green-900 hover:from-green-600 hover:to-green-800 transition-colors"
                    >
                        APPLY
                    </button>

                </div>
            </div>
        </div>
    );
};

export default WorkshopSelector;