// BarbingToolsPage.js

import React from "react";
import clipperImage from "../images/clipper.jpeg";
import scissorsImage from "../images/barb-scissors.jpg";
import razorImage from "../images/barbing-razor.jpg";

const Tools = () => {
  const barbingTools = [
    { id: 1, name: "Clipper", price: 50, image: clipperImage },
    { id: 2, name: "Scissors", price: 20, image: scissorsImage },
    { id: 3, name: "Razor", price: 15, image: razorImage },
    // Add more barbing tool objects as needed
  ];

  const handleAddToCart = (tool) => {
    console.log("Added to cart:", tool);
  };

  return (
    <div className="bg-gray-100 z-0  py-8 m-4 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Barbing Tools for Sale
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbingTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white  relative rounded-lg shadow-md overflow-hidden flex  items-center p-2 flex-col"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-1/2 h-1/2 m-4 object-cover"
              />
              <div className="p-4 flex flex-col justify-center mt-auto mb-20">
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="text-gray-700">Price: ${tool.price}</p>
              </div>
              <div className="absolute bottom-1  text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 mt-10 p-8 rounded"
                  onClick={() => handleAddToCart(tool)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
