import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col bg-black justify-center py-6 md:py-14 text-white border-b items-center">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-12 lg:w-full">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center">
                <h2 className="text-left text-3xl font-semibold text-white sm:text-4xl lg:max-w-5xl md:text-5xl lg:text-6xl tracking-normal">
                  <span className="lg:block xl:inline">
                    Are you ready to manage your data
                  </span>
                  <span className="lg:block xl:inline">
                    <span className="text-sky-300"> 10x faster</span> than
                    before?
                  </span>
                </h2>
                <p className="text-left mt-3 text-sm text-white sm:mt-5 sm:max-w-xl sm:text-base md:text-lg md:mt-5 md:max-w-lg">
                  Drive performance and your cross-functional collaboration with
                  easy-to-use dashboards and data visualizions and automated
                  insights in one click
                </p>
                <div className="mt-5 sm:mt-8 sm:flex gap-4">
                  <div className="my-3">
                    <input
                      type="text"
                      className="flex w-full items-center justify-center rounded-full border border-transparent bg-white px-8 py-2 text-base font-medium text-blue-700 md:py-3 md:px-10 md:text-lg"
                    />
                  </div>
                  <div className="my-3 rounded-full shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-8 py-2 text-base font-medium text-white hover:bg-blue-700 md:py-3 md:px-10 md:text-lg"
                    >
                      Request a demo
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

export default Contact;
