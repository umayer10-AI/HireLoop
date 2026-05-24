"use client";
// import { Chrome } from "lucide-react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">

      <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Profile Image
            </label>

            <input
              type="file"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-gray-400 file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-purple-600 file:text-white hover:file:bg-purple-700"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-700"></div>

          <span className="text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          {/* <Chrome size={20} /> */}
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-purple-400 hover:text-purple-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;