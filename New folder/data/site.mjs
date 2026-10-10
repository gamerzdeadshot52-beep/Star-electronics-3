// ---------------------------------------------------------------------------
// Star Electronics Ganga — single source of truth for business information.
// Edit this file to update phone, address, hours, links on EVERY page.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Star Electronics Ganga',
  legalName: 'Star Electronics Ganga (Star Mobile and Electronics)',
  tagline: {
    en: 'Mobiles. Electronics. Furniture. All Brands, One Store.',
    hi: 'मोबाइल। इलेक्ट्रॉनिक्स। फर्नीचर। सभी ब्रांड, एक ही दुकान।',
  },
  phoneDisplay: '73573 93293',
  phoneRaw: '7357393293',
  tel: '+917357393293',
  whatsapp: '917357393293',
  email: 'starelectronicsganga@gmail.com',
  address: {
    en: 'Sangaria–Sirsa Road, Ganga, Haryana 125103',
    hi: 'संगरिया–सिरसा रोड, गंगा, हरियाणा 125103',
  },
  addressLine: 'Sangaria–Sirsa Road, Ganga, Haryana 125103',
  // Approximate — verify against the exact Google Business Profile pin before launch.
  geo: { lat: 29.5375, lng: 74.5598 },
  hours: [
    { days: { en: 'Monday – Saturday', hi: 'सोमवार – शनिवार' }, time: '9:30 AM – 8:30 PM' },
    { days: { en: 'Sunday', hi: 'रविवार' }, time: '10:00 AM – 8:00 PM' },
  ],
  hoursNote: {
    en: 'Festival timings may vary — please call before visiting.',
    hi: 'त्योहारों पर समय बदल सकता है — कृपया आने से पहले कॉल करें।',
  },
  youtube: 'https://www.youtube.com/@starelectronicsganga1',
  youtubeHandle: '@starelectronicsganga1',
  youtubeChannelId: 'UCKoj5CPvo41TBwxOdJA-wOw',
  domain: 'https://starelectronicsganga.in', // register before launch
  gaId: '', // e.g. 'G-XXXXXXXXXX' — GA4 measurement id
  fbPixel: '', // optional Meta Pixel id
  mapsQuery: 'Star Electronics Ganga, Sangaria Sirsa Road, Ganga, Haryana 125103',
  get mapsEmbed() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  },
  get directions() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.mapsQuery)}`;
  },
  get waBase() {
    return `https://wa.me/${this.whatsapp}`;
  },
};

/** Pre-filled WhatsApp message for a product (PRD 7.2). */
export function waProductLink(productName) {
  const msg = `Hello Star Electronics, I am interested in ${productName}. Please share the best price and availability.`;
  return `${site.waBase}?text=${encodeURIComponent(msg)}`;
}

export function waLink(msg) {
  return `${site.waBase}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { href: 'index.html', en: 'Home', hi: 'होम' },
  { href: 'mobiles.html', en: 'Mobiles', hi: 'मोबाइल' },
  { href: 'electronics.html', en: 'Electronics', hi: 'इलेक्ट्रॉनिक्स' },
  { href: 'furniture.html', en: 'Furniture', hi: 'फर्नीचर' },
  { href: 'brands.html', en: 'Brands', hi: 'ब्रांड' },
  { href: 'offers.html', en: 'Offers', hi: 'ऑफर' },
  { href: 'videos.html', en: 'Videos', hi: 'वीडियो' },
  { href: 'reviews.html', en: 'Reviews', hi: 'रिव्यू' },
  { href: 'about.html', en: 'About', hi: 'हमारे बारे में' },
  { href: 'contact.html', en: 'Contact', hi: 'संपर्क' },
];

export const footerLinks = [
  { href: 'index.html', en: 'Home', hi: 'होम' },
  { href: 'mobiles.html', en: 'Mobiles', hi: 'मोबाइल' },
  { href: 'electronics.html', en: 'Electronics', hi: 'इलेक्ट्रॉनिक्स' },
  { href: 'furniture.html', en: 'Furniture', hi: 'फर्नीचर' },
  { href: 'brands.html', en: 'Brands', hi: 'ब्रांड' },
  { href: 'offers.html', en: 'Offers & Deals', hi: 'ऑफर और डील' },
  { href: 'videos.html', en: 'Videos', hi: 'वीडियो' },
  { href: 'reviews.html', en: 'Reviews', hi: 'रिव्यू' },
  { href: 'about.html', en: 'About Us', hi: 'हमारे बारे में' },
  { href: 'contact.html', en: 'Contact & Visit', hi: 'संपर्क और विज़िट' },
  { href: 'privacy.html', en: 'Privacy Policy', hi: 'प्राइवेसी पॉलिसी' },
  { href: '404.html', en: 'Sitemap', hi: 'साइटमैप' },
];
