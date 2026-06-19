"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`wf-header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="wf-logo">
        WEDFLIX
      </a>
      <nav className="wf-nav">
        <a href="#trailer">Trailer</a>
        <a href="#story">Our Story</a>
        <a href="#details">Details</a>
        <a href="#registry">Registry</a>
        <a href="#faq">FAQ</a>
        <a href="#rsvp">RSVP</a>
      </nav>
    </header>
  );
};
export default Header;
