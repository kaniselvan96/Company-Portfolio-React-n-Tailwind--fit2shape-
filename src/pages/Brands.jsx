import React, { useEffect } from "react";
import { brandsLogo } from "../Data";
import AOS from "aos";

export default function Brands() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="brands" className=" w-full px-6 pb-10" data-aos="fade-up">
      <div className="flex flex-col  justify-center items-center bg-white p-2 rounded-lg shadow-xl">
        <div
          className="flex justify-center flex-wrap md:w-3/3 my-4 mx-auto gap-x-8
      md:gap-y-6 gap-y-6"
        >
          {brandsLogo.map((item, index) => (
            <img
              key={index}
              src={item.url}
              alt={item.name}
              className="h-10 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
