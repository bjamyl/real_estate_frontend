import Image from "next/image";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 xl:px-24 fixed top-0 w-screen bg-white z-40">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="xl:flex xl:items-center xl:gap-28">
          <Link href="/">
            <Image
              className="hover:cursor-pointer border"
              alt="logo"
              src="/logo-dark.png"
              width={90}
              height={47.25}
            />
          </Link>
          {/* middle section */}
          <div className="hidden xl:block">
            <ul className="flex gap-12">
              <Link href="/">
                <li className="text-lg hover:cursor-pointer font-semibold hover:animate-bounce">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="text-lg hover:cursor-pointer font-semibold hover:animate-bounce">
                  About Us
                </li>
              </Link>
              <Link href="/listings">
                <li className="text-lg hover:cursor-pointer font-semibold hover:animate-bounce">
                  Listings
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="xl:hidden">
          <HiMenuAlt4 size={50} />
        </div>
        {/* signIn and signUp */}
        <div className="hidden xl:block xl:space-x-8">
          <Link href="/signUp">
            <button className="text-lg px-8 py-2">Sign Up</button>
          </Link>
          <Link href="/signIn">
            <button className="text-white bg-[#150F0A] px-8 py-2 text-lg">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
