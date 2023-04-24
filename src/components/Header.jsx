import React , { memo } from 'react'
import '../mystyle.css';
import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaSearch, FaYoutube, FaUserCircle, FaMicrophoneAlt, FaVideo, FaBell} from 'react-icons/fa';
import {MdOutlineMenu} from 'react-icons/md'


// import RightMenu from './RightMenu';

// const MemoizedRightMenu = memo(({ toggle, dropdownRef }) => (
//   <div ref={dropdownRef}>
//     <RightMenu toggle={toggle} />
//   </div>
// ));


const Header = (props) => {
    const toggleElement = props.toggleElement;
    const mytoggleElement = props.mytoggleElement;
    const mytoggledropElement = props.mytoggledropElement;


    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      if (inputValue === '') {
        setIsFocused(false);
      }
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleClickOutsides = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutsides);
      return () => {
        document.removeEventListener('mousedown', handleClickOutsides);
      };
    }, []);
  
    const getInputWidth = () => {
      if (isFocused || inputValue !== '') {
        return '90%';
      } else {
        return '70%';
      }
    };

    const getIcon = () => {
      if (isFocused || inputValue !== '') {
        return { position: 'absolute', left: '8px' };
      } else {
        return { display: 'none' };
      }
    };

    const getCancelIconStyle = () => {
      if (inputValue !== '') {
        return { position: 'absolute', right: '19%', cursor: 'pointer' };
      } else {
        return { display: 'none' };
      }
    };

    const handleClear = () => {
      setInputValue('');
    };

  return (
    <header>
    {/* <div className="App-logo"></div> */}
    <div className='App-logo'><FaYoutube  className="youtube-icon"/><p className='youtubeme'>RUEMU</p> </div>
    <div className="myicons">
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#" onClick={toggleElement}><FaUserCircle /></a>
    </div>
  
    <div className="starter">
      <div className="starter1" onClick={mytoggleElement}><MdOutlineMenu /></div>
      <div className="starter2"><FaYoutube  className="youtube-icon"/><p className='youtubeme1'>RUEMU</p> </div>
    </div>
    <div className="middle">
      <div className="middle1" ref={inputRef}>
      <FaSearch style={getIcon()} />
      <FaTimes style={getCancelIconStyle()} onClick={handleClear} />
        <input type="text" placeholder="Search" className="search"  value={inputValue}
      style={{ width: getInputWidth() }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}/>
        <button className="buttons"> <FaSearch /> </button>
        <div className="mic"><span className="centero"><FaMicrophoneAlt />  <span class="tooltiptext">Search with your voice</span></span></div>
      </div>
      {/* <div className="middle2"><i class="fa fa-microphone"></i></div> */}
    </div>
    <div className="ending">
      <div className="ending1"><span className="centero1"><FaVideo /><span class="tooltiptext">Create</span></span></div>
      <div className="ending2"><span className="centero1"><FaBell /><span class="tooltiptext">Notifications</span></span></div>
      <div className="ending3">
        <div className="mypic" onClick={mytoggledropElement}>
        
          
        </div>
      </div>
    </div>
  
  </header>
  )
}

export default Header