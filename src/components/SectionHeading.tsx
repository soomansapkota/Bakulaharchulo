import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  id,
  className,
}: {
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  id?: string
  className?: string
}) {
  return (
    <div className={cx(align === 'center' && 'text-center', className)}>
      <h2 id={id} className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.2rem]">
        {title}
      </h2>
      {subtitle && (
        <div className={cx(align === 'center' && 'flex justify-center', 'mt-4')}>
          <p
            className={cx(
              'max-w-xl text-[1rem] leading-relaxed text-graphite/80',
              align === 'center' && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}
