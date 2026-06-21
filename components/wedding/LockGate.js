"use client";

import { useEffect, useState } from "react";

/**
 * Soft password gate: blurs its children until the correct password is entered,
 * then remembers the unlock for the rest of the browser session.
 *
 * NOTE: this is client-side only (the site is a static export), so it deters
 * casual snooping but is not real security — the password and content live in
 * the page source. Fine for gating wedding details behind a shared password.
 */
export default function LockGate({
  children,
  password = "LeBlancs",
  storageKey = "wf-details-unlocked",
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(storageKey) === "1") {
      setUnlocked(true);
    }
  }, [storageKey]);

  function submit(e) {
    e.preventDefault();
    if (value.trim().toLowerCase() === password.toLowerCase()) {
      sessionStorage.setItem(storageKey, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="wf-lock">
      <div className={`wf-lock__content${unlocked ? "" : " is-locked"}`} aria-hidden={!unlocked}>
        {children}
      </div>

      {!unlocked && (
        <div className="wf-lock__overlay">
          <i className="fas fa-lock" />
          <h4>For our guests&rsquo; eyes only</h4>
          <p>Enter the password from your invitation to reveal the details.</p>
          <form className="wf-lock__form" onSubmit={submit}>
            <input
              type="password"
              className="wf-field wf-lock__input"
              placeholder="Password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              aria-label="Password"
            />
            <button type="submit" className="theme-btn">
              <span>
                <i className="fas fa-unlock" /> Unlock
              </span>
            </button>
          </form>
          {error && (
            <p className="wf-lock__err">That&rsquo;s not quite it — check your invitation.</p>
          )}
        </div>
      )}
    </div>
  );
}
