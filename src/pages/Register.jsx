import React from 'react';

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-black rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <label className="block mb-2">
          Name:
          <input type="text" className="w-full p-2 border rounded" required />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="w-full p-2 border rounded" required />
        </label>
        <label className="block mb-4">
          Password:
          <input type="password" className="w-full p-2 border rounded" required />
        </label>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
