import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated for React Router v6

const Error = () => {
  const navigate = useNavigate(); // Use navigate instead of history

  function handleClick() {
    navigate('/home'); // Use navigate to change routes
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center py-14 space-y-5">
      <h2 className="text-6xl text-gray-800 font-bold">404!</h2>
      <h3 className="text-4xl text-gray-800 font-semibold">
        Sorry! The Page Not Found
      </h3>
      <p className="text-lg font-normal">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-800 text-white py-3 px-7 font-semibold rounded-md shadow"
        aria-label="Return to home"
      >
        Return to Home
      </button>
    </div>
  );
};

export default Error;
