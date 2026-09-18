import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { findDish, relatedDishes } from '../data/dishes'
import { price } from '../lib/cx'
import DishCard from '../components/DishCard'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { SpiceMark } from '../components/SpiceMark'

export default function DishDetails() {
  const { dishId } = useParams()
  const dish = dishId ? findDish(dishId) : undefined

  if (!dish) {
    return (
      <div className="shell flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
        <h1 className="text-4xl leading-tight">We cannot find that dish</h1>
        <p className="mt-4 max-w-sm leading-relaxed text-muted">
          It may have been renamed. The full menu is ten dishes long, so it will not take long to
          spot.
        </p>
        <Link
          to="/menu"
          className="mt-10 border border-ink px-8 py-3.5 text-[0.88rem] tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Back to Menu
        </Link>
      </div>
    )
  }

  const related = relatedDishes(dish)

  return (
    <div className="pt-20">
      <div className="shell pt-10">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-[0.88rem] text-muted transition-colors hover:text-saffron"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Menu
        </Link>
      </div>

      <article className="shell grid gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-16">
        <Photo src={dish.image} alt={dish.name} eager className="aspect-[4/5] w-full" />

        <div className="lg:pt-6">
          <p className="text-[0.72rem] tracking-[0.2em] text-saffron">
            {dish.category.toUpperCase()}
          </p>

          <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">{dish.name}</h1>

          <p className="mt-5 font-display text-3xl text-ink">{price(dish.price)}</p>

          <p className="mt-7 max-w-prose text-[1.05rem] leading-[1.9] text-muted">
            {dish.description}
          </p>

          <div className="mt-12">
            <h2 className="font-display text-2xl">Ingredients</h2>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {dish.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-baseline gap-3 text-[0.98rem] text-graphite">
                  <span aria-hidden="true" className="h-px w-4 shrink-0 bg-gold" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            <div className="flex items-center justify-between gap-6 py-4">
              <dt className="text-[0.95rem] text-muted">Category</dt>
              <dd className="text-[0.98rem] text-ink">{dish.category}</dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <dt className="text-[0.95rem] text-muted">Dietary</dt>
              <dd className="text-right text-[0.98rem] text-ink">{dish.dietary.join(' · ')}</dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <dt className="text-[0.95rem] text-muted">Spice level</dt>
              <dd className="flex items-center gap-3 text-[0.98rem] text-ink">
                <SpiceMark level={dish.spice} />
                {dish.spice}
              </dd>
            </div>
          </dl>
        </div>
      </article>

      <section className="border-t border-line bg-shell py-24 lg:py-32" aria-labelledby="related">
        <div className="shell">
          <h2 id="related" className="text-center font-display text-4xl">
            You May Also Like
          </h2>

          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <li key={item.id}>
                <Reveal delay={index * 80} className="h-full">
                  <DishCard dish={item} />
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-block border border-ink px-10 py-4 text-[0.88rem] tracking-[0.12em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
