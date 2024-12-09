import React from 'react';
import Header from "./component/headline/headline";
import Image from 'next/image';
import Footer from "./component/footer/footer";
import About from"./about/page"
import Item from "./item/page"

const Page = () => {
  return (
    <div className="w-full h-auto bg-primary">
      <Header />
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-14 mt-8">
          {/* Left Vertical Line */}
          <div className="hidden md:block">
            <Image src="/image/line.svg" alt="line" width={25.28} height={492} />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-full md:max-w-[472px]">
            <p className="font-normal text-secondary good-vibes text-xl md:text-2xl">
              It's Quick & Amusing!
            </p>
            <div className=" flex flex-col md:flex-row font-bold text-4xl md:text-6xl mt-4">
              <p className="text-secondary">Th</p>
              <p className="text-third md:ml-2">e Art of speed</p>
            </div>
            <p className="font-bold text-4xl md:text-6xl">food Quality</p>

            <p className="text-third text-sm md:text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-third text-sm md:text-base">
              Varius sed pharetra dictum neque massa congue
            </p>
            <button className="w-[150px] md:w-[170px] h-[40px] rounded-3xl font-normal text-sm bg-secondary text-white mt-4">
              See Menu
            </button>
          </div>

          {/* Food Illustration */}
          <div>
            <Image
              src="/image/Image.svg"
              alt="Illustration of food"
              width={312} // Smaller width for mobile
              height={316} // Smaller height for mobile
              className="md:w-auto md:h-auto"
            />
          </div>
        </div>
    



     {/* 2nd */}

        

      </div>
      <About/>
      <Item/>
 


      <div className="h-[400px] mt-56 ">
  <section
    className="bg-black text-white bg-cover bg-center"
    style={{ backgroundImage: "url('/image/last2.svg.svg')" }}
  >
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row md:gap-8">
      <div className="md:w-full text-left">
        <h3 className="text-secondary text-lg mb-2 font-serif good-vibe md:text-center">
          Restaurant Active Process
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start md:text-4xl text-3xl font-bold gap-2">
          <h2 className="text-secondary">We</h2>
          <h2 className="text-third">Document Every Food Bean Process until it is</h2>
        </div>
        <p className="text-gray-300 mb-6 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition duration-300">
            Read More
          </button>
          <button className="px-6 py-2 bg-amber-500 text-white rounded-full flex items-center hover:bg-amber-600 transition duration-300">
            <span className="mr-2">Play Video</span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>






      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page
