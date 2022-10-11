import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Partner: NextPage = () => {
  return (
    <div className=" bg-blue-700 py-6 md:py-16">
      <div className="flex justify-center">
        <div className="container">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative flex flex-col py-3">
                <h2 className="text-xl tracking-wider font-medium text-white lg:max-w-xl md:text-2xl mb-3">
                  <span className="block xl:inline">Over 200+ teams</span>
                  <span className="block xl:inline">worldwide rely on</span>
                  <span className="block xl:inline">Locomotive</span>
                </h2>
              </div>
              <div className="relative flex flex-col py-3">
                <p className="text-white text-sm mb-5 text-left">
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
            perPage: 3,
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
          {Array(12)
            .fill(0)
            .map(() => (
              <SplideSlide>
                <div className="drop-shadow-lg">
                  <img
                    className="rounded-md"
                    src="https://via.placeholder.com/1980x1080/3147F3"
                  />
                </div>
              </SplideSlide>
            ))}
        </Splide>
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            drag: "free",
            perPage: 3,
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
          {Array(12)
            .fill(0)
            .map(() => (
              <SplideSlide>
                <div className="drop-shadow-lg">
                  <img
                    className="rounded-md"
                    src="https://via.placeholder.com/1980x1080/3147F3"
                  />
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default Partner;
