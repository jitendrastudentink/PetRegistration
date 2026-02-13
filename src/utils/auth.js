import apiService from './apiService';

export const logout = async (router) => {
  console.log('Auth logout called');
  try {
    await apiService.logout();
    console.log('Logout completed successfully');
  } catch (error) {
    console.error('Logout error in auth.js:', error);
  } finally {
    if (router) {
      console.log('Redirecting to login...');
      router.push('/login');
    }
  }
};
export const isAuthenticated = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const hasToken = !!sessionStorage.getItem('accessToken');
  return isLoggedIn && hasToken;
};
export const getCurrentUserMobile = () => {
  return sessionStorage.getItem('userMobile') || null;
};
export const getCurrentUser = () => {
  const userData = sessionStorage.getItem('userData');
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  }
  return null;
};
export const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};
export const clearSession = () => {
  sessionStorage.removeItem('isLoggedIn');
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('tokenType');
  sessionStorage.removeItem('userData');
  sessionStorage.removeItem('userMobile');
};