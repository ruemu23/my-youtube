import React from "react";
import "../SideMenu.css";
import { FaUserAstronaut, FaTwitter, FaQuestion } from 'react-icons/fa';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'material-icons/iconfont/material-icons.css';
import { SiYoutube, SiYoutubemusic} from "react-icons/si";
import {MdClose, MdSettings, MdOutlineFeedback} from 'react-icons/md'

// const SideMenu = ({ isOpen, onClose }) => {
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

  const SideMenu = (props) => {
  
    const toggle = props.toggle;
   
    // const tog = props.tog;

  return (
   <>
   
<div className="menu-content">

        
    <div className="menu-contents">
        <a onClick={toggle}><MdClose /> <p>Account</p></a>
        <a><FaUserAstronaut /> <p>Sign in</p></a>
       
        <a> <MdSettings /> <p>Settings</p></a>
     
        <a><FaQuestion /><p>Help</p></a>
        <a><MdOutlineFeedback /> <p>Feedback</p></a>
    
        <a><SiYoutube /><p>Youtube Music</p></a>
        <a><SiYoutubemusic /> <p>Youtube Kids</p></a>
        
     
    </div>
     

     <div className="menu-footer">
        <a>Privacy Policy . Terms of Service</a>
     </div>

</div>



   
   </>
  );
};

export default SideMenu;

