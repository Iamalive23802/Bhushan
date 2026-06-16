import { CatalogListing } from '../components/CatalogListing'
import { LISTING_LABELS, homeCareServices } from '../data/orthocareCatalog'

export function HomeCare() {
  return (
    <CatalogListing
      title="Home & Hospital Care Services"
      subtitle="Nursing, ICU-at-home, elder & baby care, physiotherapy, and clinical support — delivered with trained staff."
      listingLabel={LISTING_LABELS['home-care']}
      items={homeCareServices}
    />
  )
}
