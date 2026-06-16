import { CatalogListing } from '../components/CatalogListing'
import { LISTING_LABELS, saleItems } from '../data/orthocareCatalog'

export function Sale() {
  return (
    <CatalogListing
      title="Products for Sale"
      subtitle="Walkers, wheelchairs, monitors, nebulizers, Tynor supports, commodes, diapers, and more — available for purchase."
      listingLabel={LISTING_LABELS.sale}
      items={saleItems}
    />
  )
}
