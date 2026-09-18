import { MapPin, Phone, Mail, Clock3 } from 'lucide-react'
import { site } from '../data/site'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#f2eee5]">
      <div className="shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr_1.15fr] lg:items-start">
          <div>
            <p className="font-display text-[1.7rem] leading-none text-ink">{site.name}</p>
            <p className="mt-4 max-w-sm text-[0.93rem] leading-relaxed text-graphite">{site.blurb}</p>
          </div>

          <div className="rounded-[1.25rem] border border-line bg-paper p-4">
            <div className="mb-3 flex items-center gap-2 text-ink">
              <MapPin className="h-4 w-4 text-saffron" aria-hidden="true" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
                Location
              </span>
            </div>
            <address className="not-italic text-[0.9rem] leading-relaxed text-graphite">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.country}
            </address>
          </div>

          <div className="rounded-[1.25rem] border border-line bg-paper p-4">
            <div className="mb-3 flex items-center gap-2 text-ink">
              <Clock3 className="h-4 w-4 text-saffron" aria-hidden="true" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
                Contact
              </span>
            </div>
            <div className="space-y-2 text-[0.9rem] leading-relaxed text-graphite">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                {site.phone || 'Call for reservations'}
              </p>
              <p className="inline-flex items-center gap-2 break-all">
                <Mail className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                {site.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-line bg-paper">
          <iframe
            title={`Map showing ${site.address.full}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[10rem] w-full"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[0.8rem] text-graphite">
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
