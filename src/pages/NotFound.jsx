import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-400 underline mt-4 inline-block">Go to Home</Link>
    </div>
  );
};

export default NotFound;
