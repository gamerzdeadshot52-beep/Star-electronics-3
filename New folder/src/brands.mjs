import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb, ctaBand, brandTile } from '../lib/ui.mjs';
import { brands } from '../data/brands.mjs';
import { categories } from '../data/products.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const catHome = { mobiles: 'mobiles.html', electronics: 'electronics.html', furniture: 'furniture.html' };

const meta = {
  path: 'brands.html',
  title: 'Brands We Stock | Samsung, Vivo, LG, Godrej & More — Star Electronics Ganga',
  description:
    'All brands available at Star Electronics Ganga, Ganga Haryana — Samsung, Vivo, Oppo, Realme, OnePlus, LG, Sony, Voltas, Symphony, Godrej Interio, Sleepwell and more. Call 73573 93293.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Brands', hi: 'ब्रांड' }, href: 'brands.html' },
    ]),
  ],
};

function body() {
  const groups = [
    ['mobiles', { en: 'Mobile & IT brands', hi: 'मोबाइल और IT ब्रांड' }],
    ['electronics', { en: 'Electronics & appliance brands', hi: 'इलेक्ट्रॉनिक्स और अप्लायंस ब्रांड' }],
    ['furniture', { en: 'Furniture brands', hi: 'फर्नीचर ब्रांड' }],
  ];

  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Brands', hi: 'ब्रांड' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'All brands available', hi: 'सभी ब्रांड उपलब्ध' })}</span>
      <h1>${L({ en: 'Every brand your family trusts', hi: 'हर ब्रांड जिस पर आपका परिवार भरोसा करता है' })}</h1>
      <p>${L({
        en: 'Tap a brand to see the models we keep, or message us to check stock for any brand not listed here.',
        hi: 'किसी ब्रांड पर टैप करके हमारे पास मौजूद मॉडल देखें, या लिस्ट में न हो तो स्टॉक पूछने के लिए मैसेज करें।',
      })}</p>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon('badgeCheck', { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${groups
      .map(([cat, label]) => {
        const list = brands.filter((b) => b.cats.includes(cat));
        const c = categories[cat];
        return `<div class="brand-group" data-reveal>
          <div class="brand-group-head">
            <h2>${L(label)}</h2>
            <a class="link-arrow" href="${catHome[cat]}">${L({ en: 'View all ' + c.name.en, hi: 'सभी ' + c.name.hi + ' देखें' })} ${icon('arrowRight', { size: 15 })}</a>
          </div>
          <ul class="brand-grid">${list.map(brandTile).join('')}</ul>
        </div>`;
      })
      .join('')}
  </div>
</section>

<section class="section alt">
  <div class="container split-info">
    <div data-reveal>
      <h2>${L({ en: 'Looking for a specific brand?', hi: 'कोई खास ब्रांड ढूंढ रहे हैं?' })}</h2>
      <p>${L({
        en: 'We stock far more than we can list. Send us a message with the brand and model — we will confirm the price and stock the same day.',
        hi: 'हमारे पास लिस्ट से कहीं ज़्यादा ब्रांड हैं। ब्रांड और मॉडल के साथ मैसेज भेजें — उसी दिन दाम और स्टॉक की पुष्टि कर देंगे।',
      })}</p>
      <a class="btn btn-wa" href="${site.waBase}?text=${encodeURIComponent(
        'Hello Star Electronics, please confirm if you stock the following brand/model: '
      )}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'Ask on WhatsApp', hi: 'व्हाट्सएप पर पूछें' })}</a>
    </div>
    <ul class="checklist" data-reveal style="--d:80ms">
      <li>${icon('check', { size: 16 })} ${L({ en: 'Authorised bills with every purchase', hi: 'हर खरीद पर अधिकृत बिल' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Brand warranty and service assistance', hi: 'ब्रांड वारंटी और सर्विस सहायता' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Genuine accessories only', hi: 'सिर्फ असली एक्सेसरीज़' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Exchange and EMI on popular brands', hi: 'लोकप्रिय ब्रांड पर एक्सचेंज और ईएमआई' })}</li>
    </ul>
  </div>
</section>

${ctaBand()}`;
}

export default { meta, body };
