import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // First API response
  const [profileData, setProfileData] = useState(null); // Second API response
  const [apiClient, setApiClient] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        profileData,
        setProfileData,
        apiClient,
        setApiClient
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};