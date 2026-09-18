import { Flame, Leaf } from 'lucide-react'
import type { SpiceLevel } from '../data/dishes'
import { cx } from '../lib/cx'

const levels: Record<SpiceLevel, number> = { None: 0, Mild: 1, Medium: 2, Hot: 3 }

export function SpiceMark({ level, className }: { level: SpiceLevel; className?: string }) {
  if (level === 'None') return null
  const filled = levels[level]

  return (
    <span className={cx('inline-flex items-center gap-1', className)} title={`${level} spice`}>
      <span className="sr-only">{`Spice level: ${level}`}</span>
      {[1, 2, 3].map((step) => (
        <Flame
          key={step}
          aria-hidden="true"
          className={cx('h-3.5 w-3.5', step <= filled ? 'text-saffron' : 'text-line')}
        />
      ))}
    </span>
  )
}

export function DietaryMark({ dietary }: { dietary: string[] }) {
  const plant = dietary.find((tag) => tag === 'Vegan' || tag === 'Vegetarian')
  if (!plant) return null
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.78rem] text-muted">
      <Leaf className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
      {plant}
    </span>
  )
}
