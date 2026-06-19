"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home3 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      netBandUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  return (
    <section className="hero-section hero-1 style-hero-3">
      <div className="array-button-2">
        <button className="array-prev">
          <i className="fas fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        {...sliderProps.home1}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-5.jpg")' }}
            />
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero-content">
                    <h6
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.3s"
                    >
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <div className="price-item">
                      <h2
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <div
                        className="icon"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        <i className="flaticon-wifi-router-1" /> Subscribed
                        &amp; get 1month WIFi Free
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-6.jpg")' }}
            />
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero-content">
                    <h6
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.3s"
                    >
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <div className="price-item">
                      <h2
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <div
                        className="icon"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        <i className="flaticon-wifi-router-1" /> Subscribed
                        &amp; get 1month WIFi Free
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};
export default Home3;
