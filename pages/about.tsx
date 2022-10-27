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
import { Container } from "../components/container";

const About: NextPage = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans']">
      <Head>
        <title>Sark</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="w-full overflow-hidden">
        <Header />
        <div className=" about-header">
          <Container bg="none" className="max-w-3xl">
            <div className="py-6 md:pb-20  text-white">
              <h2 className="!leading-tight text-4xl font-bold lg:font-extrabold lg:text-5xl mb-12 text-center">
                <span className="md:block">ABOUT SELLHUSTLE</span>
              </h2>
              <h2 className="!leading-tight text-2xl font-semibold md:text-3xl md:font-semi-bold lg:text-3xl mb-4 text-center">
                <span className="md:block">
                  We believe every hustler needs should be able to participate
                  and thrive in the economy.
                </span>
              </h2>
            </div>
          </Container>
        </div>

        <Container className="max-w-3xl mx-auto text-justify">
          <div>
            <p className="text-base md:text-lg mb-6">
              SellHustle started in 2021, with the goal of easing the stress of
              owning an ecommerce website. Before now, we started with building
              ecommerce websites for our customers, we provided robust ecommerce
              solutions to customers, but the cost of hosting, and simplicity
              became a problem within Small Medium Enterprises.
            </p>
            <p className="text-base md:text-lg mb-6">
              Every businesses which we call hustlers needs an online presence.
              So whether you're starting an online business from scratch, or you
              have started but don't have a professional online presence, then
              SellHustle is for you. Entrepreneurs can build websites that
              customers love to visit and shop. Our powerful tools make it easy
              to build a professional, mobile-optimized site and grow your
              business with integrated marketing and advanced analytics.
            </p>
            <p className="text-base md:text-lg mb-6">
              We also help you tackle the manual hassles of running a successful
              online store by simplifying shipping, taxes, and inventory
              management. SellHustle customers can easily sell anywhere and
              everywhere.
            </p>
            <p className="text-base md:text-lg mb-6">
              Here is a massive opportunity in front of us. We’re building a
              business that is big, meaningful, and lasting. And we are helping
              businesses in Africa do the same.
            </p>
          </div>
        </Container>

        <Testimonial />
        <Footer />
      </main>
    </div>
  );
};

export default About;
