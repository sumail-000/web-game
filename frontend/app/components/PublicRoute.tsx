'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

interface PublicRouteProps {
  children: React.ReactNode;
}

/**
 * Wrapper component for public routes (login/signup)
 * Redirects to home if user is already authenticated
 */
export default function PublicRoute({ children }: PublicRouteProps) {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/home');
    }
  }, [router]);

  return <>{children}</>;
}

