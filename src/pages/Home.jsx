import { Link } from 'react-router-dom'
import { BookingLink, WhatsAppLink } from '../components/BookingLink'
import { STORE_ADDRESS, STORE_LOCATION_URL } from '../config/booking'
import { formatPrice } from '../data/catalog'
import { IMAGES } from '../data/images'
import {
  BRAND,
  featuredOrthocareSlugs,
  getOrthocareItem,
} from '../data/orthocareCatalog'
import { availabilityBadge } from '../data/products'

const serviceCategories = [
  {
    to: '/home-care',
    icon: 'medical_services',
    title: 'Home & Hospital Care',
    sub: 'Nursing, ICU at home, elder & baby care',
    emoji: '🏥',
  },
  {
    to: '/sale',
    icon: 'shopping_bag',
    title: 'Products for Sale',
    sub: 'Walkers, monitors, Tynor, commodes & more',
    emoji: '👇',
  },
  {
    to: '/rent',
    icon: 'published_with_changes',
    title: 'On Rent',
    sub: 'O₂, BiPAP, beds, monitors, pumps & tests',
    emoji: '👇',
  },
]

const trustMetrics = [
  ['24/7', 'Phone support'],
  ['Same day', 'Delivery options'],
  ['50+', 'Care products'],
  ['Sanitized', 'Before dispatch'],
]

const quickNeeds = [
  {
    to: '/product/icu-setup-at-home',
    icon: 'monitor_heart',
    title: 'ICU setup at home',
    body: 'Beds, oxygen, monitors, staff, and setup support for critical recovery.',
  },
  {
    to: '/rent',
    icon: 'respiratory_rate',
    title: 'Oxygen & respiratory',
    body: 'O2 concentrators, cylinders, CPAP, BiPAP, and ventilator support.',
  },
  {
    to: '/home-care',
    icon: 'personal_injury',
    title: 'Nursing & attendants',
    body: 'Male and female nursing staff, caretakers, elder care, and baby care.',
  },
]

const carePromises = [
  'Fast local booking by phone',
  'Delivery, setup, and pickup assistance',
  'Trained staff for home and hospital care',
  'Clear rent, sale, and service categories',
]

const customerReviews = [
  {
    name: 'Amit Patil',
    location: 'Kalyan West',
    review:
      'We needed an oxygen concentrator urgently for my father. The team explained everything on call and delivered it the same day.',
  },
  {
    name: 'Priya Shah',
    location: 'Dombivli',
    review:
      'Booked a wheelchair and caretaker support for my mother after surgery. Very polite staff and clear guidance on rent and pickup.',
  },
  {
    name: 'Ramesh Jadhav',
    location: 'Ulhasnagar',
    review:
      'Good service for hospital bed rental. Setup was done properly at home and Bhushan ji was available on WhatsApp for questions.',
  },
]

export function Home() {
  const featured = featuredOrthocareSlugs
    .map((s) => getOrthocareItem(s))
    .filter(Boolean)

  return (
    <main className="flex-grow">
      <section className="relative overflow-hidden bg-surface-container-lowest">
        <div className="mx-auto grid min-h-[520px] max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 lg:min-h-[600px] lg:px-8 lg:py-12">
          <div className="z-10 min-w-0">
            <span className="mb-4 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-wider text-on-secondary-container">
              Home · Hospital · Sale · Rent
            </span>
            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight text-on-surface lg:text-5xl">
              {BRAND.name}
            </h1>
            <p className="mb-6 text-lg font-medium text-primary">{BRAND.tagline}</p>
            <p className="mb-8 max-w-lg text-lg text-on-surface-variant">
              Nursing staff, ICU setup at home, elder & baby care, physiotherapy, medical
              equipment on rent, oxygen & ventilator support, surgical supplies — and
              everyday health products for sale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/home-care"
                className="rounded-lg bg-primary px-8 py-4 font-semibold text-white shadow-level-2 transition-all hover:bg-primary-container active:scale-95"
              >
                Home Care Services
              </Link>
              <BookingLink className="rounded-lg bg-secondary-container px-8 py-4 font-semibold text-on-secondary-container transition-all hover:bg-outline-variant">
                Call to Book
              </BookingLink>
              <WhatsAppLink className="rounded-lg border border-green-200 bg-green-50 px-8 py-4 font-semibold text-green-700 transition-all hover:bg-green-100">
                WhatsApp Inquiry
              </WhatsAppLink>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustMetrics.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-white/80 p-3 shadow-level-1"
                >
                  <div className="text-lg font-bold text-primary">{value}</div>
                  <div className="text-xs font-medium text-on-surface-variant">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative z-10 overflow-hidden rounded-xl shadow-level-2">
              <img
                src={IMAGES.homeCare}
                alt="Healthcare professional supporting a patient at home"
                className="h-[340px] w-full object-cover md:h-[460px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-primary-fixed/40 py-4">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3 text-on-surface">
            <span className="material-symbols-outlined rounded-full bg-white p-2 text-primary">
              support_agent
            </span>
            <div>
              <p className="font-semibold">Need urgent care equipment or staff?</p>
              <p className="text-sm text-on-surface-variant">
                Call now to confirm availability, rent dates, delivery, or home-care shifts.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white shadow-level-1 hover:bg-primary-container">
              <span className="material-symbols-outlined text-lg">call</span>
              Talk to our team
            </BookingLink>
            <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white shadow-level-1 hover:bg-green-700">
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp Inquiry
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-on-surface">
              Our Services
            </h2>
            <p className="mt-2 max-w-2xl text-base text-on-surface-variant">
              Choose home & hospital care, purchase medical products, or rent equipment
              with delivery and setup.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceCategories.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-xl border border-slate-100 bg-white p-8 shadow-level-1 transition-all hover:border-primary/30 hover:shadow-level-2"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-3xl">{c.icon}</span>
                  </div>
                  <span className="text-2xl" aria-hidden>
                    {c.emoji}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-on-surface">{c.title}</h3>
                <p className="text-sm text-on-surface-variant">{c.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">
                  View all
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Quick help
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-on-surface">
                Find the right support faster
              </h2>
            </div>
            <p className="max-w-xl text-on-surface-variant">
              Start with the most common needs, then call us for exact availability and
              setup guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {quickNeeds.map((need) => (
              <Link
                key={need.title}
                to={need.to}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-level-1 transition-all hover:-translate-y-1 hover:shadow-level-2"
              >
                <span className="material-symbols-outlined mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-3xl text-primary group-hover:bg-primary group-hover:text-white">
                  {need.icon}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-on-surface">{need.title}</h3>
                <p className="mb-4 text-sm leading-6 text-on-surface-variant">{need.body}</p>
                <span className="inline-flex items-center gap-1 font-semibold text-primary">
                  Explore
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-semibold text-on-surface">
              Popular Services & Equipment
            </h2>
            <p className="mx-auto max-w-xl text-base text-on-surface-variant">
              Tap any item for details — then call us to confirm booking, rent, or purchase.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => {
              const badge = availabilityBadge(p.availability)
              const price = formatPrice(p)
              return (
                <article
                  key={p.slug}
                  className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-level-1"
                >
                  <Link to={`/product/${p.slug}`} className="relative block h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.heroImageAlt}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-4 right-4 rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </Link>
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-on-surface">{p.name}</h3>
                      <span className="whitespace-nowrap text-sm font-semibold text-primary">
                        {price.main}
                        {price.suffix}
                      </span>
                    </div>
                    <p className="mb-6 flex-grow text-sm text-on-surface-variant">
                      {p.shortDescription}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/product/${p.slug}`}
                        className="w-full rounded-lg bg-secondary-container py-3 text-center font-semibold text-on-secondary-container transition-all hover:bg-primary hover:text-white"
                      >
                        View details
                      </Link>
                      <BookingLink
                        productName={p.name}
                        className="w-full rounded-lg border border-primary/30 py-3 text-center font-semibold text-primary transition-colors hover:bg-primary-fixed"
                      >
                        Book by phone
                      </BookingLink>
                      <WhatsAppLink
                        productName={p.name}
                        className="w-full rounded-lg border border-green-200 bg-green-50 py-3 text-center font-semibold text-green-700 transition-colors hover:bg-green-100"
                      >
                        WhatsApp inquiry
                      </WhatsAppLink>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <span className="mb-3 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
              Why choose us
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-on-surface">
              Built for families who need dependable care quickly
            </h2>
            <p className="text-on-surface-variant">
              Royal Orthocare Center keeps home care, hospital care, sale products, and
              rental equipment in one simple place so families can act without confusion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {carePromises.map((promise) => (
              <div
                key={promise}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5 shadow-level-1"
              >
                <span className="material-symbols-outlined text-primary">verified</span>
                <p className="font-medium text-on-surface">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Customer reviews
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-on-surface">
              Trusted by families around Kalyan
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-on-surface-variant">
              Real support for home care, medical equipment rent, and urgent health
              product needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {customerReviews.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-level-1"
              >
                <div className="mb-4 flex gap-1 text-amber-500" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-6 text-on-surface-variant">
                  "{item.review}"
                </p>
                <div>
                  <p className="font-semibold text-on-surface">{item.name}</p>
                  <p className="text-sm text-outline">{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-level-1">
            <span className="mb-3 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
              Shop location
            </span>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-on-surface">
              Visit Royal Orthocare Center in Kalyan West
            </h2>
            <address className="mb-6 not-italic leading-7 text-on-surface-variant">
              {STORE_ADDRESS.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={STORE_LOCATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white shadow-level-1 hover:bg-primary-container"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                Open in Google Maps
              </a>
              <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white shadow-level-1 hover:bg-green-700">
                <span className="material-symbols-outlined text-lg">chat</span>
                Ask for directions
              </WhatsAppLink>
            </div>
          </div>
          <div className="rounded-2xl bg-primary p-8 text-white shadow-level-2">
            <span className="material-symbols-outlined mb-5 text-5xl">location_on</span>
            <h3 className="mb-3 text-2xl font-semibold">Near Kotak Mahindra Bank</h3>
            <p className="mb-6 text-white/80">
              Customers can visit the shop for product purchase, rent discussions,
              availability confirmation, and medical equipment guidance.
            </p>
            <BookingLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary hover:bg-primary-fixed">
              <span className="material-symbols-outlined text-lg">call</span>
              Call before visiting
            </BookingLink>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white lg:py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-6 text-center md:grid-cols-4 lg:px-8">
          {[
            ['10+', 'Care Services'],
            ['18+', 'Sale Items'],
            ['21+', 'Rent Items'],
            ['24/7', 'Phone Booking'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="mb-1 text-3xl font-bold md:text-4xl">{n}</div>
              <div className="font-sans text-xs font-medium uppercase tracking-widest opacity-80">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
