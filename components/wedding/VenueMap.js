"use client";

import { useEffect, useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps?q=The+Birchwood+Manor+111+N+Jefferson+Rd+Whippany+NJ+07981&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=The+Birchwood+Manor+111+N+Jefferson+Rd+Whippany+NJ+07981";

/**
 * Venue detail card that opens the map in a popup when clicked.
 * The map stays hidden until the visitor taps the address.
 */
export default function VenueMap() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="wf-detail-card wf-detail-card--btn"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <div className="ic">
          <i className="fas fa-map-marker-alt" />
        </div>
        <h4>Venue</h4>
        <p>
          The Birchwood Manor
          <br />
          111 N Jefferson Rd, Whippany, NJ 07981
        </p>
        <span className="wf-detail-card__cta">
          <i className="fas fa-map" /> Tap to view map
        </span>
      </button>

      {open && (
        <div className="wf-modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <div className="wf-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="wf-modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close map"
            >
              <i className="fas fa-times" />
            </button>
            <div className="wf-map">
              <iframe
                src={MAP_SRC}
                title="The Birchwood Manor map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center mt-3">
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="theme-btn">
                <span>
                  <i className="fas fa-location-arrow" /> Get Directions
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
