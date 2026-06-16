import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BookingLink } from '../components/BookingLink'
import { BOOKING_PHONE_DISPLAY } from '../config/booking'
import {
  formatPrice,
  getCatalogItem,
  getListingLabel,
  getListingPath,
  getRelatedCatalogItems,
} from '../data/catalog'
import {
  CATEGORY_LABELS,
  availabilityBadge,
  getRelatedForProduct,
} from '../data/products'

export function ProductDetail() {
  const { slug } = useParams()
  const product = slug ? getCatalogItem(slug) : null
  const [thumb, setThumb] = useState(0)

  const gallery = useMemo(() => {
    if (!product) return []
    const main = product.image
    const rest = product.gallery?.length ? product.gallery : []
    if (rest.length) return [main, ...rest]
    return [main]
  }, [product])

  const related = product
    ? product.listingType
      ? getRelatedCatalogItems(product)
      : getRelatedForProduct(product.slug)
    : []

  if (!product) {
    return (
      <main className="mx-auto max-w-[1280px] flex-grow px-6 py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-on-surface">Service not found</h1>
        <Link to="/" className="font-semibold text-primary hover:underline">
          Back to home
        </Link>
      </main>
    )
  }

  const badge = availabilityBadge(product.availability)
  const price = formatPrice(product)
  const listingLabel = getListingLabel(product)
  const listPath = product.listingType
    ? getListingPath(product.listingType)
    : '/rent'
  const canCall = product.availability === 'available'

  return (
    <main className="mx-auto max-w-[1280px] flex-grow px-6 py-10">
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-outline">
        <Link to={listPath} className="hover:text-primary">
          {listingLabel || 'Catalog'}
        </Link>
        <span className="material-symbols-outlined text-base">chevron_right</span>
        <span className="text-on-surface">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-level-1">
            <img
              src={gallery[thumb] ?? product.image}
              alt={product.heroImageAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span
                className={`rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider ${badge.className}`}
              >
                {badge.label}
              </span>
              {product.listingType ? (
                <span className="rounded-full bg-primary px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-white">
                  {listingLabel}
                </span>
              ) : null}
            </div>
          </div>
          {gallery.length > 1 ? (
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(0, 4).map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setThumb(i)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 bg-white shadow-sm transition-colors ${
                    thumb === i
                      ? 'border-primary'
                      : 'border-outline-variant hover:border-primary'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6 lg:col-span-5">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-on-surface lg:text-4xl">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-2xl font-bold text-primary lg:text-3xl">
                {price.main}{' '}
                {price.suffix ? (
                  <span className="text-base font-normal text-outline">{price.suffix}</span>
                ) : null}
              </div>
              {product.rating != null ? (
                <>
                  <div className="hidden h-6 w-px bg-outline-variant sm:block" />
                  <div className="flex items-center gap-1 text-primary">
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-semibold">
                      {product.rating} ({product.reviewCount ?? 0} reviews)
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          </header>

          <p className="text-lg leading-relaxed text-on-surface-variant">
            {product.longDescription || product.shortDescription}
          </p>

          {product.subOptions?.length ? (
            <div className="rounded-lg border border-primary/20 bg-primary-fixed/30 p-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Available options
              </h2>
              <ul className="flex flex-wrap gap-2">
                {product.subOptions.map((opt) => (
                  <li
                    key={opt}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-on-surface shadow-sm"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {product.features?.length ? (
            <div className="space-y-3 pt-2">
              <h2 className="border-b border-outline-variant pb-2 text-sm font-semibold uppercase tracking-widest text-on-surface">
                {product.subOptions?.length ? 'Highlights' : 'Features & specs'}
              </h2>
              <ul className="grid gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-xl text-primary">
                      check_circle
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="space-y-4 rounded-xl border border-primary-fixed-dim bg-secondary-container p-6 shadow-sm">
            <div className="flex items-center gap-3 text-on-secondary-container">
              <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              <div>
                <div className="text-xs font-bold uppercase">Call to book</div>
                <div className="text-xl font-bold">{BOOKING_PHONE_DISPLAY}</div>
              </div>
            </div>
            <p className="text-sm leading-snug text-on-secondary-container opacity-90">
              Call Royal Orthocare Center to book{' '}
              <span className="font-semibold">{product.name}</span>
              {product.listingType === 'sale'
                ? ' for purchase'
                : product.listingType === 'rent'
                  ? ' on rent'
                  : ''}
              .
            </p>
            {canCall ? (
              <BookingLink
                productName={product.name}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-lg font-semibold text-white transition-transform active:scale-[0.98] hover:bg-primary-container"
              >
                <span className="material-symbols-outlined">call</span>
                Call to book now
              </BookingLink>
            ) : (
              <BookingLink className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-600 py-4 text-lg font-semibold text-white hover:bg-slate-700">
                Enquire by phone
              </BookingLink>
            )}
            <p className="text-center text-[11px] text-on-secondary-container/70">
              Your phone will open with our number ready to dial.
            </p>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mt-16 border-t border-outline-variant pt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-on-surface">Related services</h2>
            <Link
              to={listPath}
              className="flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              View all
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => {
              const rp = formatPrice(p)
              return (
                <Link
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.heroImageAlt ?? p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="text-xs font-medium uppercase tracking-wider text-outline">
                      {getListingLabel(p) || CATEGORY_LABELS[p.category] || ''}
                    </div>
                    <h3 className="truncate font-semibold text-on-surface">{p.name}</h3>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-bold text-primary">
                        {rp.main}
                        {rp.suffix}
                      </span>
                      <span className="material-symbols-outlined text-outline transition-colors group-hover:text-primary">
                        add_circle
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ) : null}
    </main>
  )
}
