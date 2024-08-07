// src/app/_app.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
};

export default MyApp;
