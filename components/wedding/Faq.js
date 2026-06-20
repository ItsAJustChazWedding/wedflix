"use client";
import { useRef, useState } from "react";

const ITEMS = [
  {
    q: "What does JustChaz mean?",
    a: <p>Justin + Chastidy = JustChaz.</p>,
  },
  {
    q: "Can I bring a date?",
    a: (
      <p>
        Please review your invitation regarding a +1&hellip; You will find that the answer is a
        no. Unfortunately, there will be no +1 allowed.
      </p>
    ),
  },
  {
    q: "Are children welcome?",
    a: (
      <p>
        We adore your little ones, but please know that this is strictly an event for adults,
        with a few exceptions for teenagers (13+). Aside from the chit-lins in the bridal party,
        there will be no additional included in the ceremony or reception.
      </p>
    ),
  },
  {
    q: "Is there a dress code?",
    a: (
      <>
        <p>Fashionably Elegant! Which means:</p>
        <ul className="wf-faq-list">
          <li>NO sweats</li>
          <li>NO jeans</li>
          <li>NO hoodies</li>
          <li>NO sneakers</li>
        </ul>
        <p>
          If I have to dress up, so do you! <em>(Chaz wrote this)</em>
        </p>
      </>
    ),
  },
  {
    q: "Are there any colors that guests should avoid wearing?",
    a: (
      <p>
        Kindly refrain from wearing white, emerald green/green, gold, and/or
        champagne/tan/beige attire.
      </p>
    ),
  },
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
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Faq;
