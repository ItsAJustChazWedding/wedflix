"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home2 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider-2 .swiper-slide"
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
    <section className="hero-section-2">
      <div className="swiper-dot">
        <div className="dot" />
      </div>
      <Swiper
        ref={swiperRef}
        {...sliderProps.home2}
        className="swiper hero-slider-2"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-4.jpg")' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        Journey With Fast Internet
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        Fast Speed + No Service Charge + No Contracts + Powerful
                        Coverage
                      </p>
                      <h2
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        $30.00 <sub>/Month</sub>
                      </h2>
                      <Link
                        href="pricing"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Get Started <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-9.jpg")' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        The best TV experience.
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        Fast Speed + No Service Charge + No Contracts + Powerful
                        Coverage
                      </p>
                      <h2
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        $49.00 <sub>/Month</sub>
                      </h2>
                      <Link
                        href="pricing"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Get Started <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-4.jpg")' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        Journey With Fast Internet
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        Fast Speed + No Service Charge + No Contracts + Powerful
                        Coverage
                      </p>
                      <h2
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        $30.00 <sub>/Month</sub>
                      </h2>
                      <Link
                        href="pricing"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Get Started <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
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
export default Home2;
