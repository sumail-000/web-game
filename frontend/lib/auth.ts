import { storage } from './api';

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const accessToken = storage.getAccessToken();
  const user = storage.getUser();
  
  return !!(accessToken && user);
};

/**
 * Get current user from storage
 */
export const getCurrentUser = () => {
  return storage.getUser();
};

/**
 * Logout user and clear all auth data
 */
export const logout = () => {
  storage.clearTokens();
  storage.clearUser();
  
  // Redirect to login
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
};

/**
 * Redirect to login if not authenticated
 */
export const requireAuth = () => {
  if (typeof window !== 'undefined' && !isAuthenticated()) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

/**
 * Redirect to home if already authenticated
 */
export const redirectIfAuthenticated = () => {
  if (typeof window !== 'undefined' && isAuthenticated()) {
    window.location.href = '/home';
    return true;
  }
  return false;
};

