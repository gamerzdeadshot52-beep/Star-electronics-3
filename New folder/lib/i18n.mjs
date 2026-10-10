// Bilingual helpers -------------------------------------------------------
// Every translatable string is rendered as two spans; CSS shows one language.

export function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * L({ en: 'Call now', hi: 'अभी कॉल करें' }) -> hidden-by-default language spans.
 * A plain string is passed through (language-neutral content).
 */
export function L(value) {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return esc(value);
  const en = value.en ?? '';
  const hi = value.hi ?? en;
  return `<span class="l-en">${esc(en)}</span><span class="l-hi" lang="hi">${esc(hi)}</span>`;
}

/** Attribute-safe variant (titles, aria-labels, alt text). Uses English default. */
export function La(value, lang = 'en') {
  if (value == null) return '';
  if (typeof value === 'string') return esc(value);
  return esc(value[lang] ?? value.en ?? '');
}

/** Bilingual alt/title where both languages are supplied as attributes. */
export function attr(value) {
  if (value == null) return '';
  if (typeof value === 'string') return `alt="${esc(value)}"`;
  return `alt="${esc(value.en ?? '')}" data-alt-hi="${esc(value.hi ?? value.en ?? '')}"`;
}
