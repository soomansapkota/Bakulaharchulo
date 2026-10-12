import { MapPin } from 'lucide-react'
import { openingHours, site } from '../data/site'
import PageHeader from '../components/PageHeader'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`

export default function Contact() {
  return (
    <div>
      <PageHeader
        kicker="Visit us"
        title="Contact"
        subtitle="Where to find us, and when the kitchen is open."
        image="/images/kitchen.jpg"
      />

      <section className="shell grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-28">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[0_18px_45px_rgba(20,19,17,0.05)] sm:p-8">
            <h2 className="font-display text-3xl">Visit Us</h2>
            <div className="mt-5 flex items-start gap-3 text-muted">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-saffron" aria-hidden="true" />
              <address className="not-italic text-[1.02rem] leading-[1.9]">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </address>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[0_18px_45px_rgba(20,19,17,0.05)] sm:p-8">
            <h2 className="font-display text-3xl">Contact</h2>
            <ul className="mt-5 space-y-2 text-[1.02rem] leading-[1.9] text-graphite">
              <li>
                <a
                  href={site.phoneHref}
                  className="underline-offset-4 transition-colors hover:text-saffron hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all underline-offset-4 transition-colors hover:text-saffron hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[0_18px_45px_rgba(20,19,17,0.05)] sm:p-8">
            <h2 className="font-display text-3xl">Opening Hours</h2>
            <dl className="mt-5 divide-y divide-line border-t border-line">
              {openingHours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-[0.98rem] text-graphite">{entry.days}</dt>
                  <dd
                    className={
                      entry.closed ? 'text-[0.98rem] text-saffron' : 'text-[0.98rem] text-muted'
                    }
                  >
                    {entry.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-paper p-2 shadow-[0_18px_45px_rgba(20,19,17,0.08)]">
            <iframe
              title={`Map showing ${site.address.full}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full rounded-[1.15rem] sm:h-[28rem]"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
