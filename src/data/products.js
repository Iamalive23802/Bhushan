export const CATEGORY_LABELS = {
  mobility: 'Mobility',
  respiratory: 'Respiratory',
  'hospital-beds': 'Hospital Beds',
  orthopedics: 'Orthopedics',
  monitoring: 'Monitoring',
  mattresses: 'Mattresses',
  furniture: 'Furniture',
  sterilization: 'Sterilization',
  infusion: 'Infusion',
}

const bedImgMain =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCez37pxNdAkA50v1Zl7-Kp-2IH_gX-QcPN0j1t-TMBFmEzjFtPPF3oQmWzRCHe2B7oTpX-hwWDy8vD16bT0wSU845n4YKCXEKlj1MB0qjEWk1tZotGm6jDo9PRwQy74R2wDC_XmhfTcz5BAIfMunDxlobYYNW6a_ohpizXrpN4-tWJFmD7PledE_kwcY5L4gNtzOpro_HCc0rgOEPUo4oBtYBEP3siyfF7Zm7Q1y6qM2j2B03HYjNSYQ385qXgiFk9d-JsTHLODp5p'

/** @typedef {'available' | 'reserved' | 'maintenance'} Availability */

/** @type {Array<{
 *   slug: string
 *   name: string
 *   category: keyof typeof CATEGORY_LABELS
 *   shortDescription: string
 *   longDescription: string
 *   priceMode: 'purchase' | 'perDay' | 'perMonth'
 *   amount: number
 *   formattedPriceSuffix?: string
 *   availability: Availability
 *   image: string
 *   heroImageAlt: string
 *   gallery?: string[]
 *   features?: string[]
 *   rating?: number
 *   reviewCount?: number
 * }>} */
export const products = [
  {
    slug: 'premium-electric-hospital-bed',
    name: 'Premium Electric Hospital Bed',
    category: 'hospital-beds',
    shortDescription:
      'Fully electric 3-motor bed with pressure-relief-ready frame for home or clinical care.',
    longDescription:
      'Designed for maximum patient comfort and caregiver efficiency, this fully electric bed provides seamless adjustments for head, foot, and overall height. Engineered with medical-grade materials to ensure safety and long-term durability in home care and clinical settings.',
    priceMode: 'perMonth',
    amount: 185,
    availability: 'available',
    image: bedImgMain,
    heroImageAlt:
      'A premium electric hospital bed in a bright modern clinical suite with soft natural light.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlL_IppdW3erCgaIwe5nMMYIUIUv4W5PbHdbjSx_Y2MP8srLBR2vQwNjzMr1yMT3gA1FOR9JovjHqz6YDjpYzbfrqg0LydZ6hKNz_psMC2EzW-9jpcHRUVhNFHAahFoXY4FzV90qjYuluctIwSq_MEggF_7Sk-xSaH50yrnkaZO7sSULqwkT3Z_DCMP21YHbuaXvmlghE_6RjzCgqBdBcnaR2HAvMCTGyBl4DAsmNjugSD1hEPybeXpNab0e9iM7-GgQeGblYSPbRE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARWFb3mDS3492NHbkYMunI5Wql-9jsQ2GDc4Ci-9XwyWri7oNfIQIp5qEXfglAUpg4ZXnx341gWiJeOEXbnXmaGivz9cbYsR-HSZ7UR38tmLP0DuIznshhFqsVojaEEBCduV1Q7szZCS3IGFutjYXuyqHJ_VrxCwXDK6zLwsEhFaaluDLi-IhlUEA50nGfX_Xm3F0KcKbXpCzg8Q1MetTyDI3DsTOw0pe9bfO3TrNLqvLGLr3edeL_FIm-t9ORCuFVSeytAy_qg-Oza',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQQuZHWlQZFKvPMfee73rwb9PLlF_uzqBRd_gpJ8OTuEyI-7VbxQ_TUuZc8CTxtH1Z89nwQP9H9LpFXmPpDL8uGzhcjMK-hj4VuV10YxRwCkZ-rt-wHWMjJqY1cY9iJhPMZgq19yJ7kB8o5xitv6WL15XisBb8MYzshFQFnkMp1XR3iyPxO1TfMTGJVCF0E_BlmQLzdEf8NYB-HdzanyQoqCZtYE0FAjA-RtICgTpn1woJNLbFq-FJmyeFMr3GGSSm9jlOQXH_-2ZL',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD21BzIVkWopH0cKoPNoheU_P8GaSDO5eDwCzEy4QAjYggb0DxkT2urGPXYA4DzKO4_kIgGtRYX5BbZv2EAF6oglTbiDWasJkJNj_4HuH3Sh_JFSM898Zp9wNlj9Ywl-8aEbKhgoIJqGjRLw-sMu6IYl-mJkp2hGDStoQQiexjwn2WevHEzowff8d5Zfd2oyJx5unG8v5_gg9lB_G5iX2nxh4yESN2wTqPx0RG8NeKQ6wUf_P_G4rSxuqiab1OnJk_nlYcSjoSU-j_O',
    ],
    features: [
      'Full electric 3-motor system for independent adjustments',
      'Weight Capacity: 450 lbs (204 kg)',
      'Height Range: 15" to 24" for safe patient transfers',
      'Battery backup included for power outages',
      'Antibacterial surface coating for high hygiene standards',
    ],
    rating: 4.9,
    reviewCount: 42,
  },
  {
    slug: 'lumina-v100-ventilator',
    name: 'Lumina V100 Ventilator',
    category: 'respiratory',
    shortDescription:
      'Advanced respiratory support with real-time analytics and adaptive pressure control.',
    longDescription:
      'Critical-care ventilator with adaptive pressure targeting, waveform analytics, and remote monitoring-ready interfaces for ICU and transport scenarios.',
    priceMode: 'purchase',
    amount: 4250,
    formattedPriceSuffix: '.00',
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjYK5frGaqghW3aqU4bBjwqJXJNYtKITesiWCCzeEv7M69H-_NuUJAdGxy6qqy06DQq2W6qHqfH7SY90VGn6seL4PpRbYNVogYaN7fhd668AI5bZ0j-YlCrCCw1jum2LezXK-SER98GsHa11PU7Wc82-UBc2OtJRQRlU2Q4WBT_4NiPsaMuZjNCtOa1zjWgF_NnyEV_-rcslcgxTqOJdYIWe6vQr6Fp78hS4oGGgrcu7Je7dLq34ewvK1J8IXUbhUJhAj0t-IwxQFc',
    heroImageAlt: 'Medical ventilator display with waveform monitor in ICU lighting.',
    features: ['Volume and pressure ventilation modes', '12" touch interface', 'O₂ blender ready'],
    rating: 4.8,
    reviewCount: 31,
  },
  {
    slug: 'apex-ergo-care-bed',
    name: 'Apex Ergo-Care Bed',
    category: 'hospital-beds',
    shortDescription:
      'Full electric adjustment with integrated weight monitoring and redistribution mattress compatibility.',
    longDescription:
      'Designed for ergonomic patient positioning with electric head, knee, and height motors; integrates with common traction and monitoring accessories.',
    priceMode: 'purchase',
    amount: 2890,
    formattedPriceSuffix: '.00',
    availability: 'reserved',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbxaxT3zMWrD1wH5_gFFcBE_f_0TiY6ci-hUAqdzmsQ-o-_V0MNKoQwtp8BdMSiVA42Q05DEQTZvRevK9McHxIHLrp4zPVGEKXFqgaLUbH6-1wSHc7Ts7NXu6Gt2vCTEyKhcGuUmBHg1HnMhHhjpGpH9QNkjw2_uTqRjd-HgfeMbqOQDFaDjgE468EYOGNA-FeJ2skN339xG7AdN7QIUQgBMnBAnXGS5ewTzFSziJKFqvOaJZBN7PvhQSvGLSiiHeAAUQJvIm3lmyt',
    heroImageAlt: 'Electric hospital bed in a bright clinical patient room.',
    features: ['Full electricTrendelenburg-compatible frame', 'CPR release', '4-brake caster set'],
    rating: 4.7,
    reviewCount: 18,
  },
  {
    slug: 'sonoscan-pro-h5',
    name: 'Sonoscan Pro-H5',
    category: 'monitoring',
    shortDescription:
      'Ultra-portable diagnostic imaging with cloud connectivity and high-definition resolution.',
    longDescription:
      'Compact ultrasound platform with phased-array probes, presets for vascular and bedside applications, and secure export options.',
    priceMode: 'purchase',
    amount: 1150,
    formattedPriceSuffix: '.00',
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChiDQdrE7fYWDQzJJ2Jh2j6f12adgdKp6nrs_cDFpL_iPJUwnM40aIUSrxQJgD86CSAByqQda3UuOdyK-NXb19d_-jCZA9UaagyTSIALQTW35muC4tYVe4_R89WdNVmtilpOVteE2HNngY8IFVamAhHqhikREg-SDMDxO6u4hrOLHLL6s9TcYkGNOqV02foh0pq60uBafVkFuW3cz-jJrfNymxGNgCHfiN6-dWhMUo3MQ1ZGudEMtc1zMx4ZsbjOVCUSkZ4cITUHtK',
    heroImageAlt: 'Portable ultrasound scanner on a charging dock in a clinic.',
    features: ['HD touchscreen', '6-hour battery operation', 'DICOM-compatible export workflow'],
    rating: 4.6,
    reviewCount: 27,
  },
  {
    slug: 'quantum-v-hospital-bed',
    name: 'Quantum-V Hospital Bed',
    category: 'hospital-beds',
    shortDescription: 'Fully adjustable electronic ICU bed with pressure-relief mattress.',
    longDescription:
      'Heavy-duty acute-care frame with integrated siderails, line management, and rapid Trendelenburg release for emergency response.',
    priceMode: 'perDay',
    amount: 45,
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfMC19DGYPS2jxTDdLySm1YSa0dR0pBvaWAuTeuy1LXm6dw01dAUysHnQEbAY9-UQ0G7q3A4gXCYUYeJtSWiiMUgvszGUKuAEFjvzzO6iIQZaWCaNwi6LU0JWREmUVLTH21xMGMSMvLJRu0nVt9_uPHbtwqbjeP_g_l2oBiy4wBQQfW1VhqMeLsPC3C1xVFrFjcIcjrcq7G3k82fUshjS_xJyVc4Oen4uN29bO3eCJWDXIHrkD13J-32v-vEYkPSdI0hAelokGA6ab',
    heroImageAlt: 'Digital ICU hospital bed with white linens in a modern ward.',
    features: ['Electronic head and foot motors', 'IV pole mounts', 'Removable headboard'],
    rating: 4.8,
    reviewCount: 56,
  },
  {
    slug: 'oxyflow-g3-concentrator',
    name: 'OxyFlow G3 Concentrator',
    category: 'respiratory',
    shortDescription: 'Portable 5L pulse-dose concentrator with dual lithium battery packs.',
    longDescription:
      'Lightweight oxygen concentrator with travel-ready batteries, simple interface, and continuous or pulse flow operating modes.',
    priceMode: 'perDay',
    amount: 32,
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBF8BgSB5WfnoR2ITUxCpmDG3miDngSbs3ydudrsyRDEmVhSkGpEjSSFkLhR54qZeVVs5z-jFuL38Z7cnT24hNUz1OC-n5gfmtCn9UFfmSiCWdPqFzT7y_43B6FL7iGBfUgL9RGUaxnYFR3AZaW9TfRgqsZcFIXDO8jXYoPGLd-duTmdVFFfrqIpFKSTgmHHqEATSbHb76gST5kCRWrdcUN08kLZ_tQtBAB8epRnq1hSGdRyUSY-1L-icPKzpmenZB8yIV1WFQKgvS_',
    heroImageAlt: 'Portable oxygen concentrator in a bright home environment.',
    features: ['Up to 5 LPM equivalent pulse', 'Quiet operation', 'FAA travel documentation pack'],
    rating: 4.5,
    reviewCount: 41,
  },
  {
    slug: 'lifescan-v2-vital-monitor',
    name: 'LifeScan V2 Vital Monitor',
    category: 'monitoring',
    shortDescription: 'Wireless multi-parameter monitor with real-time cloud tracking.',
    longDescription:
      'Bedside telemetry with SpO₂, heart rate, and optional NiBP; pairs with gateway for remote observation.',
    priceMode: 'perDay',
    amount: 28,
    availability: 'reserved',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwG-_ozGuC-vGJKhRYXN0NAsgZqNNv_AxvCnGQBSjMP-iaWHhTO8--fsX3GOBQ4KuSYkW4PgFpYJ2NmKc8xhvlYMoIuuZ9Fe2_U99Kibfbfnxxg5yfOO10N3uuT7KQH7aOn3EzzZWRCfeFQtYjkOVuHtXSXCGO4tyUidJcc-RM66kopb7aztRT6FnCTtsLqHRYQyKHtfx7QiaVLQ7Z3idA3SjRaPiS3Mtxt2Wt64gz1ql2xMGX1InXYVf3kRHCbp-VAKcBg0_ybFI6',
    heroImageAlt: 'Digital vital signs monitor on a glass table.',
    features: ['Bluetooth LE sensors', 'Alarm escalation profiles', '8-hour rechargeable battery'],
    rating: 4.4,
    reviewCount: 22,
  },
  {
    slug: 'apex-carbon-wheelchair',
    name: 'Apex Carbon Wheelchair',
    category: 'mobility',
    shortDescription: 'Ultra-lightweight frame with ergonomic support and easy-fold tech.',
    longDescription:
      'Carbon composite frame collapses quickly for vehicles; breathable upholstery and attendant-friendly brakes.',
    priceMode: 'perDay',
    amount: 18,
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_oNAoExuEY0F5fm45FGqxdNJnecLWr8-5kga10BooBXWtlDBm_eedMUEYPCIV-Va_RBDwhVMqSNULxhab9Hz77siNYNUo5p7InPkDl3f_2mr3K76vy_2CSM_QowpOHSLlbZdEE-8kKI4RB97W0j_4y0fFFEPQRK_Cw7mku2bL0tXTCM-ptw2Zsu3eiQaQoNACubWpX9kNYOjo-IibIL_DOh5Fz9L6nHk9YbRkf4wbPo6ucBk2tz6ulxucI-WgrCKrJtjjJ8C1auhi',
    heroImageAlt: 'Lightweight wheelchair in an open-plan living space.',
    features: ['Under 21 lb frame weight', 'Tool-free footrest removal', 'Puncture-resistant tires'],
    rating: 4.9,
    reviewCount: 63,
  },
  {
    slug: 'preciseflow-infusion-pump',
    name: 'PreciseFlow Infusion',
    category: 'infusion',
    shortDescription: 'Smart pump with dose error reduction and wireless integration.',
    longDescription:
      'Drug library capable volumetric infusion pump with occlusion detection and Wi-Fi docking for centralized updates.',
    priceMode: 'perDay',
    amount: 55,
    availability: 'maintenance',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtPBYe5GPSnBHBa3BJ_ZfzCHGydSTbN3S4ln5xrz_gInfnFmggOYU7uOCHpk-nxmCz6Qyd3pXIy1bOm3d5UISxNvNXn2rJxHt8sjYPpxSaJCZnaUw0wzQJoF09NzDOZQyUYvWS8_5VJsnObhrmtsHsswgqcHdfgLXSBnFWBYjzooBQ1aYQ6qISxZp_dUKIelZC1DPAHK9GWfNUKyL_ora_9-AbtnWbwnhBIlU0ATFLmjUoMTmV6nNckv9EPfg-XjNW7YkBIKEg8-TV',
    heroImageAlt: 'Medical infusion pump in a sterile lab setting.',
    features: ['DERS drug library Tier 3 capable', 'Line pressure monitoring', 'Quick-prime cassette'],
    rating: 4.5,
    reviewCount: 15,
  },
  {
    slug: 'sterilepro-s3-autoclave',
    name: 'SterilePro S3 Autoclave',
    category: 'sterilization',
    shortDescription: 'Fast-cycle steam sterilizer for instruments and reusable tools.',
    longDescription:
      'Class B vacuum cycles with Bowie-Dick verification support; compact footprint for satellite clinics.',
    priceMode: 'perDay',
    amount: 110,
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlkmzVYeo2mb19cy3wyLfxh7CYvI5QLb-lhtWXnJdVJE5hdqHR76nmekIuDLABDtq-5-EcELyIjvIvF-N1bDEgURaXMZKm3Axq821QnbdvmXnm2VXwW8beu0DMCdB91IJWqFLaQtao7vTA4zYumH9FGjuLItbnY9mscIprQ5ys7e9s4myd6Hhf44rK5hg913WfEaxkjLJwuyFOZwLLy9HbvOKIV-kc9PXEkSEdq5cRUiOSEG1i8PRxQ5ePtAB-QTMU4qN7d3mRLJlS',
    heroImageAlt: 'Clinical autoclave with stainless finish under LED lighting.',
    features: ['3 fast cycles under 35 minutes', 'USB cycle log export', 'Printer optional'],
    rating: 4.7,
    reviewCount: 9,
  },
]

const RELATED_BY_SLUG = {
  'premium-electric-hospital-bed': [
    'pressure-relief-air-mattress',
    'oxyflow-g3-concentrator',
    'adjustable-over-bed-table',
    'apex-carbon-wheelchair',
  ],
}

/** Catalog entries that mostly appear from related-product links on PDPs. */
const relatedExtras = [
  {
    slug: 'pressure-relief-air-mattress',
    name: 'Pressure Relief Air Mattress',
    category: 'mattresses',
    shortDescription:
      'Alternating-pressure surface designed for ulcer prevention protocols.',
    longDescription:
      'Low-air-loss alternating cells help redistribute pressure across the contact surface—ideal for extended bed rest protocols under specialist guidance.',
    amount: 45,
    priceMode: 'perMonth',
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEAlV4_pwjixKfNyrvGOSOFfMdcjZ2R5_fEpw2qEGWesrUKOlH3hdE8x57u1IfEHP_IghTebbGwO3RCiuLJsBsEB1pz5qCvr98uBATr8pQm6Hd-n7v0Lc6BJP1ls-jjvxcFM-gcLqYKMn_bLjRiJo__aTNdbO2onURiB8QHh23S_6rcGXhJy0GD4xad9Iz8vCeMTIRVulWZCHUcf_HXczwZJ3k1D5SV_mpSPz9cpm8e4JnpM3aqfGQvmHJknwp-uns3UxcCuH7uPbt',
    heroImageAlt: 'Air-pressure relief mattress on a clinical frame.',
    features: ['Low-air-loss zones', 'Quick-connect pump', 'Vapor-permeable cover'],
    rating: 4.7,
    reviewCount: 19,
    gallery: [],
  },
  {
    slug: 'adjustable-over-bed-table',
    name: 'Adjustable Over-Bed Table',
    category: 'furniture',
    shortDescription: 'Height-adjustable surface with spill-edge lip for patient meals.',
    longDescription:
      'Stable H-base glides under the bed; laminate top wipes clean and locks at working height for meals, devices, and therapy items.',
    amount: 15,
    priceMode: 'perMonth',
    availability: 'available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtBUr5fgNwIEQ_3rcPmZYuz-J4PKdgz4CKUXnXQmkQILBVKPZKJRt4y6WN_3AoqRV9BvbI9X8rI5pEdukdWO7tDb5nPlgyOHQNYYxe5DKQ1k4fHI03EYyHRAu1WBRN7FQlhozRzHi3yroS2yGoUOXisaNO-x1dlHMVFCp6_zrQMXRlJ-zEVtMXRgzP4PtH7VHFg9wVD-jxR6XVpZF82L1-9Vk9hscGZhcqPSqLO7zrT0fBusyrG-b9E9r9DZVp2pq6lj7A0GtSsvZA',
    heroImageAlt: 'Over-bed table beside a caregiver chair.',
    features: ['Tool-free height lock', 'Laminate top', 'Twin-wheel locking casters'],
    rating: 4.8,
    reviewCount: 33,
    gallery: [],
  },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) ?? null
}

/** Main catalog plus related-only SKUs reachable by direct URL. */
export function getProductForPage(slug) {
  return (
    products.find((p) => p.slug === slug) ??
    relatedExtras.find((p) => p.slug === slug) ??
    null
  )
}

export function getRelatedForProduct(slug) {
  const wanted = RELATED_BY_SLUG[slug]
  if (!wanted) return []
  const merged = [...products, ...relatedExtras]
  return wanted.map((s) => merged.find((p) => p.slug === s)).filter(Boolean)
}

export function formatPrice(p) {
  const n = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: p.priceMode === 'perDay' ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(p.amount)
  if (p.priceMode === 'perDay') return { main: n, suffix: '/ day' }
  if (p.priceMode === 'perMonth') return { main: n, suffix: '/ month' }
  return { main: n, suffix: '' }
}

export function availabilityBadge(availability) {
  switch (availability) {
    case 'available':
      return { label: 'Available', className: 'bg-green-100 text-green-700' }
    case 'reserved':
      return { label: 'Reserved', className: 'bg-sky-100 text-sky-700' }
    case 'maintenance':
      return { label: 'Maintenance', className: 'bg-yellow-100 text-yellow-700' }
    default:
      return { label: 'Unknown', className: 'bg-slate-100 text-slate-600' }
  }
}
