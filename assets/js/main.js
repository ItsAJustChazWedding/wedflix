/* ============================================================
   WEDFLIX — interaction logic
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Intro + Profile gate ---------- */
  const intro    = document.getElementById('intro');
  const profiles = document.getElementById('profiles');
  const app      = document.getElementById('app');
  const skipBtn  = document.getElementById('skipIntro');

  function showProfiles() {
    if (!intro.classList.contains('hidden')) {
      intro.classList.add('hidden');
      profiles.classList.remove('hidden');
    }
  }
  // Auto-advance after the WEDFLIX animation (~4.4s)
  const introTimer = setTimeout(showProfiles, 4400);
  skipBtn.addEventListener('click', () => { clearTimeout(introTimer); showProfiles(); });

  function enterApp() {
    profiles.classList.add('hidden');
    app.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('[data-enter]').forEach(el => el.addEventListener('click', enterApp));

  /* ---------- Navbar background on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Category chips (decorative toggle) ---------- */
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
    });
  });

  /* ============================================================
     EPISODES — Season 4 holds the real wedding logistics.
     Seasons 1-3 are the playful "story so far".
     ============================================================ */
  const PLAY_SVG = '<span class="play-ov"><svg viewBox="0 0 24 24"><path d="M5 3l16 9-16 9z"/></svg></span>';
  const IMG = n => `assets/img/${n}`;

  const SEASONS = [
    { // Season 1
      episodes: [
        { thumb:'couple-4.jpg', tag:'EP 1', title:'The First Hello', body:'Where it all began — two strangers, one unforgettable spark. <strong>Patience, the pilot episode.</strong>' },
        { thumb:'couple-3.jpg', tag:'EP 2', title:'Getting to Know You', body:'Late-night talks, laughter, and the slow realisation that this one is different.' },
        { thumb:'couple-6.jpg', tag:'EP 9', title:'Falling, Fast', body:'By the season finale, there was no turning back. To be continued…' },
      ]
    },
    { // Season 2
      episodes: [
        { thumb:'couple-2.jpg', tag:'EP 1', title:'Officially Us', body:'Making it real. The world, meet our favourite person.' },
        { thumb:'couple-5.jpg', tag:'EP 7', title:'Through Thick &amp; Thin', body:'Prayer, joy, and growing stronger together — one day at a time.' },
        { thumb:'couple-7.jpg', tag:'EP 12', title:'Forever On The Horizon', body:'A love story building toward something beautiful.' },
      ]
    },
    { // Season 3
      episodes: [
        { thumb:'couple-hero.jpg', tag:'EP 1', title:'Two Soon To Be Three', body:'Laughter, prayer, and joy — beautifully encapsulating this love story.' },
        { thumb:'couple-6.jpg', tag:'EP 14', title:'She Said Yes', body:'When patience transforms into the greatest love story. The proposal.' },
        { thumb:'couple-4.jpg', tag:'EP 26', title:'Planning A Forever', body:'Save the date — the wedding season is coming.' },
      ]
    },
    { // Season 4 — THE WEDDING (the real details)
      episodes: [
        { thumb:'couple-hero.jpg', tag:'Date + Time', title:'You\'re Formally Invited',
          body:'Justin &amp; Chastidy formally invite you to join them for a time of celebration on their special day &mdash; <strong>September 12, 2026 at 4:00 PM</strong>.' },
        { thumb:'couple-2.jpg', tag:'Location', title:'The Birchwood Manor',
          body:'Both ceremony &amp; reception will take place at <strong>The Birchwood Manor, 111 N Jefferson Rd, Whippany, NJ 07981</strong>.' },
        { thumb:'couple-5.jpg', tag:'RSVP', title:'Reserve Your Seat',
          body:'Please confirm your attendance by <strong>10:30 PM on August 8, 2026</strong> by visiting our website.' },
      ]
    },
  ];

  const epList = document.getElementById('episodeList');
  function renderSeason(i) {
    epList.innerHTML = SEASONS[i].episodes.map(ep => `
      <article class="episode">
        <div class="episode__num">${ep.tag.match(/\d+/) ? ep.tag.match(/\d+/)[0] : '&#9733;'}</div>
        <div class="episode__thumb"><img src="${IMG(ep.thumb)}" alt="" loading="lazy">${PLAY_SVG}</div>
        <div class="episode__info">
          <h4>${ep.title} <span class="tag">${ep.tag}</span></h4>
          <p>${ep.body}</p>
        </div>
      </article>`).join('');
  }
  renderSeason(3); // default to Season 4 (the wedding)

  document.querySelectorAll('.season').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.season').forEach(s => s.classList.remove('season--active'));
      btn.classList.add('season--active');
      renderSeason(Number(btn.dataset.season));
      document.getElementById('episodes').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ============================================================
     MODALS — the 4 "More Like This" links
     ============================================================ */
  const modal   = document.getElementById('modal');
  const mContent = document.getElementById('modalContent');

  const MODALS = {
    website: `
      <div class="modal__hero">
        <p class="eyebrow">Wedflix Original</p>
        <h3>Our Wedding Website</h3>
      </div>
      <div class="modal__body">
        <p>We can't wait to share our special day with you. Here's everything you need to know about the celebration of <strong style="color:#fff">Justin &amp; Chastidy</strong>.</p>
        <dl class="modal__detail">
          <dt>Date</dt><dd>Saturday, September 12, 2026 &middot; 4:00 PM</dd>
          <dt>Venue</dt><dd>The Birchwood Manor</dd>
          <dt>Address</dt><dd>111 N Jefferson Rd, Whippany, NJ 07981</dd>
          <dt>Hashtag</dt><dd style="color:var(--red);font-weight:600">#ItsAJustChazWedding</dd>
        </dl>
        <a class="btn btn--play btn--block" target="_blank" rel="noopener"
           href="https://www.google.com/maps/search/?api=1&query=The+Birchwood+Manor+111+N+Jefferson+Rd+Whippany+NJ+07981">
           &#128205; Get Directions</a>
      </div>`,

    faq: `
      <div class="modal__hero">
        <p class="eyebrow">Q &amp; A</p>
        <h3>Frequently Asked</h3>
      </div>
      <div class="modal__body">
        <p>For all our friends and family with lots of questions, check out our Q &amp; A first!</p>
        <div class="faq-q"><strong>What should I wear?</strong>Formal / black-tie optional. Dress to celebrate!</div>
        <div class="faq-q"><strong>When should I arrive?</strong>Please arrive by 3:30 PM so we can begin promptly at 4:00 PM.</div>
        <div class="faq-q"><strong>Can I bring a guest?</strong>Please refer to your invitation for the number of seats reserved in your name.</div>
        <div class="faq-q"><strong>Is the ceremony and reception in one place?</strong>Yes! Both are at The Birchwood Manor.</div>
        <div class="faq-q"><strong>When is the RSVP deadline?</strong>10:30 PM on August 8, 2026.</div>
      </div>`,

    registry: `
      <div class="modal__hero">
        <p class="eyebrow">With Love</p>
        <h3>Gift Registry</h3>
      </div>
      <div class="modal__body">
        <p>Your presence is enough of a present to us! But for those of you who would like to bless us even more, we've put together a wish-list to help you out.</p>
        <a class="btn btn--ghost btn--block" href="#" onclick="return false;">&#127873; View Registry &mdash; coming soon</a>
        <p style="margin-top:16px;font-size:.85rem">The couple will share their registry link here closer to the date.</p>
      </div>`,

    rsvp: `
      <div class="modal__hero">
        <p class="eyebrow">Season 4 &middot; Finale</p>
        <h3>RSVP</h3>
      </div>
      <div class="modal__body">
        <p>Here's a direct link to establish your presence. We sincerely hope you can join us &mdash; but we completely understand if you are unable to attend.</p>
        <form id="rsvpForm">
          <input class="field" name="name" placeholder="Your full name" required />
          <input class="field" type="email" name="email" placeholder="Email address" required />
          <select class="field" name="attending" required>
            <option value="">Will you be attending?</option>
            <option value="yes">Joyfully accepts &#127881;</option>
            <option value="no">Regretfully declines</option>
          </select>
          <input class="field" name="guests" type="number" min="0" max="10" placeholder="Number of guests (incl. you)" />
          <textarea class="field" name="note" rows="3" placeholder="A note for the couple (optional)"></textarea>
          <button class="btn btn--play btn--block" type="submit">Send RSVP &mdash; by Aug 8, 2026</button>
        </form>
      </div>`,
  };

  function openModal(key) {
    mContent.innerHTML = MODALS[key] || '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const form = document.getElementById('rsvpForm');
    if (form) form.addEventListener('submit', onRsvp);
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); openModal(el.dataset.modal); });
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  function onRsvp(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    closeModal();
    const msg = data.attending === 'no'
      ? `Thank you, ${data.name.split(' ')[0]}. You'll be missed! 💛`
      : `Thank you, ${data.name.split(' ')[0]}! Your seat is reserved. See you soon! 🎉`;
    toast(msg);
    // Persist locally (no backend) so the couple can wire up a form service later.
    try {
      const all = JSON.parse(localStorage.getItem('wedflix_rsvps') || '[]');
      all.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem('wedflix_rsvps', JSON.stringify(all));
    } catch (_) {}
  }

  function toast(text) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4200);
  }
})();
