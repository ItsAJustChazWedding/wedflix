"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const EPISODES = [
  { img: "couple-hero.jpg", tag: "Episode 1", title: "The First Hello", text: "Where it all began — two strangers, one unforgettable spark." },
  { img: "couple-4.jpg", tag: "Episode 2", title: "Officially Us", text: "Late-night talks, laughter, and a love that kept growing." },
  { img: "couple-2.jpg", tag: "Episode 3", title: "Through Thick & Thin", text: "Prayer, joy, and growing stronger together, one day at a time." },
  { img: "couple-5.jpg", tag: "Episode 4", title: "She Said Yes", text: "When patience transforms into the greatest love story." },
  { img: "couple-6.jpg", tag: "Episode 5", title: "Two Become Three", text: "A love story of two soon to become three." },
  { img: "couple-3.jpg", tag: "Episode 6", title: "I Love Chaz", text: "Forever starts now. Save the date — September 12, 2026." },
];

const StorySlider = () => {
  return (
    <div className="wf-story">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {EPISODES.map((ep) => (
          <SwiperSlide key={ep.title}>
            <article className="wf-card">
              <img src={`assets/img/wedding/${ep.img}`} alt={ep.title} />
              <div className="wf-card__body">
                <span className="wf-card__tag">{ep.tag}</span>
                <h4>{ep.title}</h4>
                <p>{ep.text}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default StorySlider;
