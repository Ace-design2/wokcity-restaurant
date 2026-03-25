"use client";

import React, { useState } from 'react';
import AddProductModal from '@/components/admin/AddProductModal';

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy products
  const products = [
    { id: '1', name: 'Classic Wok Stir-Fry', category: 'Signature Woks', price: '₦4,500', available: true, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100' },
    { id: '2', name: 'Spicy Szechuan Noodles', category: 'Noodles', price: '₦3,800', available: true, image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=100' },
    { id: '3', name: 'Sweet & Sour Chicken', category: 'Specials', price: '₦5,200', available: false, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=100' },
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
            <select className="hidden sm:block px-4 py-2 border border-neutral-200 rounded-xl text-sm bg-white focus:outline-none focus:border-black">
              <option>All Categories</option>
              <option>Signature Woks</option>
              <option>Noodles</option>
              <option>Specials</option>
            </select>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-colors shrink-0"
          >
            Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-neutral-50 text-neutral-500 font-medium border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Availability</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-neutral-100" />
                        <span className="font-bold text-black">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-neutral-500">{product.category}</td>
                    <td className="px-6 py-4 font-bold text-black">{product.price}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${product.available ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {product.available ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-neutral-400 hover:text-black transition-colors px-2">Edit</button>
                      <button className="text-neutral-400 hover:text-red-600 transition-colors px-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
