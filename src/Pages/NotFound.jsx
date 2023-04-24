import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <div>
      <h1 style={{color: "white"}}>404 Not Found</h1>
      <p style={{color: "white"}}>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to home</Link>
    </div>
    </>
  )
}

export default NotFound