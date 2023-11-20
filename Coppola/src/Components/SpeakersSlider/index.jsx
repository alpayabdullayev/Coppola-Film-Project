import React from 'react'
import { useState } from 'react';
import UseFetch from '../../Hooks/UseFetch';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./index.scss"

import { FaInstagram } from "react-icons/fa";

import "swiper/css/autoplay";


// import required modules
import { FreeMode,Autoplay} from 'swiper/modules';

const SpeakersSlider = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false)

    const url = 'http://localhost:3000/speakers';

    const Callback = (data) => {
        if(!status){
        //   console.log(data);
          setData(data);
          setStatus(true)
        }
      };

      UseFetch(url, Callback);

  return (
    <>
    <div className="col-12 col-lg-9">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[FreeMode,Autoplay]}
        breakpoints={{
            0: {
              width: 1200,
              spaceBetween: 30,
            },
            768: {
              width: 767,
              spaceBetween: 20,
            },
            992: {
              width: 998,
              spaceBetween: 30,
            },
          }}
        className="mySwiper2"
      >
        {
            data && data.map((item)=>(
                <SwiperSlide key={item.id}>
                <div className="sliderCard" >
                   <div className="SlidersImgS">
                     <img src={item.img} alt="" />
                   </div>
                   <div className="slideText">
                    <h5>{item.name} <span>{item.lastName}</span> </h5>
                    <p>{item.work}</p>
                </div>
                <div className="slideSocialIcons">
                    <span><FaInstagram /></span>
                    <span><FaInstagram /></span>
                    <span><FaInstagram /></span>
                </div>
                </div>
               
            </SwiperSlide>
            ))
        }


      </Swiper>
    </div>
    
    </>
  )
}

export default SpeakersSlider