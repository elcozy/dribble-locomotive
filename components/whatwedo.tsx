import type { NextPage } from "next";
import { Container } from "./container";

const WhatWeDo: NextPage = () => {
  return (
    <div className="bg-blue-700">
      <Container className="curved-bg md:pb-32" pdY="py-10 md:py-14">
        <div className="max-w-7xl mx-auto space-y-10 md:grid md:grid-cols-7 md:gap-x-8 md:gap-y-20 md:space-y-0">
          <div className="col-span-7 flex flex-col-reverse md:grid md:grid-cols-7 gap-8 md:gap-x-8">
            <div className="relative flex flex-col py-3 md:col-span-4 justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4 !leading-tight">
                <span className="md:block text-blue-700">Boost your</span>
                <span className="md:block"> sales with our live commerce</span>
                {/* <span className="md:block"> live sales</span> */}
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7 text-justify">
                <span className="block my-2">
                  You can develop deeper connections with customers through live
                  streaming and build long-term relationship with your
                  customers. This will give your brand more trust and customers
                  get to see what they are ordering for, not just a picture.
                </span>
                {/* <span className="block my-2">
                By creating a strong brand presence on social media, you can
                reach a broader audience & get partners brand advocated to post
                content.
              </span> */}
              </p>
            </div>
            <div className="rounded-md relative md:col-span-3">
              <img
                className="rounded-2xl drop-shadow-lg w-full md:w-full h-auto ml-auto"
                src="/live-sales-1.jpg"
              />
            </div>
          </div>
          <div className="col-span-7 flex flex-col md:grid md:grid-cols-7 gap-8 md:gap-x-8">
            <div className="rounded-md relative md:col-span-3">
              <img
                className="rounded-2xl drop-shadow-lg w-full md:w-full h-auto mr-auto"
                src="/live-sales-3.png"
              />
            </div>
            <div className="relative flex flex-col py-3 md:col-span-4 justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4 !leading-tight">
                <span className="md:block text-blue-700">
                  Increase your sales
                </span>
                <span className="md:block"> on social media</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7 text-justify">
                <span className="block my-2">
                  Social media audience research isn't complicated. It is mainly
                  about narrowing your focus while expanding your reach.
                </span>
                <span className="block my-2">
                  We've created a free social media audiesnce research template
                  to help you keep track of all the information you learn as you
                  conduct your research.
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-7 flex flex-col-reverse md:grid md:grid-cols-7 gap-8 md:gap-x-8">
            <div className="relative flex flex-col py-3 md:col-span-4 justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4 !leading-tight">
                <span className="md:block text-blue-700">Meet your</span>
                <span className="md:block"> customers with </span>
                <span className="md:block"> live video chat</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-7 text-justify">
                <span className="block my-2">
                  Maxime mollitia, molestiae quas vel sint commodi repu andae
                  consequun mollitia
                </span>
                <span className="block my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repu andae
                  consequun mollitia molestiae quas vel sint commodi repu andae
                  consequun mollitia.
                </span>
              </p>
            </div>
            <div className="rounded-md relative md:col-span-3">
              <img
                className="rounded-2xl drop-shadow-lg w-full md:w-full h-auto ml-auto"
                src="/demo-img.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
