import React from 'react';
import Image from 'next/image';
import Link from "next/link"

const Item = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 py-12">
      {/* Header Section */}
      <div className="w-full text-center">
        <h1 className="font-normal text-secondary good-vibes text-xl md:text-2xl">
          Food Category
        </h1>
        <div className="flex justify-center items-center font-bold text-3xl md:text-5xl mt-4">
          <h2 className="text-secondary">Ch</h2>
          <h2 className="text-third">oose Food Item</h2>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        <Image
          src="/image/image4.svg"
          alt="image4"
          width={302}
          height={100}
          className="w-full h-auto"
        />
        <Image
          src="/image/image5.svg"
          alt="image5"
          width={302}
          height={100}
          className="w-full h-auto"
        />
        <Image
          src="/image/image6.svg"
          alt="image6"
          width={302}
          height={100}
          className="w-full h-auto"
        />
        <Image
          src="/image/image7.svg"
          alt="image7"
          width={302}
          height={100}
          className="w-full h-auto"
        />
      </div>



   
   
      <div className="w-full h-screen flex justify-center items-center mt-20 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[1320px] h-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Row 1 */}
          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <Image
              src="/image/exp1.svg"
              alt="exp1"
              width={362}
              height={356}
              className="w-full max-w-[362px] h-auto"
            />
          </div>
          <div className="col-span-2 sm:col-span-2 flex justify-center">
            <Image
              src="/image/exp2.svg"
              alt="exp2"
              width={281}
              height={231}
              className="w-full max-w-[281px] h-auto mt-4 sm:mt-20"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 flex justify-center">
            <Image
              src="/image/exp6.svg"
              alt="exp6"
              width={244}
              height={306}
              className="w-full max-w-[244px] h-auto"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src="/image/exp3.svg"
              alt="exp3"
              width={221}
              height={226}
              className="w-full max-w-[221px] h-auto"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <Image
              src="/image/exp4.svg"
              alt="exp4"
              width={161}
              height={168}
              className="w-full max-w-[161px] h-auto"
            />
            <Image
              src="/image/exp5.svg"
              alt="exp5"
              width={161}
              height={166}
              className="w-full max-w-[161px] h-auto mt-4"
            />
          </div>
        </div>
      </div>





      <div className="mt-16 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Heading Section */}
      <h1 className="text-secondary good-vibes text-lg sm:text-xl md:text-2xl">
        Why Choose Us
      </h1>
      <div className="flex  justify-center text-center sm:text-left font-bold text-xl sm:text-2xl mt-4">
        <h1 className="text-secondary">Ex</h1>
        <h1 className="text-third sm:ml-2">
          traordinary taste And Experienced
        </h1>
      </div>
      <p className="text-third font-normal text-sm sm:text-base mt-4 text-center sm:text-left max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
        consequat.
      </p>

      {/* Icon Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="w-[80px] sm:w-[102px] h-[80px] sm:h-[100px] bg-secondary rounded flex items-center justify-center">
          <Image
            src="/image/burger.svg"
            alt="burger"
            width={56}
            height={56}
            className="w-[40px] sm:w-[56px]"
          />
        </div>
        <div className="w-[80px] sm:w-[102px] h-[80px] sm:h-[100px] bg-secondary rounded flex items-center justify-center">
          <Image
            src="/image/Cookie.svg"
            alt="Cookie"
            width={56}
            height={56}
            className="w-[40px] sm:w-[56px]"
          />
        </div>
        <div className="w-[80px] sm:w-[102px] h-[80px] sm:h-[100px] bg-secondary rounded flex items-center justify-center">
          <Image
            src="/image/Wine.svg"
            alt="wine"
            width={56}
            height={56}
            className="w-[40px] sm:w-[56px]"
          />
        </div>
      </div>

      {/* Labels Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-4 text-sm sm:text-base">
        <p>Fast Food</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>

      {/* Experience Section */}
      <div className="mt-4 flex justify-center">
        <Image
          src="/image/experience.svg"
          alt="EXPERIENCE"
          width={280}
          height={80}
          className="w-full max-w-[340px]"
        />
      </div>
      </div>
      </div>




    {/* Range */}

   

    <div className="w-full flex justify-center mt-24 px-4">
  <div className="w-full max-w-[1320px] flex flex-wrap justify-center gap-8 md:gap-16">
    {/* 1st Item */}
    <div className="w-full sm:w-[218px] flex flex-col items-center text-center">
      <Image src="/image/range1.svg" alt="range1" width={120} height={120} />
      <p className="text-lg sm:text-xl font-semibold mt-4">Professional Chefs</p>
      <p className="text-3xl sm:text-4xl font-bold mt-2">420</p>
    </div>

    {/* 2nd Item */}
    <div className="w-full sm:w-[218px] flex flex-col items-center text-center">
      <Image src="/image/range2.svg" alt="range2" width={120} height={120} />
      <p className="text-lg sm:text-xl font-semibold mt-4">Items Of Food</p>
      <p className="text-3xl sm:text-4xl font-bold mt-2">320</p>
    </div>

    {/* 3rd Item */}
    <div className="w-full sm:w-[218px] flex flex-col items-center text-center">
      <Image src="/image/range3.svg" alt="range3" width={120} height={120} />
      <p className="text-lg sm:text-xl font-semibold mt-4">Years Of Experience</p>
      <p className="text-3xl sm:text-4xl font-bold mt-2">30+</p>
    </div>

    {/* 4th Item */}
    <div className="w-full sm:w-[218px] flex flex-col items-center text-center">
      <Image src="/image/range4.svg" alt="range4" width={120} height={120} />
      <p className="text-lg sm:text-xl font-semibold mt-4">Happy Customers</p>
      <p className="text-3xl sm:text-4xl font-bold mt-2">220</p>
    </div>
  </div>
</div>


{/* menu bar */}

<div className="flex flex-col items-center justify-center w-full px-4 md:px-8">
  <div className="w-full text-center">
    <h1 className="font-normal text-secondary good-vibes text-xl md:text-2xl">
      Choose & pick
    </h1>
  </div>
  <div className="flex flex-wrap justify-center items-center font-bold text-3xl md:text-5xl mt-6 md:mt-8">
    <h2 className="text-secondary">Fr</h2>
    <h2 className="text-third">om Our Menu</h2>
  </div>
  <div className="flex flex-wrap items-center justify-center space-x-4 gap-4 md:gap-20 mt-6 md:mt-8">
    <Link className="text-secondary font-semibold" href="">Breakfast</Link>
    <Link href="">Lunch</Link>
    <Link href="">Dinner</Link>
    <Link href="">Dessert</Link>
    <Link href="">Drink</Link>
    <Link href="">Snack</Link>
    <Link href="">Soups</Link>
  </div>
</div>

<div className="flex flex-col md:flex-row mt-8">
  {/* Menu */}
  <div className="w-full md:w-[366px] md:mr-4 mb-4 md:mb-0 flex justify-center md:justify-start">
    <Image src="/image/menu.svg" alt="menu" width={366} height={362} />
  </div>

  <div className="flex flex-col w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Menu1 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu1.svg" alt="menu1" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Lettuce Leaf</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">$12.5</p>
        </div>
      </div>

      {/* Menu2 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu2.svg" alt="menu2" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Glow Cheese</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">12.5$</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Menu3 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu3.svg" alt="menu3" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Fresh Breakfast</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">14.5$</p>
        </div>
      </div>

      {/* Menu4 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu4.svg" alt="menu4" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Italian Pizza</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">14.5$</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Menu5 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu5.svg" alt="menu5" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Mild Butter</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">12.5$</p>
        </div>
      </div>

      {/* Menu6 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu6.svg" alt="menu6" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Slice Beef</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary font-bold">12.5$</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Menu7 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu7.svg" alt="menu7" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Fresh Bread</h1>
          <p className="text-sm text-third">Lacus nisi, et ac dapibus velit in consequat.</p>
          <p className="text-sm text-secondary">$12.5</p>
        </div>
      </div>

      {/* Menu8 */}
      <div className="flex items-center gap-2 w-full h-[79px]">
        <Image src="/image/menu8.svg" alt="menu8" width={80} height={79} />
        <div>
          <h1 className="text-lg font-bold">Mushroom Pizza</h1>
          <p className="text-sm text-third">Purus sit amet volutpat consequat mauris.</p>
          <p className="text-sm text-secondary font-bold">$8.99</p>
        </div>
      </div>
    </div>
  </div>
</div>



{/* Meet our Chef */}
<div className="w-full text-center px-4 md:px-8">
  <h1 className="font-normal text-secondary good-vibes text-xl md:text-2xl mt-20 md:mt-28">
    Chefs
  </h1>
  <div className="flex flex-wrap justify-center items-center font-bold text-3xl md:text-5xl mt-6 md:mt-8">
    <h2 className="text-secondary">Me</h2>
    <h2 className="text-third">et Our Chef</h2>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-8">
    <Image src="/image/chef1.svg" alt="chef1" width={302} height={100} className="w-full h-auto" />
    <Image src="/image/chef2.svg" alt="chef2" width={302} height={100} className="w-full h-auto" />
    <Image src="/image/chef3.svg" alt="chef3" width={302} height={100} className="w-full h-auto" />
    <Image src="/image/chef4.svg" alt="chef4" width={302} height={100} className="w-full h-auto" />
  </div>
  <div className="flex justify-center mt-6">
    <button className="w-[170px] h-[40px] rounded-3xl font-normal text-sm text-third border-secondary border-2">
      Read more
    </button>
  </div>
</div>

        {/* Testimonials */}
<div className="w-full text-center px-4 md:px-8">
  <h1 className="font-normal text-secondary good-vibes text-xl md:text-2xl mt-20 md:mt-28">
    Testimonials
  </h1>
  <p className="font-semibold text-2xl md:text-3xl text-third mt-4">
    What our clients are saying
  </p>
  <div className="flex justify-center items-center mt-8 md:mt-12">
    <div className="w-full md:w-[868px] max-w-lg md:max-w-none bg-third p-6 md:p-12 flex flex-col justify-center items-center gap-4 relative rounded-lg shadow-lg">
      {/* Man Image */}
      <Image
        src="/image/man.svg"
        alt="man"
        width={100}
        height={100}
        className="mb-4 w-24 md:w-[133px] h-auto"
      />

      {/* 99 Image */}
      <Image
        src="/image/99.svg"
        alt="99"
        width={48}
        height={48}
        className="mb-4"
      />

      {/* Paragraph */}
      <p className="text-primary text-center text-sm md:text-base leading-relaxed max-w-xs md:max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>

      {/* Star Image */}
      <Image
        src="/image/star.svg"
        alt="star"
        width={152}
        height={24}
        className="my-4"
      />

      {/* Name */}
      <p className="font-bold text-xl md:text-2xl text-primary text-center">
        Alamin Hasan
      </p>

      {/* Job Title */}
      <p className="font-normal text-sm text-primary text-center">
        Food Specialist
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Item