import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './mystyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-icons/iconfont/material-icons.css';
import SideMenu from './components/SideMenu';
import DSideMenu from './components/DSideMenu';
import Header from './components/Header';
import RightMenu from './components/RightMenu';
import DesktopSlider from './components/DesktopSlider';
import MobileSlider from './components/MobileSlider';
import Footer from './components/Footer';
import MapMe from './components/MapMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Shorts from './Pages/Shorts';
import Subscriptions from './Pages/Subscriptions';
import Library from './Pages/Library';



function App() {
  const [showElement, setShowElement] = useState(false);
    const toggleElement = () => {
      setShowElement(!showElement);
    };
  
    // function toggleElement() {
    //   if (showElement) {
    //     setShowElement(false);
    //   } else {
    //     setShowElement(true);
    //   }
    // }
  
    const [showmeElement, setshowmeElement] = useState(true);
  
    const mytoggleElement = () => {
      setshowmeElement(!showmeElement);
    };
  
    const [dropElement, setdropElement] = useState(false);
    
  
    const mytoggledropElement = () => {
      setdropElement(!dropElement);
    
   };
  
   
  
  
   const dropdownRef = useRef(null);
   
  
    useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)  &&
      !event.target.classList.contains('mypic')
  ) {
        setdropElement(false);
      }
    };
  
  
  return (
    <Router>
      <div className={`${dropElement ? "iApp" : "App"}`}>
        <Header toggleElement={toggleElement} mytoggleElement={mytoggleElement}  mytoggledropElement={mytoggledropElement} />
        <MobileSlider />
        <main>
        <div className={`${showmeElement ? "sectiona" : "isectiona"}`}>
    <DSideMenu showmeElement={showmeElement} dropElement={dropElement}/>
    </div>
    <div className={`${showmeElement ? "sectionb" : "isectionb"}`}>
 
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/library" element={<Library />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    {showElement && (
  <>
  <SideMenu toggle={toggleElement} />
  
  </>
  )}
  
  {dropElement && (
          <div ref={dropdownRef}>
            <RightMenu />
          </div>
        )}
    </main>
    <Footer />
    </div>
  </Router>
  );
}

export default App;
