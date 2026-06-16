import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookingLink } from './BookingLink'
import { formatPrice } from '../data/catalog'
import { availabilityBadge } from '../data/products'

export function CatalogListing({ title, subtitle, items, listingLabel }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q),
    )
  }, [items, query])

  return (
    <main className="mx-auto max-w-[1280px] flex-grow px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
                      <BookingLink
                        productName={p.name}
                        aria-label={`Call to book ${p.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100"
                      >
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </BookingLink>
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </span>
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
