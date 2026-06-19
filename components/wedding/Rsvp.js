"use client";
import { useState } from "react";

const Rsvp = () => {
  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const first = (data.name || "Friend").split(" ")[0];
    setMsg(
      data.attending === "no"
        ? `Thank you, ${first}. You'll be missed! 💛`
        : `Thank you, ${first}! Your seat is reserved. See you on September 12th! 🎉`
    );
    try {
      const all = JSON.parse(localStorage.getItem("wedflix_rsvps") || "[]");
      all.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem("wedflix_rsvps", JSON.stringify(all));
    } catch (_) {}
    e.target.reset();
  };

  return (
    <form className="wf-rsvp-form" onSubmit={onSubmit}>
      <div className="row g-2">
        <div className="col-md-6">
          <input className="wf-field" name="name" placeholder="Your full name" required />
        </div>
        <div className="col-md-6">
          <input className="wf-field" type="email" name="email" placeholder="Email address" required />
        </div>
      </div>
      <div className="row g-2">
        <div className="col-md-6">
          <select className="wf-field" name="attending" required defaultValue="">
            <option value="" disabled>
              Will you be attending?
            </option>
            <option value="yes">Joyfully accepts 🎉</option>
            <option value="no">Regretfully declines</option>
          </select>
        </div>
        <div className="col-md-6">
          <input className="wf-field" type="number" min="0" max="10" name="guests" placeholder="Number of guests (incl. you)" />
        </div>
      </div>
      <textarea className="wf-field" name="note" rows="3" placeholder="A note for the couple (optional)" />
      <button type="submit" className="theme-btn">
        <span>
          Send RSVP <i className="fas fa-chevron-right" />
        </span>
      </button>
      {msg && <div className="wf-toast">{msg}</div>}
    </form>
  );
};
export default Rsvp;
