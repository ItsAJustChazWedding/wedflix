"use client";
import { useRef, useState } from "react";

const ITEMS = [
  { q: "When and where is the wedding?", a: "Saturday, September 12, 2026 at 4:00 PM. Both the ceremony and reception are at The Birchwood Manor, 111 N Jefferson Rd, Whippany, NJ 07981." },
  { q: "What should I wear?", a: "Formal / black-tie optional. Dress to celebrate — and to dance!" },
  { q: "When should I arrive?", a: "Please arrive by 3:30 PM so we can begin the ceremony promptly at 4:00 PM." },
  { q: "Can I bring a guest?", a: "Please refer to your invitation for the number of seats reserved in your name." },
  { q: "When is the RSVP deadline?", a: "Kindly confirm your attendance by 10:30 PM on August 8, 2026 using the RSVP form below." },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  const refs = useRef([]);
  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`wf-faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button
              className="wf-faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="sign">+</span>
            </button>
            <div
              className="wf-faq-a"
              ref={(el) => (refs.current[i] = el)}
              style={{ maxHeight: isOpen && refs.current[i] ? refs.current[i].scrollHeight : 0 }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Faq;
