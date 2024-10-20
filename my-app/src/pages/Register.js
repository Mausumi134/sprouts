import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider'; // Keep this if you need to check user context
import { Link, useNavigate } from 'react-router-dom';
import bgimg from '../images/page-banner1.jpg';

const Register = () => {
  const { user } = useContext(AuthContext); // Context to check if user is logged in
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect user if already logged in
  if (user) {
    navigate('/home');
  }

  // Handle user registration (replace with your own registration logic)
  const handleRegister = (e) => {
    e.preventDefault();

    if (userPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Simulate registration logic (replace with your actual implementation)
    // Here, you could make a request to your backend to register the user
    // For example:
    // axios.post('/api/register', { name: userName, email: userEmail, password: userPassword })
    // .then(response => {
    //     // Handle success (e.g., navigate to home)
    //     navigate('/home');
    // })
    // .catch(err => {
    //     // Handle error
    //     setError(err.message);
    // });

    // For now, just simulate a successful registration
    console.log('User registered:', { userName, userEmail, userPassword });
    setError(''); // Clear error
    navigate('/home'); // Redirect to home after successful registration
  };

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(0deg, #11182773, #111827), url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-full py-10"
      >
        <h2 className="text-center text-3xl text-white font-semibold">Register</h2>
      </div>
      <div className="container py-5 md:w-3/6">
        <form onSubmit={handleRegister} className="space-y-3">
          {/* Name */}
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="mt-1 p-2 border block w-full shadow-sm border-gray-200 outline-none focus:border-blue-500 rounded-md"
          />
          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="mt-1 p-2 border block w-full shadow-sm border-gray-200 outline-none focus:border-blue-500 rounded-md"
          />
          {/* Password */}
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            className="mt-1 p-2 border block w-full shadow-sm border-gray-200 outline-none focus:border-blue-500 rounded-md"
          />
          {/* Error Message */}
          {error && <p className="text-red-700 font-semibold">{error}</p>}
          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-white py-2 px-4 w-full rounded-md shadow-md">
            Register
          </button>
        </form>
        <h4 className="text-center my-2">
          Already have an account?
          <Link to="/login" className="text-blue-600 mx-2">
            Sign In here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
