
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Item = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="w-full text-center">
        <h1 className="font-normal text-secondary good-vibes text-2xl">
          Food Category
        </h1>
        <div className="flex justify-center items-center font-bold text-5xl mt-4">
          <h2 className="text-secondary">Ch</h2>
          <h2 className="text-third">oose Food Item</h2>
        </div>
      </div>
      <div className="flex gap-2 mt-8">
        <Image src="/image/image4.svg" alt="image4" width={302} height={100} />
        <Image src="/image/image5.svg" alt="image5" width={302} height={100} />
        <Image src="/image/image6.svg" alt="image6" width={302} height={100} />
        <Image src="/image/image7.svg" alt="image7" width={302} height={100} />
      </div>

      {/* Extra ordnary */}
     
      <div className='w-full  h-screen flex mt-20'>
  <div className='w-[1320px] h-[716px] '>

    
    <div className='flex justify-center space-x-4'>
      <Image src="/image/exp1.svg" alt='exp1' width={362} height={356} />
      <Image className='mt-28' src="/image/exp2.svg" alt='exp2' width={281} height={231} />
    </div>

   
    <div className='flex justify-center space-x-4 mt-4'>
      <Image src="/image/exp6.svg" alt='exp6' width={244} height={306} />
      <Image src="/image/exp3.svg" alt='exp3' width={221} height={226} />
      <div className='flex flex-col items-center'>
        <Image src="/image/exp4.svg" alt='exp4' width={161} height={168} />
       
        <Image className='mt-4' src="/image/exp5.svg" alt='exp5' width={161} height={166} />
      </div>
    </div>

  </div>

  <div className='mt-16'>
    <h1 className='text-secondary good-vibes text-2xl'>Why Choose us</h1>
    <div className=' w-[433px] flex font-bold text-2xl mt-4 mr-48'>
    <h1 className='text-secondary'>Ex</h1>
    <h1 className='text-third'>ta ordinary taste And Experienced </h1>
    </div>
    <p className='text-third font-normal text-sm w-[426px] h-[120px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <div className='flex gap-4 '>
   <div className='w-[102px] h-[100px] bg-secondary rounded flex items-center justify-center '><Image src="/image/burger.svg" alt='burger' width={56} height={56}></Image></div>
  

   <div className='w-[102px] h-[100px] bg-secondary rounded flex items-center justify-center '><Image src="/image/Cookie.svg" alt='Cookie' width={56} height={56}></Image></div>

   <div className='w-[102px] h-[100px] bg-secondary rounded flex items-center justify-center '><Image src="/image/Wine.svg" alt='wine' width={56} height={56}></Image></div>

   
    </div>
    <div className='flex gap-20'>
    <p> Fast Food</p>
    <p>Lunch</p>
    <p>Dinner</p>
  </div>

  
    <div className='mt-4'><Image src="/image/experience.svg" alt='EXPERIENCE' width={340} height={93}></Image></div>
   
  </div>

  

 
  
    <div>
   
  </div>
</div>




    {/* Range */}

   

    <div className="w-full h-[369px] flex mt-24  ">
  <div className="w-[1319px] h-[247px] flex justify-center gap-16">
    {/* 1st Item */}
    <div className="w-[218px] h-[247px] flex flex-col items-center text-center ">
      <Image src="/image/range1.svg" alt="range1" width={120} height={120} />
      <p className="text-xl font-semibold mt-4">Professional Chefs</p>
      <p className="text-4xl font-bold mt-2">420</p>
    </div>

    {/* 2nd Item */}
    <div className="w-[218px] h-[247px] flex flex-col items-center text-center">
      <Image src="/image/range2.svg" alt="range2" width={120} height={120} />
      <p className="text-xl font-semibold mt-4">Items Of Food</p>
      <p className="text-4xl font-bold mt-2">320</p>
    </div>

    {/* 3rd Item */}
    <div className="w-[218px] h-[247px] flex flex-col items-center text-center">
      <Image src="/image/range3.svg" alt="range3" width={120} height={120} />
      <p className="text-xl font-semibold mt-4">Years Of Experienced</p>
      <p className="text-4xl font-bold mt-2">30+</p>
    </div>

    {/* 4th Item */}
    <div className="w-[218px] h-[247px] flex flex-col items-center text-center">
      <Image src="/image/range4.svg" alt="range4" width={120} height={120} />
      <p className="text-xl font-semibold">Happy Customers</p>
      <p className="text-4xl font-bold mt-2">220</p>
    </div>
  </div>
</div>

{/* menu bar */}

<div className="flex flex-col items-center justify-center w-full  ">
      <div className="w-full text-center ">
        <h1 className="font-normal text-secondary good-vibes text-2xl">
        Choose & pick
        </h1>
        </div>
        <div className="flex justify-center items-center font-bold text-5xl mt-8">
          <h2 className="text-secondary">Fr</h2>
          <h2 className="text-third">om Our Menu</h2>
        </div>
        <div className="flex items-center justify-center space-x-6 ml-10 gap-20 mt-8">
    
    <Link className='text-secondary font-semibold' href="" > Breakfast</Link> 
    <Link href="" > Lunch</Link> 
    <Link href="" > Dinner</Link> 
    <Link href="" > Dessert</Link> 
    <Link href="" > Drink</Link> 
    <Link href="" > Snack</Link> 
    <Link href="" > Suops</Link> 
    </div>
</div>

<div className="flex mt-8">
  {/* Menu */}
  <div className="w-[366px] mr-4">
    <Image src="/image/menu.svg" alt="menu" width={366} height={362} />
  </div>

 
  <div className="flex flex-col">
 
    <div className="flex items-center gap-4 mb-4">
      {/* Menu1 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu1.svg" alt="menu1" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Lettuce Leaf</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">$12.5</p>
        </div>
      </div>

      {/* Menu2 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu2.svg" alt="menu2" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Glow Cheese</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">12.5$</p>
        </div>
      </div>
    </div>

<div className="flex items-center gap-4 mb-4">
      {/* Menu3 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu3.svg" alt="menu3" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Fresh Breakfast</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">14.5$</p>
        </div>
      </div>

      {/* Menu4 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu4.svg" alt="menu4" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Italian Pizza</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">14.5$</p>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4 mb-4">
      {/* Menu5 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu5.svg" alt="menu5" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Mild Butter</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">12.5$</p>
        </div>
      </div>

      {/* Menu6 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu6.svg" alt="menu6" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Sllice Beef</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">12.5$</p>
        </div>

        
      </div>

      
    </div>
    <div className="flex items-center gap-4 mb-4">
      {/* Menu7 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu7.svg" alt="menu7" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Fresh Bread</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">$12.5</p>
        </div>
      </div>

      {/* Menu8 */}
      <div className="flex items-center gap-2 w-[376px] h-[79px] ">
        <Image src="/image/menu8.svg" alt="menu8" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Mushaom Pizza</h1>
          <p className="text-sm text-third">Purus sit amet volutpat consequat mauris.</p>
          <p className="text-sm text-secondary font-bold">$8.99</p>
        </div>
      </div>
    </div>
</div>

</div>



{/* Meet our Chef */}

<div className="w-full text-center">
        <h1 className="font-normal text-secondary good-vibes text-2xl mt-28">
        Chefs
        </h1>
        <div className="flex justify-center items-center font-bold text-5xl mt-8">
          <h2 className="text-secondary">Me</h2>
          <h2 className="text-third">et Our Chef</h2>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <Image src="/image/chef1.svg" alt="image4" width={302} height={100} />
        <Image src="/image/chef2.svg" alt="image5" width={302} height={100} />
        <Image src="/image/chef3.svg" alt="image6" width={302} height={100} />
        <Image src="/image/chef4.svg" alt="image7" width={302} height={100} />
      </div>

     <div>
        <button className='w-[170px] h-[40px] rounded-3xl font-normal text-sm text-third border-secondary border-2 mt-4'>Read more</button>
        </div>


        {/* Testimonials */}

        <div className='w-[1273px] h-[770px]'>
          <h1 className="font-normal text-secondary good-vibes text-2xl mt-28">Testimonials</h1>
          <p className=' font-semibold text-3xl  text-third'>What our client are saying</p>
        <div className="flex justify-center items-center h-screen">
  <div className="w-[868.48px] h-[450.89px] bg-third flex flex-col justify-center items-center gap-4 relative">
    {/* Man Image */}
    <Image  src="/image/man.svg" alt="man" width={132.92} height={133.97} className="mb-4" />
    
    {/* 99 Image */}
    <Image src="/image/99.svg" alt="99" width={48} height={48} className="mb-4" />
    
    {/* Paragraph */}
    <p className="w-[696.57px] text-primary text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    
    {/* Star Image */}
    <Image src="/image/star.svg" alt="star" width={152} height={24} className="my-4" />
    
    {/* Name */}
    <p className="font-bold text-2xl text-primary text-center">Alamin Hasan</p>
    
    {/* Job Title */}
    <p className="font-normal text-sm text-primary text-center">Food Specialist</p>
  </div>
</div>

        </div>
    </div>
  )
}

export default Item


