import React from 'react';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';
import LoginPage from '../pages/auth/Login';

// TODO: Implement the auth guard logic
const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }
  return <LoginPage />;
};

export default AuthGuard;
