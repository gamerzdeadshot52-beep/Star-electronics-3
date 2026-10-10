import { site } from '../data/site.mjs';
import { L } from '../lib/i18n.mjs';
import { breadcrumb } from '../lib/ui.mjs';
import { breadcrumbSchema } from '../lib/layout.mjs';

const meta = {
  path: 'privacy.html',
  title: 'Privacy Policy | Star Electronics Ganga',
  description:
    'How Star Electronics Ganga handles your information: minimal data collection, WhatsApp click-to-chat, cookies for analytics and your choices.',
  jsonld: [
    breadcrumbSchema([
      { name: { en: 'Home', hi: 'होम' }, href: 'index.html' },
      { name: { en: 'Privacy Policy', hi: 'प्राइवेसी पॉलिसी' }, href: 'privacy.html' },
    ]),
  ],
};

const blocks = [
  {
    h: { en: 'What we collect', hi: 'हम क्या इकट्ठा करते हैं' },
    p: {
      en: 'This website does not require an account and does not store your details on our servers. When you use the enquiry form, your message is handed over to WhatsApp so you can send it directly — the content is handled by WhatsApp under its own policy. We may collect anonymous usage statistics such as pages visited and button taps to understand what visitors look for.',
      hi: 'इस वेबसाइट के लिए अकाउंट की ज़रूरत नहीं और आपकी जानकारी हमारे सर्वर पर सेव नहीं होती। पूछताछ फॉर्म का मैसेज सीधे व्हाट्सएप पर जाता है — उसकी जानकारी व्हाट्सएप की नीति के अनुसार संभाली जाती है। हम केवल अनाम आंकड़े (कौन से पेज देखे, किस बटन पर क्लिक हुआ) देख सकते हैं।',
    },
  },
  {
    h: { en: 'Cookies and analytics', hi: 'कुकीज़ और एनालिटिक्स' },
    p: {
      en: 'We use a small number of cookies to remember your light/dark mode and language preference. If analytics are enabled, Google Analytics measures traffic in aggregate. You can decline non-essential cookies in the notice bar at any time, and your browser settings can block cookies entirely.',
      hi: 'हम लाइट/डार्क मोड और भाषा याद रखने के लिए कुछ कुकीज़ का उपयोग करते हैं। एनालिटिक्स चालू होने पर Google Analytics समग्र ट्रैफ़िक मापता है। आप नोटिस बार से कभी भी गैर-ज़रूरी कुकीज़ मना कर सकते हैं और ब्राउज़र सेटिंग्स से कुकीज़ पूरी तरह ब्लॉक कर सकते हैं।',
    },
  },
  {
    h: { en: 'Third-party links', hi: 'तृतीय-पक्ष लिंक' },
    p: {
      en: 'Buttons that open WhatsApp, Google Maps, YouTube or social profiles take you to those services, which have their own privacy policies. We do not control how they handle your data.',
      hi: 'व्हाट्सएप, गूगल मैप्स, YouTube या सोशल प्रोफ़ाइल खोलने वाले बटन आपको उन सेवाओं तक ले जाते हैं, जिनकी अपनी प्राइवेसी नीतियां हैं। उनके डेटा हैंडलिंग पर हमारा कोई नियंत्रण नहीं है।',
    },
  },
  {
    h: { en: 'Your choices', hi: 'आपके विकल्प' },
    p: {
      en: 'You may browse the entire catalogue without sharing any personal information. To have a copy of anything you have shared with us removed, simply message or call the store and we will delete it promptly.',
      hi: 'आप बिना कोई निजी जानकारी दिए पूरा कैटलॉग देख सकते हैं। हमें भेजी गई किसी भी जानकारी की प्रति या हटाने के लिए दुकान को मैसेज या कॉल करें — हम तुरंत हटा देंगे।',
    },
  },
  {
    h: { en: 'Contact us', hi: 'हमसे संपर्क करें' },
    p: {
      en: 'Questions about this policy can be sent by phone, WhatsApp or email using the details on the contact page.',
      hi: 'इस नीति के बारे में कोई भी सवाल संपर्क पेज पर दिए गए फोन, व्हाट्सएप या ईमेल से भेजा जा सकता है।',
    },
  },
];

function body() {
  return `${breadcrumb([{ name: { en: 'Home', hi: 'होम' }, href: 'index.html' }, { name: { en: 'Privacy Policy', hi: 'प्राइवेसी पॉलिसी' } }])}

<section class="page-hero">
  <div class="container page-hero-inner" data-reveal>
    <div>
      <span class="kicker on-dark">${L({ en: 'Your trust matters', hi: 'आपका भरोसा ज़रूरी है' })}</span>
      <h1>${L({ en: 'Privacy Policy', hi: 'प्राइवेसी पॉलिसी' })}</h1>
      <p>${L({ en: 'Last updated: October 2026', hi: 'अंतिम अपडेट: अक्टूबर 2026' })}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container prose">
    <p>${L({
      en: 'Star Electronics Ganga respects your privacy. This page explains in plain language what this website does with information, and what it does not do.',
      hi: 'स्टार इलेक्ट्रॉनिक्स गंगा आपकी निजता का सम्मान करता है। यह पेज सरल भाषा में बताता है कि यह वेबसाइट जानकारी के साथ क्या करती है और क्या नहीं करती।',
    })}</p>
    ${blocks
      .map(
        (b) => `<section class="prose-block" data-reveal><h2>${L(b.h)}</h2><p>${L(b.p)}</p></section>`
      )
      .join('')}
    <p class="muted">${L({
      en: 'Business details: ' + site.legalName + ', ' + site.addressLine + ', phone +91 ' + site.phoneDisplay + '.',
      hi: 'व्यावसायिक विवरण: ' + site.legalName + ', ' + site.addressLine + ', फोन +91 ' + site.phoneDisplay + '।',
    })}</p>
  </div>
</section>`;
}

export default { meta, body };
