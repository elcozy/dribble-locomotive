import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { NextPage } from "next";
import React from "react";

const Testimonial: NextPage = () => {
  return (
    <div className="bg-gray-50 py-6 md:py-16 text-black-600">
      <div className="flex justify-center">
        <div className="container">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10 md:space-y-0 py-3">
              <div className="relative flex col-span-3 flex-col">
                <h2 className="tracking-wide font-semibold lg:max-w-xl text-2xl sm:text-3xl mb-2 md:mb-0">
                  <span className="md:block xl:inline">
                    Join the teams making decisions
                  </span>
                  <span className="md:block xl:inline">
                    {" "}
                    based on data, not whim
                  </span>
                </h2>
              </div>

              <div className="relative flex flex-col items-end">
                <div className=" flex text-sm items-center cursor-pointer text-black mt-auto gap-2">
                  <span className="flex w-9 items-center justify-center rounded-full border border-transparent bg-blue-300 hover:bg-blue-700 text-blue-800 hover:text-white cursor-pointer p-2 text-base font-medium">
                    <ArrowLeftIcon className="h-4 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex w-9 items-center justify-center rounded-full border border-transparent bg-blue-300 hover:bg-blue-700 text-blue-800 hover:text-white cursor-pointer p-2 text-base font-medium">
                    <ArrowRightIcon className="h-4 w-6" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel rounded-box gap-1.5 pt-0 md:py-3 flex flex-col">
        <Splide
          aria-label="Testimonial"
          options={{
            type: "loop",
            drag: "free",
            perPage: 2,
            gap: "6px",
            arrows: false,
            pagination: false,
            focus: "center",
            autoplay: true,
          }}
        >
          {Array.from(Array(4).keys()).map((item) => (
            <React.Fragment key={item + "c"}>
              <SplideSlide>
                <div className="drop-shadow-lg py-5">
                  <img
                    className="rounded-md"
                    src="https://via.placeholder.com/4560x2000/FFFFFF"
                  />
                </div>
              </SplideSlide>
            </React.Fragment>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
