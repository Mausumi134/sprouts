import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import bgimg from '../images/page-banner1.jpg';

const Login = () => {
  const { logIn, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect user if already logged in
  if (user) {
    navigate('/home');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
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
        <h2 className="text-center text-3xl text-white font-semibold">Login</h2>
      </div>
      <div className="container py-5 md:w-3/6">
        <form onSubmit={handleLogin} className="space-y-3">
          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 border block w-full shadow-sm border-gray-200 outline-none focus:border-blue-500 rounded-md"
          />
          {/* Error Message */}
          {error && <p className="text-red-700 font-semibold">{error}</p>}
          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-white py-2 px-4 w-full rounded-md shadow-md">
            Login
          </button>
        </form>
        <h4 className="text-center my-2">
          Don't have an account?
          <Link to="/register" className="text-blue-600 mx-2">
            Register here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
