import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CATEGORY_LABELS,
  availabilityBadge,
  formatPrice,
  products as allProducts,
} from '../data/products'
import { BookingLink } from '../components/BookingLink'

const CATEGORIES = [
  { key: 'mobility', label: 'Mobility Aids' },
  { key: 'respiratory', label: 'Respiratory' },
  { key: 'hospital-beds', label: 'Hospital Beds' },
  { key: 'monitoring', label: 'Monitoring' },
  { key: 'orthopedics', label: 'Orthopedics' },
  { key: 'infusion', label: 'Infusion' },
  { key: 'sterilization', label: 'Sterilization' },
]

export function Catalog() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(() =>
    Object.fromEntries(CATEGORIES.map((c) => [c.key, false])),
  )
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const anyCat = Object.values(selected).some(Boolean)
    return allProducts.filter((p) => {
      if (onlyAvailable && p.availability !== 'available') return false
      if (anyCat && !selected[p.category]) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        CATEGORY_LABELS[p.category].toLowerCase().includes(q)
      )
    })
  }, [query, selected, onlyAvailable])

  function toggleCategory(key) {
    setSelected((s) => ({ ...s, [key]: !s[key] }))
  }

  return (
    <main className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-8 lg:flex-row lg:py-10">
      <aside className="w-full shrink-0 space-y-6 lg:w-64">
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-level-1">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Filters</h2>
          <div className="mb-6 md:hidden">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Search
            </label>
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <span className="material-symbols-outlined mr-2 text-slate-400">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Keywords..."
                className="w-full border-none bg-transparent p-0 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
              Categories
            </p>
            <div className="space-y-2">
              {CATEGORIES.map(({ key, label }) => (
                <label key={key} className="group flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selected[key]}
                    onChange={() => toggleCategory(key)}
                    className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                  />
                  <span className="text-sm text-slate-600 transition-colors group-hover:text-sky-600">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
              Availability
            </p>
            <label className="group flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={() => setOnlyAvailable((v) => !v)}
                className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-sky-600">
                Available now
              </span>
            </label>
          </div>
        </div>
        <div className="rounded-xl border border-sky-100 bg-sky-50 p-6">
          <span className="material-symbols-outlined mb-2 text-sky-600">
            support_agent
          </span>
          <p className="mb-1 font-semibold text-sky-900">Need help choosing?</p>
          <p className="mb-4 text-sm text-sky-700">
            Our medical specialists are available 24/7 for consultations.
          </p>
          <BookingLink className="font-semibold text-sky-600 hover:underline">
            Speak with an Expert
          </BookingLink>
        </div>
      </aside>

      <section className="min-w-0 flex-1">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Equipment Catalog
            </h1>
            <p className="mt-2 text-lg text-slate-500">
              Professional grade medical equipment, sterilized and ready for use.
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5">
              <span className="material-symbols-outlined text-outline text-[20px]">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search equipment..."
                className="w-48 border-none bg-transparent text-sm focus:ring-0"
              />
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-slate-500">
          Showing {filtered.length} of {allProducts.length} results
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => {
            const badge = availabilityBadge(p.availability)
            const price = formatPrice(p)
            const canBook = p.availability === 'available'
            return (
              <div
                key={p.slug}
                className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-level-1 transition-shadow hover:shadow-lg"
              >
                <div className="group relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.heroImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-slate-900">{p.name}</h3>
                  <p className="mb-4 text-sm text-slate-500">{p.shortDescription}</p>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-slate-900">
                      {price.main}
                    </span>
                    {price.suffix ? (
                      <span className="text-sm text-slate-500">{price.suffix}</span>
                    ) : null}
                  </div>
                  <div className="flex gap-2 border-t border-slate-50 pt-4">
                    <Link
                      to={`/product/${p.slug}`}
                      className="flex-1 rounded-lg bg-slate-50 py-2 text-center font-semibold text-sky-600 transition-colors hover:bg-sky-50"
                    >
                      View Details
                    </Link>
                    {canBook ? (
                      <BookingLink
                        productName={p.name}
                        aria-label={`Call to book ${p.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors hover:bg-sky-100"
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          call
                        </span>
                      </BookingLink>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg bg-slate-200 text-slate-400"
                        title="Not available to book"
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          call
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-slate-500">
            No equipment matches your filters.{' '}
            <button
              type="button"
              className="font-semibold text-primary hover:underline"
              onClick={() => {
                setQuery('')
                setOnlyAvailable(false)
                setSelected(Object.fromEntries(CATEGORIES.map((c) => [c.key, false])))
              }}
            >
              Clear filters
            </button>
          </p>
        ) : null}
      </section>
    </main>
  )
}
