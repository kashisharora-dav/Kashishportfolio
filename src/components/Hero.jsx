import React from 'react';
import profileImg from '../assets/kashish passport imgc.png';
import backImg from '../assets/backimageportfolio.png';

const Hero = () => {
    return (
        <header>
            <div 
                className="hero" 
                style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.4)), url(${backImg})` 
                }}
            >
                <div className="hero-text">
                    <a href="#Projects" className="hero-btn">View Projects</a>
                </div>
                <div className="hero-img">
                    <img 
                        src={profileImg} 
                        alt="Kashish Dureja" 
                        className="animate-float"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;
