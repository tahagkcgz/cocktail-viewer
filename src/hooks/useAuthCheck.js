import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const useAuthCheck = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
      if (!loggedIn && pathname !== '/login' && pathname !== '/') {
        console.log('Redirecting to login page');
        router.push('/login');
      } else if (loggedIn && pathname === '/login') {
        router.push('/search');
      }
    };

    // Check on initial load
    checkAuth();

    // Re-check on pathname change
    const handleRouteChange = () => checkAuth();

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pathname, router]);

  return null;
};

export default useAuthCheck;
