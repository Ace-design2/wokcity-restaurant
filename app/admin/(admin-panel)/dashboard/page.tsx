import React from 'react';

export default function DashboardOverview() {
  const stats = [
    { label: 'Total Products', value: '45', trend: '+2 this week' },
    { label: 'Total Orders', value: '1,280', trend: 'All time' },
    { label: "Today's Orders", value: '24', trend: '+12% from yesterday' },
    { label: 'Revenue Today', value: '₦48,500', trend: '+8% from yesterday' },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">{stat.label}</h3>
            <p className="text-3xl font-black text-black tracking-tighter mb-1">{stat.value}</p>
            <p className="text-xs font-medium text-green-600">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity/Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-black tracking-tight mb-4">Recent Orders</h2>
          <div className="text-sm font-medium text-neutral-500 py-8 text-center border-2 border-dashed border-neutral-100 rounded-lg">
            No recent orders to show at the moment.
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-black tracking-tight mb-4">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 px-4 bg-red-50 text-red-600 font-bold text-sm rounded-lg hover:bg-red-100 transition-colors text-left flex items-center justify-between">
              Add New Product
              <span>+</span>
            </button>
            <button className="w-full py-3 px-4 bg-neutral-50 text-neutral-700 font-bold text-sm rounded-lg hover:bg-neutral-100 transition-colors text-left flex items-center justify-between">
              View All Orders
              <span>&rarr;</span>
            </button>
            <button className="w-full py-3 px-4 bg-neutral-50 text-neutral-700 font-bold text-sm rounded-lg hover:bg-neutral-100 transition-colors text-left flex items-center justify-between">
              Store Settings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
