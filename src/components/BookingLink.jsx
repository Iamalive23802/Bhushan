import { bookingTelHref, bookingTelHrefForProduct } from '../config/booking'

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
