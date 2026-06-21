/** Booking phone shown across the site. */
export const BOOKING_PHONE_DISPLAY = '9323166423'

/** E.164-style digits after + for use in tel: (no spaces or punctuation). */
export const BOOKING_PHONE_DIGITS = '919323166423'

export const CONTACT_PERSON = 'Bhushan Kothawade'

export const STORE_ADDRESS = [
  'Shop no 5, Raj Kamal Tower CHS.',
  'Santoshimata Road',
  'Near Kotak Mahindra Bank',
  'Kalyan West',
  'Pin code - 421301',
]

export const STORE_LOCATION_URL = 'https://g.co/kgs/5LGfoS'

/** `tel:` href used by all “Book / Call” actions. */
export function bookingTelHref() {
  return `tel:+${BOOKING_PHONE_DIGITS}`
}

/**
 * Same dial link; optional note for analytics or future deep links (ignored by dialer).
 */
export function bookingTelHrefForProduct(/* productName */) {
  return bookingTelHref()
}

export function bookingWhatsappHref(message = 'Hi, I want to inquire about Royal Orthocare Center services.') {
  return `https://wa.me/${BOOKING_PHONE_DIGITS}?text=${encodeURIComponent(message)}`
}

export function bookingWhatsappHrefForProduct(productName) {
  const message = productName
    ? `Hi, I want to inquire about ${productName}.`
    : 'Hi, I want to inquire about Royal Orthocare Center services.'
  return bookingWhatsappHref(message)
}
