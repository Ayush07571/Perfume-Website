import Hero from '@/components/sections/Hero';
import BrandEssence from '@/components/sections/BrandEssence';
import FeaturedCollection from '@/components/sections/FeaturedCollection';
import ScentStory from '@/components/sections/ScentStory';
import Testimonials from '@/components/sections/Testimonials';
import EditorialPreview from '@/components/sections/EditorialPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandEssence />
      <FeaturedCollection />
      <ScentStory />
      <Testimonials />
      <EditorialPreview />
    </>
  );
}
