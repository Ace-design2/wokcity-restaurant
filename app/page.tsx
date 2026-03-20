import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1440px] mx-auto flex flex-col grow">
        <Hero />
        <div className="px-24 w-full">
          <ProductGrid />
        </div>
      </main>
    </>
  );
}
