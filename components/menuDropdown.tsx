import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const MenuDropdown = ({ MenuName, menuDropdownItems }: any) => {
  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <>
      <Menu as="div" className="relative md:inline-block text-left hidden">
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Menu.Button className="block py-2 pr-4 md:text-lg pl-3 text-white  md:text-gray-800 md:hover:text-gray-400 md:p-0 dark:text-white">
            {MenuName}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          show={hover}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-4">
              {menuDropdownItems.map((menuDrop: any) => (
                <Menu.Item>
                  <a
                    href={menuDrop.link}
                    className="text-gray-700 block hover:opacity-80 cursor hover:text-black px-4 py-4 text-sm"
                  >
                    <div className="grid grid-cols-5 gap-6">
                      <div className="col-span-1 flex  items-center justify-center ">
                        <img
                          alt="SellHustle"
                          className="h-10 w-auto"
                          src={menuDrop.img}
                        />
                      </div>
                      <div className="col-span-4 flex flex-col gap-1">
                        <span className="md:block font-bold">
                          {menuDrop.title}
                        </span>
                        <span className="md:block text-gray-600 font-normal tracking-wide">
                          {menuDrop.description}
                        </span>
                      </div>
                    </div>
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="md:hidden">
        <a
          href="/about"
          className="mx-3 block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          {MenuName}
        </a>
        <div className="py-4 border-b border-gray-300">
          {menuDropdownItems.map((menuDrop: any) => (
            <a
              href={menuDrop.link}
              className="mx-3 text-gray-700 block hover:opacity-80 cursor hover:text-black px-3 py-2 text-sm"
            >
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-1 flex  items-center justify-center ">
                  <img
                    alt="SellHustle"
                    className="h-10 w-auto"
                    src={menuDrop.img}
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-1">
                  <span className="md:block font-bold">{menuDrop.title}</span>
                  <span className="md:block text-gray-600 font-normal tracking-wide">
                    {menuDrop.description}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuDropdown;
