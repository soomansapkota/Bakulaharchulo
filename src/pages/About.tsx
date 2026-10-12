import { Flame, Mountain, Sparkles } from 'lucide-react'
import Photo from '../components/Photo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const chefImage = '/images/kitchen.jpg'
const ownerImage = '/images/owner-ghanshyam-sapkota.jpg'
const staffImageThree = '/images/chef-tandoor-naan.jpg'
const staffImageFive = '/images/bikash-kc.jpg'

const values = [
  {
    icon: Mountain,
    title: 'Tradition',
    body: 'Honouring Himalayan flavours and recipes.',
  },
  {
    icon: Flame,
    title: 'Fire',
    body: 'Using charcoal and flame to create depth of flavour.',
  },
  {
    icon: Sparkles,
    title: 'Modern',
    body: 'Presenting traditional flavours in a contemporary way.',
  },
]

export default function About() {
  return (
    <div>
      <PageHeader
        kicker="About us"
        title="Our Story"
        subtitle="Rooted in Himalayan tradition and the food of Chitwan, Bakulaharchulo celebrates bold spices, open-fire cooking and the warmth of sharing a meal."
        image="/images/chef-tandoor-naan.jpg"
      />

      <section className="shell py-20 lg:py-28" aria-labelledby="philosophy">
        <h2 id="philosophy" className="sr-only">
          Our philosophy
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <li key={value.title}>
                <Reveal
                  delay={index * 90}
                  className="h-full rounded-[1.5rem] border border-line bg-white p-8 text-center shadow-[0_10px_30px_rgba(33,28,26,0.05)] md:text-left"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ember/10 text-ember md:mx-0">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl">{value.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">{value.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="shell pb-24 lg:pb-32">
        <div className="mb-14 text-center">
          <p className="section-kicker">Meet our team</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">The people behind the fire</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Reveal className="h-full">
            <div className="h-full overflow-hidden group rounded-[1.5rem] border border-line bg-white shadow-[0_10px_30px_rgba(33,28,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(33,28,26,0.12)]">
              <Photo
                src={ownerImage}
                alt="Owner portrait of Ghanshyam Sapkota"
                zoom
                className="aspect-[4/5] w-full"
              />
              <div className="space-y-2 p-6 text-center">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-ember">OWNER</p>
                <h3 className="font-display text-2xl">Ghanshyam Sapkota</h3>
                <p className="text-[0.82rem] text-muted">Founder & Owner</p>
              </div>
            </div>
          </Reveal>

          {[
            { name: 'Bigesh Dulal', role: 'Chef', image: staffImageThree },
            { name: 'Bikash K.C.', role: 'Service Team', image: staffImageFive },
          ].map((member, index) => (
            <Reveal key={member.name} delay={index * 60} className="h-full">
              <div className="h-full overflow-hidden group rounded-[1.5rem] border border-line bg-white shadow-[0_10px_30px_rgba(33,28,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(33,28,26,0.12)]">
                <Photo src={member.image} alt={member.name} zoom className="aspect-[4/5] w-full" />
                <div className="space-y-2 p-6 text-center">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-ember">TEAM</p>
                  <h3 className="font-display text-2xl">{member.name}</h3>
                  <p className="text-[0.82rem] text-muted">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain bg-char py-24 text-white lg:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              src={chefImage}
              alt="The kitchen line with burners, wok and spice tins"
              className="aspect-[4/5] w-full rounded-[1.75rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="section-kicker text-flame">Behind the pass</p>
            <h2 className="mt-5 text-4xl leading-[1.12] text-white sm:text-5xl">In the kitchen</h2>
            <div className="mt-7 space-y-6 text-[1.05rem] leading-[1.9] text-white/70">
              <p>
                Momo are folded by hand, curries are cooked slowly, and naan goes straight from the
                tandoor to your table. Our kitchen is clean, bright and run with care.
              </p>
              <p>
                From a quick cup of milk tea and aalu paratha in the morning to a full khana set or
                tandoori chicken in the evening, everything is cooked fresh, the Nepali way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
