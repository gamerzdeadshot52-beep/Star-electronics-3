import { site } from '../data/site.mjs';
import { L, La } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import {
  sectionHead, productCard, productDialog, categoryCard, brandMarquee,
  videoCard, videoLightbox, reviewCard, trustStrip, ctaBand, inr,
} from '../lib/ui.mjs';
import { featured, categories, products } from '../data/products.mjs';
import { brands } from '../data/brands.mjs';
import { videos } from '../data/videos.mjs';
import { reviews, ratingSummary } from '../data/reviews.mjs';
import { homeOffer } from '../data/offers.mjs';
import { localBusinessSchema } from '../lib/layout.mjs';

const telHref = `tel:${site.tel}`;
const waHref = (m) => `${site.waBase}?text=${encodeURIComponent(m)}`;

const meta = {
  path: 'index.html',
  title: 'Star Electronics Ganga | Mobile, Electronics & Furniture Shop in Ganga, Haryana',
  description:
    'Star Electronics Ganga — mobiles, electronics and furniture on Sangaria–Sirsa Road, Ganga, Haryana 125103. All brands available, genuine warranty, easy EMI. Call or WhatsApp 73573 93293. गंगा की सबसे भरोसेमंद दुकान।',
  jsonld: [localBusinessSchema()],
};

const benefits = [
  ['store', 'All brands, one store', 'सभी ब्रांड, एक ही दुकान', 'Mobiles, TVs, appliances and furniture from every major brand — compare side by side before you decide.', 'मोबाइल, टीवी, उपकरण और फर्नीचर — हर बड़ा ब्रांड एक ही जगह, तुलना करके चुनें।'],
  ['tag', 'Honest, competitive prices', 'ईमानदार और सही दाम', 'We match fair market rates and explain every rupee you pay.', 'हम सही बाज़ार भाव देते हैं और हर रुपये का हिसाब समझाते हैं।'],
  ['shield', 'Genuine warranty support', 'असली वारंटी सपोर्ट', 'Authorised bill, warranty card and help with claims — even after the sale.', 'असली बिल, वारंटी कार्ड और क्लेम में मदद — बिक्री के बाद भी।'],
  ['creditCard', 'Easy EMI & exchange', 'आसान ईएमआई और एक्सचेंज', 'Bring your old phone for instant exchange value, or ask about finance options.', 'पुराना फोन लाएं और तुरंत एक्सचेंज वैल्यू पाएं, या फाइनेंस ऑप्शन पूछें।'],
  ['truck', 'Delivery to your village', 'आपके गांव तक डिलीवरी', 'Furniture and heavy appliances delivered and installed around Ganga and Sirsa road.', 'फर्नीचर और बड़े उपकरण गंगा व सिरसा रोड क्षेत्र में डिलीवर व इंस्टॉल किए जाते हैं।'],
  ['users', 'Trusted by the community', 'समुदाय का भरोसा', 'Fifteen years of serving families across Ganga, Sangaria and nearby villages.', 'गंगा, संगरिया और आस-पास के गांवों में पंद्रह साल से सेवा।'],
];

function hero() {
  return `<section class="hero">
  <div class="hero-bg" aria-hidden="true">
    <span class="starfield"></span>
    <span class="hero-orb orb-1"></span>
    <span class="hero-orb orb-2"></span>
    <span class="hero-grid"></span>
  </div>
  <div class="container hero-inner">
    <div class="hero-copy" data-reveal>
      <span class="eyebrow">${brandIcon('whatsapp', { size: 15 })} ${L({
        en: 'Ganga · Sangaria–Sirsa Road · Haryana 125103',
        hi: 'गंगा · संगरिया–सिरसा रोड · हरियाणा 125103',
      })}</span>
      <h1>
        <span class="l-en">Mobiles. Electronics. Furniture.<br><em>All Brands, One Store.</em></span>
        <span class="l-hi" lang="hi">मोबाइल। इलेक्ट्रॉनिक्स। फर्नीचर।<br><em>सभी ब्रांड, एक ही दुकान।</em></span>
      </h1>
      <p class="hero-sub">${L({
        en: 'Star Electronics Ganga is the region’s trusted destination for smartphones, TVs, appliances and complete furniture sets — with genuine products, honest prices and after-sales support you can rely on.',
        hi: 'स्टार इलेक्ट्रॉनिक्स गंगा स्मार्टफोन, टीवी, उपकरण और पूरे फर्नीचर सेट के लिए इलाके का भरोसेमंद ठिकाना — असली प्रोडक्ट, ईमानदार दाम और भरोसेमंद आफ्टर-सेल्स सपोर्ट।',
      })}</p>
      <div class="hero-cta">
        <a class="btn btn-primary btn-lg" href="${telHref}" data-track="call_click">${icon('phone', { size: 19 })} ${L({ en: 'Call Now', hi: 'अभी कॉल करें' })}</a>
        <a class="btn btn-wa btn-lg" href="${waHref('Hello Star Electronics, I saw your website. Please share details of your latest products and offers.')}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 19 })} ${L({ en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' })}</a>
        <a class="btn btn-ghost-dark btn-lg" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">${icon('pin', { size: 19 })} ${L({ en: 'Visit Store', hi: 'दुकान पर आएं' })}</a>
      </div>
      <ul class="hero-trust">
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'All Brands Available', hi: 'सभी ब्रांड उपलब्ध' })}</li>
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'Genuine Warranty', hi: 'असली वारंटी' })}</li>
        <li>${icon('checkCircle', { size: 16 })} ${L({ en: 'Easy EMI & Exchange', hi: 'आसान ईएमआई और एक्सचेंज' })}</li>
      </ul>
    </div>

    <div class="hero-visual" data-reveal style="--d:120ms" aria-hidden="true">
      <div class="hero-stack">
        <div class="hero-tile tile-1">${icon('smartphone', { size: 44 })}<span>5G Phones</span></div>
        <div class="hero-tile tile-2">${icon('tv', { size: 44 })}<span>4K TVs</span></div>
        <div class="hero-tile tile-3">${icon('ac', { size: 44 })}<span>ACs & Coolers</span></div>
        <div class="hero-tile tile-4">${icon('sofa', { size: 44 })}<span>Furniture</span></div>
        <div class="hero-star">
          <svg viewBox="0 0 64 64" width="86" height="86"><path class="logo-star" d="M32 8l6.9 14 15.4 2-11.1 10.8L45.7 51 32 43.7 18.3 51l2.5-16.2L9.7 24l15.4-2L32 8z"/></svg>
        </div>
      </div>
      <div class="hero-card-float">
        <strong>${L({ en: '4.9 ★ Google rating', hi: '4.9 ★ गूगल रेटिंग' })}</strong>
        <small>${L({ en: 'Loved by families across Ganga', hi: 'गंगा के परिवारों की पसंद' })}</small>
      </div>
    </div>
  </div>
  <div class="hero-wave" aria-hidden="true"></div>
</section>`;
}

function offerBanner() {
  return `<section class="section-tight">
  <div class="container">
    <div class="promo-banner" data-reveal data-until="${homeOffer.until}">
      <div class="promo-copy">
        <span class="chip chip-gold">${L(homeOffer.badge)}</span>
        <h2>${L(homeOffer.title)}</h2>
        <p>${L(homeOffer.desc)}</p>
        <div class="offer-timer is-light" data-countdown="${homeOffer.until}"></div>
      </div>
      <div class="promo-actions">
        <a class="btn btn-primary" href="${waHref('Hello Star Electronics, please share details of the ' + homeOffer.title.en)}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'Get this deal', hi: 'यह डील लें' })}</a>
        <a class="btn btn-ghost-dark" href="offers.html">${L({ en: 'All offers', hi: 'सभी ऑफर' })} ${icon('arrowRight', { size: 16 })}</a>
      </div>
      <span class="promo-deco" aria-hidden="true">${icon('gift', { size: 130 })}</span>
    </div>
  </div>
</section>`;
}

function home() {
  const feat = featured(8);
  const homeVideos = videos.slice(0, 6);
  const topReviews = reviews.slice(0, 4);

  return `${hero()}
${trustStrip()}

<section class="section">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Shop by category', hi: 'श्रेणी के अनुसार खरीदें' },
      title: { en: 'Three departments, endless choice', hi: 'तीन विभाग, ढेरों विकल्प' },
      sub: { en: 'Everything a household needs — from your first 5G phone to the bedroom set.', hi: 'घर की हर ज़रूरत — पहले 5G फोन से लेकर बेडरूम सेट तक।' },
      center: true,
    })}
    <div class="cat-grid">
      ${['mobiles', 'electronics', 'furniture'].map((c, i) => categoryCard(c, { i })).join('')}
    </div>
  </div>
</section>

<section class="section-tight brand-wall">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Brand wall', hi: 'ब्रांड वॉल' },
      title: { en: 'All major brands available', hi: 'सभी बड़े ब्रांड उपलब्ध' },
      sub: { en: 'Ask for any brand — if it is not on the shelf, we will arrange it.', hi: 'किसी भी ब्रांड के लिए पूछें — शेल्फ पर नहीं है तो हम मंगवा देंगे।' },
      center: true,
    })}
  </div>
  ${brandMarquee(brands.slice(0, 34))}
</section>

<section class="section alt">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Hand-picked', hi: 'चुनिंदा' },
      title: { en: 'Featured products this week', hi: 'इस हफ्ते के चुनिंदा प्रोडक्ट' },
      sub: { en: 'Tap any product to see details, then message us for the best price.', hi: 'किसी भी प्रोडक्ट पर टैप करें, फिर बेस्ट प्राइस के लिए मैसेज करें।' },
    })}
    <div class="scroller-wrap">
      <button type="button" class="scroller-btn prev" data-scroll="-1" aria-label="${La({ en: 'Previous', hi: 'पिछला' })}">${icon('chevronLeft', { size: 20 })}</button>
      <div class="scroller" data-scroller>${feat.map((p) => productCard(p)).join('')}</div>
      <button type="button" class="scroller-btn next" data-scroll="1" aria-label="${La({ en: 'Next', hi: 'अगला' })}">${icon('chevronRight', { size: 20 })}</button>
    </div>
    <div class="section-foot">
      <a class="btn btn-outline" href="mobiles.html">${L({ en: 'Browse all mobiles', hi: 'सभी मोबाइल देखें' })} ${icon('arrowRight', { size: 16 })}</a>
      <a class="btn btn-outline" href="electronics.html">${L({ en: 'Browse electronics', hi: 'इलेक्ट्रॉनिक्स देखें' })} ${icon('arrowRight', { size: 16 })}</a>
      <a class="btn btn-outline" href="furniture.html">${L({ en: 'Browse furniture', hi: 'फर्नीचर देखें' })} ${icon('arrowRight', { size: 16 })}</a>
    </div>
  </div>
</section>

${offerBanner()}

<section class="section">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Why choose us', hi: 'हमें क्यों चुनें' },
      title: { en: 'The Star Electronics promise', hi: 'स्टार इलेक्ट्रॉनिक्स का वादा' },
      center: true,
    })}
    <div class="benefit-grid">
      ${benefits
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

<section class="section on-dark-section">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'From our YouTube channel', hi: 'हमारे YouTube चैनल से' },
      title: { en: 'Watch what just arrived', hi: 'देखिए क्या नया आया' },
      sub: { en: 'New stock, offers and store updates — straight from ' + site.youtubeHandle + '.', hi: 'नया स्टॉक, ऑफर और स्टोर अपडेट — ' + site.youtubeHandle + ' से सीधे।' },
      light: true,
    })}
    <div class="video-grid">${homeVideos.map((v, i) => videoCard(v, i)).join('')}</div>
    <div class="section-foot is-center">
      <a class="btn btn-yt" href="${site.youtube}" target="_blank" rel="noopener" data-track="youtube_click">${brandIcon('youtube', { size: 18 })} ${L({ en: 'Subscribe on YouTube', hi: 'YouTube पर सब्सक्राइब करें' })}</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Customer voices', hi: 'ग्राहकों की राय' },
      title: { en: 'What our customers say', hi: 'हमारे ग्राहक क्या कहते हैं' },
      center: true,
    })}
    <div class="rating-summary" data-reveal>
      <strong>${ratingSummary.rating}</strong>
      <span class="stars" aria-hidden="true">${'★'.repeat(5)}</span>
      <span>${L({ en: ratingSummary.count + ' Google reviews', hi: ratingSummary.count + ' गूगल रिव्यू' })}</span>
    </div>
    <div class="scroller-wrap">
      <button type="button" class="scroller-btn prev" data-scroll="-1" aria-label="Previous">${icon('chevronLeft', { size: 20 })}</button>
      <div class="scroller scroller-reviews" data-scroller>${topReviews.map((r, i) => reviewCard(r, i)).join('')}</div>
      <button type="button" class="scroller-btn next" data-scroll="1" aria-label="Next">${icon('chevronRight', { size: 20 })}</button>
    </div>
    <div class="section-foot is-center">
      <a class="btn btn-outline" href="reviews.html">${L({ en: 'Read all reviews', hi: 'सभी रिव्यू पढ़ें' })} ${icon('arrowRight', { size: 16 })}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container visit-grid">
    <div data-reveal>
      ${sectionHead({
        kicker: { en: 'Visit us', hi: 'हमसे मिलें' },
        title: { en: 'Find Star Electronics Ganga', hi: 'स्टार इलेक्ट्रॉनिक्स गंगा कैसे पहुंचें' },
      })}
      <ul class="info-list">
        <li>${icon('pin', { size: 18 })}<div><strong>${L({ en: 'Address', hi: 'पता' })}</strong><a href="${site.directions}" target="_blank" rel="noopener">${L(site.address)}</a></div></li>
        <li>${icon('clock', { size: 18 })}<div><strong>${L({ en: 'Opening hours', hi: 'खुलने का समय' })}</strong>
          ${site.hours.map((h) => `<span>${L(h.days)} · ${h.time}</span>`).join('')}
          <em>${L(site.hoursNote)}</em></div></li>
        <li>${icon('phone', { size: 18 })}<div><strong>${L({ en: 'Phone & WhatsApp', hi: 'फोन और व्हाट्सएप' })}</strong><a href="${telHref}" data-track="call_click">+91 ${site.phoneDisplay}</a></div></li>
      </ul>
      <div class="hero-cta">
        <a class="btn btn-primary" href="${site.directions}" target="_blank" rel="noopener" data-track="direction_click">${icon('map', { size: 17 })} ${L({ en: 'Get Directions', hi: 'रास्ता देखें' })}</a>
        <a class="btn btn-wa" href="${waHref('Hello Star Electronics, I am planning to visit your store. Please share the location and timings.')}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'Ask on WhatsApp', hi: 'व्हाट्सएप पर पूछें' })}</a>
      </div>
    </div>
    <div class="map-card" data-reveal style="--d:100ms">
      <iframe src="${site.mapsEmbed}" title="${La({ en: 'Map to Star Electronics Ganga', hi: 'स्टार इलेक्ट्रॉनिक्स गंगा का नक्शा' })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>

${ctaBand()}
${productDialog()}
${videoLightbox()}`;
}

export default { meta, body: home };
