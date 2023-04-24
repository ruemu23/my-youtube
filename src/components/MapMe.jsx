import React from 'react'
import  { useState, useRef, useEffect } from 'react';
import '../mystyle.css';

import profile1 from '../images/profile1.webp';
import profile2 from '../images/profile2.webp';
import profile3 from '../images/profile3.webp';
import profile4 from '../images/profile4.jpeg';
import profile5 from '../images/profile5.jpeg';
import profile6 from '../images/profile6.jpeg';
import profile7 from '../images/profile7.jpeg';
import profile8 from '../images/profile8.jpeg';
import profile9 from '../images/profile9.jpeg';
import profile10 from '../images/profile10.webp';
import profile11 from '../images/profile11.webp';
import profile12 from '../images/profile12.webp';

import front1 from '../images/front1.jpeg';
import front2 from '../images/front2.mp4';
import front3 from '../images/front3.mp4';
import front4 from '../images/front4.jpeg';
import front5 from '../images/front5.jpeg';
import front6 from '../images/front6.jpeg';
import front7 from '../images/front7.jpeg';
import front8 from '../images/front8.jpeg';
import front9 from '../images/front9.webp';
import front10 from '../images/front10.jpeg';
import front11 from '../images/front11.jpeg';
import front12 from '../images/front12.webp';
import front13 from '../images/front13.jpeg';
import front14 from '../images/front14.jpeg';
import front15 from '../images/front15.jpeg';
import front16 from '../images/front16.jpeg';
import {FaEllipsisV} from 'react-icons/fa'


const data = [
    { name: 'In this video, i will be sharing my top 10 favorite books of all time!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile1 ,imagey: front1 },
    { name: 'Welcome back to my channel, today we are trying out some viral TikTok hacks!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile2,imagey: front13  },
    { name: '\'I can\'t believe I finally got my hands on the new iPhone 13 - let\'s unbox it together!\'', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile3,imagey: front14  },
    { name: 'From drab to fab - watch me transform this old piece of furniture into something amazing!', role: 'Esty gist TV . 414K views . 3 months ago' ,image2: profile4,imagey: front4  },
    { name: 'Join me on a virtual tour of the most breathtaking national parks in the US!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile5,imagey: front5 },
    { name: 'The truth about my skincare routine - the good, the bad, and the ugly!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile6,imagey: front6  },
    { name: 'Get ready with me for a night out - glam makeup and outfit ideas!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile7,imagey: front7 },
    { name: 'Testing out weird and wacky beauty products - do they actually work?', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile8,imagey: front8  },
    { name: 'I challenged myself to eat only vegan food for a week - here\'s how it went!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile9,imagey: front9  },
    { name: 'I got lost in the woods overnight - here\'s my survival story!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile10,imagey: front10  },
    { name: 'I surprised my boyfriend with the ultimate anniversary gift - his reaction was priceless!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile11,imagey: front11  },
    { name: 'Exploring abandoned places - this creepy mansion gave me chills!', role: 'Esty gist TV . 414K views . 3 months ago',image2: profile12,imagey: front12  },
  ];





const MapMe = () => {


    return (
      <div className="grid-container">
      
      {data.map((item, index) => (
          <div className="grid-item" key={index}>
        <div className="mycont">
          <div className="contop">
          <img src={item.imagey} alt="Earthly Jay" />  
          </div>
          <div className="conbtn">
            <div className="first1">
              <div className="myimage">
              <img src={item.image2} alt="Earthly Jay" />
              </div>
            </div>
            <div className="second2">
              <div className="topme">{item.name}</div>
              <div className="downme">{item.role}</div>
            </div>
            <div className="third3"><FaEllipsisV /></div>
          </div>
        </div>
        </div> 
      ))}
    
    </div>
    )
  }



export default MapMe