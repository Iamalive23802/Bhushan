import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookingLink, WhatsAppLink } from './BookingLink'
import { formatPrice } from '../data/catalog'
import { availabilityBadge } from '../data/products'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Available now', value: 'available' },
  { label: 'Call for price', value: 'on-request' },
]

export function CatalogListing({ title, subtitle, items, listingLabel }) {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const visible = items.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.features?.some((feature) => feature.toLowerCase().includes(q))

      const matchesFilter =
        activeFilter === 'all' ||
        p.availability === activeFilter ||
        p.priceMode === activeFilter

      return matchesQuery && matchesFilter
    })

    return [...visible].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') {
        const aAmount = typeof a.amount === 'number' ? a.amount : Number.MAX_SAFE_INTEGER
        const bAmount = typeof b.amount === 'number' ? b.amount : Number.MAX_SAFE_INTEGER
        return aAmount - bAmount
      }
      return 0
    })
  }, [activeFilter, items, query, sortBy])

  return (
    <main className="mx-auto max-w-[1280px] flex-grow px-6 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          {listingLabel ? (
            <span className="mb-2 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
              {listingLabel}
            </span>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-2 max-w-2xl text-lg text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center rounded-full border border-outline-variant bg-surface-container-low px-4 py-2">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-48 border-none bg-transparent text-sm focus:ring-0 md:w-56"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-outline-variant bg-white p-4 shadow-level-1 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-primary-fixed'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-500">
          Sort
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-outline-variant bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="featured">Featured</option>
            <option value="name">Name A-Z</option>
            <option value="price-low">Lowest price</option>
          </select>
        </label>
      </div>

      <p className="mb-6 text-sm text-slate-500">
        Showing {filtered.length} of {items.length} services
      </p>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-slate-500">
          No items match your search. Try a different keyword.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => {
            const badge = availabilityBadge(p.availability)
            const price = formatPrice(p)
            const canBook = p.availability === 'available'
            return (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-level-1 transition-shadow hover:shadow-lg"
              >
                <Link
                  to={`/product/${p.slug}`}
                  className="group relative block h-48 overflow-hidden bg-slate-100"
                >
                  <img
                    src={p.image}
                    alt={p.heroImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                </Link>
                <div className="flex flex-grow flex-col p-4">
                  <Link
                    to={`/product/${p.slug}`}
                    className="mb-1 font-semibold text-slate-900 hover:text-primary"
                  >
                    {p.name}
                  </Link>
                  <p className="mb-3 line-clamp-2 flex-grow text-sm text-slate-500">
                    {p.shortDescription}
                  </p>
                  {p.subOptions?.length ? (
                    <p className="mb-2 text-xs font-medium text-primary">
                      Options: {p.subOptions.join(' · ')}
                    </p>
                  ) : null}
                  <p className="mb-4 font-semibold text-primary">
                    {price.main}
                    {price.suffix ? (
                      <span className="text-sm font-normal text-slate-500">
                        {price.suffix}
                      </span>
                    ) : null}
                  </p>
                  <div className="flex gap-2 border-t border-slate-50 pt-4">
                    <Link
                      to={`/product/${p.slug}`}
                      className="flex-1 rounded-lg bg-slate-50 py-2 text-center text-sm font-semibold text-sky-600 hover:bg-sky-50"
                    >
                      View details
                    </Link>
                    {canBook ? (
                      <>
                        <BookingLink
                          productName={p.name}
                          aria-label={`Call to book ${p.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100"
                        >
                          <span className="material-symbols-outlined text-[20px]">call</span>
                        </BookingLink>
                        <WhatsAppLink
                          productName={p.name}
                          aria-label={`WhatsApp inquiry for ${p.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                        >
                          <span className="material-symbols-outlined text-[20px]">chat</span>
                        </WhatsAppLink>
                      </>
                    ) : (
                      <>
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-400">
                          <span className="material-symbols-outlined text-[20px]">call</span>
                        </span>
                        <WhatsAppLink
                          productName={p.name}
                          aria-label={`WhatsApp inquiry for ${p.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                        >
                          <span className="material-symbols-outlined text-[20px]">chat</span>
                        </WhatsAppLink>
                      </>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </main>
  )
}
