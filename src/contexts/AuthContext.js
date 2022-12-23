import { useLazyQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';
import { CURRENT_USER } from 'src/graphql/users/queries';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  // eslint-disable-next-line no-unused-vars
  const [getCurrentUser, { data: currentUser, refetch: refetchCurrentUser }] = useLazyQuery(
    CURRENT_USER,
    {
      nextFetchPolicy: 'cache-and-network',
      onCompleted: () => {
        if (currentUser?.me) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      },
      onError: () => {
        setIsAuthenticated(false);
      },
      refetchWritePolicy: 'overwrite',
    }
  );

  // eslint-disable-next-line no-unused-vars
  const onLoginSuccess = (token) => {
    // Save the token in local storage
    localStorage.setItem('token', token);

    // Fetch the current user to update the user data in the context
    getCurrentUser().then((response) => response);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // If a token exists in local storage, fetch the current user to check if it's valid
      getCurrentUser().then((response) => response);
    } else {
      // If no token exists, set isAuthenticated to false
      setIsAuthenticated(false);
    }
    setIsInitialized(true);
  }, [getCurrentUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isInitialized,
        logout,
        onLoginSuccess,
        user: currentUser?.me,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
