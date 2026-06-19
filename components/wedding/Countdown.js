"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-12T16:00:00-04:00").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
};

const Countdown = () => {
  // Start null so server and first client render match (avoids hydration mismatch)
  const [t, setT] = useState(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const box = (val, lbl) => (
    <div className="wf-count-box">
      <span className="num">{String(val ?? 0).padStart(2, "0")}</span>
      <span className="lbl">{lbl}</span>
    </div>
  );

  return (
    <div className="wf-countdown" aria-label="Countdown to the wedding">
      {box(t?.d, "Days")}
      {box(t?.h, "Hours")}
      {box(t?.m, "Minutes")}
      {box(t?.s, "Seconds")}
    </div>
  );
};
export default Countdown;
