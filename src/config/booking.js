/**
 * Booking phone shown across the site. Update `digits` for a real `tel:` link;
 * alphanumeric vanity numbers map to numeric dialing (example: 1-800-MED-PRO-1 → +18006337761).
 */
export const BOOKING_PHONE_DISPLAY = '1-800-MED-PRO-1'

/** E.164-style digits after + for use in tel: (no spaces or punctuation). */
export const BOOKING_PHONE_DIGITS = '18006337761'

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
