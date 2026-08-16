const RAW_NUMBER = "201034082107";

const PREFILLED_TEXT = encodeURIComponent(
  `السلام عليكم محمد،
شفت معرض أعمالك وحابب أتواصل معاك بخصوص مشروع.

Hi Mohamed,
I saw your portfolio and I'd like to discuss a project.`,
).replace(/'/g, "%27");

export const WHATSAPP_INTL = `+${RAW_NUMBER}`;
export const WHATSAPP_DISPLAY = "+20 103 408 2107";
export const WHATSAPP_TEL = `tel:+${RAW_NUMBER}`;
export const WHATSAPP_URL = `https://wa.me/${RAW_NUMBER}?text=${PREFILLED_TEXT}`;

export const WHATSAPP_ARIA = "Message Mohamed ElSayed on WhatsApp";
