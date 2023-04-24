import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <>
   <div>
      <h1>About</h1>
      <Link to="/">Go back to home</Link>
      <Link to="/videos">Go to videos</Link>
      <Link to="/about">Go to about</Link>
    </div>
   </>
  )
}

export default About