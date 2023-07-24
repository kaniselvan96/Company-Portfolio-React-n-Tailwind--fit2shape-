import React, { useEffect } from "react";
import { productsData, products } from "../Data.js";
import AOS from "aos";

function Product() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="product"
      className="w-full relative m-auto px-8 py-12 max-w-[1100px]"
    >
      <h1
        data-aos="zoom-out-down"
        className="text-black drop-shadow-lg md:text-5xl text-4xl font-bold text-center py-8"
      >
        {products}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        {productsData.map((item, index) => (
          <div
            data-aos="zoom-in"
            className="flex flex-col my-auto hover:scale-105 duration-300"
            key={index}
          >
            <img
              src={item.url}
              alt={item.name}
              className="bg-gray-300 w-full h-[250px] object-fill rounded-lg shadow-md"
            />
            <div className="w-full bg-gray-800 -mt-10 shadow-lg rounded-lg overflow-hidden">
              <div className="shadow-xl py-2 px-3">
                <h1 className="text-white text-sm py-2 text-center font-bold uppercase tracking-wide ">
                  {item.name}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
