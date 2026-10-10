import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import {
  sectionHead, breadcrumb, productCard, productDialog, filterBar, ctaBand,
} from '../lib/ui.mjs';
import { categories, inCat, priceBands } from '../data/products.mjs';
import { brandsByCat } from '../data/brands.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const kw = {
  mobiles: 'mobile shop in Ganga Haryana, 5G phone shop near Sirsa, best mobile shop Ganga',
  electronics: 'electronics store Ganga Haryana, TV AC fridge shop near Sirsa, cooler shop Ganga',
  furniture: 'furniture shop Ganga Sirsa Road, bed sofa dining set Ganga, mattress shop Haryana',
};

export function cataloguePage(cat) {
  const c = categories[cat];
  const items = inCat(cat);
  const brandList = [...new Set(items.map((p) => p.brand))].sort();

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.title.en,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        brand: { '@type': 'Brand', name: p.brand },
        description: p.desc.en,
        ...(p.price != null
          ? { offers: { '@type': 'Offer', price: p.price, priceCurrency: 'INR', availability: 'https://schema.org/InStock' } }
          : {}),
      },
    })),
  };

  const meta = {
    path: c.href,
    title: `${c.title.en} | ${site.name} — ${kw[cat].split(',')[0]}`,
    description: `${c.blurb.en} Visit ${site.name} on ${site.addressLine}. Call or WhatsApp ${site.phoneRaw} for prices and stock. ${c.title.hi}.`,
    jsonld: [
      breadcrumbSchema([
        { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
        { name: c.name, href: c.href },
      ]),
      itemList,
    ],
  };

  const body = `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: c.name }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Catalogue', hi: 'कैटलॉग' })}</span>
      <h1>${L(c.title)}</h1>
      <p>${L(c.blurb)}</p>
      <ul class="hero-trust">
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'Indicative prices shown', hi: 'अनुमानित दाम दिए गए' })}</li>
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'Best price on WhatsApp', hi: 'व्हाट्सएप पर बेस्ट प्राइस' })}</li>
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'Warranty support', hi: 'वारंटी सपोर्ट' })}</li>
      </ul>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon(c.icon, { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${filterBar({ cat, brands: brandList, bands: priceBands })}
    <div class="product-grid" id="productGrid">
      ${items.map((p) => productCard(p)).join('')}
    </div>
    <p class="empty-state" id="emptyState" hidden>
      ${L({ en: 'No products match your filters.', hi: 'आपके फ़िल्टर से कोई प्रोडक्ट मेल नहीं खाता।' })}
      <span class="empty-links">
        <a href="mobiles.html">${L({ en: 'Mobiles', hi: 'मोबाइल' })}</a>
        <a href="electronics.html">${L({ en: 'Electronics', hi: 'इलेक्ट्रॉनिक्स' })}</a>
        <a href="furniture.html">${L({ en: 'Furniture', hi: 'फर्नीचर' })}</a>
        <a href="contact.html">${L({ en: 'Ask us on WhatsApp', hi: 'व्हाट्सएप पर पूछें' })}</a>
      </span>
    </p>
  </div>
</section>

<section class="section alt">
  <div class="container split-info">
    <div data-reveal>
      <h2>${L({ en: 'Not sure which one to buy?', hi: 'कौन सा खरीदें, तय नहीं हो रहा?' })}</h2>
      <p>${L({
        en: 'Tell us your budget and usage — we will shortlist the right models and share photos, stock and the best price on WhatsApp. No pressure, no obligation.',
        hi: 'अपना बजट और ज़रूरत बताएं — हम सही मॉडल चुनकर फोटो, स्टॉक और बेस्ट प्राइस व्हाट्सएप पर भेजेंगे। कोई दबाव नहीं।',
      })}</p>
      <div class="hero-cta">
        <a class="btn btn-wa" href="${site.waBase}?text=${encodeURIComponent(
          `Hello Star Electronics, please suggest options in ${c.title.en} within my budget.`
        )}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'Get recommendations', hi: 'सुझाव पाएं' })}</a>
        <a class="btn btn-outline" href="tel:${site.tel}" data-track="call_click">${icon('phone', { size: 17 })} ${L({ en: 'Call the store', hi: 'दुकान पर कॉल' })}</a>
      </div>
    </div>
    <ul class="checklist" data-reveal style="--d:80ms">
      <li>${icon('check', { size: 16 })} ${L({ en: 'Compare models side by side in store', hi: 'दुकान पर मॉडल की तुलना करें' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Exchange your old device for instant value', hi: 'पुराने डिवाइस पर तुरंत एक्सचेंज वैल्यू' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Finance and EMI options on select products', hi: 'चुनिंदा प्रोडक्ट पर फाइनेंस और ईएमआई' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Setup, data transfer and demo before you leave', hi: 'जाने से पहले सेटअप, डेटा ट्रांसफर और डेमो' })}</li>
      <li>${icon('check', { size: 16 })} ${L({ en: 'Delivery and installation across the region', hi: 'पूरे इलाके में डिलीवरी और इंस्टॉलेशन' })}</li>
    </ul>
  </div>
</section>

${ctaBand()}
${productDialog()}`;

  return { meta, body };
}

export default {
  mobiles: cataloguePage('mobiles'),
  electronics: cataloguePage('electronics'),
  furniture: cataloguePage('furniture'),
};
