import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '../data/gallery'
import { cx } from '../lib/cx'
import Photo from './Photo'

const ratios = {
  tall: 'aspect-[4/3]',
  square: 'aspect-[4/3]',
  wide: 'aspect-[4/3]',
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (direction: 1 | -1) =>
      setIndex((current) =>
        current === null ? current : (current + direction + images.length) % images.length,
      ),
    [images.length],
  )

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close, step])

  const active = index === null ? null : images[index]

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, position) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setIndex(position)}
              className="group block w-full overflow-hidden rounded-[1.4rem] text-left"
              aria-label={`Open photograph: ${image.caption}`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                zoom
                className={cx('w-full', ratios[image.ratio])}
              />
              <span className="mt-3 block text-[0.85rem] text-muted transition-colors group-hover:text-ink">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex flex-col bg-paper/98 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <p className="text-[0.85rem] text-muted">
              {(index ?? 0) + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center text-graphite transition-colors hover:text-saffron"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-10">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photograph"
              className="absolute left-2 z-10 grid h-11 w-11 place-items-center border border-line bg-paper text-graphite transition-colors hover:text-saffron sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <figure className="w-full max-w-4xl">
              <Photo
                src={active.src}
                alt={active.alt}
                eager
                className="max-h-[70vh] w-full"
                imgClassName="object-contain"
              />
              <figcaption className="mt-4 text-center text-[0.9rem] text-muted">
                {active.caption}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photograph"
              className="absolute right-2 z-10 grid h-11 w-11 place-items-center border border-line bg-paper text-graphite transition-colors hover:text-saffron sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
