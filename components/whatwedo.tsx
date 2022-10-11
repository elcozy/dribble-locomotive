import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const WhatWeDo: NextPage = () => {
  return (
    <div className="flex bg-white justify-center py-6 md:py-16" id="about">
      <div className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div className="relative flex flex-col py-3">
              <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl mb-4">
                <span className="md:block xl:inline text-blue-700">
                  Save time
                </span>
                <span className="md:block xl:inline">
                  {" "}
                  by having everything
                </span>
                <span className="md:block xl:inline"> in one platform</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-sm mb-7 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
              <div className="flex text-sm items-center cursor-pointer text-blue-700">
                <span className="">See more </span>
                <span className="ml-2">
                  <ArrowRightIcon className="h-4 w-6" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="rounded-md relative flex flex-col bg-gray-50 p-14 justify-center items-center">
              <img
                className="rounded-2xl drop-shadow-lg"
                src="https://via.placeholder.com/1980x1080/FFFFFF"
              />
            </div>
            <div className="rounded-md relative flex flex-col bg-gray-50 p-14 justify-center items-center">
              <img
                className="rounded-2xl drop-shadow-lg"
                src="https://via.placeholder.com/1980x1080/FFFFFF"
              ></img>
            </div>
            <div className="relative flex flex-col py-3">
              <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl mb-4">
                <span className="md:block xl:inline text-blue-700">
                  Mitigate risks
                </span>
                <span className="md:block xl:inline">
                  {" "}
                  by managing your data
                </span>
                <span className="md:block xl:inline">
                  {" "}
                  10x faster than before
                </span>
              </h2>
              <p className="text-gray-500 text-base sm:text-sm mb-7 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
              <div className="flex text-sm items-center cursor-pointer text-blue-700">
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
  );
};

export default WhatWeDo;
