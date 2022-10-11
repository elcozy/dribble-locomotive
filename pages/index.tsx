import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Footer,
  Hero,
  Demo,
  Testimonial,
  Contact,
  WhatWeDo,
  Partner,
} from "./components";
import "@splidejs/react-splide/css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Header />
        <Hero />
        <Demo />
        <WhatWeDo />
        <Partner />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
