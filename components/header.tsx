import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { Fragment } from "react";
import { featuresDropdownItems, navigation } from "./constants";
import MenuDropdown from "./menuDropdown";

const Header: NextPage = () => {
  return (
    <Popover>
      <div className="relative">
        <nav
          className="w-full bg-white border-gray-200 px-4 py-2.5 rounded"
          aria-label="Global"
        >
          <div className="container flex flex-wrap justify-between items-center mx-auto md:my-1 lg:py-1">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="/#">
                  <span className="sr-only">SellHustle</span>
                  <img
                    alt="Your Company"
                    className="w-auto h-14  md:h-20"
                    src="/logo.png"
                  />
                </a>

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:gap-12 md:mt-0 md:text-sm md:font-medium">
                {navigation.map((item) => {
                  if (item.name === "Features") {
                    return (
                      <MenuDropdown
                        key={item.name}
                        MenuName="Features"
                        menuDropdownItems={featuresDropdownItems}
                      />
                    );
                  }
                  return (
                    <li key={item.name}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 pr-4 md:text-lg pl-3 text-white  md:text-gray-800 md:hover:text-gray-400 md:p-0 dark:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rounded-full shadow hidden lg:block">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-7 py-2 text-base font-medium text-white hover:bg-blue-700 md:text-lg"
              >
                Start free trial 🚀
              </a>
            </div>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-0 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="h-16 w-auto" src="/logo.png" alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-0 pt-2 pb-5">
                    {navigation.map((item) => {
                      if (item.name === "Features") {
                        return (
                          <MenuDropdown
                            key={item.name}
                            MenuName="Features"
                            menuDropdownItems={featuresDropdownItems}
                          />
                        );
                      }
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="mx-3 block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      );
                    })}
                    <div className="mx-3 rounded-full shadow">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-8 py-2 text-base font-medium text-white hover:bg-blue-700 md:px-10 md:text-lg"
                      >
                        Start free trial 🚀
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </nav>
      </div>
    </Popover>
  );
};

export default Header;
