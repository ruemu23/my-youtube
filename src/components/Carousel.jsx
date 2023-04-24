import React, { useState } from "react";
import "../carousel.css"
import {FaCompass} from 'react-icons/fa';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="mynexts">
        <a href="#" className="games flex-item">
        <FaCompass style={{fontSize: "18px",marginRight: "2px"}}/> Explore
        </a>
        <a href="#" className="games flex-item" style={{ backgroundColor: "white", color: "black" }}>All</a>
        <a href="#" className="games flex-item">Live</a>
        <a href="#" className="games flex-item">Music</a>
        <a href="#" className="games flex-item">Sport leagues</a>
        <a href="#" className="games flex-item">News</a>
        <a href="#" className="games flex-item">Nollywood</a>
        <a href="#" className="games flex-item">Comedy</a>
        <a href="#" className="games flex-item">Afrobeat</a>
        <a href="#" className="games flex-item">Humans</a>
        <a href="#" className="games flex-item">Martial Arts Movies</a>
      </div>

      <div className="carousel-container">
        <div className="carousel-item">
          <img src="https://picsum.photos/600/400" alt="carousel item" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/600/400" alt="carousel item" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/600/400" alt="carousel item" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/600/400" alt="carousel item" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/600/400" alt="carousel item" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
