import { imageForSlug } from './images'

function withImages(items) {
  return items.map((item) => ({
    ...item,
    image: imageForSlug(item.slug),
  }))
}

export const BRAND = {
  name: 'Royal Orthocare Center',
  tagline: 'Home care, hospital care & medical equipment — sale and rent',
}

/** @typedef {'home-care' | 'sale' | 'rent'} ListingType */
/** @typedef {'available' | 'reserved' | 'maintenance'} Availability */

/**
 * @typedef {Object} CatalogItem
 * @property {string} slug
 * @property {string} name
 * @property {ListingType} listingType
 * @property {string} shortDescription
 * @property {string} longDescription
 * @property {'on-request' | 'purchase' | 'perDay' | 'perMonth'} priceMode
 * @property {number} [amount]
 * @property {Availability} availability
 * @property {string} image
 * @property {string} heroImageAlt
 * @property {string[]} [features]
 * @property {string[]} [subOptions]
 */

/** @type {CatalogItem[]} */
const homeCareServicesRaw = [
  {
    slug: 'nursing-staff',
    name: 'Nursing Staff (Male & Female)',
    listingType: 'home-care',
    shortDescription: 'Qualified male and female nurses for home or hospital shifts.',
    longDescription:
      'Trained nursing professionals for wound care, medication support, vitals monitoring, and post-operative recovery at home or in facility settings. Flexible day and night shifts.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Nurse providing patient care in a clinical setting.',
    features: ['Male & female staff', 'Day / night shifts', 'Home & hospital visits'],
  },
  {
    slug: 'icu-setup-at-home',
    name: 'ICU Setup at Home',
    listingType: 'home-care',
    shortDescription: 'Complete ICU-grade monitoring and bed setup delivered to your home.',
    longDescription:
      'We install hospital beds, monitors, suction, oxygen support, and trained staff to create a safe ICU-at-home environment for critical recovery.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Hospital bed with monitoring equipment in a home care setup.',
    features: ['Bed & monitor package', 'Trained attendant option', '24/7 support line'],
  },
  {
    slug: 'elder-care-services',
    name: 'Elder Care Services',
    listingType: 'home-care',
    shortDescription: 'Compassionate daily living support for seniors at home.',
    longDescription:
      'Personalized elder care including mobility assistance, hygiene, companionship, meal support, and medication reminders from experienced caregivers.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Caregiver assisting an elderly person at home.',
    features: ['Mobility & hygiene help', 'Companionship', 'Medication reminders'],
  },
  {
    slug: 'baby-care-services',
    name: 'Baby Care Services',
    listingType: 'home-care',
    shortDescription: 'Newborn and infant care specialists for families at home.',
    longDescription:
      'Professional baby care staff for feeding support, hygiene, sleep routines, and mother–baby wellness under pediatric guidance.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Newborn baby receiving gentle care.',
    features: ['Newborn specialists', 'Night nanny options', 'Hygiene & feeding support'],
  },
  {
    slug: 'caretaker-staff',
    name: 'Male / Female Caretaker Staff',
    listingType: 'home-care',
    shortDescription: 'Dedicated attendants for patients needing full-time support.',
    longDescription:
      'Male and female caretakers for bedridden patients, post-surgery recovery, and long-term home care with respectful, trained support.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Healthcare attendant supporting a patient.',
    features: ['Male & female attendants', 'Live-in or shift basis', 'Patient hygiene & mobility'],
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    listingType: 'home-care',
    shortDescription: 'Licensed physiotherapists for rehab at home or clinic.',
    longDescription:
      'Orthopedic, neurological, and post-operative physiotherapy with customized exercise plans and pain-management techniques.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Physiotherapist guiding a patient through exercises.',
    features: ['Home visits available', 'Post-surgery rehab', 'Pain & mobility programs'],
  },
  {
    slug: 'medical-equipment-on-rent',
    name: 'Medical Equipment on Rent',
    listingType: 'home-care',
    shortDescription: 'Full range of hospital-grade devices for short- or long-term rent.',
    longDescription:
      'Browse our rental catalog — beds, oxygen, monitors, pumps, and mobility aids with delivery, setup, and pickup.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Medical equipment arranged for home healthcare.',
    features: ['Daily / monthly plans', 'Delivery & setup', 'Sanitized before dispatch'],
  },
  {
    slug: 'suction-wheelchair',
    name: 'Suction Machine & Wheelchair',
    listingType: 'home-care',
    shortDescription: 'Suction units and wheelchairs available for rent or purchase.',
    longDescription:
      'Portable suction machines for airway clearance plus standard and commode wheelchairs — rent by the day or buy outright.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Wheelchair and clinical suction equipment.',
    features: ['Rent or sale', 'Multiple wheelchair types', 'Quick home delivery'],
  },
  {
    slug: 'bipap-ventilator',
    name: 'BiPAP & Ventilator Machine',
    listingType: 'home-care',
    shortDescription: 'Respiratory support devices with setup and usage training.',
    longDescription:
      'BiPAP, CPAP, and ventilator systems for home respiratory care with tubing, filters, and optional sleep-study coordination.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Respiratory ventilator and tubing for home use.',
    features: ['BiPAP & ventilator options', 'Setup training', 'Filter & consumable support'],
  },
  {
    slug: 'surgical-items',
    name: 'Surgical Items Available',
    listingType: 'home-care',
    shortDescription: 'Dressings, disposables, and surgical consumables in stock.',
    longDescription:
      'Gloves, gauze, syringes, and other surgical sundries for clinics, nursing homes, and home care kits.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Sterile surgical instruments and supplies.',
    features: ['Bulk orders welcome', 'Sterile disposables', 'Fast local supply'],
  },
]

/** @type {CatalogItem[]} */
const saleItemsRaw = [
  { slug: 'walker-sale', name: 'Walker', listingType: 'sale', shortDescription: 'Sturdy folding walker for mobility support.', longDescription: 'Adjustable-height walker with non-slip grips — ideal for post-surgery and elderly mobility.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Medical walker for mobility assistance.', features: ['Foldable frame', 'Adjustable height', 'Non-slip feet'] },
  { slug: 'wheelchair-sale', name: 'Wheelchair', listingType: 'sale', shortDescription: 'Standard and lightweight wheelchairs in stock.', longDescription: 'Durable wheelchairs with comfortable seating and reliable brakes for daily use.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Standard medical wheelchair.', features: ['Foldable options', 'Padded seat', 'Attendant brakes'] },
  { slug: 'bp-machine-sale', name: 'B.P. Machine', listingType: 'sale', shortDescription: 'Digital blood pressure monitor for home use.', longDescription: 'Automatic upper-arm BP monitor with large display and irregular heartbeat detection.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Digital blood pressure monitor.', features: ['Memory storage', 'Large LCD', 'WHO indicator'] },
  { slug: 'medtech-bp-sale', name: 'Medtech B.P.', listingType: 'sale', shortDescription: 'Medtech brand blood pressure device.', longDescription: 'Clinic-trusted Medtech BP apparatus for accurate home and facility readings.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Medtech blood pressure device.', features: ['Clinic-grade accuracy', 'Durable cuff', 'Carrying case'] },
  { slug: 'nebulizer-sale', name: 'Nebulizer', listingType: 'sale', shortDescription: 'Compressor nebulizer for asthma and COPD care.', longDescription: 'Quiet nebulizer kit with mask and mouthpiece for effective medication delivery.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Medical nebulizer for respiratory treatment.', features: ['Adult & child mask', 'Low noise motor', 'Easy to clean'] },
  { slug: 'pulse-oximeter-sale', name: 'Pulse Oximeter', listingType: 'sale', shortDescription: 'Finger pulse oximeter for SpO₂ and heart rate.', longDescription: 'Portable fingertip oximeter with bright OLED display for quick vitals checks.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Fingertip pulse oximeter on a patient hand.', features: ['SpO₂ & pulse rate', 'OLED display', 'Auto power-off'] },
  { slug: 'gloves-sale', name: 'Gloves', listingType: 'sale', shortDescription: 'Disposable examination gloves — latex & nitrile.', longDescription: 'Powder-free gloves in multiple sizes for clinical and home care use.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Box of disposable medical gloves.', features: ['Latex & nitrile', 'Multiple sizes', 'Box & bulk packs'] },
  { slug: 'diaper-sticker-sale', name: 'Diaper Sticker', listingType: 'sale', shortDescription: 'Adult diaper pads with adhesive backing.', longDescription: 'High-absorbency sticker-style diaper pads for incontinence care.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Adult incontinence care products.', features: ['High absorbency', 'Skin-friendly', 'Multiple sizes'] },
  { slug: 'diaper-pant-sale', name: 'Diaper Pant', listingType: 'sale', shortDescription: 'Pull-up style adult diaper pants.', longDescription: 'Comfortable diaper pants with elastic waist for active patients and elders.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Adult diaper pants packaging.', features: ['Pull-up design', 'Odor control', 'Unisex sizing'] },
  { slug: 'tynor-product-sale', name: 'Tynor Product', listingType: 'sale', shortDescription: 'Authentic Tynor braces, belts, and supports.', longDescription: 'Orthopedic supports from Tynor — knee caps, lumbar belts, cervical collars, and more.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Orthopedic brace and support products.', features: ['Genuine Tynor range', 'Doctor-recommended', 'Multiple sizes'] },
  { slug: 'commode-chair-sale', name: 'Commode Chair', listingType: 'sale', shortDescription: 'Height-adjustable commode chair with bucket.', longDescription: 'Stable commode chair with armrests and removable pan for bedside use.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Bedside commode chair.', features: ['Removable bucket', 'Armrests', 'Non-slip feet'] },
  { slug: 'commode-stool-sale', name: 'Commode Stool', listingType: 'sale', shortDescription: 'Portable commode stool for bathroom assistance.', longDescription: 'Compact commode stool that fits over standard toilets for safer transfers.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Portable commode stool.', features: ['Lightweight', 'Easy to clean', 'Stable frame'] },
  { slug: 'white-commode-stool-sale', name: 'White Commode Stool', listingType: 'sale', shortDescription: 'White-finish commode stool for home bathrooms.', longDescription: 'Hygienic white commode stool with splash guard and comfortable seat opening.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'White commode stool in a bathroom.', features: ['White hygienic finish', 'Splash guard', 'Compact design'] },
  { slug: 'bed-backrest-sale', name: 'Bed Backrest', listingType: 'sale', shortDescription: 'Adjustable backrest for beds and floor use.', longDescription: 'Foldable bed backrest to support sitting position for patients recovering at home.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Adjustable bed backrest support.', features: ['Multiple angles', 'Fits most beds', 'Washable cover'] },
  { slug: 'baby-wipes-sale', name: 'Baby Wipes', listingType: 'sale', shortDescription: 'Gentle hypoallergenic baby wipes.', longDescription: 'Soft, alcohol-free baby wipes for sensitive skin — bulk packs available.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Pack of baby wipes.', features: ['Hypoallergenic', 'Alcohol-free', 'Bulk packs'] },
  { slug: 'towel-wipes-sale', name: 'Towel Wipes', listingType: 'sale', shortDescription: 'Disposable towel wipes for patient bathing.', longDescription: 'Large disposable towel wipes for bed baths and hygiene without rinsing.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Disposable towel wipes for patient care.', features: ['Rinse-free bathing', 'Thick & absorbent', 'Patient-friendly'] },
  { slug: 'wheel-walker-sale', name: 'Wheel Walker', listingType: 'sale', shortDescription: 'Walker with front wheels for easier movement.', longDescription: 'Two-wheel walker with brakes and seat option for indoor mobility.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Walker with wheels for mobility.', features: ['Front wheels', 'Optional seat', 'Ergonomic grips'] },
]

/** @type {CatalogItem[]} */
const rentItemsRaw = [
  { slug: 'o2-machine-rent', name: 'O₂ Machine', listingType: 'rent', shortDescription: 'Oxygen concentrator on daily or monthly rent.', longDescription: 'Home oxygen concentrator with tubing and humidifier bottle — setup included.', priceMode: 'perDay', amount: 350, availability: 'available', heroImageAlt: 'Home oxygen concentrator machine.', features: ['5L capacity options', 'Setup at home', 'Monthly plans'] },
  { slug: 'bipap-machine-rent', name: 'BiPAP Machine', listingType: 'rent', shortDescription: 'BiPAP device rental with mask fitting.', longDescription: 'Bi-level positive airway pressure device for sleep apnea and respiratory insufficiency.', priceMode: 'perDay', amount: 450, availability: 'available', heroImageAlt: 'BiPAP machine with mask.', features: ['Mask fitting', 'Humidifier option', 'Usage training'] },
  { slug: 'cpap-machine-rent', name: 'CPAP Machine', listingType: 'rent', shortDescription: 'CPAP rental for obstructive sleep apnea.', longDescription: 'Continuous positive airway pressure unit with auto-ramp and filter pack.', priceMode: 'perDay', amount: 400, availability: 'available', heroImageAlt: 'CPAP device on bedside table.', features: ['Auto-ramp', 'Filter replacements', 'Sleep trial support'] },
  { slug: 'suction-machine-rent', name: 'Suction Machine', listingType: 'rent', shortDescription: 'Portable suction unit for airway clearance.', longDescription: 'Electric suction machine with jar and tubing for home tracheostomy and ICU-at-home care.', priceMode: 'perDay', amount: 200, availability: 'available', heroImageAlt: 'Medical suction machine.', features: ['Portable unit', 'Extra jars available', 'Quick delivery'] },
  { slug: 'walker-rent', name: 'Walker', listingType: 'rent', shortDescription: 'Walker rental for short-term recovery.', longDescription: 'Standard walker on rent with deposit — ideal for fracture and surgery recovery.', priceMode: 'perDay', amount: 80, availability: 'available', heroImageAlt: 'Walker available for rent.', features: ['Daily / weekly rates', 'Sanitized before delivery', 'Pickup on return'] },
  { slug: 'wheelchair-rent', name: 'Wheelchair', listingType: 'rent', shortDescription: 'Manual wheelchair daily and monthly rental.', longDescription: 'Comfortable wheelchair with footrests — home delivery and pickup available.', priceMode: 'perDay', amount: 150, availability: 'available', heroImageAlt: 'Wheelchair for rent.', features: ['Foldable models', 'Commode wheelchair option', 'Deposit refundable'] },
  {
    slug: 'o2-cylinder',
    name: 'O₂ Cylinder',
    listingType: 'rent',
    shortDescription: 'Medical oxygen cylinder — rent, refill, and transport.',
    longDescription:
      'Medical-grade oxygen cylinders with regulator. Choose rental, refill service, or transportation to your location.',
    priceMode: 'on-request',
    availability: 'available',
    heroImageAlt: 'Medical oxygen cylinder with regulator.',
    features: ['Rent', 'Refill', 'Transportation'],
    subOptions: ['Rent', 'Refill', 'Transportation'],
  },
  { slug: 'bed-manual-rent', name: 'Bed (Manual)', listingType: 'rent', shortDescription: 'Manual hospital bed with crank adjustments.', longDescription: 'Fowler manual bed with side rails and mattress for home recovery.', priceMode: 'perDay', amount: 250, availability: 'available', heroImageAlt: 'Manual hospital bed for home.', features: ['Crank adjustments', 'Side rails', 'Mattress included'] },
  { slug: 'motorized-bed-rent', name: 'Motorized Bed', listingType: 'rent', shortDescription: 'Electric hospital bed with remote control.', longDescription: 'Full electric bed with head, foot, and height motors plus safety rails.', priceMode: 'perDay', amount: 450, availability: 'available', heroImageAlt: 'Electric motorized hospital bed.', features: ['Remote control', 'Trendelenburg option', 'Mattress & rails'] },
  { slug: 'wheel-walker-rent', name: 'Wheel Walker', listingType: 'rent', shortDescription: 'Wheeled walker on rent for mobility support.', longDescription: 'Rollator-style walker with wheels and brakes for indoor and outdoor use.', priceMode: 'perDay', amount: 100, availability: 'available', heroImageAlt: 'Wheeled walker for rent.', features: ['Brakes', 'Seat option', 'Lightweight frame'] },
  { slug: 'sleep-study-rent', name: 'Sleep Study', listingType: 'rent', shortDescription: 'Home sleep study device and reporting.', longDescription: 'Portable sleep diagnostic kit with technician support and physician-ready reports.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Patient undergoing sleep study monitoring.', features: ['Home-based test', 'Expert analysis', 'CPAP titration support'] },
  { slug: 'holter-test-rent', name: 'Halter Test', listingType: 'rent', shortDescription: '24–48 hour Holter cardiac monitoring.', longDescription: 'Holter monitor rental with electrode kit and cardiologist report coordination.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Holter monitor for cardiac monitoring.', features: ['24–48 hr recording', 'Report assistance', 'Technician setup'] },
  { slug: 'abpm-test-rent', name: 'ABPM Test', listingType: 'rent', shortDescription: 'Ambulatory blood pressure monitoring.', longDescription: 'ABPM device worn for 24 hours to capture blood pressure trends throughout the day.', priceMode: 'on-request', availability: 'available', heroImageAlt: 'Ambulatory blood pressure monitor.', features: ['24-hour profile', 'Automatic readings', 'Physician report'] },
  { slug: 'monitor-rent', name: 'Patient Monitor', listingType: 'rent', shortDescription: 'Multi-parameter bedside monitor rental.', longDescription: 'Vital signs monitor with SpO₂, ECG, NiBP, and alarm settings for home ICU setups.', priceMode: 'perDay', amount: 500, availability: 'available', heroImageAlt: 'Patient vital signs monitor.', features: ['SpO₂ & ECG', 'Alarm limits', 'Battery backup'] },
  { slug: 'infusion-pump-rent', name: 'Infusion Pump', listingType: 'rent', shortDescription: 'IV infusion pump for controlled delivery.', longDescription: 'Volumetric infusion pump with drip set for home IV therapy under prescription.', priceMode: 'perDay', amount: 400, availability: 'available', heroImageAlt: 'Medical infusion pump.', features: ['Rate control', 'Occlusion alarm', 'Battery option'] },
  { slug: 'syringe-pump-rent', name: 'Syringe Pump', listingType: 'rent', shortDescription: 'Precision syringe pump for critical infusions.', longDescription: 'Syringe driver for accurate micro-infusions in pediatric and ICU-at-home care.', priceMode: 'perDay', amount: 350, availability: 'available', heroImageAlt: 'Syringe infusion pump.', features: ['Micro-rate accuracy', 'Multiple syringe sizes', 'Alarm system'] },
  { slug: 'dvt-pump-rent', name: 'DVT Pump', listingType: 'rent', shortDescription: 'Sequential compression DVT prevention pump.', longDescription: 'Intermittent pneumatic compression device with sleeves to reduce DVT risk in immobile patients.', priceMode: 'perDay', amount: 300, availability: 'available', heroImageAlt: 'DVT compression pump with leg sleeves.', features: ['Leg sleeves included', 'Hospital-grade', 'Home ICU compatible'] },
]

export const homeCareServices = withImages(homeCareServicesRaw)
export const saleItems = withImages(saleItemsRaw)
export const rentItems = withImages(rentItemsRaw)

export const orthocareCatalog = [
  ...homeCareServices,
  ...saleItems,
  ...rentItems,
]

export const LISTING_LABELS = {
  'home-care': 'Home & Hospital Care',
  sale: 'For Sale',
  rent: 'On Rent',
}

export function getOrthocareItem(slug) {
  return orthocareCatalog.find((i) => i.slug === slug) ?? null
}

export function getByListingType(listingType) {
  return orthocareCatalog.filter((i) => i.listingType === listingType)
}

export const featuredOrthocareSlugs = [
  'icu-setup-at-home',
  'bipap-machine-rent',
  'wheelchair-rent',
  'nursing-staff',
  'o2-cylinder',
  'walker-sale',
]
