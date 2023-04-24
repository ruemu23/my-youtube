import React from "react";
import "../SideMenu.css";
import { FaUserAstronaut, FaTwitter } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-icons/iconfont/material-icons.css';
import { SiYoutube, SiYoutubemusic} from "react-icons/si";

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
        <a onClick={toggle}><i class="material-icons">close</i> <p>Account</p></a>
        <a><FaUserAstronaut /> <p>Sign in</p></a>
       
        <a> <i class="fa fa-gear"></i> <p>Settings</p></a>
     
        <a><i class="fa fa-question"></i><p>Help</p></a>
        <a><i class="material-icons">feedback</i> <p>Feedback</p></a>
    
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

