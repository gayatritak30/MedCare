import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-black rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <label className="block mb-2">
          Email:
          <input type="email" className="w-full p-2 border rounded" required />
        </label>
        <label className="block mb-4">
          Password:
          <input type="password" className="w-full p-2 border rounded" required />
        </label>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
      </p>
    </div>
  );
};

export default Login;
