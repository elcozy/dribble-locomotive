import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="flex bg-white justify-center py-6 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:max-w-3xl lg:mx-auto">
                <h1 className="!leading-tight text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:max-w-xl lg:mx-auto  md:text-6xl">
                  <span className="block xl:inline">
                    Easy way to manage your productivity
                  </span>
                </h1>
                <p className="!leading-relaxed mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl lg:max-w-full sm:text-lg md:mt-5 md:text-xl">
                  Drive performance and your cross-functional collaboration with
                  easy-to-use dashboards and data visualizions and automated
                  insights in one click
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-full shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-8 py-2 text-base font-medium text-white hover:bg-blue-700 md:py-3 md:px-10 md:text-lg"
                    >
                      Request a demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full border-black border-2 bg-transparent px-8 py-2 text-base font-medium text-black-700 hover:bg-black-100 md:py-3 md:px-10 md:text-lg"
                    >
                      Watch video tutorial
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
