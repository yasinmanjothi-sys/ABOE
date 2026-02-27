import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PrimaryCarousel from '@/components/PrimaryCarousel';
import Intro from '@/components/Intro';
import LocationCarousel from '@/components/LocationCarousel';
import SecondaryCarousel from '@/components/SecondaryCarousel';
import MenuGrid from '@/components/MenuGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between w-full h-full">
      <Navbar />
      <Hero />
      <PrimaryCarousel />
      <Intro />
      <LocationCarousel />
      <SecondaryCarousel />
      <MenuGrid />
      <Footer />
    </main>
  );
}
