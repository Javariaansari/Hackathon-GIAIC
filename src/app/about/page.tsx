import React from 'react'
import Image from "next/image"


const about = () => {
  return (
    <div>
      <div className='w-[1320] h-[562px]'>
        <div className='flex justify-center items-center gap-16 mt-20 ml-16'>
        <div className='w-[562px] h-[562px] mt-4'>
            <p className='text-secondary good-vibes text-2xl'>About us</p>
            <div className='flex gap-2 text-6xl font-bold mt-4'>
                <p className='text-secondary'>we</p>
                <p>create the best</p>
            </div>
            <p className='text-6xl font-bold text-third'>foody product</p>
            <p className='w[526px]  text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='flex mt-4'>
            <Image src="/image/path.svg" alt="path" width={17} height={12.24} />
            <p className='text-sm'> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        </div>
        <div className='flex mt-4'>
            <Image src="/image/path.svg" alt="path" width={17} height={12.24} />
            <p className='text-sm'> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
        </div>

        <div className='flex mt-4'>
            <Image src="/image/path.svg"alt="path" width={17} height={12.24}/>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <button className='w-[170px] h-[40px] rounded-3xl font-normal text-sm bg-secondary mt-4'>Read more</button>
        </div>

        <div  className='w-[562px] h-[562px] '>
         <Image src="/image/image1.svg" alt="image1" width={6600} height={115} ></Image>
         <div className='flex gap-2'>
         <Image src="/image/image2.svg" alt="image2" width={330} height={97} ></Image>
         <Image src="/image/image3.svg" alt="image3" width={330} height={97} ></Image>
         </div>

        </div>
       
        </div>
      </div>
    </div>
  )
}

export default about
