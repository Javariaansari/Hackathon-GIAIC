import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Header from "../component/header/header"
import Footer from "../component/footer/footer"

function shop() {
  return (
    <div className="min-h-screen bg-third">
    <div className='bg-black'>
    
     <Header/>
    {/* First Section: Image and Breadcrumb */}
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
   
      <Image
        src="/image/header.svg"
        alt="Banner Image"
        width={1920}
        height={410}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="  min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
        Our Shop
        </h2>
        <div className="flex items-center space-x-2 text-white">
          <a href="/" className="text-white">Home</a>
          <span className="text-white"> &gt; </span>
          <a href="/about" className="text-orange-500">Shop</a>
        </div>
      </div>
    </div>
 
    </div>
    <div className='w-full h-48'></div>
    <Footer/>
    </div>
    
  )
}

export default shop