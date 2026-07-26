// Single source of truth for the WhatsApp contact channel.
// To change the number, edit RAW_NUMBER (one line). WHATSAPP_DISPLAY is the
// human-readable spacing and is set manually.
const RAW_NUMBER = "201034082107"; // country code + number, no "+", for wa.me / tel

// Pre-filled opener so clients don't have to write the first message. Written as
// readable text (Arabic first, then English) and URL-encoded at load — edit the
// wording freely below; newlines and Arabic are encoded automatically.
const PREFILLED_TEXT = encodeURIComponent(
  `السلام عليكم محمد،
شفت معرض أعمالك وحابب أتواصل معاك بخصوص مشروع.

Hi Mohamed,
I saw your portfolio and I'd like to discuss a project.`,
).replace(/'/g, "%27"); // encode the apostrophe too, so the URL stays fully percent-encoded

export const WHATSAPP_INTL = `+${RAW_NUMBER}`; // +201034082107
export const WHATSAPP_DISPLAY = "+20 103 408 2107"; // readable
export const WHATSAPP_TEL = `tel:+${RAW_NUMBER}`; // tel:+201034082107
export const WHATSAPP_URL = `https://wa.me/${RAW_NUMBER}?text=${PREFILLED_TEXT}`;

// Reused as the aria-label on every WhatsApp link for a consistent accessible name.
export const WHATSAPP_ARIA = "Message Mohamed ElSayed on WhatsApp";
