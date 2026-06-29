import Navbar          from '@/components/layout/Navbar';
import Hero            from '@/components/home/Hero';
import Categories      from '@/components/home/Categories';
import Brands          from '@/components/home/Brands';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoBanner     from '@/components/home/PromoBanner';

import AboutStore      from '@/components/home/AboutStore';
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
      
      <AboutStore />

      <Footer />
      <WhatsAppButton />
    </>
  );
}