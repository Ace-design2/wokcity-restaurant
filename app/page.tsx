import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartPanel from '@/components/CartPanel';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Full width hero section */}
      <Hero />
      
      {/* Main content with side cart panel */}
      <main className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row px-8 xl:px-24 py-16 gap-12 shrink-0 relative">
        
        {/* Left side: Product Grid */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black tracking-tight mb-8">Our Signature Woks</h1>
          <ProductGrid />
        </div>

        {/* Right side: Fast Checkout / Cart Panel */}
        <aside className="w-full lg:w-[380px] shrink-0 h-[600px] lg:h-[calc(100vh-160px)] lg:sticky lg:top-[120px] z-10">
          <CartPanel />
        </aside>

      </main>
    </>
  );
}
