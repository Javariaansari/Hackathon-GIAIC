import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="w-full max-w-[1320px] h-auto p-4 md:p-6 lg:p-8">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center font-bold text-2xl">
          <div className="flex">
            <p className="text-third">Food</p>
            <p className="text-secondary">tuck</p>
          </div>
        </div>

        {/* Navigation Menu and Search Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4">
          {/* Navigation Menu */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/shoppingCart">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/aboutUs">About</Link>
            <Link href="/chef">Our Chef</Link>
            <Link href="/check">Check Out</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/error">404</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/signing">Signin</Link>
          </div>

          {/* Search Section */}
          <div className="flex items-center w-full md:w-auto mt-4 md:mt-0">
            <input
              className="w-full md:w-[310px] lg:w-[360px] h-[40px] md:h-[50px] border-2 border-secondary rounded-3xl px-4 text-sm md:text-base bg-primary text-third placeholder:text-third"
              type="text"
              placeholder="Searching..."
            />
            <Image
              src="/image/search.svg"
              alt="Search"
              width={24}
              height={24}
              className="relative right-10 hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
