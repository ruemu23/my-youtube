
import { Outlet } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'material-icons/iconfont/material-icons.css';
import { React, useState, useEffect, useRef, Link, DesktopSlider, MapMe, Header, MobileSlider, DSideMenu, SideMenu, RightMenu, Footer, } from './Imports';
//using module exporting and importing.
import { useToggleElement } from "../Common";



const Layout = () => {
  const { showElement, toggleElement, showmeElement, mytoggleElement, dropElement, mytoggledropElement, dropdownRef } = useToggleElement();


  return (
    <>
   
   <div className={`${dropElement ? "iApp" : "App"}`}>
<Header toggleElement={toggleElement} mytoggleElement={mytoggleElement}  mytoggledropElement={mytoggledropElement} />

<main>
<div className={`${showmeElement ? "sectiona" : "isectiona"}`}>
  <DSideMenu showmeElement={showmeElement} dropElement={dropElement} />
</div>
<div className={`${showmeElement ? "sectionb" : "isectionb"}`}>
<Outlet />
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
  </>
  )
}

export default Layout