"use client";

import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  return (
    <Slider
      {...sliderProps.brandCarouselActive}
      className="brand-carousel-active"
    >
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
      <div className="brand-image">
        <img src="assets/img/brand/01.png" alt="brand-img" />
      </div>
    </Slider>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  return (
    <Swiper {...sliderProps.brandSlider2} className="swiper brand-slider-2">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-1.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-2.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-3.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-4.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-5.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-6.png" alt="img" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
