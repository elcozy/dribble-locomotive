import type { NextPage } from "next";
import { Container } from "./container";
import { navigation } from "./header";

const Footer: NextPage = () => {
  return (
    <>
      <Container bg="bg-gray-50" text="text-gray-500" pdY="pt-6 md:pt-7">
        <footer className="relative mb-4 md:pb-7">
          <div className=" sm:grid sm:grid-cols-11 lg:flex mt-4 sm:mt-0 sm:w-full flex flex-col lg:flex-row gap-4 lg:gap-2 justify-between">
            <div className="flex flex-col sm:col-span-2 md:col-span-2 ">
              <span className="flex gap-2 items-center font-bold text-lg capitalize mt-0">
                <a href="#">
                  <span className="sr-only">Sell Hustle</span>
                  <img
                    alt="Sell Hustle"
                    className="h-10 w-auto sm:h-14"
                    src="/logo.png"
                  />
                </a>
              </span>
            </div>
            <div className="flex items-center  sm:col-span-6 flex-col md:flex-row md:gap-7">
              {navigation.map((items) => (
                <div
                  className="flex flex-col sm:col-span-3 md:col-span-2"
                  key={items.name}
                >
                  <a href={items.href}>
                    <span className="font-semibold md:font-bold text-sm md:text-md capitalize mt-0 mb-2 md:mb-0 hover:opacity-80 cursor-pointer">
                      {items.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex md:justify-end items-center sm:col-span-3 flex-wrap gap-5">
              <a
                href="http://twitter.com/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="http://facebook.com/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
              <a
                href="http://instagram.com/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                </svg>
              </a>
              <a
                href="http://github.com/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </Container>
      <Container bg="bg-gray-200" text="text-gray-500" pdY="pb-6 md:pb-7">
        <div className="sm:w-full flex flex-col md:flex-row items-center justify-center md:justify-between text-gray-400 text-xs text-center md:text-sm gap-2 md:gap-0 border-t pt-6">
          <div className="flex flex-col font-semibold">
            © Copyright 2022, All Rights Reserved
          </div>
          <div className="flex flex-row capitalize font-semibold gap-6">
            <span>
              <a
                className="flex items-center justify-center  hover:text-gray-800"
                href="#"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </span>

            <span>
              <a
                className="flex items-center justify-center hover:text-gray-800"
                href="#"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
