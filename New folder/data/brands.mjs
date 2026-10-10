// Brand list. `cats` controls where each brand appears: mobiles | electronics | furniture.
// NOTE: confirm the exact stocked brands with the owner before launch (PRD §14.2).

const raw = [
  // Mobiles
  ['Samsung', ['mobiles', 'electronics']],
  ['Vivo', ['mobiles']],
  ['Oppo', ['mobiles']],
  ['Realme', ['mobiles']],
  ['Redmi', ['mobiles']],
  ['OnePlus', ['mobiles']],
  ['Motorola', ['mobiles']],
  ['Nokia', ['mobiles']],
  ['Tecno', ['mobiles']],
  ['Infinix', ['mobiles']],
  ['itel', ['mobiles']],
  ['Lava', ['mobiles']],
  ['Micromax', ['mobiles']],
  ['Honor', ['mobiles']],
  ['iQOO', ['mobiles']],
  ['Poco', ['mobiles']],
  ['Apple', ['mobiles']],
  ['Jio', ['mobiles']],

  // Consumer electronics
  ['LG', ['electronics']],
  ['Sony', ['electronics']],
  ['TCL', ['electronics']],
  ['Vu', ['electronics']],
  ['Hisense', ['electronics']],
  ['Panasonic', ['electronics']],
  ['Voltas', ['electronics']],
  ['Lloyd', ['electronics']],
  ['Blue Star', ['electronics']],
  ['Daikin', ['electronics']],
  ['Carrier', ['electronics']],
  ['Whirlpool', ['electronics']],
  ['Haier', ['electronics']],
  ['Godrej', ['electronics', 'furniture']],
  ['Bosch', ['electronics']],
  ['IFB', ['electronics']],
  ['Bajaj', ['electronics']],
  ['Philips', ['electronics']],
  ['Havells', ['electronics']],
  ['Usha', ['electronics']],
  ['Orient', ['electronics']],
  ['Prestige', ['electronics']],
  ['Butterfly', ['electronics']],
  ['Crompton', ['electronics']],
  ['Symphony', ['electronics']],
  ['Kenstar', ['electronics']],
  ['boAt', ['electronics']],
  ['JBL', ['electronics']],
  ['Zebronics', ['electronics']],
  ['Portronics', ['electronics']],
  ['Ambrane', ['electronics']],
  ['Mi', ['mobiles', 'electronics']],

  // Furniture
  ['Godrej Interio', ['furniture']],
  ['Durian', ['furniture']],
  ['Kurlon', ['furniture']],
  ['Sleepwell', ['furniture']],
  ['Springfit', ['furniture']],
  ['Duroflex', ['furniture']],
];

export const brands = raw.map(([name, cats]) => ({ name, cats }));

export const brandsByCat = (cat) => brands.filter((b) => b.cats.includes(cat));
export const brandNames = (cat) => brandsByCat(cat).map((b) => b.name);
