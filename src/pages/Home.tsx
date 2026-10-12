import { Link } from 'react-router-dom'
import { ArrowRight, Flame, HandPlatter, Soup, Wheat } from 'lucide-react'
import { dishes } from '../data/dishes'
import { galleryImages } from '../data/gallery'
import DishCard from '../components/DishCard'
import LocationSection from '../components/LocationSection'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const heroImage = '/images/khaja-set.jpg'
const introImage = '/images/tandoori-naan.jpg'
const introImageSmall = '/images/chef-tandoor-naan.jpg'
const fireImage = '/images/tandoor-chicken-skewers.jpg'

const featured = [dishes[0], dishes[3], dishes[7]]
const galleryPreview = galleryImages.slice(0, 4)

const highlights = [
  { icon: Flame, title: 'Tandoor fired', body: 'Chicken, sekuwa and naan from the clay oven' },
  { icon: Soup, title: 'Hand-folded momo', body: 'Steamed, fried, jhol and kothey' },
  { icon: Wheat, title: 'Fresh naan', body: 'Slapped onto the tandoor to order' },
  { icon: HandPlatter, title: 'Khaja & khana sets', body: 'Full Nepali plates, made to share' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[min(100svh,1000px)] items-end overflow-hidden bg-char text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Photo
            src={heroImage}
            alt="A khaja set with chicken, fries, peanut sadheko, egg and papad"
            eager
            className="h-full w-full bg-char"
            imgClassName="object-[center_60%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(27,21,18,0.45)_0%,rgba(27,21,18,0.15)_35%,rgba(27,21,18,0.88)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_100%,rgba(184,67,43,0.25),transparent_55%)]"
        />

        <div className="shell pb-20 pt-40 sm:pb-24 lg:pb-28">
          <div className="max-w-3xl animate-rise">
            <p className="section-kicker text-flame">Ratnanagar · Chitwan</p>

            <h1 className="mt-6 text-[3.2rem] leading-[1.02] text-white sm:text-[4.5rem] lg:text-[5.6rem]">
              आगोले स्वाद मिल्छ
            </h1>
            <p className="mt-3 font-display text-[1.5rem] italic text-flame sm:text-[1.9rem]">
              Where fire meets flavour
            </p>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.8] text-white/80">
              Tandoori, momo, khaja sets and home-style Nepali curries, cooked over flame and
              served with warm hospitality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                Explore the Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-ghost text-white hover:bg-white hover:text-char">
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section aria-label="What we are known for" className="grain bg-coal text-white">
        <ul className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={item.title}>
                <Reveal delay={index * 80} className="flex flex-col items-start gap-4 sm:flex-row">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ember/15 text-flame ring-1 ring-flame/30">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-[1.2rem] text-white">{item.title}</span>
                    <span className="mt-1 block text-[0.85rem] leading-relaxed text-white/60">
                      {item.body}
                    </span>
                  </span>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Introduction */}
      <section className="bg-paper py-24 lg:py-32" aria-labelledby="intro">
        <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="section-kicker">Our kitchen</p>
            <h2 id="intro" className="mt-5 text-4xl leading-[1.1] sm:text-5xl">
              A taste of the Himalayas, close to home
            </h2>
            <p className="mt-7 max-w-prose text-[1.05rem] leading-[1.9] text-muted">
              Bakulaharchulo brings the warmth, spices and traditions of Nepal to every table.
              Naan comes straight off the tandoor, momo are folded by hand, and every curry is
              cooked the way it is at home.
            </p>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 text-[0.9rem] font-semibold tracking-[0.06em] text-ember"
            >
              Meet the team
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal delay={100} className="relative pb-16 pr-10 sm:pr-16">
            <Photo
              src={introImage}
              alt="Fresh tandoori naan in a woven basket"
              className="aspect-[4/5] w-full rounded-[1.75rem] shadow-[0_30px_60px_rgba(33,28,26,0.18)]"
            />
            <Photo
              src={introImageSmall}
              alt="The chef shaping naan beside the tandoor"
              className="absolute bottom-0 right-0 aspect-square w-[45%] rounded-[1.5rem] border-[6px] border-paper shadow-[0_20px_40px_rgba(33,28,26,0.2)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="border-t border-line bg-shell py-24 lg:py-32" aria-labelledby="featured">
        <div className="shell">
          <SectionHeading
            id="featured"
            kicker="Signature plates"
            title="From the Menu"
            subtitle="Three dishes that say most about how we cook."
          />

          <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((dish, index) => (
              <li key={dish.id}>
                <Reveal delay={index * 90} className="h-full">
                  <DishCard dish={dish} />
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Link to="/menu" className="btn-primary">
              View Full Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fire */}
      <section className="grain relative overflow-hidden bg-char py-24 text-white lg:py-32" aria-labelledby="fire">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-ember/20 blur-[120px]"
        />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              src={fireImage}
              alt="Chicken skewers roasting over the tandoor fire"
              className="aspect-[4/5] w-full rounded-[1.75rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="section-kicker text-flame">The tandoor</p>
            <h2 id="fire" className="mt-5 text-4xl leading-[1.1] text-white sm:text-5xl">
              Cooked over open fire
            </h2>
            <p className="mt-7 max-w-prose text-[1.05rem] leading-[1.9] text-white/70">
              Our clay tandoor is where the flavour starts. Marinated chicken chars on the skewer, sekuwa picks
              up its smoke, and naan blisters against the walls in under a minute. It is the heart
              of the kitchen, and the reason for our name.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { value: '90+', label: 'Dishes & drinks' },
                { value: '10', label: 'Kinds of momo' },
                { value: '1', label: 'Hot tandoor' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl text-flame sm:text-5xl">{stat.value}</dd>
                  <dd className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/55">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-paper py-24 lg:py-32" aria-labelledby="gallery-preview">
        <div className="shell">
          <SectionHeading
            id="gallery-preview"
            kicker="Gallery"
            title="Straight from our kitchen"
            subtitle="The food, the fire and the people who cook it."
          />

          <ul className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryPreview.map((image, index) => (
              <li key={image.id} className={index % 2 === 1 ? 'lg:mt-10' : undefined}>
                <Link to="/gallery" className="group block overflow-hidden rounded-[1.25rem]">
                  <Photo src={image.src} alt={image.alt} zoom className="aspect-[3/4] w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Link to="/gallery" className="btn-ghost text-ink hover:bg-ink hover:text-paper">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  )
}
