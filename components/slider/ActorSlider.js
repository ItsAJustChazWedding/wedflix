"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ActorSlider = () => {
  return (
    <section className="actor-section fix section-padding pt-0" id="actor">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-white">Your Favorite Actors</h2>
          </div>
          <div
            className="array-button style-2 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <button className="array-prev">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="array-next">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
        <Swiper {...sliderProps.actorSlider} className="swiper actor-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/01.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Johnny Depp</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/02.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Chris Evans</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/03.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Vin Diesel</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/04.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Robert Niro</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/05.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Al Pacino</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/06.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Tom Hanks</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/01.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Johnny Depp</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/02.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Chris Evans</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/03.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Vin Diesel</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/04.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Robert Niro</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/05.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Al Pacino</Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="actor-items">
                <div className="active-img center">
                  <img src="assets/img/actor/06.jpg" alt="img" />
                </div>
                <h5 className="title">
                  <Link href="team-details">Tom Hanks</Link>
                </h5>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default ActorSlider;
