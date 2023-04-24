import {FaList } from 'react-icons/fa';

import { BiGrid } from 'react-icons/bi';

import SubscriptionMap from '../components/SubscriptionMap';

const Subscriptions = () => {
  
  return (
    <>
   <div className="mostly">
       <div>Most recent uploads</div>
       <div className="mana">
             <div className="colop">Manage</div>
             <div><BiGrid /></div>
             <div><FaList /></div>
       </div>
   </div>

  <SubscriptionMap />
    </>
      );
    }

export default Subscriptions