import { site } from '../data/site.mjs';
import { esc, L, La } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb } from '../lib/ui.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const telHref = `tel:${site.tel}`;
const waHref = (m) => `${site.waBase}?text=${encodeURIComponent(m)}`;

const faqs = [
  {
    q: { en: 'What are your shop timings?', hi: 'आपकी दुकान का समय क्या है?' },
    a: {
      en: 'We are open Monday to Saturday from 9:30 AM to 8:30 PM and on Sunday from 10:00 AM to 8:00 PM. Festival timings may change — a quick call before you leave is always a good idea.',
      hi: 'हम सोमवार से शनिवार सुबह 9:30 से रात 8:30 और रविवार को सुबह 10:00 से रात 8:00 तक खुले रहते हैं। त्योहारों पर समय बदल सकता है — निकलने से पहले एक कॉल ज़रूर करें।',
    },
  },
  {
    q: { en: 'Do you offer EMI or exchange?', hi: 'क्या ईएमआई या एक्सचेंज मिलता है?' },
    a: {
      en: 'Yes, exchange value is available for working old phones on most new smartphone purchases, and EMI options are available on select products and brands. Message us with the model you want to know the exact amount.',
      hi: 'जी हां, ज़्यादातर नए स्मार्टफोन खरीद पर चालू पुराने फोन का एक्सचेंज मूल्य मिलता है, और चुनिंदा प्रोडक्ट व ब्रांड पर ईएमआई उपलब्ध है। सही राशि जानने के लिए मॉडल बताकर मैसेज करें।',
    },
  },
  {
    q: { en: 'Is delivery available to my village?', hi: 'क्या मेरे गांव तक डिलीवरी होती है?' },
    a: {
      en: 'Yes — furniture and heavy appliances are delivered and installed across Ganga, Sangaria, Sirsa Road and nearby villages. Small items can also be sent with your choice of transport.',
      hi: 'हां — फर्नीचर और बड़े उपकरण गंगा, संगरिया, सिरसा रोड और आस-पास के गांवों तक डिलीवर व इंस्टॉल किए जाते हैं। छोटे सामान आपकी पसंद के ट्रांसपोर्ट से भेजे जा सकते हैं।',
    },
  },
  {
    q: { en: 'Do you provide warranty on products?', hi: 'क्या प्रोडक्ट पर वारंटी मिलती है?' },
    a: {
      en: 'Every product is billed new with the applicable brand warranty card. We also help you register claims and guide you to the nearest service point if anything goes wrong.',
      hi: 'हर प्रोडक्ट नया बिल और लागू ब्रांड वारंटी कार्ड के साथ मिलता है। कुछ गड़बड़ होने पर क्लेम रजिस्टर करने और नज़दीकी सर्विस पॉइंट तक पहुंचने में भी मदद करते हैं।',
    },
  },
  {
    q: { en: 'Can I check stock before coming?', hi: 'आने से पहले स्टॉक जांच सकता हूं?' },
    a: {
      en: 'Absolutely. Send the brand, model and colour on WhatsApp — we reply with stock availability, the best price and clear photos from the store.',
      hi: 'बिल्कुल। व्हाट्सएप पर ब्रांड, मॉडल और कलर भेजें — हम स्टॉक, बेस्ट प्राइस और दुकान की साफ़ फोटो भेजकर जवाब देते हैं।',
    },
  },
  {
    q: { en: 'Do you sell furniture on credit or EMI?', hi: 'क्या फर्नीचर उधार या ईएमआई पर मिलता है?' },
    a: {
      en: 'Furniture packages can be combined with appliance purchases for a better price, and finance options are available on select orders. Please ask in store or message us for current schemes.',
      hi: 'फर्नीचर पैकेज को अप्लायंस खरीद के साथ जोड़कर बेहतर दाम मिलता है, और चुनिंदा ऑर्डर पर फाइनेंस विकल्प भी हैं। मौजूदा स्कीम के लिए दुकान पर पूछें या मैसेज करें।',
    },
  },
];

const meta = {
  path: 'contact.html',
  title: 'Contact & Visit | Star Electronics Ganga, Sangaria–Sirsa Road, Ganga 125103',
  description:
    'Call 73573 93293 or WhatsApp Star Electronics Ganga — Sangaria–Sirsa Road, Ganga, Haryana 125103. Shop timings, Google Maps directions and quick enquiry form. गंगा की भरोसेमंद दुकान।',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Contact', hi: 'संपर्क' }, href: 'contact.html' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q.en,
        acceptedAnswer: { '@type': 'Answer', text: f.a.en },
      })),
    },
  ],
};

function body() {
  const interestOptions = [
    ['Mobiles', 'मोबाइल'],
    ['Electronics', 'इलेक्ट्रॉनिक्स'],
    ['Furniture', 'फर्नीचर'],
    ['Offers & EMI', 'ऑफर और ईएमआई'],
    ['Service & Repair', 'सर्विस और रिपेयर'],
  ];

  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Contact', hi: 'संपर्क' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Call · WhatsApp · Visit', hi: 'कॉल · व्हाट्सएप · विज़िट' })}</span>
      <h1>${L({ en: 'We reply fast, in Hindi or English', hi: 'हम जल्दी जवाब देते हैं, हिंदी या अंग्रेज़ी में' })}</h1>
      <p>${L(site.address)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary btn-lg" href="${telHref}" data-track="call_click">${icon('phone', { size: 19 })} +91 ${site.phoneDisplay}</a>
        <a class="btn btn-wa btn-lg" href="${waHref('Hello Star Electronics, I have a question about your products.')}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 19 })} ${L({ en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' })}</a>
        <a class="btn btn-ghost-dark btn-lg" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">${icon('pin', { size: 19 })} ${L({ en: 'Get Directions', hi: 'रास्ता देखें' })}</a>
      </div>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon('phone', { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container contact-grid">
    <div class="contact-cards" data-reveal>
      <a class="card contact-card" href="${telHref}" data-track="call_click">
        <span class="contact-icon">${icon('phone', { size: 22 })}</span>
        <strong>${L({ en: 'Call the store', hi: 'दुकान पर कॉल करें' })}</strong>
        <span>+91 ${site.phoneDisplay}</span>
        <small>${L({ en: 'Fastest way to check stock and price', hi: 'स्टॉक और दाम जांचने का सबसे तेज़ तरीका' })}</small>
      </a>
      <a class="card contact-card" href="${waHref('Hello Star Electronics!')}" target="_blank" rel="noopener" data-track="whatsapp_click">
        <span class="contact-icon">${brandIcon('whatsapp', { size: 22 })}</span>
        <strong>${L({ en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर बात करें' })}</strong>
        <span>${site.phoneDisplay}</span>
        <small>${L({ en: 'Send photos of what you need', hi: 'जो चाहिए उसकी फोटो भेजें' })}</small>
      </a>
      <a class="card contact-card" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">
        <span class="contact-icon">${icon('pin', { size: 22 })}</span>
        <strong>${L({ en: 'Get directions', hi: 'रास्ता देखें' })}</strong>
        <span>${L(site.address)}</span>
        <small>${L({ en: 'Opens in Google Maps', hi: 'गूगल मैप्स में खुलेगा' })}</small>
      </a>
      <a class="card contact-card" href="mailto:${site.email}">
        <span class="contact-icon">${icon('mail', { size: 22 })}</span>
        <strong>${L({ en: 'Email us', hi: 'ईमेल करें' })}</strong>
        <span>${site.email}</span>
        <small>${L({ en: 'For bills, bulk orders and feedback', hi: 'बिल, थोक ऑर्डर और फीडबैक के लिए' })}</small>
      </a>

      <div class="card hours-card">
        <h2>${L({ en: 'Opening hours', hi: 'खुलने का समय' })}</h2>
        <ul>
          ${site.hours
            .map(
              (h) =>
                `<li><span>${L(h.days)}</span><strong>${h.time}</strong></li>`
            )
            .join('')}
        </ul>
        <p class="muted">${L(site.hoursNote)}</p>
      </div>
    </div>

    <div class="card form-card" data-reveal style="--d:80ms">
      <h2>${L({ en: 'Send an enquiry', hi: 'पूछताछ भेजें' })}</h2>
      <p class="muted">${L({
        en: 'Fill this in and we will open WhatsApp with your message ready to send — no data is stored on this site.',
        hi: 'भरें और हम व्हाट्सएप खोल देंगे जिसमें आपका मैसेज तैयार होगा — इस साइट पर कोई डेटा सेव नहीं होता।',
      })}</p>
      <form id="enquiryForm" novalidate>
        <label class="field">
          <span>${L({ en: 'Your name', hi: 'आपका नाम' })}</span>
          <input type="text" name="name" required autocomplete="name" placeholder="e.g. Ramesh Kumar" data-hi-placeholder="जैसे: रमेश कुमार">
        </label>
        <label class="field">
          <span>${L({ en: 'Phone number', hi: 'फोन नंबर' })}</span>
          <input type="tel" name="phone" required inputmode="numeric" pattern="[0-9 +]{10,15}" autocomplete="tel" placeholder="98765 43210">
        </label>
        <label class="field">
          <span>${L({ en: 'I am interested in', hi: 'मुझे दिलचस्पी है' })}</span>
          <select name="interest">
            ${interestOptions
              .map(
                ([en, hi], i) =>
                  `<option value="${en}"${i === 0 ? ' selected' : ''} data-hi-text="${esc(hi)}">${esc(en)}</option>`
              )
              .join('')}
          </select>
        </label>
        <label class="field">
          <span>${L({ en: 'Message', hi: 'मैसेज' })}</span>
          <textarea name="message" rows="4" placeholder="Tell us the model, budget or furniture you need…" data-hi-placeholder="जिस मॉडल, बजट या फर्नीचर की ज़रूरत है बताएं…"></textarea>
        </label>
        <input type="text" name="company" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button type="submit" class="btn btn-wa btn-block">${brandIcon('whatsapp', { size: 18 })} ${L({ en: 'Send on WhatsApp', hi: 'व्हाट्सएप पर भेजें' })}</button>
        <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container visit-grid">
    <div class="map-card" data-reveal>
      <iframe src="${site.mapsEmbed}" title="${La({ en: 'Map to Star Electronics Ganga', hi: 'स्टार इलेक्ट्रॉनिक्स गंगा का नक्शा' })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
    <div data-reveal style="--d:80ms">
      <h2>${L({ en: 'Finding us is easy', hi: 'हमें ढूंढना आसान है' })}</h2>
      <ul class="info-list">
        <li>${icon('pin', { size: 18 })}<div><strong>${L({ en: 'Address', hi: 'पता' })}</strong><span>${L(site.address)}</span></div></li>
        <li>${icon('map', { size: 18 })}<div><strong>${L({ en: 'Landmark', hi: 'लैंडमार्क' })}</strong><span>${L({
          en: 'Main road, Ganga village — easy to reach from Sangaria and Sirsa road',
          hi: 'गंगा गांव की मुख्य सड़क — संगरिया और सिरसा रोड से आसानी से पहुंचें',
        })}</span></div></li>
        <li>${icon('clock', { size: 18 })}<div><strong>${L({ en: 'Open', hi: 'खुला' })}</strong><span>${L({ en: '7 days a week', hi: 'हफ्ते के सातों दिन' })}</span></div></li>
      </ul>
      <a class="btn btn-primary" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">${icon('arrowUpRight', { size: 17 })} ${L({ en: 'Open in Google Maps', hi: 'गूगल मैप्स में खोलें' })}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container faq-wrap">
    ${sectionHead({
      kicker: { en: 'FAQ', hi: 'अक्सर पूछे सवाल' },
      title: { en: 'Questions customers ask us', hi: 'ग्राहक जो सवाल पूछते हैं' },
      center: true,
    })}
    <div class="faq-list">
      ${faqs
        .map(
          (f, i) => `<details class="faq-item" data-reveal style="--d:${i * 50}ms"${i === 0 ? ' open' : ''}>
        <summary><span>${L(f.q)}</span>${icon('chevronDown', { size: 18 })}</summary>
        <div class="faq-answer"><p>${L(f.a)}</p></div>
      </details>`
        )
        .join('')}
    </div>
  </div>
</section>`;
}

export default { meta, body };
