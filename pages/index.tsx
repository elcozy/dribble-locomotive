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

const Home: NextPage = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans']">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="w-full overflow-hidden">
        <Banner />
        <Header />
        <Hero />
        <Demo />
        <WhatWeDo />
        <Partner />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
