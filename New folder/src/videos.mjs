import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { icon, brandIcon } from '../lib/icons.mjs';
import { sectionHead, breadcrumb, ctaBand, videoCard, videoLightbox } from '../lib/ui.mjs';
import { videos } from '../data/videos.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const meta = {
  path: 'videos.html',
  title: 'Videos | Star Electronics Ganga on YouTube — New Stock, Offers & Store Updates',
  description:
    'Watch the latest videos and shorts from Star Electronics Ganga — new smartphone stock, cooler and AC offers, furniture displays and store updates. Subscribe to ' +
    site.youtubeHandle + ' and visit us on Sangaria–Sirsa Road, Ganga.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Videos', hi: 'वीडियो' }, href: 'videos.html' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'VideoChannel',
      name: 'Star Electronics Ganga',
      url: site.youtube,
    },
  ],
};

function body() {
  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Videos', hi: 'वीडियो' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${brandIcon('youtube', { size: 15 })} ${site.youtubeHandle}</span>
      <h1>${L({ en: 'Watch what’s new at the store', hi: 'दुकान में क्या नया है, देखिए' })}</h1>
      <p>${L({
        en: 'Fresh stock, offers and room-by-room furniture tours — filmed right here on Sangaria–Sirsa Road, Ganga.',
        hi: 'ताज़ा स्टॉक, ऑफर और फर्नीचर टूर — सीधे संगरिया–सिरसा रोड, गंगा से शूट किए गए।',
      })}</p>
      <div class="hero-cta">
        <a class="btn btn-yt" href="${site.youtube}" target="_blank" rel="noopener" data-track="youtube_click">${brandIcon('youtube', { size: 18 })} ${L({ en: 'Subscribe on YouTube', hi: 'YouTube पर सब्सक्राइब करें' })}</a>
        <a class="btn btn-ghost-dark" href="${site.waBase}?text=${encodeURIComponent('Hello Star Electronics, I saw your video — is this item available?')}" target="_blank" rel="noopener" data-track="whatsapp_click">${brandIcon('whatsapp', { size: 17 })} ${L({ en: 'Ask about a video', hi: 'वीडियो के बारे में पूछें' })}</a>
      </div>
    </div>
    <div class="page-hero-art" aria-hidden="true">${brandIcon('youtube', { size: 96 })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      kicker: { en: 'Latest uploads', hi: 'नई अपलोड' },
      title: { en: 'Recent videos from our channel', hi: 'हमारे चैनल के हालिया वीडियो' },
      sub: { en: 'Tap a thumbnail to play it here — or open it on YouTube to like and subscribe.', hi: 'थंबनेल पर टैप करके यहीं देखें — या YouTube पर खोलकर लाइक और सब्सक्राइब करें।' },
      center: true,
    })}
    <div class="video-grid">${videos.map((v, i) => videoCard(v, i)).join('')}</div>
    <div class="section-foot is-center">
      <a class="btn btn-yt" href="${site.youtube}" target="_blank" rel="noopener" data-track="youtube_click">${brandIcon('youtube', { size: 18 })} ${L({ en: 'See all videos on YouTube', hi: 'YouTube पर सभी वीडियो देखें' })} ${icon('arrowUpRight', { size: 16 })}</a>
    </div>
  </div>
</section>

${ctaBand()}
${videoLightbox()}`;
}

export default { meta, body };
