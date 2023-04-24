import React from 'react'
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


const data = [
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile1 },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile2  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile3  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic' ,views: '8.1K views . 6 months ago',imagey: profile4  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile5 },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile6 },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile7  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile8  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic' ,views: '8.1K views . 6 months ago',imagey: profile9  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile10 },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile11 },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile12  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile3  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic' ,views: '8.1K views . 6 months ago',imagey: profile4  },
    { messageme: '5 Amazing Websites You Never Knew Existed', name: 'Senaid Bcinovic',views: '8.1K views . 6 months ago',imagey: profile5 },
   
  
  ];

const SubscriptionMap = () => {
  return (
    <div className='grider'>
 {data.map((item, index) => (
        <div className='mygriditems' key={index}>
          <div className='jimage'>
            <img src={item.imagey} alt="Earthly Jay" />  
          </div>
          <div className='amaze'>{item.messageme}</div>
          <div className='senaid'>{item.name}</div>
          <div className='viewme'>{item.views}</div>
        </div>
 ))}
   </div>
  )
}

export default SubscriptionMap