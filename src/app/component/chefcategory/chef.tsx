import React from "react";
import Image from "next/image";
const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/image/chefs1.svg" },
  { name: "Jorina Begum", role: "Chef", image: "/image/chefs2.svg" },
  { name: "M. Mohammad", role: "Chef", image: "/image/chefs3.svg"},
  { name: "Munna Kathy", role: "Chef", image: "/image/chefs4.svg"},
  { name: "Tahmina Rumi", role: "Cook", image: "/image/chefs5.svg"},
  { name: "Bisnu Devgon", role: "Chef", image: "/image/chefs6.svg" },
  { name: "Motin Molladst", role: "Chef", image: "/image/chefs7.svg" },
  { name: "William Rumi", role: "Chef", image: "/image/chefs9.svg" },
  { name: "Kets William Roy", role: "Chef", image:"/image/chefs10.svg" },
  { name: "Mahmud Kholil", role: "Chef", image: "/image/chefs11.svg" },
  { name: "Ataur Rahman", role: "Chef", image: "/image/chefs8.svg" },
  { name: "Monalisa Holly", role: "Chef", image: "/image/chefs12.svg" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`  rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-gray-200" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-gray-200" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={300} height={300}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;