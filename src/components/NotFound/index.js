import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>The page you are trying to view does not exits.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
