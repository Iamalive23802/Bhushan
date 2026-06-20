/**
 * Catalog images keyed by slug. Most are locally stored product photos, with
 * the Pexels helper kept as a safe fallback for any future unmatched items.
 */
const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`

const local = (file) => `/catalog/${file}`

/** @type {Record<string, string>} */
export const PRODUCT_IMAGES = {
  // —— Home & hospital care ——
  'nursing-staff': local('nursing-staff.png'),
  'icu-setup-at-home': local('icu-setup-equipment.png'),
  'elder-care-services': local('elder-care.png'),
  'baby-care-services': local('baby-care.png'),
  'caretaker-staff': local('caretaker-staff.png'),
  'physiotherapy': local('physiotherapy-rehab.png'),
  'medical-equipment-on-rent': local('medical-equipment-categories.png'),
  'suction-wheelchair': local('suction-machine-blue.png'),
  'bipap-ventilator': local('ventilator-machine.png'),
  'surgical-items': local('surgical-instruments.png'),

  // —— Sale ——
  'walker-sale': local('walker.png'),
  'wheelchair-sale': local('wheelchair-front.png'),
  'bp-machine-sale': local('bp-machine.png'),
  'medtech-bp-sale': local('medtech-bp.png'),
  'nebulizer-sale': local('nebulizer.png'),
  'pulse-oximeter-sale': local('pulse-oximeter.png'),
  'gloves-sale': local('latex-gloves.png'),
  'diaper-sticker-sale': local('diaper-sticker.png'),
  'diaper-pant-sale': local('diaper-pant.png'),
  'tynor-product-sale': local('tynor-supports.png'),
  'commode-chair-sale': local('commode-chair.png'),
  'commode-stool-sale': local('commode-stool-pink.png'),
  'white-commode-stool-sale': local('white-commode-stool.png'),
  'bed-backrest-sale': local('bed-backrest.png'),
  'baby-wipes-sale': local('baby-wipes.png'),
  'towel-wipes-sale': local('clean-towels.png'),
  'wheel-walker-sale': local('wheel-walker.png'),
  'surgical-instruments-sale': local('surgical-instruments.png'),

  // —— Rent ——
  'o2-machine-rent': local('oxygen-concentrator.png'),
  'bipap-machine-rent': local('cpap-bipap-kit.png'),
  'cpap-machine-rent': local('cpap-machine.png'),
  'suction-machine-rent': local('suction-machine.png'),
  'walker-rent': local('walker-rent.png'),
  'wheelchair-rent': local('wheelchair-side.png'),
  'o2-cylinder': local('oxygen-cylinder.png'),
  'bed-manual-rent': local('examination-table.png'),
  'motorized-bed-rent': local('icu-setup-equipment.png'),
  'wheel-walker-rent': local('wheel-walker.png'),
  'sleep-study-rent': local('sleep-study-kit.png'),
  'holter-test-rent': local('holter-test.png'),
  'abpm-test-rent': local('abpm-device.png'),
  'monitor-rent': local('medical-equipment-categories.png'),
  'infusion-pump-rent': local('infusion-pump.png'),
  'syringe-pump-rent': local('syringe-pump.png'),
  'dvt-pump-rent': local('dvt-pump.png'),
  'ventilator-rent': local('ventilator-machine.png'),
  'defibrillator-rent': local('defibrillator.png'),
  'examination-table-rent': local('examination-table.png'),
  'stretcher-rent': local('stretcher.png'),
}

export function imageForSlug(slug) {
  return PRODUCT_IMAGES[slug] ?? pexels(356040)
}

/** @deprecated Use imageForSlug(slug) — kept for home hero */
export const IMAGES = {
  homeCare: pexels(5215024),
  nursing: PRODUCT_IMAGES['nursing-staff'],
  hospitalBed: PRODUCT_IMAGES['icu-setup-at-home'],
  wheelchair: PRODUCT_IMAGES['wheelchair-sale'],
  walker: PRODUCT_IMAGES['walker-sale'],
  respiratory: PRODUCT_IMAGES['o2-machine-rent'],
}
