import { NextPage } from "next";
import React from "react";
import { Container } from "./container";

type THeroItem = {
  tag?: string;
  comment?: string;
  color?: string;
  bg?: string;
  imgBg?: string;
  classNames?: string;
};
const HeroItem = ({
  tag = "perfect",
  comment = "Very helpful for me to manage my data",
  color = "green",
  imgBg = "green",
  bg = "green",
  classNames = "",
}: THeroItem) => {
  return (
    <div className={`${classNames} absolute z-20 hidden xl:block`}>
      <div className="flex flex-col w-fit items-center">
        <div className="relative flex flex-col rounded-xl py-3 px-4 shadow-md mb-4 w">
          <div
            className={`text-sm font-bold ${bg} ${color} mb-2 uppercase rounded-md px-2 py-1 w-fit`}
          >
            <span className="md:block xl:inline">{tag}</span>
          </div>
          <p className="text-black text-lg font-semibold sm:text-sm text-justify">
            {comment}
          </p>
        </div>

        <div
          className={`mb-4 md:mb-5 rounded-full ${bg} flex justify-center items-center w-16 h-16`}
        >
          <img
            alt="Sell Hustle"
            className="h-5 w-auto sm:h-7"
            src={`https://tailwindui.com/img/logos/mark.svg?color=${imgBg}&shade=600`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
