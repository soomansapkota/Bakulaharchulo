import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { cx } from '../lib/cx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      {/* Desktop / Main Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-[#f7f4ee]/95 backdrop-blur-md">
        <nav
          className="shell flex h-20 items-center justify-between gap-8"
          aria-label="Main"
        >
          {/* Restaurant Name */}
          <Link
            to="/"
            className="font-display text-[1.2rem] leading-none text-ink md:text-[1.35rem]"
          >
            {site.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cx(
                      'relative inline-flex items-center text-[0.82rem] font-medium tracking-[0.08em] transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:content-[""]',
                      isActive
                        ? 'text-ink after:scale-x-100'
                        : 'text-graphite hover:text-saffron hover:after:scale-x-100',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center text-ink md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cx(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Overlay */}
        <div
          onClick={close}
          className={cx(
            'absolute inset-0 bg-ink/20 transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Menu Panel */}
        <div
          role="dialog"
          aria-modal={open}
          aria-label="Navigation"
          className={cx(
            'absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-paper transition-transform duration-300 ease-soft',
            open
              ? 'visible translate-x-0'
              : 'invisible translate-x-full',
          )}
        >
          {/* Mobile Header */}
          <div className="flex h-20 items-center justify-between border-b border-line px-6">
            <span className="font-display text-[1.15rem] tracking-[0.12em] text-ink">
              {site.name.toUpperCase()}
            </span>

            <button
              type="button"
              onClick={close}
              aria-label="Close navigation"
              className="grid h-10 w-10 place-items-center text-graphite"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex-1 px-6 py-8">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="border-b border-line/70 last:border-0"
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    cx(
                      'block py-4 font-display text-2xl transition-colors',
                      isActive ? 'text-saffron' : 'text-ink',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}