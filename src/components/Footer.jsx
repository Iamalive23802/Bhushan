import { Link } from 'react-router-dom'
import { BookingLink, WhatsAppLink } from './BookingLink'
import {
  BOOKING_PHONE_DISPLAY,
  CONTACT_PERSON,
  STORE_ADDRESS,
  STORE_LOCATION_URL,
} from '../config/booking'
import { BRAND } from '../data/orthocareCatalog'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <span className="block text-lg font-semibold text-slate-800 dark:text-slate-200">
            {BRAND.name}
          </span>
          <p className="font-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {BRAND.tagline}
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Services</h4>
          <ul className="space-y-2 font-sans text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/home-care">
                Home & Hospital Care
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/sale">
                Products for Sale
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/rent">
                Equipment on Rent
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Company</h4>
          <ul className="space-y-2 font-sans text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/how-it-works">
                How it Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Contact</h4>
          <div className="space-y-3 font-sans text-sm text-slate-500 dark:text-slate-400">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {CONTACT_PERSON}
              </p>
              <BookingLink className="font-bold text-primary hover:underline">
                {BOOKING_PHONE_DISPLAY}
              </BookingLink>
            </div>
            <BookingLink className="block font-bold text-primary hover:underline">
              Call to book now
            </BookingLink>
            <WhatsAppLink className="block font-bold text-green-600 hover:underline">
              WhatsApp Inquiry
            </WhatsAppLink>
            <address className="not-italic leading-relaxed">
              {STORE_ADDRESS.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={STORE_LOCATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              <span className="material-symbols-outlined text-base">directions</span>
              Get directions
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1280px] border-t border-slate-200 px-6 pt-8 text-center dark:border-slate-800">
        <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <p className="mt-2 font-sans text-xs text-slate-400 dark:text-slate-500">
          Designed and managed by{' '}
          <a
            href="https://anyscreen.in"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-600 hover:underline dark:text-sky-400"
          >
            anyscreen.in
          </a>
        </p>
      </div>
    </footer>
  )
}
