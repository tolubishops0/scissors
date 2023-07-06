import React from "react";
import { Link } from "react-router-dom";

import blackline from "../../assets/black-line.png";
import bluecheck from "../../assets/check-circle-blue.svg";
import whitecheck from "../../assets/check-circle-white.svg";

type Props = {};

function Subscription({}: Props) {
  return (
    <div className="mt-8 py-10 md:py-14 bg-[#f8f8f8f8]">
      <div>
        <div className="flex gap-x-1 justify-center items-center">
          <img src={blackline} alt="blackpne" />
          <div className="font-bold text-lg">
            A<span className="text-secTextColorBlue"> Price Perfect {""}</span>
            for your needs.
          </div>
        </div>
        <p className="text-xs font-normal text-center mt-4">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-[70%] md:w-[80%] m-auto md:m-auto lg:h-[31rem]">
        <div className="card border-[1.5px] hover:border-0 border-secTextColorBlue rounded-lg shadow-custom p-3 hover:bg-gradient-card hover:text-white hover:shadow-lg transition duration-500 ease-in hover:scale-125 hover:z-20">
          <div className="lg:mt-2 lg:space-y-3">
            <h1 className="text-xl font-semibold">Basic</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Free</h1>
            <p>Free plan for all users</p>
          </div>
          <ul className="mt-6 space-y-2 lg:space-y-5">
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />
              <p className="text-sm">Unpmited URL Shortening</p>
            </li>

            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Basic pnk Analytics</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Customizable Short pnks</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Standard Support</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Ad-supported</p>
            </li>
          </ul>
        </div>

        <div className="card border-[1.5px] hover:border-0 border-secTextColorBlue rounded-lg shadow-md p-3 hover:bg-gradient-card hover:text-white hover:shadow-lg transition duration-500 ease-in md:z-10 hover:scale-125 hover:z-20">
          <div className="lg:mt-2 lg:space-y-3">
            <h1 className="text-xl font-semibold">Professional</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">$15/month</h1>
            <p>Ideal for business creators</p>
          </div>
          <ul className="mt-6 space-y-2 lg:space-y-5">
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Enhanced Link Analytics</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Custom Branded Domains</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Advanced Link Customization</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Priority Support</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Ad-free Experience</p>
            </li>
          </ul>
        </div>

        <div className="card border-[1.5px] hover:border-0 border-secTextColorBlue rounded-lg shadow-md p-3 hover:bg-gradient-card hover:text-white hover:shadow-lg transition duration-500 ease-in hover:scale-125 hover:z-20">
          <div className="lg:mt-2 lg:space-y-3">
            <h1 className="text-xl font-semibold">Teams</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">$25/month</h1>
            <p>Share with up to 10 users</p>
          </div>
          <ul className="mt-6 space-y-2 lg:space-y-5">
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Team Collaboration</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">User Roles and Permissions</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Enhanced Security</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">API Access</p>
            </li>
            <li className="flex items-center">
              <img
                src={bluecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark blue"
              />
              <img
                src={whitecheck}
                alt="check"
                className="w-4 h-4 mr-2 checkmark white"
              />{" "}
              <p className="text-sm">Dedicated Account Manager</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-0 lg:mt-6">
        <Link
          className="border-0 bg-primaryTextColorBlue py-2 px-4 lg:px-8 lg:py-4 font-semibold rounded-full text-white"
          to="/">
          Select Pricing
        </Link>
      </div>
    </div>
  );
}

export default Subscription;
