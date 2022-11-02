import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { NextPage } from "next";
import React from "react";
import { footerSupport } from "./constants";
import { Container } from "./container";

const Testimonial: NextPage = () => {
  return (
    <Container
      id="resources"
      bg="bg-blue-700"
      text="text-gray-500"
      pdY="py-9 md:py-20"
    >
      <div className="space-y-2 md:grid md:grid-cols-11 md:gap-x-8 md:gap-y-10 md:space-y-0 py-3">
        <div className=" text-white relative flex col-span-5 flex-col mb-4 md:mb-0">
          <h2 className="tracking-wide font-semibold lg:max-w-xl text-2xl sm:text-3xl mb-2 md:mb-0">
            <span className="md:block xl:inline">Ready to get started?</span>
          </h2>
          <p className="pt-3 text-base sm:text-lg text-left text-white lg:max-w-md">
            Create beautiful landing pages with SellHustle that converts more
            visitors than any website. With lots of uniques blocks, you can
            easily build a page.
          </p>
          <div className="mt-5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
            <div className="rounded-lg shadow">
              <a
                href="#"
                className="bg-white text-gray-500 flex w-full items-center justify-center rounded-lg border border-transparent hover:opacity-80  px-8 py-2 text-base font-medium md:py-3 md:px-10 md:text-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="relative col-span-6 flex flex-col md:flex-row gap-4">
          {footerSupport.map((item: any) => (
            <div
              key={item.title}
              className="relative flex flex-col rounded-md border-2 border-transparent bg-white text-slate-700 px-4 py-5"
            >
              <div className="rounded-full bg-white flex justify-center items-center w-12 h-12 mb-5">
                <img
                  alt="SellHustle"
                  className="h-10 w-auto md:h-12"
                  src={`/icons/${item.icon}.png`}
                />
              </div>

              <h3 className="font-bold">{item.title}</h3>
              <p className="pt-3 text-base md:text-md mb-7 text-left text-gray-500">
                {item.description}
              </p>
              <div className="flex text-sm md:text-base items-center cursor-pointer font-bold hover:opacity-75">
                <span className="">{item.actionText}</span>
                <span className="ml-2">
                  <ArrowRightIcon
                    className="h-4 w-6 font-bold"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
