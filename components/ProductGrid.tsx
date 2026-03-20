import React from 'react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = Array.from({ length: 16 }).map((_, i) => ({
  id: `prod-${i}`,
  name: `Wok Meal ${i + 1}`,
  description: 'A delicious customized wok meal to enjoy...',
  price: 24.99 + (i % 5) * 5.00,
  // Cycle through local images food1.jpg to food10.jpg
  imageUrl: `/images/food${(i % 10) + 1}.jpg`,
}));

export default function ProductGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
