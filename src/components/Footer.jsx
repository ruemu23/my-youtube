import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
 
    <NavLink to="/"><i class="fa fa-home"></i><span className="texter">Home</span></NavLink>
    <NavLink to="/shorts"><i class="fa fa-random"></i><span className="texter">Shorts</span></NavLink>
    <NavLink to="/library"><i class="material-icons">video_library</i><span className="texter">Library</span></NavLink>
 
 </footer>
 </>
  )
}

export default Footer