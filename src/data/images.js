/**
 * Free stock photos (Pexels — pexels.com/license) keyed by catalog slug.
 * Each URL is verified to load; images match the product/service type.
 */
const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=600&q=80`

/** @type {Record<string, string>} */
export const PRODUCT_IMAGES = {
  // —— Home & hospital care ——
  'nursing-staff': pexels(5215024), // nurse with patient
  'icu-setup-at-home': pexels(8460232), // hospital bed in clinical room
  'elder-care-services': pexels(16364306), // senior in wheelchair, care setting
  'baby-care-services': pexels(3875083), // newborn baby
  'caretaker-staff': pexels(7682965), // caregiver with elderly person
  'physiotherapy': pexels(9075500), // physiotherapy / rehab exercise
  'medical-equipment-on-rent': pexels(356040), // medical devices on table
  'suction-wheelchair': pexels(8460122), // hospital room / clinical equipment
  'bipap-ventilator': pexels(6627533), // CPAP/BiPAP mask & sleep therapy
  'surgical-items': pexels(4483323), // medical gloves / clinical supplies

  // —— Sale ——
  'walker-sale': pexels(5390270), // elderly person using walker
  'wheelchair-sale': pexels(3057504), // person in wheelchair
  'bp-machine-sale': pexels(1181395), // blood pressure cuff on arm
  'medtech-bp-sale': pexels(3845625), // doctor taking blood pressure
  'nebulizer-sale': pexels(5849574), // asthma inhaler / respiratory care
  'pulse-oximeter-sale': pexels(6612521), // fingertip health check / vitals
  'gloves-sale': pexels(4483323), // disposable medical gloves
  'diaper-sticker-sale': pexels(7723748), // baby / incontinence care products
  'diaper-pant-sale': pexels(4031777), // personal care supplies
  'tynor-product-sale': pexels(3714533), // knee brace / orthopedic support
  'commode-chair-sale': pexels(6194189), // accessible bathroom / toilet aid
  'commode-stool-sale': pexels(6194189), // accessible bathroom
  'white-commode-stool-sale': pexels(6611691), // white bathroom fixture
  'bed-backrest-sale': pexels(263402), // hospital bed
  'baby-wipes-sale': pexels(3875083), // baby care
  'towel-wipes-sale': pexels(5998514), // clean towels / bathing
  'wheel-walker-sale': pexels(5390270), // walker mobility aid

  // —— Rent ——
  'o2-machine-rent': unsplash('photo-1631815588090-d4bfec5b1ccb'), // oxygen concentrator
  'bipap-machine-rent': pexels(6627533), // BiPAP / sleep apnea mask
  'cpap-machine-rent': pexels(6627533), // CPAP mask & apparatus
  'suction-machine-rent': pexels(4386464), // hospital treatment / clinical care
  'walker-rent': pexels(5390270),
  'wheelchair-rent': pexels(7698026),
  'o2-cylinder': pexels(3822812), // gas / oxygen cylinder
  'bed-manual-rent': pexels(263402), // manual hospital bed
  'motorized-bed-rent': pexels(8460232), // electric hospital bed room
  'wheel-walker-rent': pexels(5390270),
  'sleep-study-rent': pexels(5723884), // sleep monitoring at home
  'holter-test-rent': pexels(3845455), // medical heart monitor on desk
  'abpm-test-rent': pexels(7659579), // blood pressure monitoring
  'monitor-rent': pexels(4031818), // hospital patient monitor screens
  'infusion-pump-rent': pexels(4386464), // IV / hospital care
  'syringe-pump-rent': pexels(4031818), // clinical monitor / ICU equipment
  'dvt-pump-rent': pexels(5471031), // leg compression / circulation therapy
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
