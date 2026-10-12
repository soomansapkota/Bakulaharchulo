import type { DishCategory } from '../data/dishes'
import { categories } from '../data/dishes'
import { cx } from '../lib/cx'

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: DishCategory | 'All'
  onChange: (category: DishCategory | 'All') => void
}) {
  return (
    <div className="no-scrollbar -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <div
        role="tablist"
        aria-label="Filter the menu by category"
        className="flex min-w-max justify-start gap-3 sm:justify-center"
      >
        {categories.map((category) => {
          const isActive = category === active
          return (
            <button
              key={category}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => onChange(category)}
              className={cx(
                'whitespace-nowrap rounded-full border px-6 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.12em] transition-all duration-200',
                isActive
                  ? 'border-ember bg-ember text-white shadow-[0_8px_20px_rgba(184,67,43,0.3)]'
                  : 'border-line bg-white text-graphite hover:border-ember hover:text-ember',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
