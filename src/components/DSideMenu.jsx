// import React from "react";
import "../DSideMenu.css";

import {FaChild,FaTrophy,FaNewspaper,FaGamepad,FaFire,FaPlusCircle,FaThumbsUp,FaPlay,FaHistory,FaRegImages,FaAccusoft, FaHome, FaUserAstronaut, FaTwitter } from 'react-icons/fa';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'material-icons/iconfont/material-icons.css';
import { SiVisualstudiocode,SiApplemusic,SiCircle, SiAirplayvideo, SiYoutube, SiYoutubemusic} from "react-icons/si";
//import { GrHomeRounded } from "react-icons/gr";
import { GrHomeRounded } from 'grommet-icons';
import { Link, NavLink } from 'react-router-dom';
// import React, { useState } from 'react';
// const SideMenu = ({ isOpen, onClose }) => {
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };


  const DSideMenu = (props) => {

    const showmeElement = props.showmeElement;
    const dropElement = props.dropElement;
   

  return (
   <>
   

 {/* <div className={`${dropElement ? "ddiApp" : "ddApp"}`}> */}

     <div className={`${dropElement ? "imenu-u my-div" : "menu-u my-div"}`}>      
    {/* <div className="menu-u my-div"> */}



   
        <NavLink to="/" className={`${showmeElement ? "game" : "igame"}`}><FaHome /> <p className="bubu">Home</p></NavLink>
       
        <NavLink to="/shorts" className={`${showmeElement ? "game" : "igame"}`}> <FaAccusoft /> <p className="bubu">Shorts</p></NavLink>
     
        <NavLink to="/subscriptions" className={`${showmeElement ? "game" : "igame"}`}><SiAirplayvideo /><p className="bubu">Subscriptions</p></NavLink>
       
        {showmeElement &&  <hr className="liner sinner"/> }
       
        
        <NavLink to="/library" className={`${showmeElement ? "game" : "igame"}`}><FaRegImages /> <p className="bubu">Library</p></NavLink>
    
        {showmeElement && (
    <>
        <a className="game"><FaHistory /><p>History</p></a>
        <NavLink to="/videos" className="game"><FaPlay /> <p>Your videos</p></NavLink>
        <a className="game"><SiCircle /> <p>Watch later</p></a>
        <a className="game"><FaThumbsUp /> <p>Liked videos</p></a>
        <hr className="liners"/>

    


        <h3 className="game whiter">Subscriptions</h3>
        <a className="game"><SiYoutubemusic /> <p>Senaid Bacinovic</p></a>
        <a className="game"><FaPlusCircle/> <p>Browse channels</p></a>
        <hr className="liners"/>
        <h3 className="game whiter">Explore</h3>
        <a className="game"><FaFire /> <p>Trending</p></a>
        <a className="game"><SiApplemusic /> <p>Music</p></a>
        <a className="game"><FaGamepad /> <p>Gaming</p></a>
        <a className="game"><FaNewspaper /> <p>News</p></a>
        <a className="game"><FaTrophy /> <p>Sports</p></a>
        <hr className="liners"/>
        <h3 className="game whiter">More from YouTube</h3>
        <a className="game"><SiYoutube color="red"/> <p>Youtube Premium</p></a>
        <a className="game"><SiVisualstudiocode color="red"/> <p>Youtube Studio</p></a>
        <a className="game"><SiYoutubemusic color="red" /> <p>Youtube Music</p></a>
        <a className="game"><FaChild color="red"/> <p>Youtube Kids</p></a>
        <hr className="liners"/>
        <a className="game"><SiYoutubemusic /> <p>Settings</p></a>
        <a className="game"><SiYoutubemusic /> <p>Report history</p></a>
        <a className="game"><SiYoutubemusic /> <p>Help</p></a>
        <a className="game"><SiYoutubemusic /> <p>Send feedbacks</p></a>
        </>
        )}
    </div>
     

    



    {/* </div> */}

   
   </>
  );
};

export default DSideMenu;

