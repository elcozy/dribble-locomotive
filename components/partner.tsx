import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import React from "react";

const Partner: NextPage = () => {
  return (
    <div className=" bg-blue-700 py-6 md:py-16">
      <div className="flex justify-center">
        <div className="container">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 mb-3">
              <div className="relative flex flex-col py-3">
                <h2 className="tracking-wider font-medium text-white lg:max-w-xl text-2xl sm:text-3xl mb-0">
                  <span className="md:block xl:inline">Over 200+ teams</span>
                  <span className="md:block xl:inline"> worldwide rely on</span>
                  <span className="md:block xl:inline"> Locomotive</span>
                </h2>
              </div>
              <div className="relative flex flex-col py-3">
                <p className="text-white text-base sm:text-sm  mb-5 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repu andae
                  consequun mollitia, molestiae quas vel sint commodi repu andae
                  consequun turfr voluptatum.
                </p>
                <div className="flex text-sm items-center cursor-pointer text-white">
                  <span className="">See more </span>
                  <span className="ml-2">
                    <ArrowRightIcon className="h-4 w-6" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel rounded-box gap-1.5 pt-5 pb-4 flex flex-col">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            drag: "free",
            // perPage: 3,
            autoWidth: true,
            gap: "6px",
            arrows: false,
            pagination: false,
            focus: "center",
            autoScroll: {
              pauseOnHover: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {Array.from(Array(10).keys()).map((item) => (
            <React.Fragment key={item + "b"}>
              <SplideSlide>
                <div className="w-40 h-40 drop-shadow-lg p-6 m-2 bg-blue-700 rounded-md flex justify-center items-center">
                  <div className="rounded-md drop-shadow-xl">
                    <img
                      className="rounded-md"
                      src="https://via.placeholder.com/150x60/A2ABFF"
                    />
                  </div>
                </div>
              </SplideSlide>
            </React.Fragment>
          ))}
        </Splide>
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            drag: "free",
            autoWidth: true,
            gap: "6px",
            arrows: false,
            pagination: false,
            focus: "center",
            autoScroll: {
              speed: -1,
              pauseOnHover: false,
              rewind: false,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {Array.from(Array(10).keys()).map((item) => (
            <React.Fragment key={item}>
              <SplideSlide>
                <div className="w-40 h-40 drop-shadow-lg p-6 m-2 bg-blue-700 rounded-md flex justify-center items-center">
                  <div className="rounded-md drop-shadow-lg">
                    <img
                      className="rounded-md"
                      src="https://via.placeholder.com/150x60/A2ABFF"
                    />
                  </div>
                </div>
              </SplideSlide>
            </React.Fragment>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Partner;
