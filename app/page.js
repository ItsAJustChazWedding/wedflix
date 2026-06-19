import Header from "@/components/wedding/Header";
import Countdown from "@/components/wedding/Countdown";
import StorySlider from "@/components/wedding/StorySlider";
import Faq from "@/components/wedding/Faq";
import Rsvp from "@/components/wedding/Rsvp";

const MAP_SRC =
  "https://www.google.com/maps?q=The+Birchwood+Manor+111+N+Jefferson+Rd+Whippany+NJ+07981&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=The+Birchwood+Manor+111+N+Jefferson+Rd+Whippany+NJ+07981";

export default function Page() {
  return (
    <main>
      <Header />

      {/* ===== HERO ===== */}
      <section className="wf-hero" id="home">
        <div
          className="wf-hero__bg"
          style={{ backgroundImage: 'url("assets/img/wedding/couple-hero.jpg")' }}
        />
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
              Justin &amp; Chastidy request the pleasure of your company.
            </p>
            <Countdown />
            <div className="wf-hero__btns">
              <a href="#rsvp" className="theme-btn wf-white">
                <span>
                  <i className="fas fa-play" /> RSVP Now
                </span>
              </a>
              <a href="#story" className="theme-btn">
                <span>
                  Our Story <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED VIDEO ===== */}
      <section className="wf-section" id="trailer">
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">The Trailer</span>
            <h2 className="wf-title">
              Watch the <em>Invitation</em>
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wf-video">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="assets/videos/invitation-poster.jpg"
                >
                  <source src="assets/videos/invitation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="wf-section alt" id="story">
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">Now Streaming</span>
            <h2 className="wf-title">
              Our <em>Story</em> So Far
            </h2>
            <p className="wf-lead mx-auto mt-3">
              Laughter, prayer, joy, and so much more beautifully encapsulate this love story
              of two soon to become three.
            </p>
          </div>
          <StorySlider />
        </div>
      </section>

      {/* ===== EVENT DETAILS + MAP ===== */}
      <section className="wf-section" id="details">
        <div className="container">
          <div className="text-center mb-5">
            <span className="wf-eyebrow">The Main Event</span>
            <h2 className="wf-title">
              When &amp; <em>Where</em>
            </h2>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="wf-detail-card">
                <div className="ic">
                  <i className="fas fa-calendar-alt" />
                </div>
                <h4>Date &amp; Time</h4>
                <p>
                  Saturday, September 12, 2026
                  <br />
                  Ceremony begins at 4:00 PM
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wf-detail-card">
                <div className="ic">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h4>Venue</h4>
                <p>
                  The Birchwood Manor
                  <br />
                  111 N Jefferson Rd, Whippany, NJ 07981
                </p>
              </div>
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

          <div className="row mt-4">
            <div className="col-12">
              <div className="wf-map">
                <iframe
                  src={MAP_SRC}
                  title="The Birchwood Manor map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-center mt-4">
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="theme-btn">
                  <span>
                    <i className="fas fa-location-arrow" /> Get Directions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGISTRY ===== */}
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
              <div className="wf-registry-card">
                <div className="ic">
                  <i className="fas fa-gift" />
                </div>
                <h4>Wish List</h4>
                <p>A curated registry to help us start our new chapter. Link coming soon.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wf-registry-card">
                <div className="ic">
                  <i className="fas fa-plane" />
                </div>
                <h4>Honeymoon Fund</h4>
                <p>Help send us off on the adventure of a lifetime as newlyweds.</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="wf-section alt" id="rsvp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="wf-eyebrow">Season 4 &middot; Finale</span>
                <h2 className="wf-title">
                  Reserve Your <em>Seat</em>
                </h2>
                <p className="wf-lead mx-auto mt-3">
                  We sincerely hope you can join us — but we completely understand if you are
                  unable to attend. Kindly respond by August 8, 2026.
                </p>
              </div>
              <Rsvp />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENDING ===== */}
      <footer className="wf-ending">
        <h2>IT&rsquo;S A JUSTCHAZ WEDDING</h2>
        <p>Hope to see you soon!</p>
      </footer>
    </main>
  );
}
