import {
  formatPrice as formatLegacyPrice,
  getProductForPage,
  products,
} from './products'
import {
  getOrthocareItem,
  orthocareCatalog,
  LISTING_LABELS,
} from './orthocareCatalog'

export { LISTING_LABELS, orthocareCatalog }

export function getCatalogItem(slug) {
  return getOrthocareItem(slug) ?? getProductForPage(slug) ?? null
}

export function formatPrice(item) {
  if (item.priceMode === 'on-request') {
    return { main: 'Call for price', suffix: '' }
  }
  return formatLegacyPrice(item)
}

export function getListingLabel(item) {
  if (item.listingType) return LISTING_LABELS[item.listingType] ?? ''
  return 'Equipment'
}

export function getListingPath(listingType) {
  if (listingType === 'home-care') return '/home-care'
  if (listingType === 'sale') return '/sale'
  if (listingType === 'rent') return '/rent'
  return '/rent'
}

export function getRelatedCatalogItems(item, limit = 4) {
  if (!item?.listingType) return []
  return orthocareCatalog
    .filter((i) => i.listingType === item.listingType && i.slug !== item.slug)
    .slice(0, limit)
}

export { products }
