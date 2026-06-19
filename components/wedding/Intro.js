"use client";

import { useEffect, useState } from "react";

/**
 * WEDFLIX intro — the Netflix-style logo zoom that plays on first load.
 * Auto-dismisses after the animation (~4.4s) and can be skipped.
 * Shown once per browser session so it doesn't replay on every navigation.
 */
export default function Intro() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("wf-intro-seen")) return;

    setShow(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(dismiss, 4400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    sessionStorage.setItem("wf-intro-seen", "1");
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 700);
  }

  if (!show) return null;

  return (
    <div className={`wf-intro${closing ? " is-closing" : ""}`} aria-hidden="true">
      <h1 className="wf-intro__logo">WEDFLIX</h1>
      <button className="wf-intro__skip" onClick={dismiss}>
        Skip intro &rsaquo;
      </button>
    </div>
  );
}
