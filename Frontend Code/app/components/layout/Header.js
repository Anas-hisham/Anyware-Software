import React from 'react';
import { Search, BellRing, UserCircle, Menu } from 'lucide-react';

const DashboardHeader = ({ onMenuClick }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <button onClick={onMenuClick} className="mr-4 md:hidden text-gray-600 hover:text-gray-800">
                    <Menu className="w-7 h-7" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-800">Welcome Talia,</h2>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
                <div className="relative flex-grow md:flex-grow-0">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <BellRing className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
                <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>
        </div>
    );
};

export default DashboardHeader;