"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    {
      name: "Browse Jobs",
      path: "/jobs",
    },
    {
      name: "Company",
      path: "/company",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <nav className="w-full px-4 py-4 bg-[#0d0d0d]">
      <div className="lg:max-w-[80%] mx-auto">
        
        <div className="flex items-center justify-between bg-[#141414] border border-gray-800 rounded-2xl px-4 md:px-6 py-3">

          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 font-bold rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
              H
            </div>

            <div>
              <h1 className="text-2xl bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold leading-none">
                HireLoop
              </h1>

            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-gray-300">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`border-b-2 transition font-semibold ${
                  pathname === item.path
                    ? "bg-linear-to-r from-purple-500 py-1 px-4 rounded-2xl to-pink-500 text-center text-white"
                    : "border-transparent hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-8 border-l-2 pl-5 text-gray-300">
                <Link
              href="/signin"
              className={`transition font-medium ${
                pathname === "/signin"
                  ? "bg-linear-to-r from-purple-500 py-1 px-4 rounded-2xl to-pink-500 text-center text-white"
                  : "text-purple-400 hover:text-purple-300"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/get-started"
              className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 bg-[#141414] border border-gray-800 rounded-2xl p-5 space-y-5 text-gray-300">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block border-b transition ${
                  pathname === item.path
                    ? "bg-linear-to-r from-purple-500 py-2 rounded-2xl to-pink-500 text-center text-white"
                    : "border-transparent hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className={`block font-medium ${
                pathname === "/signin"
                  ? "bg-linear-to-r from-purple-500 py-2 rounded-2xl to-pink-500 text-center text-white"
                  : "text-purple-400"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-white text-black py-2 rounded-xl font-medium"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;