import { MapPin } from 'lucide-react'
import { openingHours, site } from '../data/site'
import SectionHeading from './SectionHeading'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`

export default function LocationSection() {
  return (
    <section className="border-t border-line bg-shell py-24 lg:py-32" aria-labelledby="find-us">
      <div className="shell">
        <SectionHeading
          id="find-us"
          title="Find Us"
          subtitle="On George Street, a few minutes from Wynyard. Dinner from five, Tuesday to Sunday."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-16">
          <div>
            <h3 className="font-display text-2xl tracking-[0.06em] text-ink">
              {site.name.toUpperCase()}
            </h3>
            <address className="mt-4 not-italic leading-relaxed text-muted">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.country}
            </address>

            <h3 className="mt-12 font-display text-2xl text-ink">Opening Hours</h3>
            <dl className="mt-4 divide-y divide-line border-t border-line">
              {openingHours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-[0.95rem] text-graphite">{entry.days}</dt>
                  <dd
                    className={
                      entry.closed
                        ? 'text-[0.95rem] text-saffron'
                        : 'text-[0.95rem] text-muted'
                    }
                  >
                    {entry.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative border border-line bg-paper p-2">
            <iframe
              title={`Map showing ${site.address.full}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full grayscale-[0.35] sm:h-[26rem] lg:h-[32rem]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
            >
              <MapPin className="h-9 w-9 fill-paper text-saffron drop-shadow-sm" />
            </div>

            <p className="pointer-events-none absolute bottom-6 left-6 right-6 bg-paper/95 px-5 py-3 text-center text-[0.85rem] text-graphite sm:right-auto sm:text-left">
              <span className="font-display text-[1.05rem] tracking-[0.08em] text-ink">
                {site.name.toUpperCase()}
              </span>
              <span className="mt-0.5 block text-muted">{site.address.full}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
