import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
export default function Header (){
    return (
      <header className="text-gray-600 body-font w-1320px h-32px">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <span className="text-lg font-semibold mr-20">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </span>
        {/* Navigation */}
        <nav className="border-black bg-black flex flex-wrap items-center text-base justify-center gap-x-4 text-third">
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
      <Link href="/signing" ><a >Signing</a> </Link>  
      </nav>
        {/* Icons import from react icons. */}
        <div className="flex items-center gap-x-4 text-white pl-20">
        <IoSearchOutline className="text-xl"/>
       <AiOutlineUser className="text-xl"/>
       <Link href="/shop"><HiOutlineShoppingBag className="text-xl"/></Link> 
        </div>
      </div>
    </header>
    );
}