import React, { useState } from 'react';
import { ChevronDown, User, Building, Globe, Mail, Phone, Briefcase } from 'lucide-react';
import header from '../assets/header.png';
import logo from '../assets/logo.png';
import login from '../assets/login.png';
import ProgressStepper from './ProgressStepper';
import background from '../assets/background.png';


const GitexRegistrationForm4 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        email: '',
        confirmEmail: '',
        nationality: '',
        mobile: '',
        companyName: '',
        jobTitle: '',
        companyType: '',
        industry: '',
        selectedWorkshops: [],
    });

const mainCategories = [
  'Artificial Intelligence & Robotics',
  'Artificial Intelligence & Robotics',
];

const subCategories = [
  'Edge Computing',
  'Cloud Computing',
  'Cognitive Computing',
];

const workshops = [
  { id: 1, name: 'Global Leaders Forum | NEW (3 Days)' },
  { id: 2, name: 'GITEX Main Stage' },
  { id: 3, name: 'Artificial Intelligence & Robotics (15)' },
  { id: 4, name: 'Future Health | NEW (2 Days)' },
  { id: 5, name: 'Cybersecurity (4 Days)' },
  { id: 6, name: 'Digital Cities (1 Day)' },
  { id: 7, name: 'Edtech (1 Day)' },
  { id: 8, name: 'Energy Transition (1 Day)' },
  { id: 9, name: 'Intelligent Connectivity (1 Day)' },
  { id: 10, name: 'Digital Finance (1 Day)' },
  { id: 11, name: 'Future Mobility (1 Day)' },
];


    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleWorkshopToggle = (workshopId) => {
        setFormData(prev => ({
            ...prev,
            selectedWorkshops: prev.selectedWorkshops.includes(workshopId)
                ? prev.selectedWorkshops.filter(id => id !== workshopId)
                : [...prev.selectedWorkshops, workshopId],
        }));
    };

    const handleNext = () => {
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
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button>
                        <img src={login} alt="Login" className="w-40 h-auto" />
                    </button>
                </div>
            </div>

            {/* Progress steps */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
                <ProgressStepper currentStep={4} />





                {/* Registration form + Badge */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid lg:grid-cols-3">
                    {/* Left side: Form */}
                    <div className="lg:col-span-2 border-r border-gray-200 p-8">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-600 to-green-900">
                            <h2 className="text-2xl font-bold text-white">Registration Information 1</h2>
                            <span className="px-4 py-2 text-white border border-white rounded">
                                PREMIUM TICKET - FREE Incl. 19% VAT
                            </span>
                        </div>

                        {/* Form fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    First name <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Last name <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Country of residence <span className="text-red-600">*</span>
                                </label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Please Select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Region</label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Please Select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Email address <span className="text-red-600">*</span>
                                </label>
                                <input type="email" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Confirm Email address</label>
                                <input type="email" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Nationality</label>
                                <input type="text" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Mobile number <span className="text-red-600">*</span>
                                </label>
                                <div className="flex">
                                    <select className="border rounded-l px-3 py-2">
                                        <option>+234</option>
                                    </select>
                                    <input type="tel" className="w-full border-t border-b border-r rounded-r px-3 py-2" />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Company name</label>
                                <input type="text" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Job title <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Company type</label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Please Select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Industry</label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Please Select</option>
                                </select>
                            </div>
                        </div>

                        {/* Workshop selection */}
<div className="mt-10 space-y-4">

  {/* Header and Select Button */}
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-medium text-gray-700">
      What products & services are you interested in? <span className="text-red-600">*</span>
    </h4>

    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold cursor-pointer">
      SELECT SOLUTIONS/PRODUCTS
    </span>
  </div>

  {/* Main Categories */}
  <div className="flex flex-wrap gap-2">
    {mainCategories.map((category, index) => (
      <span key={index} className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-medium">
        {category}
      </span>
    ))}
  </div>

  {/* Sub Categories */}
  <div className="flex flex-wrap gap-2">
    {subCategories.map((sub, index) => (
      <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
        {sub}
      </span>
    ))}
  </div>

  {/* Workshops */}
  <div>
    <p className="text-xs text-gray-600 mb-2">Select Workshop (Maximum 6 can Select)</p>

    <div className="grid md:grid-cols-2 gap-2">
      {workshops.map((workshop) => (
        <label key={workshop.id} className="flex items-center space-x-3 text-sm">
          <input
            type="checkbox"
            checked={formData.selectedWorkshops.includes(workshop.id)}
            onChange={() => handleWorkshopToggle(workshop.id)}
            className="w-4 h-4 text-green-600 border-gray-300 rounded"
          />
          <span>{workshop.name}</span>
        </label>
      ))}
    </div>
  </div>

</div>

                    </div>

                    {/* Right side: Badge */}
                    <div className="p-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-green-900 p-4 rounded-t-lg flex items-center">
                                <img src={logo} alt="Badge Logo" className="h-12 w-auto" />
                            </div>
                            <div className="text-center bg-green-800 text-white px-4 py-1 text-sm shadow rounded-b-md mx-auto w-fit">
                                Registration Information 1
                            </div>
                            <div className="p-6 space-y-4 text-center">
                                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">FULL NAME</p>
                                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">JOB TITLE</p>
                                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">COMPANY NAME</p>
                                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">COUNTRY OF RESIDENCE</p>
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">BADGE CATEGORY</p>
                                    <p className="text-3xl font-black text-gray-800 tracking-wide">VISITOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex justify-center space-x-4 mt-8">
                    <button class="w-32 h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-800 to-purple-600 hover:opacity-90 transition">
                        PREVIOUS
                    </button>
                    <button class="w-32 h-12 rounded-lg text-white font-semibold bg-gradient-to-r from-green-700 to-green-600 hover:opacity-90 transition">
                        NEXT
                    </button>
                </div>


            </div>

            <div
                className="relative h-26 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${header})` }}
            >

            </div>
        </div>
    );
};

export default GitexRegistrationForm4;
