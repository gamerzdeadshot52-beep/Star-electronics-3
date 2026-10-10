import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb, ctaBand, offerCard } from '../lib/ui.mjs';
import { offers } from '../data/offers.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const meta = {
  path: 'offers.html',
  title: 'Offers & Deals | Diwali, Exchange, Wedding Packages — Star Electronics Ganga',
  description:
    'Current offers at Star Electronics Ganga, Ganga Haryana — Diwali sale, old phone exchange, wedding and new home packages, summer cooler and AC pre-booking. WhatsApp 73573 93293 for today’s best price.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Offers', hi: 'ऑफर' }, href: 'offers.html' },
    ]),
  ],
};

function body() {
  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Offers', hi: 'ऑफर' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${brandIcon('whatsapp', { size: 15 })} ${L({ en: 'Live deals', hi: 'लाइव डील' })}</span>
      <h1>${L({ en: 'Offers & Deals', hi: 'ऑफर और डील' })}</h1>
      <p>${L({
        en: 'Seasonal sales, exchange bonuses and package deals — updated regularly. Share any offer with your family in one tap.',
        hi: 'सीज़नल सेल, एक्सचेंज बोनस और पैकेज डील — नियमित रूप से अपडेट। किसी भी ऑफर को एक टैप में परिवार से शेयर करें।',
      })}</p>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon('gift', { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="offer-grid">${offers.map((o, i) => offerCard(o, i)).join('')}</div>

    <div class="notice-card" data-reveal>
      <span class="notice-icon">${icon('clock', { size: 22 })}</span>
      <div>
        <h3>${L({ en: 'Offers run for a limited time', hi: 'ऑफर सीमित समय के लिए' })}</h3>
        <p>${L({
          en: 'Prices and stock change daily. Message us before visiting to lock today’s price — we will send the exact model, offer and bill amount on WhatsApp.',
          hi: 'दाम और स्टॉक रोज़ बदलते हैं। आने से पहले मैसेज करके आज का दाम पक्का करें — सही मॉडल, ऑफर और बिल राशि व्हाट्सएप पर भेजेंगे।',
        })}</p>
        <a class="btn btn-wa btn-sm" href="${site.waBase}?text=${encodeURIComponent(
          'Hello Star Electronics, please share today’s best offer and price.'
        )}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 15 })} ${L({ en: 'Get today’s price', hi: 'आज का दाम जानें' })}</a>
      </div>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Ways to save', hi: 'बचत के तरीके' },
      title: { en: 'More value on every purchase', hi: 'हर खरीद पर ज़्यादा वैल्यू' },
      center: true,
    })}
    <div class="benefit-grid four">
      ${[
        ['smartphone', 'Old phone exchange', 'पुराना फोन एक्सचेंज', 'Get instant value for your working phone and reduce the new phone’s price.', 'चालू पुराने फोन पर तुरंत वैल्यू पाएं और नए फोन की कीमत घटाएं।'],
        ['creditCard', 'Easy EMI', 'आसान ईएमआई', 'Ask about no-cost and low-interest EMI on select brands and products.', 'चुनिंदा ब्रांड और प्रोडक्ट पर नो-कॉस्ट और कम ब्याज ईएमआई के लिए पूछें।'],
        ['gift', 'Combo packages', 'कॉम्बो पैकेज', 'Buy furniture and appliances together for a combined package price.', 'फर्नीचर और उपकरण एक साथ खरीदें, संयुक्त पैकेज दाम पाएं।'],
        ['calendar', 'Festival pricing', 'त्योहार प्राइस', 'Diwali, Holi and wedding-season specials announced on our YouTube channel.', 'दिवाली, होली और शादी सीज़न के ऑफर हमारे YouTube चैनल पर।'],
      ]
        .map(
          (b, i) => `<article class="card benefit-card" data-reveal style="--d:${i * 70}ms">
          <span class="benefit-icon">${icon(b[0], { size: 24 })}</span>
          <h3>${L({ en: b[1], hi: b[2] })}</h3>
          <p>${L({ en: b[3], hi: b[4] })}</p>
        </article>`
        )
        .join('')}
    </div>
  </div>
</section>

${ctaBand()}`;
}

export default { meta, body };
