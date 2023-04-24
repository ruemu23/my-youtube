
import React from 'react';
import '../App.css';
import imager1 from '../images/pexels-photo-14608215.webp';
import imager2 from '../images/pexels-photo-1704488.webp';
import imager3 from '../images/nature1.jpeg';
import imager4 from '../images/nature2.jpeg';
import imager5 from '../images/nature3.jpeg';
import imager6 from '../images/nature4.jpeg';
import imager7 from '../images/nature5.jpeg';
import imager8 from '../images/nature6.jpeg';
import imager9 from '../images/nature7.jpeg';
import profile1 from '../images/profile1.webp';
import profile2 from '../images/profile2.webp';
import profile3 from '../images/profile3.webp';
import profile4 from '../images/profile4.jpeg';
import profile5 from '../images/profile5.jpeg';
import profile6 from '../images/profile6.jpeg';
import profile7 from '../images/profile7.jpeg';
import profile8 from '../images/profile8.jpeg';
import profile9 from '../images/profile9.jpeg';







// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'material-icons/iconfont/material-icons.css';
import { HiDotsHorizontal } from 'react-icons/hi';
import {FaChild,FaTrophy,FaNewspaper,FaGamepad,FaFire,FaPlusCircle,FaThumbsUp,FaPlay,FaHistory,FaRegImages,FaAccusoft, FaHome, FaUserAstronaut, FaTwitter, FaVolumeUp, FaThumbsDown, FaCommentAlt,FaShare } from 'react-icons/fa';
import { useState } from 'react';


  

const data = [
    { name: 'The Earthy Jay', username: '@ruemu_1',image1: imager1, image2: profile1, image3: profile1 },
    { name: 'World Best', username: '@ruemu_1',image1: imager2, image2: profile2, image3: profile2  },
    { name: 'World Best', username: '@faith',image1: imager3, image2: profile3, image3: profile3  },
    { name: 'World Best', username: '@ronaldo',image1: imager4, image2: profile4, image3: profile4  },
    { name: 'World Best', username: '@messi',image1: imager5, image2: profile5, image3: profile5  },
    { name: 'World Best', username: '@sarah',image1: imager6, image2: profile6, image3: profile6  },
    { name: 'World Best', username: '@mary',image1: imager7, image2: profile7, image3: profile7  },
    { name: 'World Best', username: '@blessing',image1: imager8, image2: profile8, image3: profile8  },
    { name: 'World Best', username: '@gift',image1: imager9, image2: profile9, image3: profile9  },
  ];
 
const ShortMap = () => {

  const [showControls, setShowControls] = useState(false);

  const handleMouseLeave = () => {
    setShowControls(false);
  }

  const handleMouseEnter = () => {
    setShowControls(true);
  }

  return (
    <> 
    <div className="shifter"></div>
    {data.map((item, index) => (
    <div className='mymiddle' key={index}>
<div className='middle11' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}> 
<img src={item.image1} alt="Earthly Jay" />
{showControls &&
        <>
    <div className='ame'><FaPlay /></div>
    <div className='bme'><FaVolumeUp /></div>
    </>
      }
    {/* <div className='cme'>
      <div className='blacko1'>
      <img src={item.image2}  alt="Earthly Kay" />  
        </div> 
        
        <div className='blacko2'>{item.username}</div>
    </div>
    <div className='dme'><button class="mybuttons">Subscribe</button></div>
     */}
    
    <div className='cme'>
        <div className="bossman">
              <div className='blacko1'>
                 <img src={item.image2}  alt="Earthly Kay" />  
               </div> 
      
               <div className='blacko2'>{item.username}</div>
         </div>

        <div className="bossman1"><button class="mybuttons">Subscribe</button></div>
    
        
    
    </div>
    
    <div className='eme1'>
        <div className='fanta'><FaThumbsUp /></div>
  <span className='spanme'>232k</span>
  <div className='fanta'><FaThumbsDown /></div>
  <span className='spanme'>Dislike</span>
  <div className='fanta'><FaCommentAlt /></div>
  <span className='spanme'>1.2k</span>
  <div className='fanta'><FaShare /></div>
  <span className='spanme'>Share</span>
  <div className='fanta'><HiDotsHorizontal /></div>
  <div className='fanta1'>
  <img src={item.image3}  alt="Earthly Kay" />  
  </div>
  </div>
    
    
  <div className='eme'>{item.name}</div>
</div>
<div className='middle22'>
  <div className='fanta'><FaThumbsUp /></div>
  <span className='spanme'>232k</span>
  <div className='fanta'><FaThumbsDown /></div>
  <span className='spanme'>Dislike</span>
  <div className='fanta'><FaCommentAlt /></div>
  <span className='spanme'>1.2k</span>
  <div className='fanta'><FaShare /></div>
  <span className='spanme'>Share</span>
  <div className='fanta'><HiDotsHorizontal /></div>
  <div className='fanta1'>
  <img src={item.image3}  alt="Earthly Kay" />  
  </div>
</div>
</div>
 ))}
 </>
  )
}

export default ShortMap