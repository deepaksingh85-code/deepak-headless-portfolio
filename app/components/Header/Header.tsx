"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
<Link href="/" className="font-bold text-3xl">     
       <span>Deepak</span>
            <span className="text-orange-500"> Kumar</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[15px] font-medium text-gray-600">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Services
              </Link>
            </li>

            <li>
             <Link href="/" className="hover:text-orange-500 transition">
                Work
           </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/"  className="hover:text-orange-500 transition">
                Journey
           </Link>
            </li>

            <li>
              <Link href="/"  className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
  <Link
    href="/#contact"
    className="
      bg-orange-500
      hover:bg-orange-600
      text-white
      px-6
      py-3
      rounded-full
      font-medium
      transition-all
      duration-300
    "
  >
    Hire Me →
  </Link>
</div>

        {/* Mobile Menu Button */}
<button
  className="md:hidden text-3xl"
  onClick={() => setMobileMenu(true)}
>
  <HiOutlineMenuAlt3 />
</button>

</nav>
</header>

{/* Mobile Menu */}

{mobileMenu && (
  <div
    className="
      fixed
      inset-0
      z-40
      bg-black/40
      backdrop-blur-sm
      md:hidden
    "
    onClick={() => setMobileMenu(false)}
  >
    {/* Menu Panel */}

    <div
      className="
        absolute
        top-24
        left-4
        right-4
        rounded-2xl
        bg-slate-900/90
        backdrop-blur-xl
        border
        border-white/10
        shadow-2xl
        overflow-hidden
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}

      <div className="flex justify-end p-4">
        <button
          onClick={() => setMobileMenu(false)}
          className="text-white text-3xl"
        >
          <HiX />
        </button>
      </div>

      <ul className="flex flex-col px-6 pb-6 gap-5 text-lg">

        <li>
          <Link
            href="/#services"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            href="/#work"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            Work
          </Link>
        </li>

        <li>
          <Link
            href="/#about"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/#journey"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            Journey
          </Link>
        </li>

        <li>
          <Link
            href="/#blog"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/#contact"
            onClick={() => setMobileMenu(false)}
            className="block text-white/90 hover:text-orange-500 transition"
          >
            Contact
          </Link>
        </li>

        <li className="pt-4 border-t border-white/10">
          <Link
            href="/#contact"
            onClick={() => setMobileMenu(false)}
            className="
              inline-flex
              items-center
              justify-center
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-6
              py-3
              rounded-full
              font-medium
              transition
              w-full
            "
          >
            Hire Me →
          </Link>
        </li>

      </ul>
    </div>
  </div>
)}

</>
);
}