import React from 'react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = Array.from({ length: 15 }).map((_, i) => ({
  id: `prod-${i}`,
  name: `Wok Meal ${i + 1}`,
  description: 'A delicious customized wok meal to enjoy...',
  price: 24.99 + (i % 5) * 5.00,
  imageUrl: `https://placehold.co/256x160/450a0a/ffffff?text=Wok+Meal+${i + 1}`,
}));

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="grid grid-cols-5 gap-8">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
