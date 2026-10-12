import { Link } from 'react-router-dom'
import type { Dish } from '../data/dishes'
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
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-[0_10px_30px_rgba(33,28,26,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/30 hover:shadow-[0_24px_50px_rgba(33,28,26,0.12)]"
      >
        <div className="relative overflow-hidden">
          <Photo
            src={dish.image}
            alt={dish.name}
            zoom
            className="aspect-[5/4] w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-char/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {dish.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-[1.35rem] leading-tight transition-colors group-hover:text-ember sm:text-[1.55rem]">
            {dish.name}
          </h3>

          <p className="mt-3 flex-1 text-[0.86rem] leading-relaxed text-graphite sm:text-[0.92rem]">
            {dish.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
            <span className="flex items-center gap-4">
              <SpiceMark level={dish.spice} />
              <DietaryMark dietary={dish.dietary} />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ember underline-offset-4 group-hover:underline">
              View details
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
