import React from 'react';
import Image from "next/image"
import Header from "../component/header/header"
import Footer from "../component/footer/footer"

const MenuPage: React.FC = () => {
  return (
    <div className="bg-primary font-sans">
       <Header/>
      <header className="bg-cover bg-center h-48 flex items-center justify-center h-80" style={{ backgroundImage: "url('/image/header.svg')"}}>
        <h1 className="text-5xl font-bold text-white tracking-wide">Our Menu</h1>
      </header>

      <main className="py-12 px-6 md:px-16 lg:px-28 bg-third">
      
      {/* Background Section */}
     
     
        {/* Appetizers Section */}
        <section className="mb-16 ">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <Image src="./image/new1.svg" alt="Appetizer" width={448} height={626} className=" object-cover rounded mr-4" />
              <div className='text-primary mt-16 ml-8'>
              <h2 className="text-4xl font-bold mb-4 w-[294px] h-[56px]">Starter Menu</h2>
                <h3 className="text-2xl font-bold w-96">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm mt-4">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs mt-4">560 CAL</p>
                <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 text-secondary">Berries and creme tart</h3>
                <p className="text-sm mt-4">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs mt-4">700 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Tormentoso Bush Pizza Pintoage</h3>
                <p className="text-sm mt-4">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-xs mt-4">1000 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Spicy Vegan Potato Curry</h3>
                <p className="text-sm mt-4">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs mt-4">500 CAL</p>
              </div>
              </div>

              <div className='text-secondary font-bold text-3xl ml-8'>
                <p className='mt-16'>32$</p>
                <p className='mt-16'>43$</p>
                <p className='mt-16'>14$</p>
                <p className='mt-16'>35$</p>
                </div>

             
              
            </div>
          </div>
        </section>

    

           {/* Main course Section */}


           <section className="mb-16 ">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              
              <div className='text-primary mt-16 ml-8'>
              <h2 className="text-4xl font-bold mb-4 w-[294px] h-[56px]">Main Course</h2>
                <h3 className="text-2xl font-bold w-96">Optic Big Breakfast Combo Menu</h3>
                <p className="text-sm mt-4">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs mt-4">560 CAL</p>
                <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 text-primary">Cashew Chicken With Stir-Fry</h3>
                <p className="text-sm mt-4">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs mt-4">700 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 "> Vegetables & Green Salad</h3>
                <p className="text-sm mt-4">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-xs mt-4">1000 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Spicy Vegan Potato Curry</h3>
                <p className="text-sm mt-4">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs mt-4">500 CAL</p>
              </div>
              </div>

              <div className='text-secondary font-bold text-3xl ml-8'>
                <p className='mt-16'>32$</p>
                <p className='mt-16'>43$</p>
                <p className='mt-16'>14$</p>
                <p className='mt-16'>35$</p>
                </div>
               
                <Image  src="./image/new2.svg" alt="new2" width={448} height={626} className=" object-cover rounded ml-16" />
               
            </div>
          </div>
        </section>
         

        {/* Fun Facts Section */}
        <section className="bg-primary py-12 rounded-lg mb-16">
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
        </section>

        {/* Dessert Section */}
        <section className="mb-16 ">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <Image src="./image/dessert.svg" alt="dessert" width={448} height={626} className=" object-cover rounded mr-4" />
              <div className='text-primary mt-16 ml-8'>
              <h2 className="text-4xl font-bold mb-4 w-[294px] h-[56px]">Dessert</h2>
                <h3 className="text-2xl font-bold w-96">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm mt-4">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs mt-4">560 CAL</p>
                <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 text-secondary">Berries and creme tart</h3>
                <p className="text-sm mt-4">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs mt-4">700 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Tormentoso Bush Pizza Pintoage</h3>
                <p className="text-sm mt-4">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-xs mt-4">1000 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Spicy Vegan Potato Curry</h3>
                <p className="text-sm mt-4">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs mt-4">500 CAL</p>
              </div>
              </div>

              <div className='text-secondary font-bold text-3xl ml-8'>
                <p className='mt-16'>32$</p>
                <p className='mt-16'>43$</p>
                <p className='mt-16'>14$</p>
                <p className='mt-16'>35$</p>
                </div>

             
              
            </div>
          </div>
        </section>

     

        {/* drinkss Section */}
        <section className="mb-16 ">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              
              <div className='text-primary mt-16 ml-8'>
              <h2 className="text-4xl font-bold mb-4 w-[294px] h-[56px]">Drinks</h2>
                <h3 className="text-2xl font-bold w-96">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm mt-4">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs mt-4">560 CAL</p>
                <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 text-secondary">Berries and creme tart</h3>
                <p className="text-sm mt-4">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs mt-4">700 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Tormentoso Bush Pizza Pintoage</h3>
                <p className="text-sm mt-4">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-xs mt-4">1000 CAL</p>
              </div>

              <div className='text-primary'>
                <h3 className="text-2xl font-bold w-96 ">Spicy Vegan Potato Curry</h3>
                <p className="text-sm mt-4">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs mt-4">500 CAL</p>
              </div>
              </div>

              <div className='text-secondary font-bold text-3xl ml-8'>
                <p className='mt-16'>32$</p>
                <p className='mt-16'>43$</p>
                <p className='mt-16'>14$</p>
                <p className='mt-16'>35$</p>
                </div>
               
                <Image  src="./image/drink.svg" alt="drinks" width={448} height={626} className=" object-cover rounded ml-16" />
               
            </div>
          </div>
        </section>


                {/* Partners Section */}
                <section className="py-12 text-center text-primary">
                  <p>Partners & Clients</p>
          <h2 className="text-2xl font-semibold mb-6 ">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-6">
           <Image src="/image/work1.svg" alt="work1" width={100} height={129}></Image>
           <Image src="/image/work2.svg" alt="work1" width={100} height={129}></Image>
           <Image src="/image/work3.svg" alt="work1" width={100} height={129}></Image>
           <Image src="/image/work4.svg" alt="work1" width={100} height={129}></Image>
           <Image src="/image/work5.svg" alt="work1" width={100} height={129}></Image>
           <Image src="/image/work6.svg" alt="work1" width={100} height={129}></Image>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

export default MenuPage;