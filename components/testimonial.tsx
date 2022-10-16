import {
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { NextPage } from "next";
import React from "react";
import { Container } from "./container";

const Testimonial: NextPage = () => {
  return (
    <Container bg="bg-white" text="text-black-600" pdY="py-6 md:py-20">
      <div className="space-y-2 md:grid md:grid-cols-11 md:gap-x-8 md:gap-y-10 md:space-y-0 py-3">
        <div className="relative flex col-span-5 flex-col mb-4 md:mb-0">
          <h2 className="tracking-wide font-semibold lg:max-w-xl text-2xl sm:text-3xl mb-2 md:mb-0">
            <span className="md:block xl:inline">Ready to get started?</span>
          </h2>
          <p className="pt-3 text-base sm:text-sm text-left text-gray-500 lg:max-w-md">
            Create beautiful landing pages with Rareblocks that converts more
            visitors than any website. With lots of uniques blocks, you can
            easily build a page.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <div className="rounded-lg shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-600 hover:opacity-80  px-8 py-2 text-base font-medium text-white md:py-3 md:px-10 md:text-lg"
              >
                Join now
              </a>
            </div>
            <div className="mt-3 sm:mt-0">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg border-black border-2 bg-transparent hover:opacity-70 px-8 py-2 text-base font-medium text-black-700 hover:bg-black-100 md:py-3 md:px-10 md:text-lg"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="relative col-span-6 flex flex-col md:flex-row gap-4">
          {Array.from(Array(2).keys()).map((num) => (
            <div className="relative flex flex-col rounded-md border-2 border-black text-slate-700 px-4 py-5">
              <div className="rounded-full bg-black flex justify-center items-center w-12 h-12 mb-5">
                <img
                  alt="Sark"
                  className="h-5 w-auto sm:h-7"
                  src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=500"
                />
              </div>

              <h4 className="font-bold">Store data on cloud</h4>
              <p className="pt-3 text-base sm:text-sm text-left text-gray-500">
                Create beautiful landing pages with Rareblocks that converts
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
