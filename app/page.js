import Intro from "@/components/wedding/Intro";
import Header from "@/components/wedding/Header";
import Countdown from "@/components/wedding/Countdown";
import Episodes from "@/components/wedding/Episodes";
import Faq from "@/components/wedding/Faq";
import VenueMap from "@/components/wedding/VenueMap";

const WITHJOY = "https://withjoy.com/justchaz";
const WITHJOY_RSVP = "https://withjoy.com/justchaz/rsvp";
const WITHJOY_FAQ = "https://withjoy.com/justchaz/faq";
const WITHJOY_REGISTRY = "https://withjoy.com/justchaz/registry";

export default function Page() {
  return (
    <main>
      <Intro />
      <Header />

      {/* ===== HERO ===== */}
      <section className="wf-hero" id="home">
        <video
          className="wf-hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="assets/img/wedding/home.jpg"
        >
          <source src="assets/videos/the-before.mp4" type="video/mp4" />
        </video>
        <div className="wf-hero__scrim" />
        <div className="container">
          <div className="wf-hero__inner">
            <span className="wf-badge">
              <b>W</b> Wedflix Original
            </span>
            <h1>
              it&rsquo;s <em>finally</em>
              <br /> Happening
            </h1>
            <p className="wf-hero__meta">
              WEDDING &nbsp;&bull;&nbsp; ROMCOM &nbsp;&bull;&nbsp; 2026 &nbsp;&bull;&nbsp; FOREVER
            </p>
            <p className="wf-hero__tag">
              Laughter, prayer, joy, and so much more beautifully encapsulate this love story of
              two soon to become three. To truly summarize this journey, one could say,
              &ldquo;When patience transforms into the greatest love story.&rdquo;
            </p>
            <Countdown />
            <div className="wf-hero__btns">
              <a href="#rsvp" className="theme-btn wf-white">
                <span>
                  <i className="fas fa-play" /> RSVP Now
                </span>
              </a>
              <a href="#details" className="theme-btn">
                <span>
                  The Details <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT DETAILS + MAP ===== */}
      <section
        className="wf-section wf-section--photo"
        id="details"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,13,16,0.5), rgba(13,13,16,0.68)), url("assets/img/wedding/details.jpg")',
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">The Main Event</span>
            <h2 className="wf-title">
              When &amp; <em>Where</em>
            </h2>
            <p className="wf-lead mx-auto mt-3">
              Justin &amp; Chastidy request the pleasure of your company.
            </p>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="wf-detail-card">
                <div className="ic">
                  <i className="fas fa-calendar-alt" />
                </div>
                <h4>Date &amp; Time</h4>
                <p>Saturday, September 12, 2026 Ceremony begins at 4:00 PM</p>
              </div>
            </div>
            <div className="col-lg-4">
              <VenueMap />
            </div>
            <div className="col-lg-4">
              <div className="wf-detail-card">
                <div className="ic">
                  <i className="fas fa-heart" />
                </div>
                <h4>Ceremony &amp; Reception</h4>
                <p>Both will be held at the same venue. Kindly RSVP by August 8, 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="wf-section alt" id="rsvp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-4">
                <h2 className="wf-title">
                  Reserve Your <em>Seat</em>
                </h2>
                <p className="wf-lead mx-auto mt-3">
                  We sincerely hope you can join us — but we completely understand if you are
                  unable to attend. Kindly respond by August 8, 2026.
                </p>
              </div>
              <a
                href={WITHJOY_RSVP}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn wf-white"
              >
                <span>
                  <i className="fas fa-play" /> RSVP on Our Website
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EPISODES (extra) ===== */}
      <section className="wf-section" id="episodes">
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">Now Streaming</span>
            <h2 className="wf-title">
              The <em>Episodes</em>
            </h2>
            <p className="wf-lead mx-auto mt-3">
              Press play on what&rsquo;s released —<br className="d-none d-md-block" /> the rest
              unlocks as our story unfolds.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <Episodes />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GIFTS & REGISTRY ===== */}
      <section className="wf-section alt" id="registry">
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">With Love</span>
            <h2 className="wf-title">
              Gifts &amp; <em>Registry</em>
            </h2>
            <p className="wf-lead mx-auto mt-3">
              Your presence is enough of a present to us! But for those who would like to bless
              us even more, we&rsquo;ve put together a few ways to help.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <a
                className="wf-registry-card"
                href={WITHJOY_REGISTRY}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ic">
                  <i className="fas fa-gift" />
                </div>
                <h4>Wish List</h4>
                <p>A curated registry to help us start our new chapter.</p>
                <span className="wf-registry-card__cta">
                  View Registry <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <div className="wf-registry-card">
                <div className="ic">
                  <i className="fas fa-plane" />
                </div>
                <h4>Honeymoon Fund</h4>
                <p>
                  Help send us off on the adventure of a lifetime as newlyweds. If CashApp
                  isn&rsquo;t your jam and you fancy sending funds electronically, just give us a
                  Zelle!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wf-registry-card">
                <div className="ic">
                  <i className="fas fa-hashtag" />
                </div>
                <h4>Share the Day</h4>
                <p>
                  Tag your photos with{" "}
                  <strong style={{ color: "var(--wf-red)" }}>#ItsAJustChazWedding</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="wf-section" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="wf-eyebrow">Q &amp; A</span>
                <h2 className="wf-title">
                  Frequently <em>Asked</em>
                </h2>
              </div>
              <Faq />
              <div className="text-center mt-4">
                <a href={WITHJOY_FAQ} target="_blank" rel="noopener noreferrer" className="theme-btn">
                  <span>
                    See All FAQs <i className="fas fa-chevron-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENDING ===== */}
      <footer className="wf-ending">
        <h2>IT&rsquo;S A JUSTCHAZ WEDDING</h2>
        <p>Hope to see you soon!</p>
        <a className="wf-ending__link" href={WITHJOY} target="_blank" rel="noopener noreferrer">
          Visit our wedding website &rsaquo;
        </a>
      </footer>
    </main>
  );
}
