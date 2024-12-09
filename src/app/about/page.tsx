import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-auto bg-primary">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
          
          {/* Text Section */}
          <div className="w-full md:w-[50%] max-w-[562px]">
            <p className="text-secondary good-vibes text-xl md:text-2xl">About us</p>
            <div className="flex flex-wrap md:flex-nowrap gap-2 text-4xl md:text-6xl font-bold mt-4">
              <p className="text-secondary">we</p>
              <p>create the best</p>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-third">foody product</p>
            <p className="text-sm md:text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex items-start gap-2 mt-4">
              <Image src="/image/path.svg" alt="path" width={17} height={12.24} />
              <p className="text-sm md:text-base">Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <Image src="/image/path.svg" alt="path" width={17} height={12.24} />
              <p className="text-sm md:text-base">Quisque diam pellentesque bibendum non dui volutpat fringilla.</p>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <Image src="/image/path.svg" alt="path" width={17} height={12.24} />
              <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="w-[150px] md:w-[170px] h-[40px] rounded-3xl font-normal text-sm bg-secondary text-white mt-4">
              Read more
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] max-w-[562px] flex flex-col items-center gap-4">
            <Image
              src="/image/image1.svg"
              alt="image1"
              width={600}
              height={600}
              className="w-full h-auto"
            />
            <div className="flex gap-4 w-full justify-center">
              <Image
                src="/image/image2.svg"
                alt="image2"
                width={150}
                height={150}
                className="w-[48%] h-auto"
              />
              <Image
                src="/image/image3.svg"
                alt="image3"
                width={150}
                height={150}
                className="w-[48%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
