"use client";

import { useEffect, useState } from "react";

const SMILE = (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="35" cy="42" r="6" />
    <circle cx="65" cy="42" r="6" />
    <path d="M30 58 Q50 80 70 58" fill="none" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

/**
 * WEDFLIX intro — the Netflix-style logo zoom plays on first load, then hands
 * off to a "Who's joining?" profile gate. Picking a profile dismisses the gate
 * and jumps to the matching section:
 *   - "You're formally invited"  -> wedding details
 *   - "#ItsAJustChazWedding"     -> the invitation video
 * Shown once per browser session.
 */
export default function Intro() {
  // "intro" -> logo animation, "profiles" -> profile gate, null -> done
  const [phase, setPhase] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("wf-intro-seen")) return;

    setPhase("intro");
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setPhase("profiles"), 4400);
    return () => clearTimeout(timer);
  }, []);

  function enter(targetId) {
    sessionStorage.setItem("wf-intro-seen", "1");
    document.body.style.overflow = "";
    setPhase(null);
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  if (phase === null) return null;

  if (phase === "intro") {
    return (
      <div className="wf-intro" aria-hidden="true">
        <h1 className="wf-intro__logo">WEDFLIX</h1>
        <button className="wf-intro__skip" onClick={() => setPhase("profiles")}>
          Skip intro &rsaquo;
        </button>
      </div>
    );
  }

  return (
    <section className="wf-profiles">
      <div className="wf-profiles__inner">
        <p className="wf-profiles__eyebrow">A JustChaz Invitation</p>
        <h2 className="wf-profiles__title">Who&rsquo;s joining the celebration?</h2>
        <div className="wf-profiles__grid">
          <button className="wf-profile" onClick={() => enter("details")}>
            <span className="wf-profile__avatar wf-profile__avatar--green">{SMILE}</span>
            <span className="wf-profile__name">You&rsquo;re formally invited</span>
          </button>
          <button className="wf-profile" onClick={() => enter("trailer")}>
            <span className="wf-profile__avatar wf-profile__avatar--yellow">{SMILE}</span>
            <span className="wf-profile__name">#ItsAJustChazWedding</span>
          </button>
        </div>
      </div>
    </section>
  );
}
