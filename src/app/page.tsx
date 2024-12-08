import React from 'react'
import Header from "./component/headline/headline"
import Image from 'next/image'
import Cofee from './about/page'
import Item from "./item/page"

import Footer from "./component/footer/footer"
import FoodCata from "./foodCata/page"



const page = () => {
  return (
    
      <div className='w-full md:w-full h-[950px] bg-primary' >
      <Header/>
      <div>
      <div className='flex items-center justify-center gap-14 '>
      <Image src="/image/line.svg" alt='line' width={25.28} height={492}></Image>
      <div className='w-[472px]h-[356px]'>
        <p className='font-normal text-secondary good-vibes text-2xl'> Its Quick & Amusing!</p>
        <div className='flex font-bold text-6xl'>
          <p className='text-secondary mt-4'>Th</p>
          <p className='text-third'>e Art of speed</p>
        </div>
        <p className='font-bold text-6xl'>food Quality</p>

        
        <p className='text-third text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className='text-third text-sm'>Varius sed pharetra dictum neque massa congue</p>
        <button className='w-[170px] h-[40px] rounded-3xl font-normal text-sm bg-secondary mt-4'>see menu</button>
    
      
      </div>
 
    <Image
            src="/image/Image.svg"
            alt="Illustration of food"
            width={624.15}
            height={633.51}
          />
      </div>

     {/* 2nd */}

        

      </div>
      <Cofee/>
      <Item/>
      
  
      <Footer/>
     
    </div>
  )
}

export default page
