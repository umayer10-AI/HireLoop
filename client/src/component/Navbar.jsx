"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Navbar */}
        <div className="flex items-center justify-between bg-[#141414] border border-gray-800 rounded-2xl px-4 md:px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              ▶
            </div>

            <div>
              <h1 className="text-white font-semibold leading-none">
                Programming
              </h1>
              <p className="text-gray-400 text-sm">Hero</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <button className="hover:text-white transition">
              Browse Jobs
            </button>

            <button className="hover:text-white transition">
              Company
            </button>

            <button className="hover:text-white transition">
              Pricing
            </button>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-purple-400 font-medium hover:text-purple-300">
              Sign In
            </button>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 bg-[#141414] border border-gray-800 rounded-2xl p-5 space-y-5 text-gray-300">

            <button className="block hover:text-white">
              Browse Jobs
            </button>

            <button className="block hover:text-white">
              Company
            </button>

            <button className="block hover:text-white">
              Pricing
            </button>

            <button className="block text-purple-400 font-medium">
              Sign In
            </button>

            <button className="w-full bg-white text-black py-2 rounded-xl font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;