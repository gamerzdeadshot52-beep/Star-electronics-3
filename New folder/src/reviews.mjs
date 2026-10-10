import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb, ctaBand, reviewCard } from '../lib/ui.mjs';
import { reviews, ratingSummary } from '../data/reviews.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(site.name + ' ' + site.addressLine)}`;

const meta = {
  path: 'reviews.html',
  title: 'Customer Reviews | 4.9★ Rated Mobile & Furniture Shop — Star Electronics Ganga',
  description:
    'Read what customers from Ganga, Sangaria and Sirsa say about Star Electronics Ganga — honest prices, genuine warranty and helpful service. Rated 4.9★ on Google.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Reviews', hi: 'रिव्यू' }, href: 'reviews.html' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: site.name,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: ratingSummary.rating,
        reviewCount: ratingSummary.count,
        bestRating: 5,
      },
      review: reviews.slice(0, 4).map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text.en,
      })),
    },
  ],
};

function body() {
  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Reviews', hi: 'रिव्यू' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Real customer voices', hi: 'असली ग्राहकों की राय' })}</span>
      <h1>${L({ en: 'Trusted across Ganga & Sirsa road', hi: 'गंगा और सिरसा रोड भर में भरोसा' })}</h1>
      <p>${L({
        en: 'Our reputation is built one family at a time — here is what people say after they shop with us.',
        hi: 'हमारी प्रतिष्ठा एक-एक परिवार से बनी है — खरीदारी के बाद लोग क्या कहते हैं, यहां पढ़िए।',
      })}</p>
    </div>
    <div class="page-hero-art" aria-hidden="true">${icon('quote', { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="rating-summary is-lg" data-reveal>
      <strong>${ratingSummary.rating}</strong>
      <div>
        <span class="stars" aria-label="${ratingSummary.rating} out of 5">${'★'.repeat(5)}</span>
        <span>${L({
          en: ratingSummary.count + ' reviews on Google',
          hi: ratingSummary.count + ' गूगल पर रिव्यू',
        })}</span>
      </div>
      <a class="btn btn-outline btn-sm" href="${searchUrl}" target="_blank" rel="noopener">${icon('externalLink', { size: 15 })} ${L({ en: 'See on Google', hi: 'गूगल पर देखें' })}</a>
    </div>

    <!-- NOTE for the owner: replace these example entries with real, permissioned
         Google reviews (PRD §9) before the site goes live. -->
    <div class="review-grid">${reviews.map((r, i) => reviewCard(r, i)).join('')}</div>

    <div class="notice-card" data-reveal>
      <span class="notice-icon">${icon('star', { size: 22 })}</span>
      <div>
        <h3>${L({ en: 'Had a good experience?', hi: 'अच्छा अनुभव मिला?' })}</h3>
        <p>${L({
          en: 'A short Google review helps other families in Ganga find a shop they can trust. It takes under a minute.',
          hi: 'एक छोटा सा गूगल रिव्यू गंगा के दूसरे परिवारों को भरोसेमंद दुकान खोजने में मदद करता है। इसमें एक मिनट भी नहीं लगता।',
        })}</p>
        <div class="hero-cta">
          <a class="btn btn-primary btn-sm" href="${searchUrl}" target="_blank" rel="noopener">${icon('star', { size: 15 })} ${L({ en: 'Write a review', hi: 'रिव्यू लिखें' })}</a>
          <a class="btn btn-wa btn-sm" href="${site.waBase}?text=${encodeURIComponent(
            'Hello Star Electronics, I would like to share feedback about my recent purchase.'
          )}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 15 })} ${L({ en: 'Send feedback', hi: 'फीडबैक भेजें' })}</a>
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBand()}`;
}

export default { meta, body };
