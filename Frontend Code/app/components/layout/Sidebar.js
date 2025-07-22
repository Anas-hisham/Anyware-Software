import React from 'react';
import { Home, Calendar, BookOpen, Award, BarChart2, Bell, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants'; 

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-y-0 left-0 bg-[#2C3E50] text-white flex-col  p-6 shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out
                            md:relative md:translate-x-0 md:flex md:w-64`}>
            <div className="flex justify-between items-center mb-10">
                <div className="text-3xl font-bold text-center">Coligo</div>
                <button onClick={onClose} className="md:hidden text-white">
                    <X className="w-7 h-7" />
                </button>
            </div>
            <nav>
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className={`flex items-center py-3 px-4 rounded-lg mb-2 transition-colors duration-200 ${item.active ? 'bg-[#34495E] text-white shadow-md' : 'hover:bg-white hover:text-[#2C3E50]'
                            }`}
                        onClick={onClose}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;