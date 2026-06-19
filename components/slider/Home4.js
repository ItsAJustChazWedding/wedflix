"use client";
import { netBandUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home4 = () => {
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
    <section className="hero-section-4 fix">
      <div className="array-button">
        <button className="array-prev">
          <i className="fal fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fal fa-chevron-right" />
        </button>
      </div>
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
              className="hero-4 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-7.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h5
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        Best Of 2024
                      </h5>
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        thieve the bank
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold industry and exchange the worldwide
                        trade of merchandi
                      </p>
                      <ul
                        className="hero-list"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.8s"
                      >
                        <li>
                          <strong>Cast : </strong>
                          Robert Romanson,Anne Good
                        </li>
                        <li>
                          <strong>Genre : </strong>
                          <span>
                            <Link href="action">Action, </Link>
                          </span>
                          <span>
                            <Link href="adventure">Adventure, </Link>
                          </span>
                          <span>
                            <Link href="biography">Biography </Link>
                          </span>
                        </li>
                        <li>
                          <strong>Tag : </strong>
                          <span>
                            <a href="#">4K Ultra, </a>
                          </span>
                          <span>
                            <a href="#">King, </a>
                          </span>
                          <span>
                            <a href="#">Premieres, </a>
                          </span>
                          <span>
                            <a href="#">viking </a>
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="shows-details"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Play Trailer <i className="fal fa-play-circle" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="hero-thumb"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.4s"
                    >
                      <div className="video-box">
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-btn ripple video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-4 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-8.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h5
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        Best Of 2024
                      </h5>
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        Heeramandi
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        Sanjay Leela Bhansali brings his majestic signature
                        flair to stories of love and betrayal in the lives of
                        courtesans in pre-independence India.
                      </p>
                      <ul
                        className="hero-list"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.8s"
                      >
                        <li>
                          <strong>Cast : </strong>
                          Manisha Koirala, Sonakshi Sinha, Aditi Rao
                        </li>
                        <li>
                          <strong>Genre : </strong>
                          <span>
                            <Link href="action">Drama, </Link>
                          </span>
                          <span>
                            <Link href="adventure">History, </Link>
                          </span>
                          <span>
                            <Link href="biography">Romance </Link>
                          </span>
                        </li>
                        <li>
                          <strong>Tag : </strong>
                          <span>
                            <a href="#">4K Ultra, </a>
                          </span>
                          <span>
                            <a href="#">Tv Show, </a>
                          </span>
                          <span>
                            <a href="#">Premieres, </a>
                          </span>
                          <span>
                            <a href="#">India </a>
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="shows-details"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Play Trailer <i className="fal fa-play-circle" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="hero-thumb"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.4s"
                    >
                      <div className="video-box">
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-btn ripple video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-4 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-7.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h5
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.3s"
                      >
                        Best Of 2024
                      </h5>
                      <h1
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.5s"
                      >
                        thieve the bank
                      </h1>
                      <p
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.7s"
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold industry and exchange the worldwide
                        trade of merchandi
                      </p>
                      <ul
                        className="hero-list"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.8s"
                      >
                        <li>
                          <strong>Cast : </strong>
                          Robert Romanson,Anne Good
                        </li>
                        <li>
                          <strong>Genre : </strong>
                          <span>
                            <Link href="action">Action, </Link>
                          </span>
                          <span>
                            <Link href="adventure">Adventure, </Link>
                          </span>
                          <span>
                            <Link href="biography">Biography </Link>
                          </span>
                        </li>
                        <li>
                          <strong>Tag : </strong>
                          <span>
                            <a href="#">4K Ultra, </a>
                          </span>
                          <span>
                            <a href="#">King, </a>
                          </span>
                          <span>
                            <a href="#">Premieres, </a>
                          </span>
                          <span>
                            <a href="#">viking </a>
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="shows-details"
                        className="theme-btn"
                        data-animation="fadeInUp"
                        data-duration=".3s"
                        data-delay="1.9s"
                      >
                        <span>
                          Play Trailer <i className="fal fa-play-circle" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="hero-thumb"
                      data-animation="fadeInUp"
                      data-duration=".3s"
                      data-delay="1.4s"
                    >
                      <div className="video-box">
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-btn ripple video-popup"
                        >
                          <i className="fas fa-play" />
                        </a>
                      </div>
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
export default Home4;
