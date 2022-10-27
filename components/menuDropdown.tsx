import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MenuDropdown = ({ MenuName }: any) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="block py-2 pr-4 md:text-lg pl-3 text-white  md:text-gray-800 md:hover:text-gray-400 md:p-0 dark:text-white">
          {MenuName}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-4">
            <Menu.Item>
              <a
                href="#"
                className="text-gray-700 block hover:opacity-80 cursor hover:text-black px-4 py-4 text-sm"
              >
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-1 flex  items-center justify-center ">
                    <img
                      alt="Sark"
                      className="h-5 w-auto sm:h-7"
                      src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <span className="md:block font-bold">Store</span>
                    <span className="md:block text-gray-600 font-normal tracking-wide">
                      Start selling online.
                    </span>
                  </div>
                </div>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="text-gray-700 block hover:opacity-80 cursor hover:text-black px-4 py-4 text-sm"
              >
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-1 flex items-center justify-center">
                    <img
                      alt="Sark"
                      className="h-5 w-auto sm:h-7"
                      src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <span className="md:block font-bold">Payment Link</span>
                    <span className="md:block text-gray-600 font-normal tracking-wide">
                      Accept payment without writing code.
                    </span>
                  </div>
                </div>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="text-gray-700 block hover:opacity-80 cursor hover:text-black px-4 py-4 text-sm"
              >
                <div className="grid grid-cols-5  gap-6">
                  <div className="col-span-1 flex items-center justify-center ">
                    <img
                      alt="Sark"
                      className="h-5 w-auto sm:h-7"
                      src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col gap-1">
                    <span className="md:block font-bold">Invoices</span>
                    <span className="md:block text-gray-600 font-normal tracking-wide">
                      Create professional invoices.
                    </span>
                  </div>
                </div>
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
