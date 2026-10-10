// Shared HTML shell: <head>, sticky header, footer, floating CTAs, cookie bar.
import { site, nav, footerLinks } from '../data/site.mjs';
import { esc, L, La } from './i18n.mjs';
import { icon, brandIcon } from './icons.mjs';

export const FAVICON =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0B1226"/><path d="M32 10l6.5 13.2L53 25.1l-10.5 10.2L45.1 50 32 43.1 18.9 50l2.6-14.7L11 25.1l14.5-1.9L32 10z" fill="#F5B301"/></svg>`
  );

export const waHref = (msg = 'Hello Star Electronics, I want to know more about your products and offers.') =>
  `${site.waBase}?text=${encodeURIComponent(msg)}`;

export const telHref = `tel:${site.tel}`;

/* ------------------------------------------------------------------ <head> */
export function documentHead({ title, description, path, jsonld = [], noindex = false, bodyClass = '' }) {
  const url = `${site.domain}/${path}`;
  const ld = jsonld.filter(Boolean);
  return `<!doctype html>
<html lang="en" data-lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<link rel="canonical" href="${esc(url)}">
<meta name="theme-color" content="#0B1226">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:locale" content="en_IN">
<meta property="og:locale:alternate" content="hi_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<link rel="icon" href="${FAVICON}">
<link rel="apple-touch-icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<script>
(function(){try{
  var d=document.documentElement, s=window.localStorage;
  d.className=(d.className+' js').trim();
  var t=s.getItem('seg-theme'); if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  d.setAttribute('data-theme',t);
  var l=s.getItem('seg-lang'); if(l==='hi'){d.setAttribute('data-lang','hi'); d.setAttribute('lang','hi');}
}catch(e){}})();
</script>
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n')}
${site.gaId ? `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}',{anonymize_ip:true});</script>` : ''}
</head>
<body class="${esc(bodyClass)}">
<a class="skip-link" href="#main">Skip to content</a>`;
}

/* ----------------------------------------------------------------- schema */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Store', 'LocalBusiness'],
    '@id': `${site.domain}/#store`,
    name: site.name,
    alternateName: site.legalName,
    description:
      'Mobiles, electronics and furniture store in Ganga, Haryana — all brands available, genuine warranty support and easy EMI options.',
    url: `${site.domain}/`,
    telephone: `+${site.phoneRaw}`,
    email: site.email,
    image: `${site.domain}/assets/img/store-front.jpg`,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card, EMI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sangaria–Sirsa Road',
      addressLocality: 'Ganga',
      addressRegion: 'Haryana',
      postalCode: '125103',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Ganga' },
      { '@type': 'Place', name: 'Sangaria' },
      { '@type': 'Place', name: 'Sirsa' },
      { '@type': 'Place', name: 'Rawatsar' },
      { '@type': 'Place', name: 'Bhadra' },
    ],
    sameAs: [site.youtube, 'https://www.facebook.com/', 'https://www.instagram.com/'],
    knowsAbout: ['Mobile phones', 'Television', 'Air conditioners', 'Refrigerators', 'Furniture', 'Home appliances'],
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: typeof it.name === 'string' ? it.name : it.name.en,
      item: `${site.domain}/${it.href}`,
    })),
  };
}

/* ---------------------------------------------------------------- header */
function navLink(item, active) {
  const isActive = active === item.href;
  return `<a href="${item.href}" class="nav-link${isActive ? ' is-active' : ''}"${isActive ? ' aria-current="page"' : ''}>${L({ en: item.en, hi: item.hi })}</a>`;
}

export function header(active) {
  return `<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a class="logo" href="index.html" aria-label="${esc(site.name)} — home">
      <span class="logo-mark" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 64 64" role="presentation"><path class="logo-star" d="M32 8l6.9 14 15.4 2-11.1 10.8L45.7 51 32 43.7 18.3 51l2.5-16.2L9.7 24l15.4-2L32 8z"/></svg>
      </span>
      <span class="logo-text">
        <strong>Star <em>Electronics</em> Ganga</strong>
        <small>${L({ en: 'All Brands Available', hi: 'सभी ब्रांड उपलब्ध' })}</small>
      </span>
    </a>

    <nav class="site-nav" id="siteNav" aria-label="Primary">
      ${nav.map((n) => navLink(n, active)).join('\n      ')}
    </nav>

    <div class="header-actions">
      <div class="lang-toggle" role="group" aria-label="Language / भाषा">
        <button type="button" class="lang-btn" data-lang-set="en" aria-pressed="true">EN</button>
        <button type="button" class="lang-btn" data-lang-set="hi" aria-pressed="false">हिं</button>
      </div>
      <button type="button" class="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle dark mode" data-hi-aria="डार्क मोड बदलें">
        ${icon('moon', { size: 18, cls: 'i-moon' })}${icon('sun', { size: 18, cls: 'i-sun' })}
      </button>
      <a class="btn btn-outline btn-sm header-call" href="${telHref}" title="${La({ en: 'Call the store', hi: 'दुकान पर कॉल करें' })}" data-hi-title="दुकान पर कॉल करें" aria-label="${La({ en: 'Call the store', hi: 'दुकान पर कॉल करें' })}" data-hi-aria="दुकान पर कॉल करें" data-track="call_click">
        ${icon('phone', { size: 16 })}<span>${L({ en: 'Call', hi: 'कॉल' })}</span>
      </a>
      <a class="btn btn-wa btn-sm header-wa" href="${waHref()}" target="_blank" rel="noopener" title="${La({ en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर बात करें' })}" data-hi-title="व्हाट्सएप पर बात करें" aria-label="${La({ en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर बात करें' })}" data-hi-aria="व्हाट्सएप पर बात करें" data-track="whatsapp_click">
        ${brandIcon('whatsapp', { size: 16 })}<span>${L({ en: 'WhatsApp', hi: 'व्हाट्सएप' })}</span>
      </a>
      <button type="button" class="icon-btn nav-burger" id="navBurger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
        ${icon('menu', { size: 22, cls: 'i-menu' })}${icon('x', { size: 22, cls: 'i-close' })}
      </button>
    </div>
  </div>
  <div class="nav-scrim" id="navScrim" hidden></div>
</header>
<div class="mobile-menu" id="mobileMenu" hidden>
  <nav aria-label="Mobile">
    ${nav.map((n) => navLink(n, active)).join('\n    ')}
  </nav>
  <div class="mobile-menu-cta">
    <a class="btn btn-primary" href="${telHref}" data-track="call_click">${icon('phone', { size: 18 })} ${L({ en: 'Call Now', hi: 'अभी कॉल करें' })}</a>
    <a class="btn btn-wa" href="${waHref()}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 18 })} ${L({ en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' })}</a>
  </div>
  <div class="mobile-menu-tools">
    <button type="button" class="icon-btn theme-toggle" aria-label="Toggle dark mode" data-hi-aria="डार्क मोड बदलें">
      ${icon('moon', { size: 18, cls: 'i-moon' })}${icon('sun', { size: 18, cls: 'i-sun' })}
      <span class="theme-toggle-label">
        <span class="only-light"><span class="l-en">Dark mode</span><span class="l-hi">डार्क मोड</span></span>
        <span class="only-dark"><span class="l-en">Light mode</span><span class="l-hi">लाइट मोड</span></span>
      </span>
    </button>
  </div>
</div>`;
}

/* ------------------------------------------------------- floating actions */
export function floatingActions() {
  return `<a class="fab fab-wa" href="${waHref()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" data-track="whatsapp_click">
  ${brandIcon('whatsapp', { size: 26 })}
  <span class="fab-tip">${L({ en: 'Chat with us', hi: 'हमसे बात करें' })}</span>
</a>
<a class="fab fab-call" href="${telHref}" aria-label="Call the store" data-track="call_click">
  ${icon('phone', { size: 22 })}
</a>`;
}

/* ---------------------------------------------------------------- footer */
export function footer() {
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="logo" href="index.html">
        <span class="logo-mark" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 64 64"><path class="logo-star" d="M32 8l6.9 14 15.4 2-11.1 10.8L45.7 51 32 43.7 18.3 51l2.5-16.2L9.7 24l15.4-2L32 8z"/></svg></span>
        <span class="logo-text"><strong>Star <em>Electronics</em> Ganga</strong></span>
      </a>
      <p class="footer-blurb">${L({
        en: 'Your trusted neighbourhood store for mobiles, electronics and furniture — all major brands, genuine warranty and honest prices on Sangaria–Sirsa Road, Ganga.',
        hi: 'मोबाइल, इलेक्ट्रॉनिक्स और फर्नीचर के लिए भरोसेमंद स्थानीय दुकान — सभी बड़े ब्रांड, असली वारंटी और ईमानदार दाम, संगरिया–सिरसा रोड, गंगा पर।',
      })}</p>
      <div class="footer-social">
        <a href="${site.youtube}" target="_blank" rel="noopener" aria-label="YouTube" data-track="youtube_click">${brandIcon('youtube', { size: 20 })}</a>
        <a href="${waHref()}" target="_blank" rel="noopener" aria-label="WhatsApp" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 20 })}</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">${brandIcon('facebook', { size: 20 })}</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">${brandIcon('instagram', { size: 20 })}</a>
      </div>
    </div>

    <div class="footer-col">
      <h3>${L({ en: 'Explore', hi: 'एक्सप्लोर' })}</h3>
      <ul>${footerLinks.slice(0, 6).map((l) => `<li><a href="${l.href}">${L({ en: l.en, hi: l.hi })}</a></li>`).join('')}</ul>
    </div>

    <div class="footer-col">
      <h3>${L({ en: 'More', hi: 'और' })}</h3>
      <ul>${footerLinks.slice(6).map((l) => `<li><a href="${l.href}">${L({ en: l.en, hi: l.hi })}</a></li>`).join('')}</ul>
    </div>

    <div class="footer-col footer-contact">
      <h3>${L({ en: 'Visit Us', hi: 'हमसे मिलें' })}</h3>
      <ul>
        <li>${icon('pin', { size: 16 })}<a href="${site.directions}" target="_blank" rel="noopener">${L(site.address)}</a></li>
        <li>${icon('phone', { size: 16 })}<a href="${telHref}" data-track="call_click">+91 ${site.phoneDisplay}</a></li>
        <li>${brandIcon('whatsapp', { size: 16 })}<a href="${waHref()}" target="_blank" rel="noopener" data-track="whatsapp_click">${L({ en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर बात करें' })}</a></li>
        <li>${icon('mail', { size: 16 })}<a href="mailto:${site.email}">${site.email}</a></li>
        <li>${icon('clock', { size: 16 })}<span>${L({ en: 'Mon–Sat 9:30 AM – 8:30 PM · Sun 10:00 AM – 8:00 PM', hi: 'सोम–शनि 9:30 AM – 8:30 PM · रवि 10:00 AM – 8:00 PM' })}</span></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>© <span id="year">2026</span> ${esc(site.name)}. ${L({ en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' })}</p>
      <p>${L({ en: 'Ganga, Haryana 125103 · Serving Ganga, Sangaria, Sirsa & nearby villages', hi: 'गंगा, हरियाणा 125103 · गंगा, संगरिया, सिरसा और आस-पास के गांवों की सेवा में' })}</p>
    </div>
  </div>
</footer>

<div class="cookie-bar" id="cookieBar" hidden>
  <p>${L({
    en: 'We use cookies for basic analytics and to improve your experience. See our privacy policy.',
    hi: 'हम बेहतर अनुभव और एनालिटिक्स के लिए कुकीज़ का उपयोग करते हैं। हमारी प्राइवेसी पॉलिसी देखें।',
  })} <a href="privacy.html">${L({ en: 'Learn more', hi: 'और जानें' })}</a></p>
  <div class="cookie-actions">
    <button type="button" class="btn btn-ghost btn-sm" id="cookieReject">${L({ en: 'Decline', hi: 'नहीं' })}</button>
    <button type="button" class="btn btn-primary btn-sm" id="cookieAccept">${L({ en: 'Accept', hi: 'स्वीकार' })}</button>
  </div>
</div>

<script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

/** Full page wrapper (head + sticky header + body + floating CTAs + footer). */
export function page(opts, body) {
  return documentHead(opts) + '\n' + header(opts.path) + '\n' + body + '\n' + floatingActions() + '\n' + footer();
}
