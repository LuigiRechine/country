import Navbar          from '@/components/Navbar';
import Hero            from '@/components/Hero';
import Categories      from '@/components/Categories';
import Brands          from '@/components/Brands';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoBanner     from '@/components/PromoBanner';
import WomenProducts   from '@/components/WomenProducts';
import MenProducts     from '@/components/MenProducts';
import AboutStore      from '@/components/AboutStore';
import TrustSection    from '@/components/TrustSection';
import Footer          from '@/components/Footer';
import WhatsAppButton  from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Brands />
      <FeaturedProducts />
      <PromoBanner />
      <WomenProducts />
      <MenProducts />
      <AboutStore />

      <Footer />
      <WhatsAppButton />
    </>
  );
}