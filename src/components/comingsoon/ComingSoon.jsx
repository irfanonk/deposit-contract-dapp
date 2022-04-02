import React from "react";
import Social from "./socialmedia/Social";
import Timer from "./timer/Timer";

import rocketUrl from "../../assets/images/rocket.png";

export default function ComingSoon() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center gap-12">
        {/* <div className="flex">
          <img className="w-2/4" src={rocketUrl} alt="" />
        </div> */}
        <div className="text-blur text-bold text-6xl sm:text-9xl  text-center">
          Coming Soon
        </div>
        <div className="subpixel-antialiased sm:text-3xl text-center">
          We are currently making some <br /> improvment to our website.
        </div>
        <div>
          <Timer />
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}
