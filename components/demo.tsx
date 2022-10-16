import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { Container } from "./container";

const marketingPattern = [
  {
    title: "Social media strategy",
    description:
      "A social media strategy is a summary of everything you plan to do and hope to achieve on social media.",
  },
  {
    title: "Digital marketing plan",
    description:
      "Digital marketing is important because it connects a business with its customers & is effective in all industries.",
  },
  {
    title: "Search Engine Optimazation",
    description:
      "Search engine optimazation (SEO) is the art and science of getting pages to rank higher in search engines.",
  },
];
const Demo: NextPage = () => {
  return (
    <Container bg="bg-gray-50">
      <div className="space-y-10 md:grid md:grid-cols-10 md:gap-x-8 md:gap-y-20 md:space-y-0 py-6 md:py-10">
        <div className="col-span-6 relative flex flex-col py-3">
          <h2 className="!leading-tight text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl md:font-bold lg:font-extrabold lg:text-5xl mb-4">
            <span className="md:block">Take the lead in smartly</span>
            <span className="md:block"> social media marketing</span>
          </h2>
        </div>
        <div className="col-span-4 rounded-md relative">
          <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-7 text-justify">
            <span className="block my-2">
              We offer some special services which you can easily complete the
              marketing work on social media. Which helps increase your lead and
              sales
            </span>
          </p>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row gap-4">
        {marketingPattern.map((item) => (
          <div
            key={item.title}
            className="relative flex flex-col rounded-md border-2 p-6 lg:p-9 border-slate-900"
          >
            <div className="mb-4 md:mb-5 rounded-full bg-white flex justify-center items-center w-12 h-12">
              <img
                alt="Sark"
                className="h-5 w-auto sm:h-7"
                src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
              />
            </div>{" "}
            <h2 className="text-lg font-bold text-gray-900 lg:max-w-xl sm:text-xl lg:text-2xl mb-4 capitalize">
              <span className="md:block xl:inline">{item.title}</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-7">
              {item.description}
            </p>
            <div className="flex text-sm md:text-base items-center cursor-pointer font-bold hover:opacity-75">
              <span className="">Discover more </span>
              <span className="ml-2">
                <ArrowRightIcon
                  className="h-4 w-6 font-bold"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-transparent cursor-pointer group perspective py-4 my-16 max-w-7xl mx-auto px-5 md:px-0">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-auto duration-1000">
          <div className="invisible image-wrapper">
            <img
              className="rounded-2xl drop-shadow-lg w-full"
              src="/demo-dashboard.jpg"
            ></img>
          </div>
          <div className="top-0 absolute backface-hidden w-full h-full">
            <div className="image-wrapper">
              <img
                className="rounded-2xl drop-shadow-lg w-full"
                src="/demo-dashboard.jpg"
              ></img>
            </div>
          </div>
          <div className="top-0 absolute my-rotate-y-180 backface-hidden w-full h-autooverflow-hidden">
            <div className="image-wrapper">
              <img
                className="rounded-2xl drop-shadow-lg w-full"
                src="https://via.placeholder.com/1980x1080/FFFFFF"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Demo;
