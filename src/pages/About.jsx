import { Link } from 'react-router-dom'
import { BRAND } from '../data/orthocareCatalog'

export function About() {
  return (
    <main className="mx-auto max-w-[720px] flex-grow px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold text-on-surface">About {BRAND.name}</h1>
      <p className="mb-4 text-lg leading-relaxed text-on-surface-variant">
        {BRAND.name} provides home and hospital care services, medical equipment on rent,
        and quality health products for sale. Our team includes trained nursing staff,
        caretakers, physiotherapists, and equipment specialists.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
        Browse our services online, then call us to confirm availability, pricing, and
        delivery — your phone will dial our booking line automatically.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/home-care"
          className="inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-container"
        >
          Home care services
        </Link>
        <Link
          to="/rent"
          className="inline-flex rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary-fixed"
        >
          Equipment on rent
        </Link>
      </div>
    </main>
  )
}
