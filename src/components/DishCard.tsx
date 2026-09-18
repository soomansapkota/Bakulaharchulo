import { Link } from 'react-router-dom'
import type { Dish } from '../data/dishes'
import { price } from '../lib/cx'
import Photo from './Photo'
import { DietaryMark, SpiceMark } from './SpiceMark'

/**
 * The whole card is one link to the dish page, so keyboard users reach each
 * dish in a single tab stop and screen readers announce it once.
 */
export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="h-full">
      <Link
        to={`/menu/${dish.id}`}
        className="group flex h-full flex-col overflow-hidden border border-line bg-[#f9f6f1] transition-all duration-300 hover:-translate-y-1 hover:border-saffron/60 hover:shadow-[0_18px_40px_rgba(33,28,26,0.06)]"
      >
        <div className="overflow-hidden">
          <Photo
            src={dish.image}
            alt={dish.name}
            zoom
            className="aspect-[5/4] w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-saffron">
            {dish.category}
          </p>

          <div className="mt-3 flex items-baseline justify-between gap-2">
            <h3 className="text-[1.2rem] leading-tight transition-colors group-hover:text-saffron sm:text-[1.5rem]">
              {dish.name}
            </h3>
            <span className="shrink-0 font-sans text-[0.9rem] font-semibold text-ink sm:text-[1rem]">
              {price(dish.price)}
            </span>
          </div>

          <p className="mt-3 text-[0.83rem] leading-relaxed text-graphite sm:text-[0.9rem]">
            {dish.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
            <span className="flex items-center gap-4">
              <SpiceMark level={dish.spice} />
              <DietaryMark dietary={dish.dietary} />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink underline-offset-4 group-hover:text-saffron group-hover:underline">
              View details
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
