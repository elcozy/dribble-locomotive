import type { NextPage } from "next";
import { HeroItems } from ".";
import { Container } from "./container";

const heroFLoat = [
  {
    tag: "improvement",
    color: "text-violet-500",
    bg: "bg-violet-200",
    imgBg: "violet",
    comment: "Just helpful for me, and I like it!",
    position: "top-0 origin-top-left rotate-6",
  },
  {
    tag: "perfect",
    color: "text-green-500",
    bg: "bg-green-200",
    imgBbg: "green",
    comment: "Very helpful for me to manage my data",
    position: "right-0 origin-bottom -rotate-6",
  },
  {
    tag: "cool app",
    color: "text-red-500",
    bg: "bg-red-200",
    imgBg: "red",
    comment: "Its an amazing app for company to managing",
    position: "bottom-0 origin-bottom -rotate-6",
  },
  {
    tag: "awesome",
    color: "text-amber-500",
    bg: "bg-amber-200",
    imgBbg: "amber",
    comment: "I think its good app for manage!",
    position: "bottom-0 right-0 origin-bottom rotate-6",
  },
];
const Hero: NextPage = () => (
  <div className="mt-10 md:mt-16 lg:mt-20 xl:mt-28 relative">
    <div className="absolute z-20 hidden sm:block top-48">
      <img alt="Sark" className="h-16 w-auto lg:h-32" src="/demo-floater.png" />
    </div>
    <div className="absolute z-20 hidden sm:block top-48 right-0">
      <img
        alt="Sark"
        className="h-16 w-auto lg:h-32"
        src="/demo-floater-2.png"
      />
    </div>
    <Container>
      {heroFLoat.map((item) => (
        <HeroItems
          key={item.tag}
          tag={item.tag}
          comment={item.comment}
          bg={item.bg}
          color={item.color}
          imgBg={item.imgBg}
          classNames={item.position}
        />
      ))}

      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6  lg:px-8">
            <div className="sm:text-center lg:max-w-4xl lg:mx-auto">
              <h1 className="!leading-tight text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:max-w-3xl lg:mx-auto  md:text-6xl lg:text-7xl">
                <span className="block xl:inline">
                  Easy way to manage your productivity
                </span>
              </h1>
              <p className="!leading-relaxed mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl lg:max-w-full sm:text-lg md:mt-5 md:text-xl lg:text-2xl">
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
    </Container>
  </div>
);

export default Hero;
