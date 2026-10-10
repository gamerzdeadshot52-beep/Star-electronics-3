// Latest videos from youtube.com/@starelectronicsganga1
// (source: official YouTube RSS feed, channel id UCKoj5CPvo41TBwxOdJA-wOw).
// `title` is the exact YouTube title, `label` is the friendly text shown on the
// site (used when the original title is only an emoji, hashtag or a date).

export const videos = [
  { id: 'zAEsFaSi5Tc', label: 'Full battery stock — all models available', title: '🥰Full battery stock  all model ( available) 👍🏻', date: '2026-09-27', views: 698, short: true },
  { id: 'EWVyzr8LFas', label: 'Styling bed collection in store', title: 'Styling BeD 🥰🌸', date: '2026-09-21', views: 566, short: true },
  { id: 'ZNy4OeO6vVU', label: 'Star Electronics Ganga store tour', title: 'Star Electronic Ganga 🤩🌟👍🏻 #viralshorts #shorts #viral #shop', date: '2026-09-17', views: 315, short: true },
  { id: 'ybRa-2_078E', label: 'Star Electronics Ganga new arrivals', title: 'Star electronic ganga 👍', date: '2026-09-14', views: 544, short: true },
  { id: 'EVKdwsC1j5U', label: 'Featured picks from our showroom', title: 'Star 🌟  #viral #viralshorts', date: '2026-09-11', views: 941, short: true },
  { id: 'C1GZ4S3TL0Q', label: 'Latest update from the Ganga store', title: '👍', date: '2026-10-10', views: 1217, short: true },
  { id: 'flp4SIrdjw4', label: 'Stock update — 9 October 2026', title: '9 October 2026', date: '2026-10-09', views: 1324, short: true },
  { id: '3a7WiG6MsWU', label: 'New stock preview — 6 October 2026', title: '6 October 2026', date: '2026-10-06', views: 1186, short: true },
  { id: 'Rnlv8ALnSXQ', label: 'Offer special for our viewers', title: '#viral', date: '2026-10-03', views: 1361, short: true },
  { id: 'tmviEfEJXBE', label: 'Showroom highlights — 28 September 2026', title: '28 September 2026', date: '2026-09-28', views: 736, short: true },
  { id: 'i9VRUcDHunw', label: 'Customer favourites this week', title: '#viral #viral 🤩👍', date: '2026-09-12', views: 1200, short: true },
  { id: 'iGL4A2gOCIs', label: 'Best deals at Star Electronics Ganga', title: '#viral #viralshorts', date: '2026-09-05', views: 903, short: true },
];

export const thumb = (id, quality = 'hqdefault') => `https://i.ytimg.com/vi/${id}/${quality}.jpg`;
export const watchUrl = (v) => (v.short ? `https://www.youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`);
