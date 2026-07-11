import { siteConfig } from "@/lib/data/site";

const WHATSAPP_BASE_URL = "https://wa.me/";

/**
 * Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
 * Called with no arguments it produces a generic enquiry message.
 */
export function buildWhatsAppLink(itemName?: string, price?: number): string {
  let message =
    "Hi Pannkaj, I am interested in your numerology & Vastu services. Please provide more details and availability.";

  if (itemName && price) {
    message = `Hi Pannkaj, I am interested in ${itemName} (₹${price}). Please provide more details and availability.`;
  } else if (itemName) {
    message = `Hi Pannkaj, I am interested in ${itemName}. Please provide more details and availability.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

/** For items without a fixed listed price ("contact for price" products). */
export function formatPriceOrRequest(price?: number): string {
  return price ? formatPrice(price) : "Price on request";
}
