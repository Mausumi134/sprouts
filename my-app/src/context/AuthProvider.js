import React, { createContext, useState } from 'react';

// Create a context for authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold user information and authentication methods
  const [user, setUser] = useState(null);

  const logIn = (email, password) => {
    // Implement your login logic here
    // Example: Set user information after login
    setUser({ email });
  };

  const logOut = () => {
    // Implement your logout logic here
    setUser(null);
  };

  const authContextValue = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
