import type { NextPage } from "next";
import { Container } from "./container";

const WhatWeDo: NextPage = () => {
  return (
    <div className="bg-blue-700">
      <Container className="curved-bg md:pb-32">
        <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20 md:space-y-0">
          <div className="relative flex flex-col py-3">
            <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4">
              <span className="md:block text-blue-700">Build your</span>
              <span className="md:block"> brand & reach</span>
              <span className="md:block"> out to social followers</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-7 text-justify">
              <span className="block my-2">
                Brand awarenessis cited as the top priority for marketers, and
                social media channels are a one-to-many solution for getting the
                word out about your products and services
              </span>
              <span className="block my-2">
                By creating a strong brand presence on social media, you can
                reach a broader audience & get partners brand advocated to post
                content.
              </span>
            </p>
          </div>
          <div className="rounded-md relative">
            <img
              className="rounded-2xl drop-shadow-lg w-full md:w-3/4 h-auto ml-auto"
              src="/demo-img.png"
            />
          </div>
          <div className="rounded-md relative">
            <img
              className="rounded-2xl drop-shadow-lg w-full md:w-3/4 h-auto"
              src="/demo-img.png"
            />
          </div>
          <div className="relative flex flex-col py-3">
            <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4">
              <span className="md:block text-blue-700">Bring your</span>
              <span className="md:block"> target users</span>
              <span className="md:block"> together on social media</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-7 text-justify">
              <span className="block my-2">
                Social media sudience research isn't complicated. It is mainly
                about narrowing your focus while expanding your reach.
              </span>
              <span className="block my-2">
                We've created a free social media audiesnce research template to
                help you keep track of all the information you learn as you
                conduct your research.
              </span>
            </p>
          </div>
          <div className="relative flex flex-col py-3">
            <h2 className="text-2xl font-semibold text-gray-900 lg:max-w-xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold mb-4">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repu andae consequun
                mollitia molestiae quas vel sint commodi repu andae consequun
                mollitia.
              </span>
            </p>
          </div>
          <div className="rounded-md relative">
            <img
              className="rounded-2xl drop-shadow-lg w-full md:w-3/4 h-auto ml-auto"
              src="/demo-img.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
