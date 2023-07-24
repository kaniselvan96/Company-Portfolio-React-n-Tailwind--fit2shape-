import React, { useEffect } from "react";
import { pastProjectsData, pastProjects } from "../Data";
import AOS from "aos";

export default function PastProjects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="project"
      className="overflow-x-hidden flex-col min-h-screen items-center justify-center bg-neutral-800 p-10 "
    >
      <div>
        <h1
          data-aos="zoom-out-down"
          className="text-white drop-shadow-lg md:text-5xl sm:text-4xl text-3xl font-bold text-center py-4 pb-12"
        >
          {pastProjects}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 max-w-[1240px] m-auto">
        {pastProjectsData.map((item, index) => (
          <div
            data-aos="zoom-in"
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            key={index}
          >
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={item.url}
                alt={item.name}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
