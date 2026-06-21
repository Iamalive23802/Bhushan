import { Link, NavLink } from 'react-router-dom'
import { BookingLink, WhatsAppLink } from './BookingLink'
import { BOOKING_PHONE_DISPLAY } from '../config/booking'
import { BRAND } from '../data/orthocareCatalog'

const navClass = ({ isActive }) =>
  [
    'transition-colors whitespace-nowrap',
    isActive
      ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 pb-1'
      : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300',
  ].join(' ')

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="shrink-0 text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl"
        >
          {BRAND.name}
        </Link>
        <div className="hidden items-center gap-4 font-sans text-sm font-medium tracking-tight lg:flex xl:gap-6">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/home-care" className={navClass}>
            Home Care
          </NavLink>
          <NavLink to="/sale" className={navClass}>
            Sale
          </NavLink>
          <NavLink to="/rent" className={navClass}>
            Rent
          </NavLink>
          <NavLink to="/how-it-works" className={navClass}>
            Contact
          </NavLink>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <BookingLink className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-primary-container active:scale-95 sm:px-5">
            Call to Book
          </BookingLink>
          <WhatsAppLink className="hidden rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-green-700 active:scale-95 sm:inline-block">
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 overflow-x-auto border-t border-slate-100 px-4 py-2 font-sans text-xs font-medium lg:hidden">
        <NavLink to="/home-care" className={navClass}>
          Home Care
        </NavLink>
        <NavLink to="/sale" className={navClass}>
          Sale
        </NavLink>
        <NavLink to="/rent" className={navClass}>
          Rent
        </NavLink>
        <NavLink to="/how-it-works" className={navClass}>
          Contact
        </NavLink>
      </div>
      <div className="border-t border-slate-100 px-6 py-2 text-center font-sans text-xs text-outline dark:border-slate-800 md:hidden">
        Booking:{' '}
        <BookingLink className="font-semibold text-primary hover:underline">
          {BOOKING_PHONE_DISPLAY}
        </BookingLink>
        <span className="px-2">|</span>
        <WhatsAppLink className="font-semibold text-green-600 hover:underline">
          WhatsApp
        </WhatsAppLink>
      </div>
    </nav>
  )
}
