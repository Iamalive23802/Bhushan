import {
  bookingTelHref,
  bookingTelHrefForProduct,
  bookingWhatsappHref,
  bookingWhatsappHrefForProduct,
} from '../config/booking'

export function BookingLink({
  children,
  className = '',
  productName,
  ...rest
}) {
  const href = productName
    ? bookingTelHrefForProduct(productName)
    : bookingTelHref()
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

export function WhatsAppLink({
  children,
  className = '',
  productName,
  ...rest
}) {
  const href = productName
    ? bookingWhatsappHrefForProduct(productName)
    : bookingWhatsappHref()
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  )
}
