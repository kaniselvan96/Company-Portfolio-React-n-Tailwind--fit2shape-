import React, { useEffect } from "react";
import { custGov, custPrivate, custNGO, customers, government, privateSector, ngo} from "../Data";
import { IconContext } from "react-icons/lib";
import { RiGovernmentFill } from "react-icons/ri";
import { HiBuildingOffice } from "react-icons/hi2";
import { BiDonateHeart } from "react-icons/bi";
import AOS from "aos";

export default function Customers() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="customers" className="w-full absolute bg-white">
      <section
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bg-Hero bg-cover bg-center py-4 md:px-24 -mb-56 px-4"
      >
        <div className="bg-white shadow-2xl rounded-md">
          <h3 className="text-black drop-shadow-lg md:text-3xl text-4xl font-bold text-center pt-4">
            {customers}
          </h3>
          <div className="flex md:flex-row flex-col gap-10 md:px-16 md:py-10 px-10 py-4 mt-5 rounded-md">
            <IconContext.Provider
              value={{ size: "3em", color: "cornflowerblue" }}
            >
              <div>
                <RiGovernmentFill />
                <h1 className="font-semibold text-lg my-3">{government}</h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {custGov}
                </p>
              </div>
              <div>
                <HiBuildingOffice />
                <h1 className="font-semibold text-lg my-3">{privateSector}</h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {custPrivate}
                </p>{" "}
              </div>
              <div>
                <BiDonateHeart />
                <h1 className="font-semibold text-lg my-3">{ngo}</h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {custNGO}
                </p>{" "}
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </div>
  );
}
