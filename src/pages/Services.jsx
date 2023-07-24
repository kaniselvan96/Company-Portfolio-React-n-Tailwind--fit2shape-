import React, { useEffect } from "react";
import { servicesData, services } from "../Data";
import AOS from "aos";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full py-[6rem] pt-[40rem]  md:pt-[23rem] px-4 bg-gray-100">
      <div id="service">
        <h1
          data-aos="flip-down"
          className="text-black drop-shadow-lg text-center md:text-5xl text-4xl font-bold mb-12 mt-10 md:mt-0 py-2 pb-4"
        >
          {services}
        </h1>
      </div>
      <div className="max-w-[1100px] mx-12 px-10 md:px-0 md:mx-auto grid md:grid-cols-3 gap-8">
        {servicesData.map((item, index) => (
          <div
            data-aos="zoom-in"
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className="object-cover h-60 mt-[-3rem] bg-white"
              src={item.url}
              alt="/"
            />
            <h1 className="text-center md:text-4xl text-2xl font-bold pt-8">
              {item.name}
            </h1>
            <div className="text-center font-light">
              <div className="py-2 mx-8 mt-4">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
