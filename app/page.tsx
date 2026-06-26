import Navbar          from '@/components/layout/Navbar';
import Hero            from '@/components/home/Hero';
import Categories      from '@/components/home/Categories';
import Brands          from '@/components/home/Brands';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoBanner     from '@/components/home/PromoBanner';
import WomenProducts   from '@/components/home/WomenProducts';
import MenProducts     from '@/components/home/MenProducts';
import AboutStore      from '@/components/home/AboutStore';
import TrustSection    from '@/components/TrustSection';
import Footer          from '@/components/layout/Footer';
import WhatsAppButton  from '@/components/layout/WhatsAppButton';

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