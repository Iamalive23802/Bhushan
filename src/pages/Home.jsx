import { Link } from 'react-router-dom'
import { BookingLink } from '../components/BookingLink'
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
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white lg:py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-6 text-center md:grid-cols-4 lg:px-8">
          {[
            ['10+', 'Care Services'],
            ['17+', 'Sale Items'],
            ['17+', 'Rent Items'],
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
