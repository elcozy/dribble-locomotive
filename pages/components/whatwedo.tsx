import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const WhatWeDo: NextPage = () => {
  return (
    <div className="flex bg-white justify-center py-6 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div className="relative flex flex-col py-3">
              <h2 className="text-xl font-semibold text-gray-900 lg:max-w-xl md:text-2xl mb-3">
                <span className="block xl:inline text-blue-700">Save time</span>
                <span className="block xl:inline">by having everything</span>
                <span className="block xl:inline">in one platform</span>
              </h2>
              <p className="text-gray-500 text-sm mb-5 text-justify">
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
            <div className="relative flex flex-col py-3">
              <img
                className="rounded-2xl drop-shadow-lg"
                src="https://via.placeholder.com/1980x1080/FFFFFF"
              />
            </div>
            <div className="relative flex flex-col py-3">
              <img
                className="rounded-2xl drop-shadow-lg"
                src="https://via.placeholder.com/1980x1080/FFFFFF"
              ></img>
            </div>
            <div className="relative flex flex-col py-3">
              <h2 className="text-xl font-semibold text-gray-900 lg:max-w-xl md:text-2xl mb-3">
                <span className="block xl:inline text-blue-700">
                  Mitigate risks
                </span>
                <span className="block xl:inline">by managing your data</span>
                <span className="block xl:inline">10x faster than before</span>
              </h2>
              <p className="text-gray-500 text-sm mb-5 text-justify">
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
