import { NextPage } from "next";
import React from "react";
import { Container } from "./container";

const Banner: NextPage = () => {
  return (
    <div className="bg-black w-full h-auto py-3">
      <Container pdY="0" bg="bg-black" text="text-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2  tracking-wide text-xs md:text-sm">
          <div className="rounded-full shadow text-center bg-teal-300 px-3 py-1 font-medium">
            <a
              href="#"
              className="cursor-default text-black  rounded-full border border-transparent"
            >
              New info
            </a>
          </div>
          <p className="font-light opacity-90 my-auto">
            Learn about our 2022 performance roadmap and what it means for you
          </p>
          <a
            href="#"
            className="border border-transparent underline text-base font-medium hover:opacity-80"
          >
            Access now
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
