import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const countries = [
  { countryName: "Cameroon", image: "cm" },
  { countryName: "Egypt", image: "egypt" },
  { countryName: "Ghana", image: "gh" },
  { countryName: "Ivory Coast", image: "ci" },
  { countryName: "Kenya", image: "ke" },
  { countryName: "Malawi", image: "" },
  { countryName: "Mauritius", image: "" },
  { countryName: "Nigeria", image: "" },
  { countryName: "Rest of Europe", image: "eu" },
  { countryName: "Rwanda", image: "" },
  { countryName: "Senegal", image: "" },
  { countryName: "South Africa", image: "sa" },
  { countryName: "Tanzania", image: "" },
  { countryName: "Uganda", image: "" },
  { countryName: "United Kingdom", image: "gb" },
  { countryName: "United States", image: "us" },
  { countryName: "Zambia", image: "" },
];
const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(15);

  return (
    <Menu as="div" className="relative inline-block text-left mb-3">
      <div>
        <Menu.Button className="flex w-full items-center justify-center rounded-lg border-1 bg-transparent text-black hover:opacity-75 px-8 py-2 text-base font-medium md:py-3 md:px-10 md:text-lg">
          <div className="flex gap-2 pr-1 justify-center items-center ">
            <span className="rounded-full w-5 h-5 overflow-hidden">
              <img
                className="w-12 h-5 rounded-full"
                src={`https://countryflagsapi.com/png/${
                  countries[selectedCountry]?.image ||
                  countries[selectedCountry]?.countryName
                }`}
                alt={countries[selectedCountry].countryName}
              />
            </span>
            <span>{countries[selectedCountry].countryName}</span>
          </div>
          ↓
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
        <Menu.Items className="absolute left-1/2 transform -translate-x-1/2  z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-7 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {countries.map((countryList, i) => (
              <Menu.Item key={countryList.countryName}>
                <a
                  onClick={() => setSelectedCountry(i)}
                  href="#"
                  className={classNames(
                    selectedCountry === i
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm col-span-1 cursor hover:opacity-80 text-bold"
                  )}
                >
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center">
                      <img
                        className="w-5 h-auto"
                        src={`https://countryflagsapi.com/png/${
                          countryList.image || countryList.countryName
                        }`}
                        alt={countryList.countryName}
                      />
                    </span>
                    <span>{countryList.countryName}</span>
                  </div>
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CountryDropdown;
