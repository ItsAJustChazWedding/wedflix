"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieSlider = () => {
  return (
    <Swiper {...sliderProps.movieSlider} className="swiper movie-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/01.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Jombie Season</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/02.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Halloween</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/03.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Bambi</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/04.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Scream</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/01.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Jombie Season</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/02.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Halloween</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/03.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Bambi</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="movie-card-items">
            <div className="movie-image">
              <img src="assets/img/shows/04.jpg" alt="img" />
              <div className="movie-play">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <h3>
                <Link href="shows-details">Scream</Link>
              </h3>
              <div className="movie-review">
                <span>(2024)</span>
                <ul>
                  <li>
                    <i className="fas fa-star" />
                    4.5
                  </li>
                  <li>
                    <i className="fas fa-comment-alt" />
                    29
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default MovieSlider;

export const MovieSlider2 = () => {
  return (
    <section className="show-section section-padding" id="shows">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-white">Trending Movies</h2>
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
        <Swiper {...sliderProps.showsSlider} className="swiper shows-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/11.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">The warrior life</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/12.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">Terribile Scream</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/13.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">the horse lady</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/14.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">King of Skull</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/11.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">The warrior life</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/12.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">Terribile Scream</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/13.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">the horse lady</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/14.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">King of Skull</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const MovieSlider3 = () => {
  return (
    <section className="show-section section-padding pt-0 mg-top-8">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-white">New Release</h2>
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
        <Swiper {...sliderProps.showsSlider2} className="swiper shows-slider-2">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/11.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">The warrior life</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/12.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">Terribile Scream</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/13.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">the horse lady</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/14.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">King of Skull</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/11.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">The warrior life</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/12.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">Terribile Scream</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/13.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">the horse lady</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-card-items">
                <div className="shows-image">
                  <img src="assets/img/shows/14.jpg" alt="img" />
                  <div className="movie-play">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="shows-content">
                  <div className="show-title">
                    <h4>
                      <Link href="shows-details">King of Skull</Link>
                    </h4>
                    <span>
                      9.2
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <ul>
                    <li>Duration</li>
                    <li>.</li>
                    <li>2 hour 10 min</li>
                  </ul>
                  <p>Adventure 2024</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const MovieSlider4 = () => {
  return (
    <section className="show-section section-padding">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-white">Exclusive videos</h2>
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
        <Swiper {...sliderProps.showsSlider3} className="swiper shows-slider-3">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/15.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 3:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      5 Animated &amp; Live-Action Movie Mashups
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/16.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 4:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      Anne Hathaway on Nicholas Galitzine Status
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/17.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 5:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      The Art of the Con in "Ripley"
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/15.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 3:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      5 Animated &amp; Live-Action Movie Mashups
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/16.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 4:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      Anne Hathaway on Nicholas Galitzine Status
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="shows-box-items">
                <div className="shows-image">
                  <img src="assets/img/shows/17.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="far fa-play-circle" /> 5:02
                  </a>
                </div>
                <div className="shows-content">
                  <h5>
                    <Link href="shows-details">
                      The Art of the Con in "Ripley"
                    </Link>
                  </h5>
                  <h6>
                    <Link href="shows-details">Watch the interview</Link>
                  </h6>
                  <ul>
                    <li>
                      <i className="fal fa-thumbs-up" />
                      22
                    </li>
                    <li>
                      <i className="far fa-heart" />6
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
