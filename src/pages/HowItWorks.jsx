import { BookingLink } from '../components/BookingLink'

const steps = [
  {
    icon: 'inventory_2',
    title: '1. Select Equipment',
    body:
      'Browse certified medical devices—from diagnostic tools to home-care essentials.',

    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDn_90GdLpvljNzA1g6tT1NiBc6-Ci9qeWHQc-_mplt32OxMJrwyq-dcJ-FcROw2_Zs4UPhmH4hXQMRkLVw3uJV0d2OXLnOSy8Tc65xD2Xo8HpZ0OboOPUn3naCOA9BWIkCaRKPNWTrWIqZl2BLlwcNcGCn5rIuEr7oZto9fPqaCIaIx8AdiXn8kBdzsxi2lgztTpQNPCjddRyveVtZ_zl5pnRn-NCO5Cj5l8NqVtehHb9B8KFV73UDStIXIGccNEjjGMadufOtiIn',
  },
  {
    icon: 'call',
    title: '2. Call to Confirm',
    body:
      'Speak with specialists to verify availability, specifications, and sterilization for your dates.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRWmBAnYvAceCOKaeW_7_0mIwpabudtoxsBFt5bdnRBZaDHw-te3TKC8BPuzpYHnlMEg-UMb4jfsAUSMnGLO4I_2YX0xCUT5o0fnRvHuZVKxz0BcU5loLzp-AkEdicVjF6GPkw29eW7SK8Vg_c1mWCVOVcSUVbl-ihW3uye1Ba1Rfjkn2miQVhA_OV10Rl1FSM2T4eAMiGBCqa58H3EkKIE-VF1BWcEHDhVFPO843gnxZZ5lDinTHH-rrHTOh2lzXUSCqoePTzLhif',
  },
  {
    icon: 'local_shipping',
    title: '3. Delivery or Pickup',
    body: 'Choose rapid home delivery or secure pickup at our sterilization center.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdxX0LBCvaA6P3cwxLAZTcrH_WwtEZ9YtiIE5vsNSGV53A6TPh-Q-pf_baZd0y2wIJi8yErVy9dPQpOioZhmvE1_z_iLoqNCcsftNzOaipFkthrV2VJSYp9O0iDA39W824w54KHGpsRI48cYXPV8YEnu5Gju10lIkrOI8Qc89yuaqHm3jd_xf2tzXyMHW0XwV3PkGFP3xvLK40ccOcLVmyQ6TYDOtXwlvgs40Z6s3ALajTaJic87yzikBcJFKryi2hvK267olyGsk-',
  },
]

export function HowItWorks() {
  return (
    <main className="mx-auto max-w-[1280px] flex-grow px-6 py-12">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-on-surface lg:text-4xl">
          How Royal Orthocare Center Works
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          Choose a service or product, review details on our site, then call us to
          confirm care staff, rent dates, or purchase — we handle delivery and setup.
        </p>
      </section>

      <section className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="flex flex-col items-center rounded-xl border border-outline-variant bg-surface-container-lowest p-6 text-center shadow-level-1"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed text-primary">
              <span className="material-symbols-outlined text-3xl">{s.icon}</span>
            </div>
            <h2 className="mb-3 text-xl font-semibold">{s.title}</h2>
            <p className="mb-5 text-sm text-on-surface-variant">{s.body}</p>
            <img
              src={s.img}
              alt=""
              className="h-48 w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </section>

      <section className="mb-14 rounded-xl bg-surface-container-low p-8 lg:p-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How are the items sterilized?',
                a: 'Equipment follows a rigorous multi-stage process aligned with ISO 13485 before sealed transport.',
              },
              {
                q: 'What is the typical lead time?',
                a: 'Many standard items can go out same-day if confirmed before 11:00 AM. Specialty kits may require 24 hours.',
              },
              {
                q: 'Do you offer emergency replacements?',
                a: 'Our Pro-Priority lanes support rapid replacements for urgent clinical scenarios.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-lg border border-outline-variant bg-surface-container-lowest p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 text-sm text-on-surface-variant">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-lg lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">General inquiries</h2>
            <p className="mb-8 text-on-surface-variant">
              Bulk orders or unique clinical requirements? Reach out for quoting and
              logistics planning.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>support@medequippro.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">phone</span>
                <BookingLink className="font-medium hover:underline">
                  Prefer to book by phone — tap to call
                </BookingLink>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <span>Medical District, Suite 400</span>
              </div>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label className="mb-2 block text-sm font-semibold">Full name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-outline-variant bg-white p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-outline-variant bg-white p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-outline-variant bg-white p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 font-semibold text-white shadow-md hover:bg-primary-container"
            >
              Send inquiry
            </button>
            <p className="text-center text-xs text-on-surface-variant">
              This demo form does not submit anywhere; use “Call to Book” for real
              scheduling.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
