// Offers and deals (PRD 7.3). Add / edit / remove — the countdown uses `until`.
// `share` is the pre-filled WhatsApp message when a visitor taps "Share on WhatsApp".

export const offers = [
  {
    slug: 'diwali-dhamaka',
    icon: 'gift',
    tone: 'gold',
    title: { en: 'Diwali Dhamaka Sale', hi: 'दिवाली धमाका सेल' },
    desc: {
      en: 'Flat discounts on smartphones, TVs, coolers and furniture sets. Exchange your old phone and save more.',
      hi: 'स्मार्टफोन, टीवी, कूलर और फर्नीचर सेट पर सीधी छूट। पुराना फोन एक्सचेंज करें और ज्यादा बचाएं।',
    },
    until: '2026-11-10T23:59:59+05:30',
    badge: { en: 'Festival offer', hi: 'त्योहार ऑफर' },
    share: 'Diwali Dhamaka Sale is on at Star Electronics Ganga! Smartphones, TVs, coolers & furniture at festival prices. Visit the store on Sangaria–Sirsa Road, Ganga.',
  },
  {
    slug: 'exchange-old-phone',
    icon: 'smartphone',
    tone: 'blue',
    title: { en: 'Exchange Old Phone, Get Best Value', hi: 'पुराना फोन एक्सचेंज, बेस्ट वैल्यू पाएं' },
    desc: {
      en: 'Bring your working old smartphone for an instant exchange value towards any new phone in store.',
      hi: 'अपना चालू पुराना स्मार्टफोन लाएं और दुकान से किसी भी नए फोन पर तुरंत एक्सचेंज वैल्यू पाएं।',
    },
    until: '2026-12-31T23:59:59+05:30',
    badge: { en: 'All year', hi: 'पूरे साल' },
    share: 'Exchange your old phone at Star Electronics Ganga and get the best value on a new smartphone. Call 73573 93293.',
  },
  {
    slug: 'wedding-package',
    icon: 'sofa',
    tone: 'gold',
    title: { en: 'Wedding & New Home Package', hi: 'शादी और नए घर का पैकेज' },
    desc: {
      en: 'Furniture sets plus appliances bought together — ask for a combined package price.',
      hi: 'फर्नीचर सेट और उपकरण एक साथ खरीदें — संयुक्त पैकेज दाम के लिए पूछें।',
    },
    until: '2027-03-31T23:59:59+05:30',
    badge: { en: 'Seasonal', hi: 'सीज़नल' },
    share: 'Planning a wedding or new home? Star Electronics Ganga has a combined furniture + appliance package. WhatsApp 73573 93293.',
  },
  {
    slug: 'summer-cooler-ac',
    icon: 'ac',
    tone: 'blue',
    title: { en: 'Summer Cooler & AC Booking', hi: 'गर्मी कूलर और एसी बुकिंग' },
    desc: {
      en: 'Pre-book your cooler or air conditioner before the summer rush and get priority installation support.',
      hi: 'गर्मी से पहले कूलर या एसी प्री-बुक करें और प्राथमिकता से इंस्टॉलेशन सपोर्ट पाएं।',
    },
    until: '2027-04-30T23:59:59+05:30',
    badge: { en: 'Advance booking', hi: 'एडवांस बुकिंग' },
    share: 'Pre-book your cooler or AC at Star Electronics Ganga before summer and get priority installation. Call 73573 93293.',
  },
];

// Rotating promo strip on the home page (PRD 7.1 — current offers banner).
export const homeOffer = offers[0];
