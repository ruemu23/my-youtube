import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaHome, FaRandom, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer>
 
    <NavLink to="/"><FaHome /><span className="texter">Home</span></NavLink>
    <NavLink to="/shorts"><FaRandom /><span className="texter">Shorts</span></NavLink>
    <NavLink to="/library"><FaYoutube /><span className="texter">Library</span></NavLink>
 
 </footer>
 </>
  )
}

export default Footer