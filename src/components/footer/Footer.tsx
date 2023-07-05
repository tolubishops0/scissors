import React from "react";

import blackLink from "../../assets/black-logo.svg";
import blackline from "../../assets/blackline.svg";

import fb from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import insta from "../../assets/ig.svg";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-6 w-[90%] mx-auto">
      <div className="flex md:justify-between">
        <div className="flex flex-col min-w-[20%]">
          <div className="flex items-center gap-1 md:gap-2">
            <img className="w-3 md:w-5" src={blackLink} alt="blackLink" />
            <img
              className="w-[.05rem] md:w-[.08rem]"
              src={blackline}
              alt="blackline"
            />
            <p className="uppercase text-[0.6rem] md:text-lg font-extrabold text-primaryTextColorBlack">
              scissor
            </p>
          </div>
          <div className="flex justify-between mt-2 md:mt-4">
            <img className="w-3 md:w-5" src={fb} alt="fc" />
            <img className="w-3 md:w-5" src={twitter} alt="twitter" />
            <img className="w-3 md:w-5" src={insta} alt="insta" />
            <img className="w-3 md:w-5" src={linkedin} alt="link" />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-end gap-[0.2rem] md:gap-4">
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base"> Why Scissor?</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>Scissor 101</li>
                <li>Scissor 103</li>
                <li>Integrations & API</li>
              </ul>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base"> Solutions</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>Social Media</li>
                <li>Digital Marketing</li>
                <li>Customer Service</li>
                <li>For Developers</li>
              </ul>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base">Company</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>About Scissor Careers</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Press Contact</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base"> Resources</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>Blog</li>
                <li>Resource Library</li>
                <li>Developers</li>
                <li>App Connectors</li>
                <li>Support</li>
                <li>Trust Center</li>
                <li>Browser Extension</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base">Features</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>Branded Links</li>
                <li>Mobile Links</li>
                <li>Management & Analytics</li>
                <li>QR Code generation</li>
              </ul>
            </div>
            <div className="w-[30%]">
              <h1 className="font-bold text-xs md:text-base"> Legal</h1>
              <ul className="text-[0.6rem] md:text-sm font-semibold">
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Terms of Service</li>
                <li>Acceptable Use Policy</li>
                <li>Code of Conduct </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-1 mt-5">
        <h1 className="font-bold text-[0.5rem] md:text-base">
          {" "}
          Terms of Services |
        </h1>
        <h1 className="font-bold text-[0.5rem] md:text-base"> Security |</h1>
        <h1 className="font-bold text-[0.5rem] md:text-base">
          ⓒ Scissor 2023{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
