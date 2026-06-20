"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Social wall for #ItsAJustChazWedding.
 *
 * Drop in your aggregator's embed details below (Curator.io, Tagembed/Taggbox,
 * EmbedSocial, etc.). Until `WIDGET.src` is set, a tasteful placeholder shows so
 * the section looks finished. The third-party script is loaded lazily — only when
 * the section scrolls into view — to keep the page fast.
 *
 * Example (Curator.io):
 *   WIDGET = {
 *     src: "https://cdn.curator.io/published/<FEED_ID>.js",
 *     container: <div id="curator-feed-default-layout"><a href="https://curator.io" ... /></div>,
 *   }
 */
const WIDGET = {
  // Paste the aggregator's script URL here to go live, e.g.
  // "https://cdn.curator.io/published/<FEED_ID>.js"
  src: "",
  // The container markup the provider tells you to place (varies by provider).
  // Rendered only when src is set.
  container: null,
};

export default function SocialWall() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);

  // Inject the aggregator script once the section is in view and configured.
  useEffect(() => {
    if (!inView || !WIDGET.src) return;
    if (document.querySelector(`script[src="${WIDGET.src}"]`)) return;
    const s = document.createElement("script");
    s.src = WIDGET.src;
    s.async = true;
    s.charset = "UTF-8";
    document.body.appendChild(s);
  }, [inView]);

  return (
    <div className="wf-social" ref={ref}>
      {WIDGET.src ? (
        WIDGET.container
      ) : (
        <div className="wf-social__placeholder">
          <i className="fab fa-instagram" />
          <p>
            Our live wall is coming soon. Tag your photos with{" "}
            <strong>#ItsAJustChazWedding</strong> and watch them show up right here.
          </p>
          <a
            className="theme-btn"
            href="https://www.instagram.com/explore/tags/itsajustchazwedding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fab fa-instagram" /> View on Instagram
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
