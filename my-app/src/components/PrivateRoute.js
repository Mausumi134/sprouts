import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'; // Adjust the import based on your file structure

const PrivateRoute = () => {
  const { user, isLoading } = useContext(AuthContext); // Use context to get user and loading state

  // Show loading spinner while checking authentication status
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  // If the user is authenticated, render the child components (Outlet); otherwise, redirect to the login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
