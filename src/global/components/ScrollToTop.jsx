'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Watch for the path change with router.pathname
    const handlePathChange = () => {
      handleRouteChange();
    };

    // Use useEffect for route change in the client
    handlePathChange();

  }, [router.pathname]);

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
