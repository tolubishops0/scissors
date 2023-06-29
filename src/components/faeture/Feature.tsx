import React from "react";

import blackline from "../../assets/black-line.png";
import activity from "../../assets/activity.png";
import link from "../../assets/link-small-cirlcle.png";
import grid from "../../assets/grid.png";
import note from "../../assets/edit.png";

type Props = {};

function Feature({}: Props) {
  return (
    <section className="mt-10">
      <div className="md:flex md:mx-8">
        <div>
          {" "}
          <div className="flex gap-x-1 justify-center items-center md:justify-start">
            <img src={blackline} alt="blackline" className="md:w-[5px]" />
            <div className="font-bold text-lg md:text-xl lg:text-3xl w-[15rem] lg:w-full">
              Why choose{" "}
              <span className="text-secTextColorBlue"> Scissors. </span>
            </div>
          </div>
          <p className="hidden md:block md:font-normal md:text-base text-center m-auto mt-2 md:mt-2 w-[94%] md:text-left">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>

        <div className="flex flex-wrap mt-4 md:mt-0  gap-y-5 justify-center items-center md:gap-x-4">
          <div className="w-[45%] md:w-[45%]">
            <div className="flex items-center gap-x-2 md:flex-col md:justify-start md:items-start">
              <img src={link} alt="link" className="w-[1rem] md:w-[2rem]" />
              <h1 className="font-bold  text-sm md:text-lg text-secTextColorBlue md:my-3">
                URL Shortening
              </h1>
            </div>
            <div>
              <p className="text-xs md:font-normal md:text-base">
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
          </div>
          <div className="w-[45%] md:w-[45%]">
            <div className="flex items-center gap-x-2 md:flex-col md:justify-start md:items-start">
              <img src={note} alt="link" className="w-[1rem] md:w-[2rem]" />
              <h1 className="font-bold text-sm md:text-lg text-secTextColorBlue md:my-3">
                Custom URLs
              </h1>
            </div>
            <div>
              <p className="text-xs md:font-normal md:text-base">
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </div>
          <div className="w-[45%] md:w-[45%]">
            <div className="flex items-center gap-x-2 md:flex-col md:justify-start md:items-start">
              <img src={grid} alt="link" className="w-[1rem] md:w-[2rem]" />
              <h1 className="font-bold  text-sm md:text-lg text-secTextColorBlue md:my-3">
                QR Codes
              </h1>
            </div>
            <div>
              <p className="text-xs md:font-normal md:text-base">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
          </div>
          <div className="w-[45%] md:w-[45%]">
            <div className="flex items-center gap-x-2 md:flex-col md:justify-start md:items-start">
              <img src={activity} alt="link" className="w-[1rem] md:w-[2rem]" />
              <h1 className="font-bold text-sm md:text-lg text-secTextColorBlue md:my-3">
                Data Analytics
              </h1>
            </div>
            <div>
              <p className="text-xs md:font-normal md:text-base">
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
