import type { NextPage } from "next";
import React from "react";
import { Container } from "./container";

const Partner: NextPage = () => {
  return (
    <Container
      id="resources"
      bg="bg-blue-700"
      text="text-gray-500"
      pdY="py-9 md:py-20"
    >
      <>
        <h2 className="text-2xl font-semibold text-white w-full sm:text-3xl lg:text-5xl mb-4 text-center">
          <span className="block">You are not alone. The pain of</span>
          <span className="block"> website creation is real</span>
        </h2>
        <div className="mx-auto md:pt-9">
          <div className="space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0 mb-3">
            <div className="col-span-3 w-full m-1 px-4 md:p-12 py-7 bg-white text-gray-800 rounded-md drop-shadow-lg gap-1.5 flex flex-col md:flex-row">
              {Array.from(Array(3).keys()).map((num) => (
                <div
                  className={` ${
                    num % 3 == 0
                      ? "pb-4 md:pr-4"
                      : num % 2 == 0
                      ? "pt-4 md:pl-4"
                      : "py-4 md:px-4  border-y-2 md:border-x-2 md:border-y-0"
                  } relative flex flex-col`}
                >
                  <div className="rounded-full bg-yellow-400 flex justify-center items-center w-12 h-12">
                    <img
                      alt="Sell Hustle"
                      className="h-5 w-auto sm:h-7"
                      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    />
                  </div>

                  <p className="py-5 text-base sm:text-sm text-left text-gray-500">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repu andae
                    consequun mollitia"
                  </p>
                  <div className="flex flex-col">
                    <span className="font-bold">Leslie Alexander</span>
                    <span className="text-gray-400 text-sm font-semibold">
                      President of Marketing, SS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </Container>
  );
};

export default Partner;
