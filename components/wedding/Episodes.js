"use client";

import { useEffect, useState } from "react";

const EPISODES = [
  {
    n: 1,
    title: "The Before",
    desc: "Where it all began.",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-4.jpg",
    locked: true,
  },
  {
    n: 2,
    title: "The Engagement",
    desc: "Our engagement — the moment forever began. A little love story, on repeat.",
    runtime: "2m 3s",
    poster: "assets/videos/engagement-poster.jpg",
    src: "assets/videos/engagement.mp4",
  },
  {
    n: 3,
    title: "The Trailer",
    desc: "A little preview of our story — I Love Chaz.",
    runtime: "0m 20s",
    poster: "assets/videos/the-before-poster.jpg",
    src: "assets/videos/the-before.mp4",
  },
  {
    n: 4,
    title: "The Bridal Party",
    desc: "Meet the faces that said yes to being a part of our big day.",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-7.jpg",
    locked: true,
  },
  {
    n: 5,
    title: "The Rehearsal Dinner",
    desc: "The night before forever. Premieres September 2026.",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-2.jpg",
    locked: true,
  },
  {
    n: 6,
    title: "The Big Day",
    desc: "I do. The main event — premieres September 12, 2026.",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-5.jpg",
    locked: true,
  },
  {
    n: 7,
    title: "The Wedding",
    desc: "“I Do,” first dance, last call, and everything in between.",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-6.jpg",
    locked: true,
  },
  {
    n: 8,
    title: "Happily Ever After",
    desc: "The honeymoon and beyond. To be continued…",
    runtime: "Coming soon",
    poster: "assets/img/wedding/couple-3.jpg",
    locked: true,
  },
];

export default function Episodes() {
  const [active, setActive] = useState(null); // episode currently playing

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="wf-episodes">
      {EPISODES.map((ep) => (
        <article
          key={ep.n}
          className={`wf-ep${ep.locked ? " is-locked" : ""}`}
          onClick={() => !ep.locked && setActive(ep)}
          role={ep.locked ? undefined : "button"}
          tabIndex={ep.locked ? undefined : 0}
          onKeyDown={(e) => {
            if (!ep.locked && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setActive(ep);
            }
          }}
        >
          <span className="wf-ep__num">{ep.n}</span>
          <div className="wf-ep__thumb">
            <img src={ep.poster} alt={ep.title} loading="lazy" />
            <span className="wf-ep__overlay">
              {ep.locked ? (
                <i className="fas fa-lock" />
              ) : (
                <i className="fas fa-play" />
              )}
            </span>
          </div>
          <div className="wf-ep__body">
            <div className="wf-ep__head">
              <h4>{ep.title}</h4>
              <span className="wf-ep__time">{ep.runtime}</span>
            </div>
            <p>{ep.desc}</p>
          </div>
        </article>
      ))}

      {active && (
        <div className="wf-modal" onClick={() => setActive(null)}>
          <div className="wf-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="wf-modal__close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
            <div className="wf-video">
              <video controls autoPlay playsInline poster={active.poster}>
                <source src={active.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="wf-modal__title">
              Episode {active.n} &middot; {active.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
