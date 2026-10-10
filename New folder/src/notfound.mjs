import { L, La } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { site } from '../data/site.mjs';
import { nav } from '../data/site.mjs';

const meta = {
  path: '404.html',
  title: 'Page Not Found | Star Electronics Ganga',
  description: 'The page you are looking for does not exist. Head back to the Star Electronics Ganga home page or browse mobiles, electronics and furniture.',
  noindex: true,
  jsonld: [],
};

function body() {
  return `<main class="error-page" id="main">
  <div class="container error-inner">
    <span class="error-code" aria-hidden="true">404</span>
    <span class="error-star" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="72" height="72"><path class="logo-star" d="M32 8l6.9 14 15.4 2-11.1 10.8L45.7 51 32 43.7 18.3 51l2.5-16.2L9.7 24l15.4-2L32 8z"/></svg>
    </span>
    <h1>${L({ en: 'This page switched off', hi: 'यह पेज बंद हो गया' })}</h1>
    <p>${L({
      en: 'The link you followed does not exist any more — but everything we sell does. Pick a section below or message us directly.',
      hi: 'आपने जो लिंक खोला वह अब नहीं है — लेकिन हमारे पास मिलने वाला सामान पूरा है। नीचे से चुनें या सीधे मैसेज करें।',
    })}</p>

    <form class="error-search" action="mobiles.html" method="get" role="search">
      ${icon('search', { size: 18 })}
      <input type="search" name="q" placeholder="Search products…" data-hi-placeholder="प्रोडक्ट खोजें…" aria-label="${La({ en: 'Search products', hi: 'प्रोडक्ट खोजें' })}">
      <button class="btn btn-primary btn-sm" type="submit">${L({ en: 'Search', hi: 'खोजें' })}</button>
    </form>

    <div class="error-links">
      ${nav
        .map(
          (n) => `<a class="chip-btn" href="${n.href}">${L({ en: n.en, hi: n.hi })}</a>`
        )
        .join('')}
    </div>

    <div class="hero-cta">
      <a class="btn btn-primary" href="tel:${site.tel}" data-track="call_click">${icon('phone', { size: 17 })} ${L({ en: 'Call Now', hi: 'अभी कॉल करें' })}</a>
      <a class="btn btn-wa" href="${site.waBase}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' })}</a>
      <a class="btn btn-ghost-dark" href="index.html">${L({ en: 'Back to home', hi: 'होम पर वापस' })}</a>
    </div>
  </div>
</main>`;
}

export default { meta, body };
