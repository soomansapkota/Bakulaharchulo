import { useState } from 'react'
import { cx } from '../lib/cx'

interface PhotoProps {
  src: string
  alt: string
  /** Wrapper classes: set the aspect ratio here. */
  className?: string
  imgClassName?: string
  /** Slow zoom when an ancestor with `group` is hovered. */
  zoom?: boolean
  eager?: boolean
  sizes?: string
}

/**
 * Image with a quiet placeholder while it loads and a warm fallback panel if
 * the file is unavailable, so a missing photograph never breaks a layout.
 */
export default function Photo({
  src,
  alt,
  className,
  imgClassName,
  zoom = false,
  eager = false,
  sizes,
}: PhotoProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  return (
    <div className={cx('relative overflow-hidden bg-beige', className)}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          className={cx(
            'h-full w-full object-cover transition duration-[900ms] ease-soft',
            status === 'ready' ? 'opacity-100' : 'opacity-0',
            zoom && 'group-hover:scale-[1.04]',
            imgClassName,
          )}
        />
      )}

      {status === 'error' && (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#F3EDE3_0%,#E9E0D1_100%)]"
        >
          <span aria-hidden="true" className="h-8 w-8 rounded-full border border-gold/60" />
        </div>
      )}
    </div>
  )
}
