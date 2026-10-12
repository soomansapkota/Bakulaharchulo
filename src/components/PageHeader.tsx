import type { ReactNode } from 'react'
import Photo from './Photo'

/** Dark photo banner that opens every inner page. */
export default function PageHeader({
  kicker,
  title,
  subtitle,
  image,
  imageAlt = '',
}: {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  image: string
  imageAlt?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-char pb-20 pt-40 text-center text-white lg:pb-28 lg:pt-48">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo
          src={image}
          alt={imageAlt}
          eager
          className="h-full w-full bg-char"
          imgClassName="scale-105"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(27,21,18,0.7)_0%,rgba(27,21,18,0.5)_45%,rgba(27,21,18,0.88)_100%)]"
      />

      <div className="shell animate-rise">
        <p className="section-kicker text-flame">{kicker}</p>
        <h1 className="mt-5 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
