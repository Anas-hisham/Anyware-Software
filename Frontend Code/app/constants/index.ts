import { Home, Calendar, BookOpen, Award, BarChart2, Bell } from 'lucide-react';

export const NAV_ITEMS = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Schedule', icon: Calendar, active: false },
    { name: 'Courses', icon: BookOpen, active: false },
    { name: 'Gradebook', icon: Award, active: false },
    { name: 'Performance', icon: BarChart2, active: false },
    { name: 'Announcement', icon: Bell, active: false },
];

export const API_BASE_URL = 'http://localhost:4000/api';

export const API_ENDPOINTS = {
    ANNOUNCEMENTS: '/announcements',
    QUIZZES: '/quizzes',
    // Add other API endpoints here as needed
};