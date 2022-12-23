import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Implement the guest guard logic
const GuestGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    return <>{children}</>;
  }
  return <Link to="/login" />;
};
export default GuestGuard;
