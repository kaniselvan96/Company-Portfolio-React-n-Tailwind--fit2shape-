import React, { useEffect } from "react";
import { aboutData, aboutUs, imageUrl } from "../Data";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  function replaceWithBr() {
    return aboutData.replace(/\n/g, "<br />");
  }
  return (
    <div
      id="about"
      className="flex flex-col  h-screen w-full justify-center items-center m-auto px-8 py-4 bg-gray-100 "
    >
      <div className="items-center grid lg:grid-cols-2">
        <div className="flex order-last justify-center h-[150px] md:h-[250px] lg:h-[400px] w-full m-auto mt-10">
          <img
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            className="rounded shadow-xl"
            src={imageUrl}
            alt="/"
          />
        </div>

        <div className="flex flex-col lg:order-last md:ml-10 justify-center">
          <h1
            data-aos="fade-down"
            className="text-black drop-shadow-lg text-center md:text-5xl sm:text-4xl text-3xl font-bold py-2 md:pt-0 pb-10"
          >
            {aboutUs}
          </h1>
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="200"
            className="text-left"
          >
            <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
