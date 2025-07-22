/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/dashboard/MainContent';
import RequireAuth from '../components/auth/RequireAuth';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <RequireAuth>
            <div className="h-screen flex font-sans antialiased overflow-hidden">
                {/* Sidebar: fixed */}
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                        onClick={closeSidebar}
                    ></div>
                )}

                {/* Main Content: scrollable */}
                <div className="flex-1 overflow-y-auto h-full">
                    <MainContent onMenuClick={toggleSidebar} />
                </div>
            </div>
        </RequireAuth>
    );
}