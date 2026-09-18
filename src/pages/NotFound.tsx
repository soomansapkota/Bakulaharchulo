import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl text-saffron">404</p>
      <h1 className="mt-6 text-4xl leading-tight">This page is not on the menu</h1>
      <p className="mt-4 max-w-sm leading-relaxed text-muted">
        The link may be out of date. Everything worth looking at is a click away.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="border border-ink px-8 py-3.5 text-[0.88rem] tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="border border-line px-8 py-3.5 text-[0.88rem] tracking-[0.1em] text-graphite transition-colors hover:border-ink hover:text-ink"
        >
          View Menu
        </Link>
      </div>
    </div>
  )
}
