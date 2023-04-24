import React from "react";
import "../rightmenu.css";
import {FaUnity,FaSketch,FaSchlix,FaHandsHelping,FaMixer,FaSimplybuilt,FaPushed,FaRedhat,FaMedapps,FaItchIo, FaCss3, FaBity, FaAccusoft,FaUserAstronaut, FaTwitter } from 'react-icons/fa';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'material-icons/iconfont/material-icons.css';
import { SiFeedly, SiYoutube, SiYoutubemusic} from "react-icons/si";

// const SideMenu = ({ isOpen, onClose }) => {
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

  const RightMenu = () => {
  
//  const dropdownRef = props.dropdownRef;
   
    // const tog = props.tog;

  return (
   <>
   
<div className="mymenu">

        
    <div className="mymenu-contents">
    <div className="poko">
       <div className="freek1">  <div className="mypicc"></div></div>
       <div className="freek2"> 
       <div>
          <div className="bless">Ruemu Brown</div>
          <div className="bless">@ruemuogunuyo</div>
        </div>

        <div className="blessing">Manage your Google Account</div>


       </div>
    </div>
    <div className="poko1">
   <hr className="myliners" />
    <div className="whit"> <FaAccusoft /> <span>Your channel</span></div>

    <div className="whit"> <FaBity /> <span>Youtube Studio</span></div>

    <div className="whit"> <FaCss3 /> <span>Switch account</span></div>

    <div className="whit"> <FaItchIo /> <span>Sign out</span></div>

    <hr className="myliners" />

    <div className="whit"> <FaMedapps /> <span>Purchases and memberships</span></div>
    <div className="whit"> <FaMixer /> <span>Your data in Youtube</span></div>

 

     <hr className="myliners" />

<div className="whit"> <FaSchlix /> <span>Appearance: Device theme</span></div>
<div className="whit"> <FaSketch /> <span>Language: English</span></div>

<div className="whit"> <FaUnity /> <span>Restricted Mode: off</span></div>

 <div className="whit"> <FaRedhat /> <span>Location: Nigeria</span></div>  
 <div className="whit"> <FaPushed /> <span>Keyboard shortcuts</span></div>  
 <hr className="myliners" />

<div className="whit"> <FaSimplybuilt /> <span>Settings</span></div>

<hr className="myliners" />

<div className="whit"> <FaHandsHelping /> <span>Help</span></div>

<div className="whit"> <SiFeedly /> <span>Send feedback</span></div>


    </div>
     

    </div>   

</div>



   
   </>
  );
};

export default RightMenu;

