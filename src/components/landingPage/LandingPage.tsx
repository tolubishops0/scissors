import React from "react";
import { Link } from "react-router-dom";

import slash from "../../assets/blue-sash.svg";
import links from "../../assets/bitmap.png";
import rececc from "../../assets/rec-ec.png";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="bg-[#f8f8f8f8] py-10 md:py-14">
      <div className="text-center m-auto max-w-[16rem] md:max-w-[24rem] lg:max-w-[52rem] lg:leading-10">
        <p className="font-semibold text-lg md:font-bold lg:font-extrabold lg:text-3xl">
          Optimize Your Online Experience with Our Advanced{" "}
          <span className="text-primaryTextColorBlue">
            URL Shortening{" "}
            <img src={slash} alt="slash" className="w-12 m-auto md:hidden" />
          </span>
          {""}
          Solution.
          <img
            src={slash}
            alt="slash"
            className="w-[10rem] mt-2 m-auto hidden md:block"
          />
        </p>
      </div>
      <div>
        <p className="mt-4 md:mt-10 lg:mt-8 text-xs md:text-base lg:text-xl text-center md:font-semibold m-auto max-w-[17rem] md:max-w-[35rem] lg:max-w-[48rem] leading-relaxed">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
      </div>
      <div className="mt-4 md:mt-6 lg:mt-10 m-auto flex items-center justify-between max-w-[12rem] md:max-w-[16rem]">
        <Link
          className="border-0 font-semibold text-xs bg-primaryTextColorBlue py-2 px-6 md:py-3 md:px-8 rounded-full text-white"
          to="/">
          Sign Up
        </Link>
        <Link
          className="border-0 font-bold text-sm text-center text-primaryTextColorBlue"
          to="/">
          Learn More
        </Link>
      </div>
      <div className="mt-6 md:mt-14">
        <div>
          <img src={links} className="m-auto w-[15rem] md:w-[30rem]" />
        </div>

        <div className="mt-6 md:mt-14">
          <img src={rececc} className="m-auto w-[25rem] md:w-full" />
        </div>
      </div>

      <section className="mt-10 bg-[#f8f8f8f8] flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10">
        <div className="text-center">
          <p className="font-bold text-lg">
            One Stop. <br /> Four{" "}
            <span className="text-secTextColorBlue">Possibilities.</span>
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-y-5 max-w-[17rem] md:max-w-[100%] md:gap-x-3 md:flex-nowrap lg:gap-x-8">
          <div className="w-1/2 md:w-full">
            <h1 className="font-bold text-sm">3M</h1>
            <p className="text-xs font-medium">Active users</p>
          </div>
          <div className="w-1/2  md:w-full">
            <h1 className="font-bold text-sm">300k</h1>
            <p className="text-xs font-medium">App Integrations</p>
          </div>
          <div className="w-1/2  md:w-full">
            <h1 className="font-bold text-sm">1B</h1>
            <p className="text-xs font-medium">Clicked & Scanned connections</p>
          </div>
          <div className="w-1/2  md:w-full">
            <h1 className="font-bold text-sm">60M</h1>
            <p className="text-xs font-medium">Links & QR codes created</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
