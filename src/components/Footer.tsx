import { Link } from 'react-router-dom'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, openingHours, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-char text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember/20 blur-[120px]"
      />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-[1.6rem] leading-none">
              {site.name}
            </Link>
            <p className="mt-5 max-w-sm text-[0.93rem] leading-relaxed text-white/60">
              {site.blurb}
            </p>
            <p className="mt-5 font-display text-[1.15rem] italic text-flame">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-flame">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-[0.93rem]">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-flame">
              Visit
            </p>
            <ul className="mt-5 space-y-4 text-[0.93rem] text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
                <address className="not-italic leading-relaxed">{site.address.full}</address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
                {site.phone ? (
                  <a href={site.phoneHref} className="hover:text-white">
                    {site.phone}
                  </a>
                ) : (
                  <span>Call for reservations</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-flame">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              Hours
            </p>
            <dl className="mt-5 space-y-2.5 text-[0.9rem]">
              {openingHours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-4">
                  <dt className="text-white/70">{entry.days}</dt>
                  <dd className={entry.closed ? 'text-flame' : 'text-white/50'}>{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[0.8rem] text-white/45 sm:text-left">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
