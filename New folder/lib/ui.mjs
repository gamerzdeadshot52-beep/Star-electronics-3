// Reusable UI components rendered at build time.
import { site, waProductLink } from '../data/site.mjs';
import { esc, L, La } from './i18n.mjs';
import { icon, brandIcon } from './icons.mjs';
import { categories, subLabel, bandOf } from '../data/products.mjs';
import { thumb, watchUrl } from '../data/videos.mjs';

export const telHref = `tel:${site.tel}`;

/* ------------------------------------------------------------ primitives */
export function sectionHead({ kicker, title, sub, center = false, light = false }) {
  return `<div class="section-head${center ? ' is-center' : ''}${light ? ' on-dark' : ''}" data-reveal>
    ${kicker ? `<span class="kicker">${L(kicker)}</span>` : ''}
    <h2>${L(title)}</h2>
    ${sub ? `<p class="section-sub">${L(sub)}</p>` : ''}
  </div>`;
}

export function breadcrumb(items) {
  return `<nav class="breadcrumb container" aria-label="Breadcrumb">
    <ol>${items
      .map((it, i) =>
        i === items.length - 1
          ? `<li aria-current="page">${L(it.name)}</li>`
          : `<li><a href="${it.href}">${L(it.name)}</a></li>`
      )
      .join('')}
    </ol>
  </nav>`;
}

export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

/* -------------------------------------------------------- product visuals */
const TILE = {
  mobiles: ['linear-gradient(135deg,#1b2a5e,#3b64f6)', '#8fb0ff'],
  electronics: ['linear-gradient(135deg,#0d3a44,#0891b2)', '#7ee3f5'],
  furniture: ['linear-gradient(135deg,#4a2c12,#b45309)', '#fcd34d'],
};

export function productVisual(p, size = 'md') {
  if (p.img) {
    return `<div class="pv pv-img pv-${size}"><img src="${esc(p.img)}" alt="${La(p.name)} — ${La(
      { en: 'product photo', hi: 'प्रोडक्ट फोटो' }
    )}" loading="lazy" width="600" height="450"></div>`;
  }
  const [bg, fg] = TILE[p.cat] || TILE.mobiles;
  const ic = categories[p.cat]?.icon || 'package';
  return `<div class="pv pv-${size}" style="--pv-bg:${bg};--pv-fg:${fg}" role="img" aria-label="${La(p.name)}">
    <span class="pv-glow" aria-hidden="true"></span>
    ${icon(ic, { size: 54, cls: 'pv-icon' })}
    <span class="pv-brand">${esc(p.brand)}</span>
    <span class="pv-name">${esc(p.name)}</span>
  </div>`;
}

/* --------------------------------------------------------- product card */
export function productCard(p, { reveal = true } = {}) {
  const price = p.price == null ? null : inr(p.price);
  const specs = (p.specs || []).slice(0, 3).map((s) => esc(s)).join('||');
  return `<article class="card product-card"${reveal ? ' data-reveal' : ''} data-product-card
    data-slug="${esc(p.slug)}" data-name="${esc(p.name)}" data-brand="${esc(p.brand)}"
    data-cat="${esc(p.cat)}" data-sub="${esc(p.sub)}" data-price="${p.price ?? ''}"
    data-band="${bandOf(p) ?? ''}" data-specs="${specs}"
    data-desc-en="${esc(p.desc?.en || '')}" data-desc-hi="${esc(p.desc?.hi || '')}"
    data-wa="${esc(waProductLink(p.name))}">
    <button type="button" class="product-media" data-product-open="${esc(p.slug)}" aria-label="View ${La(p.name)}">
      ${productVisual(p)}
      ${p.featured ? `<span class="chip chip-gold">${L({ en: 'Featured', hi: 'फीचर्ड' })}</span>` : ''}
      ${p.price == null ? `<span class="chip chip-soft">${L({ en: 'Ask in store', hi: 'दुकान में पूछें' })}</span>` : ''}
    </button>
    <div class="product-body">
      <span class="product-brand">${esc(p.brand)}</span>
      <h3><button type="button" class="linklike" data-product-open="${esc(p.slug)}">${esc(p.name)}</button></h3>
      <p class="product-desc">${L(p.desc)}</p>
      <ul class="spec-list">${(p.specs || [])
        .slice(0, 3)
        .map((s) => `<li>${icon('check', { size: 14 })} ${esc(s)}</li>`)
        .join('')}</ul>
      <div class="product-foot">
        <div class="price">
          ${
            price
              ? `<span class="price-now">${price}</span><span class="price-note">${L({ en: 'indicative', hi: 'अनुमानित' })}</span>`
              : `<span class="price-ask">${L({ en: 'Ask for best price', hi: 'बेस्ट प्राइस पूछें' })}</span>`
          }
        </div>
        <div class="product-actions">
          <a class="btn btn-wa btn-sm" href="${waProductLink(p.name)}" target="_blank" rel="noopener" data-track="whatsapp_click">
            ${brandIcon('whatsapp', { size: 15 })}<span>${L({ en: 'Enquire', hi: 'पूछें' })}</span>
          </a>
          <button type="button" class="btn btn-ghost btn-sm" data-product-open="${esc(p.slug)}">${L({ en: 'Details', hi: 'विवरण' })}</button>
        </div>
      </div>
    </div>
  </article>`;
}

/** The single <dialog> shell used by catalogue + home pages. */
export function productDialog() {
  return `<dialog class="pdp" id="productDialog" aria-labelledby="pdpTitle">
  <button type="button" class="pdp-close icon-btn" data-pdp-close aria-label="Close">${icon('x', { size: 20 })}</button>
  <div class="pdp-grid">
    <div class="pdp-media" id="pdpMedia"></div>
    <div class="pdp-info">
      <span class="product-brand" id="pdpBrand"></span>
      <h3 id="pdpTitle"></h3>
      <p class="pdp-desc" id="pdpDesc"></p>
      <div class="pdp-price" id="pdpPrice"></div>
      <h4 class="pdp-spec-title">${L({ en: 'Specifications', hi: 'स्पेसिफिकेशन' })}</h4>
      <ul class="spec-list" id="pdpSpecs"></ul>
      <p class="pdp-stock">${icon('checkCircle', { size: 16 })} ${L({
        en: 'In stock — visit the store or message us to confirm.',
        hi: 'स्टॉक में — दुकान पर आएं या मैसेज करके पुष्टि करें।',
      })}</p>
      <div class="pdp-actions">
        <a class="btn btn-wa" id="pdpWa" href="${site.waBase}" target="_blank" rel="noopener" data-track="whatsapp_click">
          ${brandIcon('whatsapp', { size: 18 })}<span>${L({ en: 'WhatsApp this product', hi: 'यह प्रोडक्ट व्हाट्सएप करें' })}</span>
        </a>
        <a class="btn btn-primary" id="pdpCall" href="${telHref}" data-track="call_click">${icon('phone', { size: 18 })} ${L({ en: 'Call store', hi: 'दुकान पर कॉल' })}</a>
      </div>
    </div>
  </div>
</dialog>`;
}

/* -------------------------------------------------------- category cards */
export function categoryCard(cat, { i = 0 } = {}) {
  const c = categories[cat];
  const href = c.href;
  return `<a class="card cat-card cat-${cat}" href="${href}" data-reveal style="--d:${i * 90}ms">
    <span class="cat-icon">${icon(c.icon, { size: 40 })}</span>
    <span class="cat-body">
      <strong>${L(c.name)}</strong>
      <small>${L(c.blurb)}</small>
    </span>
    <span class="cat-cta">${L({ en: 'Explore', hi: 'देखें' })} ${icon('arrowRight', { size: 16 })}</span>
  </a>`;
}

/* ---------------------------------------------------------------- brands */
export function brandTile(b) {
  return `<li class="brand-tile" data-reveal><span class="brand-name">${esc(b.name)}</span></li>`;
}

export function brandMarquee(list) {
  const items = list
    .map((b) => `<li class="marquee-item" aria-hidden="false"><span>${esc(b.name)}</span></li>`)
    .join('');
  return `<div class="marquee" data-marquee>
    <div class="marquee-track">${items}${items}</div>
  </div>`;
}

/* ---------------------------------------------------------------- videos */
export function videoCard(v, i = 0) {
  return `<article class="card video-card" data-reveal style="--d:${i * 70}ms">
    <button type="button" class="video-media" data-video="${esc(v.id)}" aria-label="Play: ${La(v.label)}">
      <img src="${thumb(v.id)}" alt="${La(v.label)}" loading="lazy" width="480" height="360">
      <span class="play-badge">${brandIcon('youtube', { size: 26 })}</span>
      ${v.short ? `<span class="chip chip-dark">${L({ en: 'Short', hi: 'शॉर्ट' })}</span>` : ''}
    </button>
    <div class="video-body">
      <h3>${esc(v.label)}</h3>
      <p class="video-meta">${new Date(v.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · ${v.views.toLocaleString('en-IN')} ${L({ en: 'views', hi: 'व्यूज़' })}</p>
      <a class="link-arrow" href="${watchUrl(v)}" target="_blank" rel="noopener" data-track="youtube_click">${L({ en: 'Watch on YouTube', hi: 'YouTube पर देखें' })} ${icon('arrowUpRight', { size: 15 })}</a>
    </div>
  </article>`;
}

export function videoLightbox() {
  return `<dialog class="lightbox" id="videoLightbox" aria-label="Video player">
  <button type="button" class="pdp-close icon-btn" data-lb-close aria-label="Close">${icon('x', { size: 20 })}</button>
  <div class="lightbox-frame" id="lightboxFrame"></div>
</dialog>`;
}

/* --------------------------------------------------------------- reviews */
export function reviewCard(r, i = 0) {
  return `<article class="card review-card" data-reveal style="--d:${i * 70}ms">
    <div class="review-top">
      <span class="avatar" aria-hidden="true">${esc(r.name.trim().charAt(0))}</span>
      <div>
        <strong>${esc(r.name)}</strong>
        <span class="review-place">${L(r.place)} · ${L(r.when)}</span>
      </div>
      <span class="stars" aria-label="${r.rating} out of 5">
        ${Array.from({ length: 5 }, (_, n) => `<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="${n < r.rating ? '#F5B301' : '#D8DEE9'}"/></svg>`).join('')}
      </span>
    </div>
    <p>${L(r.text)}</p>
  </article>`;
}

/* ---------------------------------------------------------------- offers */
export function offerCard(o, i = 0) {
  return `<article class="card offer-card tone-${o.tone || 'gold'}" data-reveal style="--d:${i * 80}ms" data-offer data-until="${esc(o.until)}">
    <span class="offer-icon">${icon(o.icon || 'tag', { size: 26 })}</span>
    <span class="chip chip-outline">${L(o.badge)}</span>
    <h3>${L(o.title)}</h3>
    <p>${L(o.desc)}</p>
    <div class="offer-timer" data-countdown="${esc(o.until)}" aria-live="off"></div>
    <div class="offer-actions">
      <a class="btn btn-primary btn-sm" href="${site.waBase}?text=${encodeURIComponent(
        'Hello Star Electronics, please share details for: ' + o.title.en
      )}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 15 })} ${L({ en: 'Claim offer', hi: 'ऑफर लें' })}</a>
      <button type="button" class="btn btn-ghost btn-sm" data-share="${esc(
        site.waBase + '?text=' + encodeURIComponent(o.share)
      )}">${icon('share', { size: 15 })} ${L({ en: 'Share', hi: 'शेयर' })}</button>
    </div>
  </article>`;
}

/* ------------------------------------------------------------ trust strip */
export function trustStrip() {
  const stats = [
    { n: 12, suffix: '+', en: 'Years of trusted service', hi: 'सालों का भरोसा' },
    { n: 15000, suffix: '+', en: 'Happy customers', hi: 'खुश ग्राहक' },
    { n: 50, suffix: '+', en: 'Brands available', hi: 'ब्रांड उपलब्ध' },
    { n: 1000, suffix: '+', en: 'Products in store', hi: 'प्रोडक्ट स्टॉक में' },
  ];
  const badges = [
    ['badgeCheck', 'All Brands Available', 'सभी ब्रांड उपलब्ध'],
    ['shield', 'Genuine Products', 'असली प्रोडक्ट'],
    ['wrench', 'Warranty Support', 'वारंटी सपोर्ट'],
    ['creditCard', 'Easy EMI', 'आसान ईएमआई'],
  ];
  return `<section class="section-tight trust" aria-label="Store highlights">
  <div class="container">
    <ul class="stat-grid">
      ${stats
        .map(
          (s, i) => `<li class="stat" data-reveal style="--d:${i * 80}ms">
        <span class="stat-num"><span data-count="${s.n}">0</span>${s.suffix}</span>
        <span class="stat-label">${L({ en: s.en, hi: s.hi })}</span>
      </li>`
        )
        .join('')}
    </ul>
    <ul class="badge-grid">
      ${badges
        .map(
          (b, i) => `<li class="badge-pill" data-reveal style="--d:${i * 70}ms">${icon(b[0], { size: 17 })} <span>${L({ en: b[1], hi: b[2] })}</span></li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;
}

/* ---------------------------------------------------------------- CTA band */
export function ctaBand() {
  return `<section class="section cta-band">
  <div class="container cta-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Ready when you are', hi: 'हम तैयार हैं' })}</span>
      <h2>${L({ en: 'Visit our store or message us now.', hi: 'आज ही हमारी दुकान पर आएं या मैसेज करें।' })}</h2>
      <p>${L(site.address)}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" href="${telHref}" data-track="call_click">${icon('phone', { size: 18 })} +91 ${site.phoneDisplay}</a>
      <a class="btn btn-wa btn-lg" href="${waHrefSafe()}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 18 })} ${L({ en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' })}</a>
      <a class="btn btn-ghost-dark btn-lg" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">${icon('pin', { size: 18 })} ${L({ en: 'Get Directions', hi: 'रास्ता देखें' })}</a>
    </div>
  </div>
</section>`;
}

function waHrefSafe(msg) {
  const m = msg || 'Hello Star Electronics, I want to know about your products and current offers.';
  return `${site.waBase}?text=${encodeURIComponent(m)}`;
}

/* ------------------------------------------------------------ filter bar */
export function filterBar({ cat, brands, bands }) {
  const c = categories[cat];
  return `<div class="filters" id="filters" data-cat="${esc(cat)}">
  <div class="filters-row">
    <label class="field search-field">
      <span class="sr-only">${L({ en: 'Search products', hi: 'प्रोडक्ट खोजें' })}</span>
      ${icon('search', { size: 18 })}
      <input type="search" id="productSearch" autocomplete="off"
        placeholder="Search ${esc(c.name.en)}…" data-hi-placeholder="${esc(c.name.hi)} में खोजें…">
    </label>
    <label class="field">
      <span class="sr-only">${L({ en: 'Filter by brand', hi: 'ब्रांड से फ़िल्टर' })}</span>
      <select id="brandFilter">
        <option value="" data-hi-text="सभी ब्रांड">All brands</option>
        ${brands.map((b) => `<option value="${esc(b)}">${esc(b)}</option>`).join('')}
      </select>
    </label>
    <label class="field">
      <span class="sr-only">${L({ en: 'Filter by price', hi: 'दाम से फ़िल्टर' })}</span>
      <select id="bandFilter">
        <option value="" data-hi-text="सभी दाम">All prices</option>
        ${bands.map((b) => `<option value="${esc(b.id)}" data-hi-text="${esc(b.label.hi)}">${esc(b.label.en)}</option>`).join('')}
      </select>
    </label>
    <label class="field">
      <span class="sr-only">${L({ en: 'Sort', hi: 'क्रम' })}</span>
      <select id="sortFilter">
        <option value="popular" data-hi-text="क्रम: लोकप्रिय">Sort: Popular</option>
        <option value="price-asc" data-hi-text="क्रम: कम दाम पहले">Sort: Price low to high</option>
        <option value="price-desc" data-hi-text="क्रम: ज़्यादा दाम पहले">Sort: Price high to low</option>
        <option value="name" data-hi-text="क्रम: A–Z">Sort: A–Z</option>
      </select>
    </label>
  </div>

  <div class="chip-row" role="group" aria-label="${La({ en: 'Sub-categories', hi: 'उप-श्रेणियां' })}">
    <button type="button" class="chip-btn is-active" data-sub-filter="">${L({ en: 'All', hi: 'सभी' })}</button>
    ${c.subs
      .map(([id, label]) => `<button type="button" class="chip-btn" data-sub-filter="${esc(id)}">${L(label)}</button>`)
      .join('')}
  </div>

  <div class="filters-meta">
    <p id="resultCount" class="result-count" aria-live="polite"></p>
    <button type="button" class="linklike" id="clearFilters">${L({ en: 'Clear filters', hi: 'फ़िल्टर हटाएं' })}</button>
  </div>
</div>`;
}
