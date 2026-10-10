import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb, ctaBand, trustStrip } from '../lib/ui.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const meta = {
  path: 'about.html',
  title: 'About Star Electronics Ganga | Trusted Mobile & Furniture Shop in Ganga, Haryana',
  description:
    'Star Electronics Ganga has served families on Sangaria–Sirsa Road, Ganga for over a decade — mobiles, electronics and furniture with genuine warranty and honest prices. Meet the store behind the counter.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'About', hi: 'हमारे बारे में' }, href: 'about.html' },
    ]),
  ],
};

const values = [
  ['heart', 'Honest advice first', 'पहले ईमानदार सलाह', 'If a cheaper model suits you better, we will say so — even when it earns us less.', 'अगर सस्ता मॉडल आपके लिए बेहतर है तो हम वही कहेंगे — भले ही हमें कम मुनाफ़ा हो।'],
  ['shield', 'Only genuine products', 'सिर्फ असली प्रोडक्ट', 'Every item is sourced through authorised channels and billed properly.', 'हर आइटम अधिकृत चैनल से आता है और सही बिल के साथ मिलता है।'],
  ['wrench', 'Service after the sale', 'बिक्री के बाद भी सेवा', 'Warranty claims, accessories and troubleshooting — we stay with you.', 'वारंटी क्लेम, एक्सेसरीज़ और परेशानी — हम साथ रहते हैं।'],
  ['users', 'A community store', 'एक सामुदायिक दुकान', 'From school-going phones to wedding furniture, generations shop with us.', 'स्कूल के फोन से शादी के फर्नीचर तक, पीढ़ियां हमसे खरीदती हैं।'],
];

const gallery = [
  ['store', 'Store front on Sangaria–Sirsa Road', 'संगरिया–सिरसा रोड पर दुकान का बाहरी दृश्य'],
  ['smartphone', 'Smartphone display counter', 'स्मार्टफोन डिस्प्ले काउंटर'],
  ['tv', 'TV and appliance section', 'टीवी और अप्लायंस सेक्शन'],
  ['sofa', 'Furniture gallery', 'फर्नीचर गैलरी'],
];

function photoTile(ic, en, hi, i) {
  return `<figure class="photo-tile" data-reveal style="--d:${i * 70}ms">
    <div class="photo-art" aria-hidden="true">${icon(ic, { size: 46 })}</div>
    <figcaption>${L({ en, hi })}</figcaption>
  </figure>`;
}

function body() {
  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'About', hi: 'हमारे बारे में' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Our story', hi: 'हमारी कहानी' })}</span>
      <h1>${L({ en: 'A neighbourhood store that grew on trust', hi: 'भरोसे से बढ़ी एक पड़ोसी दुकान' })}</h1>
      <p>${L({
        en: 'Star Electronics Ganga began as a small mobile counter and today is a complete destination for phones, home appliances and furniture — right in the middle of Ganga village.',
        hi: 'स्टार इलेक्ट्रॉनिक्स गंगा एक छोटे मोबाइल काउंटर से शुरू हुआ और आज फोन, घरेलू उपकरण और फर्नीचर का पूरा ठिकाना है — गंगा गांव के बीचोंबीच।',
      })}</p>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon('store', { size: 96 })}</div>
  </div>
</section>

${trustStrip()}

<section class="section">
  <div class="container story-grid">
    <div data-reveal>
      <h2>${L({ en: 'From one counter to three departments', hi: 'एक काउंटर से तीन विभागों तक' })}</h2>
      <p>${L({
        en: 'We started by helping neighbours choose the right phone when every purchase felt confusing. Word travelled the way it does in villages — one happy family told the next. The counter became a shop, the shop added appliances, and then furniture for the weddings and new homes around us.',
        hi: 'शुरुआत में हम पड़ोसियों को सही फोन चुनने में मदद करते थे, जब हर खरीद मुश्किल लगती थी। गांव में चर्चा वैसे ही फैलती है — एक खुश परिवार दूसरे को बताता है। काउंटर दुकान बन गया, दुकान में उपकरण जुड़े और फिर शादियों और नए घरों के लिए फर्नीचर।',
      })}</p>
      <p>${L({
        en: 'Today the same principle stands behind every bill we print: genuine products, fair prices and help that continues long after the box is opened.',
        hi: 'आज भी हर बिल के पीछे वही सिद्धांत है: असली प्रोडक्ट, सही दाम और बॉक्स खुलने के बाद भी जारी रहने वाली मदद।',
      })}</p>
      <blockquote class="owner-quote">
        <p>${L({
          en: '“Come with a question, leave with the right product — and feel free to call us any time after that.”',
          hi: '“सवाल लेकर आइए, सही प्रोडक्ट लेकर जाइए — और उसके बाद कभी भी कॉल कीजिए।”',
        })}</p>
        <cite>${L({ en: 'Proprietor, Star Electronics Ganga', hi: 'स्वामी, स्टार इलेक्ट्रॉनिक्स गंगा' })}</cite>
      </blockquote>
    </div>
    <div class="story-side">
      <div class="card story-card" data-reveal>
        <h3>${L({ en: 'What we stand for', hi: 'हम किसके लिए खड़े हैं' })}</h3>
        <ul class="checklist">
          <li>${icon('check', { size: 16 })} ${L({ en: 'Bilingual help — English or Hindi, your choice', hi: 'द्विभाषी मदद — अंग्रेज़ी या हिंदी, आपकी मर्जी' })}</li>
          <li>${icon('check', { size: 16 })} ${L({ en: 'Open 7 days a week', hi: 'हफ्ते के सातों दिन खुला' })}</li>
          <li>${icon('check', { size: 16 })} ${L({ en: 'Village delivery for furniture and appliances', hi: 'फर्नीचर और उपकरणों की गांव तक डिलीवरी' })}</li>
          <li>${icon('check', { size: 16 })} ${L({ en: 'Quick WhatsApp replies during shop hours', hi: 'दुकान के समय व्हाट्सएप पर तेज़ जवाब' })}</li>
        </ul>
      </div>
      <div class="card story-card" data-reveal style="--d:90ms">
        <h3>${L({ en: 'Where we serve', hi: 'हम कहां सेवा देते हैं' })}</h3>
        <p>${L({
          en: 'Ganga, Sangaria, Sirsa Road, Rawatsar, Bhadra and every village in between — customers visit us by road and message us before they travel.',
          hi: 'गंगा, संगरिया, सिरसा रोड, रावतसर, भादड़ा और बीच के हर गांव — लोग सड़क से आते हैं और आने से पहले मैसेज करते हैं।',
        })}</p>
        <a class="link-arrow" href="contact.html">${L({ en: 'Plan your visit', hi: 'अपनी विज़िट प्लान करें' })} ${icon('arrowRight', { size: 15 })}</a>
      </div>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Inside the store', hi: 'दुकान के अंदर' },
      title: { en: 'A look around Star Electronics Ganga', hi: 'स्टार इलेक्ट्रॉनिक्स गंगा की झलक' },
      sub: { en: 'Professional store photographs will replace these frames before launch.', hi: 'लॉन्च से पहले इन फ्रेम की जगह दुकान की असली फोटो लगेंगी।' },
      center: true,
    })}
    <div class="photo-grid">${gallery.map(([ic, en, hi], i) => photoTile(ic, en, hi, i)).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Our values', hi: 'हमारे मूल्य' },
      title: { en: 'Why families keep coming back', hi: 'परिवार हमारे पास क्यों लौटते हैं' },
      center: true,
    })}
    <div class="benefit-grid four">
      ${values
        .map(
          (v, i) => `<article class="card benefit-card" data-reveal style="--d:${i * 70}ms">
        <span class="benefit-icon">${icon(v[0], { size: 24 })}</span>
        <h3>${L({ en: v[1], hi: v[2] })}</h3>
        <p>${L({ en: v[3], hi: v[4] })}</p>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

${ctaBand()}`;
}

export default { meta, body };
