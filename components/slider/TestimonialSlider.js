"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  return (
    <Slider
      {...sliderProps.testimonialCarouselActive}
      className="testimonial-carousel-active"
    >
      <div className="testimonial-card-items">
        <div className="author-items">
          <div
            className="author-image bg-cover"
            style={{
              backgroundImage: 'url("assets/img/testimonial/01.png")',
            }}
          />
          <div className="author-content">
            <h5>Leslie Alexander</h5>
            <span>Graphics Design</span>
          </div>
        </div>
        <p>
          creative agency, we believe in the Eid and innovation. We are
          constantly melt of what is possible, and strive to cat only bea utiful
          and effective,but shark inventore veritatis et quasi archite cto
          beatae citae dicta sunt atlantic
        </p>
        <ul>
          <li>January 23, 2024</li>
        </ul>
      </div>
      <div className="testimonial-card-items">
        <div className="author-items">
          <div
            className="author-image bg-cover"
            style={{
              backgroundImage: 'url("assets/img/testimonial/01.png")',
            }}
          />
          <div className="author-content">
            <h5>Leslie Alexander</h5>
            <span>Graphics Design</span>
          </div>
        </div>
        <p>
          creative agency, we believe in the Eid and innovation. We are
          constantly melt of what is possible, and strive to cat only bea utiful
          and effective,but shark inventore veritatis et quasi archite cto
          beatae citae dicta sunt atlantic
        </p>
        <ul>
          <li>January 23, 2024</li>
        </ul>
      </div>
      <div className="testimonial-card-items">
        <div className="author-items">
          <div
            className="author-image bg-cover"
            style={{
              backgroundImage: 'url("assets/img/testimonial/02.png")',
            }}
          />
          <div className="author-content">
            <h5>Leslie Alexander</h5>
            <span>Graphics Design</span>
          </div>
        </div>
        <p>
          creative agency, we believe in the Eid and innovation. We are
          constantly melt of what is possible, and strive to cat we pride
          ourselve on delivering
        </p>
        <ul>
          <li>January 23, 2024</li>
        </ul>
      </div>
      <div className="testimonial-card-items">
        <div className="author-items">
          <div
            className="author-image bg-cover"
            style={{
              backgroundImage: 'url("assets/img/testimonial/01.png")',
            }}
          />
          <div className="author-content">
            <h5>Leslie Alexander</h5>
            <span>Graphics Design</span>
          </div>
        </div>
        <p>
          creative agency, we believe in the Eid and innovation. We are
          constantly melt of what is possible, and strive to cat only bea utiful
          and effective,but shark inventore veritatis et quasi archite cto
          beatae citae dicta sunt atlantic
        </p>
        <ul>
          <li>January 23, 2024</li>
        </ul>
      </div>
    </Slider>
  );
};
export default TestimonialSlider;

export const TestimonialSlider2 = () => {
  return (
    <Slider
      {...sliderProps.testimonialCarouselActiv2}
      className="testimonial-carousel-active-2"
    >
      <div className="testimonial-card-items-2">
        <div
          className="testimonial-image bg-cover"
          style={{
            backgroundImage: 'url("assets/img/testimonial/03.png")',
          }}
        />
        <div className="testimonial-content">
          <div className="star">
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star color-2" />
          </div>
          <p>
            “Good Time is very good in what they're doing and more than happy to
            challenge and push you to think about your decisions both from
            usability and design standpoints.”
          </p>
          <div className="author-name">
            <h6>Salman Ahmed</h6>
            <p>CEO, Business Co</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-items-2">
        <div
          className="testimonial-image bg-cover"
          style={{
            backgroundImage: 'url("assets/img/testimonial/04.png")',
          }}
        />
        <div className="testimonial-content">
          <div className="star">
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star color-2" />
          </div>
          <p>
            “Good Time is very good in what they're doing and more than happy to
            challenge and push you to think about your decisions both from
            usability and design standpoints.”
          </p>
          <div className="author-name">
            <h6>Cameron Williamson</h6>
            <p>CEO, Business Co</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-items-2">
        <div
          className="testimonial-image bg-cover"
          style={{
            backgroundImage: 'url("assets/img/testimonial/05.png")',
          }}
        />
        <div className="testimonial-content">
          <div className="star">
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star color-2" />
          </div>
          <p>
            “Good Time is very good in what they're doing and more than happy to
            challenge and push you to think about your decisions both from
            usability and design standpoints.”
          </p>
          <div className="author-name">
            <h6>Jone Deo</h6>
            <p>Officer, BaperHotel</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-items-2">
        <div
          className="testimonial-image bg-cover"
          style={{
            backgroundImage: 'url("assets/img/testimonial/03.png")',
          }}
        />
        <div className="testimonial-content">
          <div className="star">
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star color-2" />
          </div>
          <p>
            “Good Time is very good in what they're doing and more than happy to
            challenge and push you to think about your decisions both from
            usability and design standpoints.”
          </p>
          <div className="author-name">
            <h6>RS Rahul Das</h6>
            <p>CTO, Netband Ltd</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-items-2">
        <div
          className="testimonial-image bg-cover"
          style={{
            backgroundImage: 'url("assets/img/testimonial/04.png")',
          }}
        />
        <div className="testimonial-content">
          <div className="star">
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star" />
            <span className="fas fa-star color-2" />
          </div>
          <p>
            “Good Time is very good in what they're doing and more than happy to
            challenge and push you to think about your decisions both from
            usability and design standpoints.”
          </p>
          <div className="author-name">
            <h6>Cameron Williamson</h6>
            <p>CEO, Business Co</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export class TestimonialSlider3 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.extraClass;
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div className={`testimonial-wrapper-3 ${this.props.extraClass}`}>
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.testimonialCarouselActive3}
          className="testimonial-carousel-active-3"
        >
          <div className="testimonial-items d-flex">
            <div className="testimonial-image-area">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/06.jpg")',
                }}
              >
                <div className="icon">
                  <svg
                    width={33}
                    height={25}
                    viewBox="0 0 33 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                      fill="#ff1749"
                    />
                  </svg>
                </div>
              </div>
              <div className="star">
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
              </div>
            </div>
            <div className="testimonial-content">
              <h3>
                Climb the mountain not to plant your flag but to embrace the
                ways challenge, enjoy the air, and behold the. Climb it see the
                world, not so the world can see you. This is due to their
                excellent service competitive pricing
              </h3>
              <div className="athor-name">
                <h4>Robert J. Hare/</h4>
                <p>Graphics Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-items d-flex">
            <div className="testimonial-image-area">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/07.jpg")',
                }}
              >
                <div className="icon">
                  <svg
                    width={33}
                    height={25}
                    viewBox="0 0 33 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                      fill="#ff1749"
                    />
                  </svg>
                </div>
              </div>
              <div className="star">
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
              </div>
            </div>
            <div className="testimonial-content">
              <h3>
                Climb the mountain not to plant your flag but to embrace the
                ways challenge, enjoy the air, and behold the. Climb it see the
                world, not so the world can see you. This is due to their
                excellent service competitive pricing
              </h3>
              <div className="athor-name">
                <h4>Robert J. Hare/</h4>
                <p>Graphics Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-items d-flex">
            <div className="testimonial-image-area">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/08.jpg")',
                }}
              >
                <div className="icon">
                  <svg
                    width={33}
                    height={25}
                    viewBox="0 0 33 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                      fill="#ff1749"
                    />
                  </svg>
                </div>
              </div>
              <div className="star">
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
              </div>
            </div>
            <div className="testimonial-content">
              <h3>
                Climb the mountain not to plant your flag but to embrace the
                ways challenge, enjoy the air, and behold the. Climb it see the
                world, not so the world can see you. This is due to their
                excellent service competitive pricing
              </h3>
              <div className="athor-name">
                <h4>Robert J. Hare/</h4>
                <p>Graphics Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-items d-flex">
            <div className="testimonial-image-area">
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/testimonial/09.jpg")',
                }}
              >
                <div className="icon">
                  <svg
                    width={33}
                    height={25}
                    viewBox="0 0 33 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                      fill="#ff1749"
                    />
                  </svg>
                </div>
              </div>
              <div className="star">
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
              </div>
            </div>
            <div className="testimonial-content">
              <h3>
                Climb the mountain not to plant your flag but to embrace the
                ways challenge, enjoy the air, and behold the. Climb it see the
                world, not so the world can see you. This is due to their
                excellent service competitive pricing
              </h3>
              <div className="athor-name">
                <h4>Robert J. Hare/</h4>
                <p>Graphics Designer</p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="slider-button">
          <div
            className="testimonial-nav-prev slick-arrow"
            onClick={this.previous}
          >
            <i className="fas fa-chevron-left" />
          </div>
          <div className="testimonial-nav-next slick-arrow" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    );
  }
}
export class TestimonialSlider4 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonial-section-4 fix section-padding">
        <div className="client-1">
          <img src="assets/img/testimonial/08.png" alt="img" />
        </div>
        <div className="client-2">
          <img src="assets/img/testimonial/09.png" alt="img" />
        </div>
        <div className="container">
          <Slider
            ref={(c) => (this.slider = c)}
            {...sliderProps.testimonialCarouselActive4}
            className="testimonial-carousel-active-4"
          >
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/07.png")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Mathias Herasen</h5>
                      <h6>
                        Founder of <span>GamerPay</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ The other hand we denounce with righteou indg ation
                        and dislike men who are so beguiled and demorali ed by
                        the of pleasure of the moment.Dislike men who are so
                        beguiled and demoraliz worlds ed by the charms of
                        pleasure “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="slider-button">
          <div className="testimonial-nav-prev" onClick={this.previous}>
            <i className="fas fa-chevron-left" />
          </div>
          <div className="testimonial-nav-next" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </section>
    );
  }
}
