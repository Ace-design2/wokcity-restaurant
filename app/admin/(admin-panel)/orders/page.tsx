"use client";

import React, { useState } from 'react';
import OrderDetailsModal from '@/components/admin/OrderDetailsModal';

export const mockOrders = [
  { id: '#1045', customer: 'John Doe', phone: '08012345678', address: '12 Kuto Road, Abeokuta', items: '2x Spicy Noodles, 1x Cola', total: '₦8,400', status: 'Pending', time: '10 mins ago' },
  { id: '#1044', customer: 'Sarah Johnson', phone: '08123456789', address: '45 Ibara Estate, Abeokuta', items: '1x Classic Wok, 2x Spring Rolls', total: '₦6,500', status: 'Preparing', time: '25 mins ago' },
  { id: '#1043', customer: 'Michael Okah', phone: '07098765432', address: '8 Camp Area, Abeokuta', items: '3x Sweet & Sour Chicken', total: '₦15,600', status: 'Ready', time: '45 mins ago' },
  { id: '#1042', customer: 'Amina Bello', phone: '09087654321', address: '22 Panseke, Abeokuta', items: '1x Veggie Noodles', total: '₦3,500', status: 'Completed', time: '2 hours ago' },
  { id: '#1041', customer: 'David Smith', phone: '08055554444', address: '10 Oke-Ilewo, Abeokuta', items: '2x Chef Special Wok', total: '₦11,000', status: 'Cancelled', time: '5 hours ago' },
];

const statusStyles = {
  'Pending': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Preparing': 'bg-orange-50 text-orange-700 border-orange-200',
  'Ready': 'bg-blue-50 text-blue-700 border-blue-200',
  'Completed': 'bg-green-50 text-green-700 border-green-200',
  'Cancelled': 'bg-red-50 text-red-700 border-red-200',
};

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  return (
    <>
      <div className="flex flex-col gap-6">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                type="text" 
                placeholder="Search orders by ID or customer..." 
                className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
            <select className="hidden sm:block px-4 py-2 border border-neutral-200 rounded-xl text-sm bg-white focus:outline-none focus:border-black">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Preparing</option>
              <option>Ready</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-neutral-50 text-neutral-500 font-medium border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {mockOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-black">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-black">{order.customer}</span>
                        <span className="text-xs text-neutral-500">{order.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-[200px] truncate text-neutral-600 font-medium" title={order.items}>
                      {order.items}
                    </td>
                    <td className="px-6 py-4 font-bold text-black">{order.total}</td>
                    <td className="px-6 py-4 text-neutral-500 text-xs font-medium">{order.time}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${(statusStyles as any)[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="px-3 py-1.5 bg-neutral-100 text-black text-xs font-bold rounded-lg hover:bg-neutral-200 transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <OrderDetailsModal 
        isOpen={!!selectedOrder} 
        order={selectedOrder} 
        onClose={() => setSelectedOrder(null)} 
      />
    </>
  );
}
