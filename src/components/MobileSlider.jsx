import React from 'react';
import "../mystyle.css";
import {FaCompass} from 'react-icons/fa';
const MobileSlider = () => {
  return (
    <div className="mynext">
    <a href="#" className="games"><FaCompass style={{fontSize: "18px",marginRight: "2px"}}/> Explore</a>
    <a href="#" className="games" style={{backgroundColor: "white",color : "black"}}>All</a>
    <a href="#" className="games">Live</a>
    <a href="#" className="games">Music</a>
    <a href="#" className="games">Sport leagues</a>
    <a href="#" className="games">News</a>
    <a href="#" className="games">Nollywood</a>
    <a href="#" className="games">Comedy</a>
  </div>
  )
}

export default MobileSlider