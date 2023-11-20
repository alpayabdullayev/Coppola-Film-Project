import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "./index.scss"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 300; 
    setIsVisible(scrollY > scrollThreshold);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
    <div className="backToTop">
    <div>
      {isVisible && (
        <button className='backd' onClick={scrollToTop}>
            <span><FaRegArrowAltCircleUp /></span>
        </button>
      )}
    </div>
    </div>
    </>
  );
};

export default BackToTop;
