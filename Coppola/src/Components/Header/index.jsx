import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import "./index.scss";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import MovingText from "react-moving-text";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <header>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}  
          effect={"fade"}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide className="slide-1">
            <div className="container">
              <div className="slider-content">
                <MovingText
                  type="fadeInFromTop"
                  duration="1500ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderInfo">
                    <h3 className="sliderInfo-h3">
                      FILM FESTIVAL 2022 <br /> STARS april
                    </h3>
                    <div className="dashed-img">
                      <img
                        src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png"
                        alt=""
                      />
                    </div>
                    <p className="sldierInfo-p">
                      Rome / 3 Locations / Seven days
                    </p>
                  </div>
                </MovingText>

                <MovingText
                  type="fadeInFromLeft"
                  duration="1500ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderContent">
                    <p className="sliderContent-p">
                      SELECT PRODUCTION PRESENTS
                    </p>
                    <h1 className="sliderContent-title">BACK TO NATURE</h1>
                    <div className="logoandBtn">
                      <div className="logoImg">
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                      </div>
                      <div className="sliderBtn">
                      <Button rengi={"black"}  text={"Get Tickets"} />
                      </div>
                    </div>
                  </div>
                </MovingText>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-2">
            <div className="container">
              <div className="slider-content">
                <MovingText
                  type="fadeInFromTop"
                  duration="3000ms"
                  delay="3.5s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderInfo">
                    <h3 className="sliderInfo-h3">
                      FILM FESTIVAL 2022 <br /> STARS april
                    </h3>
                    <div className="dashed-img">
                      <img
                        src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png"
                        alt=""
                      />
                    </div>
                    <p className="sldierInfo-p">
                      Rome / 3 Locations / Seven days
                    </p>
                  </div>
                </MovingText>

                <MovingText
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="3.2s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderContent">
                    <p className="sliderContent-p">
                      SELECT PRODUCTION PRESENTS
                    </p>
                    <h1 className="sliderContent-title">HISTORY OF COLOUR</h1>
                    <div className="logoandBtn">
                      <div className="logoImg">
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                      </div>
                      <div className="sliderBtn">
                      <Button rengi={"black"}  text={"Get Tickets"} />
                      </div>
                    </div>
                  </div>
                </MovingText>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-3">
            <div className="container">
              <div className="slider-content">
                <MovingText
                  type="fadeInFromTop"
                  duration="3000ms"
                  delay="6.3s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderInfo">
                    <h3 className="sliderInfo-h3">
                      FILM FESTIVAL 2022 <br /> STARS april
                    </h3>
                    <div className="dashed-img">
                      <img
                        src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png"
                        alt=""
                      />
                    </div>
                    <p className="sldierInfo-p">
                      Rome / 3 Locations / Seven days
                    </p>
                  </div>
                </MovingText>

                <MovingText
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="6.3s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <div className="sliderContent">
                    <p className="sliderContent-p">
                      SELECT PRODUCTION PRESENTS
                    </p>
                    <h1 className="sliderContent-title">INTO THE COSMOS</h1>
                    <div className="logoandBtn">
                      <div className="logoImg">
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                        <img
                          src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png"
                          alt=""
                        />
                      </div>
                      <div className="sliderBtn">
                      <Button rengi={"black"}  text={"Get Tickets"} />
                      </div>
                    </div>
                  </div>
                </MovingText>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    </>
  );
};

export default Header;
