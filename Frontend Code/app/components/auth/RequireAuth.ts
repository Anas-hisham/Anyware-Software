// components/RequireAuth.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push('/');
    }, [isLoggedIn]);

    if (!isLoggedIn) return null;
    return children;
}