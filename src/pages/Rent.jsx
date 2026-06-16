import { CatalogListing } from '../components/CatalogListing'
import { LISTING_LABELS, rentItems } from '../data/orthocareCatalog'

export function Rent() {
  return (
    <CatalogListing
      title="Equipment on Rent"
      subtitle="Oxygen, BiPAP, CPAP, beds, monitors, pumps, diagnostic tests, and mobility aids — daily or monthly plans."
      listingLabel={LISTING_LABELS.rent}
      items={rentItems}
    />
  )
}
