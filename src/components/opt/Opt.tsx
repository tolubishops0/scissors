import React from "react";

type Props = {};

function Opt({}: Props) {
  return (
    <div>
      <div className="bg-custom-bg bg-no-repeat bg-cover">
        <div className="py-16 md:py-32 flex flex-col justify-center items-center gap-y-10">
          <h1 className="text-xl md:text-4xl text-white text-center font-bold">
            Revolutionizing Link Optimization
          </h1>
          <button className="bg-secTextColorBlue text-white font-bold py-3 px-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opt;
