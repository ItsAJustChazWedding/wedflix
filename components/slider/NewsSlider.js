"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const NewsSlider = () => {
  return (
    <Slider
      {...sliderProps.newsCarouselActive}
      className="news-carousel-active"
    >
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              Shikhon .H
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (03)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              At this point, we all know the story of the pandemic
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/04.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              Shikhon .H
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (03)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              The effects of weather on Internet have concern since
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/05.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              Shikhon .H
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (03)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              Complete Guide to Business Insurance perfect
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              Shikhon .H
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (03)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              3 Reasons MHO's Fixed Wireless Internet Outperforms Mobile
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </Slider>
  );
};
export default NewsSlider;
