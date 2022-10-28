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
                    {" "}
                    <span className="font-semibold md:font-bold text-sm md:text-md capitalize mt-0 mb-2 md:mb-0 hover:opacity-80 cursor-pointer">
                      {items.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex md:justify-end items-center sm:col-span-3 flex-wrap gap-5">
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
                href="http://linkedin.com/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  role="img"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                  </g>
                </svg>
              </a>
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
                href="http://web.telegram.org/sellhustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 fill-current cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
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
