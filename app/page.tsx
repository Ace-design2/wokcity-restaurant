import NavbarFloating from '@/components/NavbarFloating';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartPanel from '@/components/CartPanel';

export default function Home() {
  return (
    <>
      <NavbarFloating />
      
      {/* Full width hero section */}
      <Hero />
      
      {/* Main content with side cart panel */}
      <main className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row px-4 sm:px-8 xl:px-24 py-8 md:py-16 pb-32 lg:pb-16 gap-8 lg:gap-8 xl:gap-12 shrink-0 relative overflow-x-hidden">
        
        {/* Left side: Product Grid */}
        <div id="menu" className="flex-1 min-w-0 w-full">
          <h1 className="text-3xl font-bold text-black tracking-tight mb-8">Our Signature Woks</h1>
          <ProductGrid />
        </div>

        {/* Right side: Fast Checkout / Cart Panel */}
        <aside className="fixed bottom-0 left-0 w-full lg:relative lg:w-[300px] xl:w-[380px] shrink-0 h-auto lg:h-[calc(100vh-160px)] lg:sticky lg:top-[120px] z-50 lg:z-10">
          <CartPanel />
        </aside>

      </main>
    </>
  );
}
