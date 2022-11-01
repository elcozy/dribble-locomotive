import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Footer,
  Hero,
  Demo,
  Testimonial,
  WhatWeDo,
  Partner,
  Banner,
} from "../components";
import "@splidejs/react-splide/css";
import { Container } from "../components/container";
import Accordion from "../components/panels";
import CountryDropdown from "../components/countryDropdown";

const pricing = [
  {
    icon: "online-shop",
    title: "Online Store",
    description:
      "Build your online store with our comprehensive easy to use platform",
  },
  {
    icon: "channel",
    title: "Sales channels",
    description:
      "Promote and sell your products on multiple sales channels all from within sellhustle",
  },
  {
    icon: "analytics",
    title: "Grest analytics",
    description:
      "Sellhustle provides easy to understand analytics. So you can make solid business decisions.",
  },
  {
    icon: "customer-service",
    title: "24/7 support ",
    description:
      "SellHustle provides support to every businesses, and it is for every plan",
  },
];

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.";

const panels = [
  {
    label: "When do I receive my money?",
    content: lorem,
  },
  {
    label: "Are there any transaction limits?",
    content: lorem,
  },
  {
    label: "Who bears the transaction charge",
    content: lorem,
  },
];

const Pricing: NextPage = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans']">
      <Head>
        <title>SellHustle</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="w-full overflow-hidden">
        <Header />
        <Container bg="bg-gray-50" className="">
          <div className="bg-gray-50 max-w-3xl mx-auto">
            <div className="relative flex flex-col py-3 my-7">
              <h2 className="!leading-tight text-2xl text-gray-900 sm:text-2xl md:text-3xl font-bold lg:text-4xl mb-6 text-center">
                <span className="md:block">
                  Setup your hustle, pick a plan later
                </span>
              </h2>
              <h2 className="!leading-tight text-xl font-medium text-gray-900 sm:text-2xl md:text-3xl mb-4 text-center">
                <span className="md:block">
                  Start your hustle with zero cost, yes completely free
                </span>
              </h2>
            </div>
          </div>
        </Container>
        <Container className="!pb-0">
          <div className="flex items-center justify-center">
            <CountryDropdown />
          </div>

          <div className="relative flex flex-col md:flex-row gap-4">
            <div className="relative flex flex-col rounded-md border-2 p-6 lg:p-9 border-slate-900">
              <h2 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-xl lg:text-2xl mb-2 capitalize">
                Free
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7">
                Sell in person, online, over the phone, or out in the field. No
                setup fees or monthly fees -- only pay when you take a payment
              </p>
              <h1 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-3xl lg:text-5xl mb-1 capitalize">
                <span className="inline">$0</span>
                <span className="text-base lg:text-2xl lowercase">/mo.</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lbaseg mb-7">
                + processing fees
              </p>
              <div className="rounded-lg shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-600 hover:opacity-80  px-8 py-2 text-base font-medium text-white md:py-3 md:px-10 md:text-lg"
                >
                  Get started free
                </a>
              </div>
            </div>
            <div className="relative flex flex-col rounded-md border-2 p-6 lg:p-9 border-slate-900">
              <h2 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-xl lg:text-2xl mb-2 capitalize">
                Plus
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7">
                Get tadvanced features designed specifically for restaurants,
                retailers, or appointment- based business. Upgrade when you want
                to, cancel anytime.
              </p>
              <h1 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-3xl lg:text-5xl mb-1 capitalize">
                <span className="inline">$29+</span>
                <span className="text-base lg:text-2xl lowercase">/mo.</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lbaseg mb-7">
                + processing fees
              </p>
              <div className="rounded-lg shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-600 hover:opacity-80  px-8 py-2 text-base font-medium text-white md:py-3 md:px-10 md:text-lg"
                >
                  See package below ↓
                </a>
              </div>
            </div>
            <div className="relative flex flex-col rounded-md border-2 p-6 lg:p-9 border-slate-900">
              <h2 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-xl lg:text-2xl mb-2 capitalize">
                Premium
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7">
                Build a bespoke plan meets the complexity of your operations.
                Custom processing rates may be available pending eligibility
              </p>
              <h1 className="text-lg font-semibold text-gray-900 lg:max-w-xl sm:text-3xl lg:text-5xl mb-1 capitalize">
                <span className="inline">Custom</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lbaseg mb-7">
                + processing fees
              </p>
              <div className="rounded-lg">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg border border-blue-600 bg-transparent text-blue-600 hover:opacity-80  px-8 py-2 text-base font-medium md:py-3 md:px-10 md:text-lg"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col py-3 my-7">
            <h2 className="!leading-tight text-2xl font-semibold text-gray-900 sm:text-xl md:text-2xl md:font-bold lg:font-extrabold lg:text-3xl my-6 text-left">
              Enjoy these features on any plan
            </h2>
            <div className="relative flex-col md:flex-row gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className="col-span-1 relative flex flex-col rounded-md pt-6 px-2"
                >
                  <div className="mb-4 md:mb-5 rounded-full bg-white flex justify-center items-center w-12 h-12 mx-auto">
                    <img
                      alt="SellHustle"
                      className="h-10 w-auto sm:h-12"
                      src={`/icons/${item.icon}.png`}
                    />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 lg:max-w-xl sm:text-xl lg:text-2xl mb-4 capitalize mx-auto">
                    <span className="md:block xl:inline">{item.title}</span>
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg mb-7 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col py-3 my-7">
            <h2 className="!leading-tight text-2xl font-semibold text-gray-900 sm:text-xl md:text-2xl md:font-bold lg:font-extrabold lg:text-3xl mb-4 md:mb-12 text-center">
              Frequently asked questions
            </h2>
          </div>
        </Container>
        <Container bg="bg-gray-50" pdY="py-10 md:py-20">
          <Accordion panels={panels} />
        </Container>

        <Testimonial />
        <Footer />
      </main>
    </div>
  );
};

export default Pricing;
