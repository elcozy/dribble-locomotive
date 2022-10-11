import type { NextPage } from "next";
import Image from "next/image";

const footerItems = [
  {
    title: "platform",
    sublinks: [
      "analytics",
      "planning",
      "collaboration",
      "data management",
      "integrations",
      "security",
    ],
  },
  {
    title: "solutions",
    sublinks: [
      "financial",
      "investors & CEOs",
      "revenue operations",
      "sales & marketing",
      "human resources",
    ],
  },
];
const Footer: NextPage = () => {
  return (
    <div className="flex flex-col bg-black justify-center pt-6 md:pt-12 text-white border-b items-center">
      <div className="container">
        <footer className="footer relative pt-1 pb-6 md:pb-10">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-white capitalize mb-2">
                    Locomotive
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                </div>
                {footerItems.map((items) => (
                  <div className="flex flex-col" key={items.title}>
                    <span className="font-bold text-white capitalize mt-4 md:mt-0 mb-2">
                      {items.title}{" "}
                    </span>
                    {items.sublinks.map((item) => (
                      <span className="my-2" key={item}>
                        <a
                          href="#"
                          className="text-white  text-md hover:text-gray-300 capitalize"
                        >
                          {item}
                        </a>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className="flex h-14 w-full items-center justify-center border-t bg-gray-400">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 by Rey Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
