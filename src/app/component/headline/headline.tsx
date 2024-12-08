

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SignInPage from '@/app/signing/page';

const Header = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className=" w-[1320px] h-[87px] bg-primary">
      {/* Logo Section */}
      
      <div className="flex justify-center items-center pt-4 font-bold text-2xl">
        <p className="text-third ">Food</p>
        <p className="text-secondary ">tuck</p>
      </div>


      <div className='flex'>

        
      
      {/* Navigation Menu */}
      <div className="flex items-center justify-center space-x-6 ml-10">
    
      <Link href="/" > Home</Link> 
      <Link href="/menu" > Menu</Link> 
      <Link href="/shoppingCart" > Shop</Link> 
      <Link href="/blog" > Blog</Link> 
      <Link href="/aboutUs" > About</Link> 
      <Link href="/chef" > Our Chef</Link>
      <Link href="/check" > Check Out</Link>
      <Link href="/faq" > FAQS</Link> 
      <Link href="/error" > 404</Link> 
      <Link href="/signup" ><a >Signup</a> </Link> 
      <Link href="/signing" ><a >Signin</a> </Link> 
      
      </div>
      
      {/* Search Section */}
      <div className="flex items-center ml-auto">
        <input
          className="w-[310px] h-[54px] border-2 border-secondary rounded-3xl px-4 text-sm bg-primary text-third"
          type="text"
          placeholder="Searching..."
       
        />
           <Image
          src="/image/search.svg"
          alt="Search"
          width={24}
          height={24}
          className='relative right-10'
         
        />
       
      </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
