'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/authSlice';
import LanguageSwitcher from './LanguageSwitcher';
import '../lib/i18n-client';
import type { RootState, AppDispatch } from '../store';

export default function HomePage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    if (savedLogin === 'true') {
      dispatch(login());
      router.push('/dashboard');
    }
  }, [dispatch, router]);

  const handleToggle = () => {
    if (isLoggedIn) {
      dispatch(logout());
      router.push('/');
    } else {
      dispatch(login());
      router.push('/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {t('home')}
        </h1>

        <button
          onClick={handleToggle}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 mb-4"
        >
          {isLoggedIn ? t('logout') : t('login')}
        </button>

        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
}
