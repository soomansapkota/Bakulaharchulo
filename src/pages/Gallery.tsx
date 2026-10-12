import { galleryImages } from '../data/gallery'
import GalleryGrid from '../components/GalleryGrid'
import PageHeader from '../components/PageHeader'

export default function Gallery() {
  return (
    <div>
      <PageHeader
        kicker="Gallery"
        title="From our kitchen"
        subtitle="The food, the fire and the people who cook it."
        image="/images/tandoor-chicken-skewers.jpg"
      />

      <section className="shell py-20 lg:py-28">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  )
}
