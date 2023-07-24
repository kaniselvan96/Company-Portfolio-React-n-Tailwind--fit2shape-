import React, { useEffect } from "react";
import { mainTitle, subTitle, subTitle_array, getInTouch } from "../Data";
import Typed from "react-typed";
import AOS from "aos";
import ReactGA from "react-ga";
import { Link } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className=" overflow-x-hidden text-black">
      <div className=" mt-[96px] w-full h-[400px] mx-auto text-center flex flex-col justify-center">
        <h1
          data-aos="zoom-in"
          className="drop-shadow-lg md:text-7xl text-5xl font-bold md:py-6"
        >
          {mainTitle}
        </h1>
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            {subTitle}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={subTitle_array}
            typeSpeed={150}
            backSpeed={180}
            loop
          />
        </div>
        <Link
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-100 bg-orange-500  w-[200px] rounded-md font-bold  my-6 mx-auto py-3 text-white shadow-xl"
        >
          {getInTouch}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
