import React from 'react';

const Section3 = () => {
    return (
        <div>
            <div className="bg-black text-white py-20 px-6">
  <div className="text-center mb-12">
    <p className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit mx-auto font-bold tracking-widest text-sm mb-4 uppercase">
      ■ PRICING ■
    </p>
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Pay for the leverage,<br/>not the listings</h2>
    
    <div className="inline-flex bg-gray-900 p-1 rounded-full border border-gray-800">
      <button className="px-6 py-2 rounded-full bg-white text-black font-semibold">Monthly</button>
      <button className="px-6 py-2 rounded-full text-gray-400 font-semibold hover:text-white transition">Yearly <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full ml-1">25%</span></button>
    </div>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div className="border border-gray-800 bg-gray-900/30 p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">👑</span>
        <h3 className="text-xl font-semibold">Starter</h3>
      </div>
      <div className="mb-8">
        <span className="text-5xl font-bold">$0</span><span className="text-gray-400">/month</span>
      </div>
      <p className="text-gray-400 mb-6 font-medium">Start building your insights hub:</p>
      <ul className="space-y-4 mb-8 text-gray-300">
        <li className="flex items-center gap-3"><span>+</span> Daily AI match brief (top 5)</li>
        <li className="flex items-center gap-3"><span>+</span> Verified salary bands</li>
        <li className="flex items-center gap-3"><span>+</span> Company insight dashboards</li>
        <li className="flex items-center gap-3"><span>+</span> 1-click apply, unlimited</li>
      </ul>
      <button className="w-full py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition flex justify-between px-6 items-center">
        Choose This Plan <span>→</span>
      </button>
    </div>

    <div className="border border-gray-700 bg-gray-800/50 p-8 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">📊</span>
        <h3 className="text-xl font-semibold">Growth</h3>
      </div>
      <div className="mb-8">
        <span className="text-5xl font-bold">$17</span><span className="text-gray-400">/month</span>
      </div>
      <p className="text-gray-400 mb-6 font-medium">Start building your insights hub:</p>
      <ul className="space-y-4 mb-8 text-gray-300">
        <li className="flex items-center gap-3"><span>+</span> Daily AI match brief (top 5)</li>
        <li className="flex items-center gap-3"><span>+</span> Verified salary bands</li>
        <li className="flex items-center gap-3"><span>+</span> Company insight dashboards</li>
        <li className="flex items-center gap-3"><span>+</span> 1-click apply, unlimited</li>
      </ul>
      <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition flex justify-between px-6 items-center">
        Choose This Plan <span>→</span>
      </button>
    </div>

    <div className="border border-gray-800 bg-gray-900/30 p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">⚡</span>
        <h3 className="text-xl font-semibold">Premium</h3>
      </div>
      <div className="mb-8">
        <span className="text-5xl font-bold">$99</span><span className="text-gray-400">/month</span>
      </div>
      <p className="text-gray-400 mb-6 font-medium">Start building your insights hub:</p>
      <ul className="space-y-4 mb-8 text-gray-300">
        <li className="flex items-center gap-3"><span>+</span> Everything in Pro</li>
        <li className="flex items-center gap-3"><span>+</span> Multi-profile career portfolios</li>
        <li className="flex items-center gap-3"><span>+</span> Shared talent rooms</li>
        <li className="flex items-center gap-3"><span>+</span> Recruiter view (read-only)</li>
      </ul>
      <button className="w-full py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition flex justify-between px-6 items-center">
        Choose This Plan <span>→</span>
      </button>
    </div>

  </div>
</div>
        </div>
    );
};

export default Section3;